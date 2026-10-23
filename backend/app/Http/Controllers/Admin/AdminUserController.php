<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdminUserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class AdminUserController extends Controller
{
    public function index(Request $request): View
    {
        return view('admin.users.index', [
            'adminName' => $request->user()->name,
            'adminCount' => User::query()->where('is_admin', true)->count(),
            'canAddAdmins' => $request->user()->can_add_admins,
        ]);
    }

    public function data(): JsonResponse
    {
        $admins = User::query()
            ->where('is_admin', true)
            ->latest()
            ->paginate(20);

        return AdminUserResource::collection($admins)->response();
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'string', 'email:rfc', 'max:254', Rule::unique('users', 'email')],
            'password' => ['required', 'string', 'min:12', 'confirmed'],
            'can_manage_admins' => ['sometimes', 'boolean'],
            'can_add_admins' => ['sometimes', 'boolean'],
        ]);

        $admin = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'is_admin' => true,
            'can_manage_admins' => $validated['can_manage_admins'] ?? false,
            'can_add_admins' => $validated['can_add_admins'] ?? false,
        ]);

        return AdminUserResource::make($admin)->response()->setStatusCode(201);
    }

    public function updatePermission(Request $request, User $admin): JsonResponse
    {
        abort_unless($admin->is_admin, 404);

        $validated = $request->validate([
            'can_manage_admins' => ['sometimes', 'boolean'],
            'can_add_admins' => ['sometimes', 'boolean'],
        ]);

        if ($validated === []) {
            throw ValidationException::withMessages([
                'permission' => 'Provide at least one permission to update.',
            ]);
        }

        $canManageAdmins = $validated['can_manage_admins'] ?? $admin->can_manage_admins;
        $canAddAdmins = $validated['can_add_admins'] ?? $admin->can_add_admins;

        if ($admin->can_manage_admins && ! $canManageAdmins) {
            $managerCount = User::query()
                ->where('is_admin', true)
                ->where('can_manage_admins', true)
                ->count();

            if ($request->user()->is($admin)) {
                throw ValidationException::withMessages([
                    'can_manage_admins' => 'You cannot remove your own admin-management access.',
                ]);
            }

            if ($managerCount <= 1) {
                throw ValidationException::withMessages([
                    'can_manage_admins' => 'At least one administrator must retain admin-management access.',
                ]);
            }
        }

        if ($admin->can_manage_admins && $admin->can_add_admins && ! $canAddAdmins) {
            $creatorCount = User::query()
                ->where('is_admin', true)
                ->where('can_manage_admins', true)
                ->where('can_add_admins', true)
                ->count();

            if ($creatorCount <= 1) {
                throw ValidationException::withMessages([
                    'can_add_admins' => 'At least one administrator must retain permission to add admins.',
                ]);
            }
        }

        $admin->forceFill([
            'can_manage_admins' => $canManageAdmins,
            'can_add_admins' => $canAddAdmins,
        ])->save();

        return AdminUserResource::make($admin->refresh())->response();
    }
}
