<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DemoRequestResource;
use App\Models\DemoRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DemoRequestController extends Controller
{
    private const SYSTEMS = [
        'Inventory',
        'HR',
        'Delivery',
        'E-Commerce',
        'Assistant',
        'PMS',
        'Garbage',
        'Finance',
    ];

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'string', 'email:rfc', 'max:254'],
            'phone' => ['required', 'string', 'max:40', 'regex:/^[0-9+().\-\s]{7,40}$/'],
            'location' => ['required', 'string', 'max:160'],
            'systems' => ['required', 'array', 'min:1', 'max:8'],
            'systems.*' => ['required', 'string', 'distinct', Rule::in(self::SYSTEMS)],
        ]);

        $demoRequest = DemoRequest::create($validated);

        return DemoRequestResource::make($demoRequest)->response()->setStatusCode(201);
    }
}
