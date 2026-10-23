<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\DemoRequestResource;
use App\Mail\DemoRequestReply;
use App\Models\DemoRequest;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;

class DemoRequestController extends Controller
{
    public function index(Request $request): View
    {
        return view('admin.demo-requests.index', [
            'totalRequests' => DemoRequest::query()->count(),
            'adminName' => $request->user()->name,
            'canManageAdmins' => $request->user()->can_manage_admins,
        ]);
    }

    public function data(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'search' => ['sometimes', 'string', 'max:120'],
            'system' => [
                'sometimes',
                'string',
                Rule::in(['Inventory', 'HR', 'Delivery', 'E-Commerce', 'Assistant', 'PMS', 'Garbage', 'Finance']),
            ],
        ]);

        $requests = DemoRequest::query()
            ->when($validated['search'] ?? null, function ($query, string $search): void {
                $query->where(function ($query) use ($search): void {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('phone', 'like', "%{$search}%")
                        ->orWhere('location', 'like', "%{$search}%");
                });
            })
            ->when($validated['system'] ?? null, fn ($query, string $system) => $query->whereJsonContains('systems', $system))
            ->latest()
            ->paginate(12)
            ->withQueryString();

        return DemoRequestResource::collection($requests)->response();
    }

    public function contact(Request $request, DemoRequest $demoRequest): JsonResponse
    {
        $validated = $request->validate([
            'subject' => ['required', 'string', 'max:150'],
            'body' => ['required', 'string', 'max:5000'],
        ]);

        Mail::to($demoRequest->email)->send(
            new DemoRequestReply($validated['subject'], $validated['body'])
        );

        $demoRequest->forceFill(['contacted_at' => now()])->save();

        return DemoRequestResource::make($demoRequest->refresh())->response();
    }
}
