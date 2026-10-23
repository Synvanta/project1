<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ImpersonationController extends Controller
{
    public function store(Request $request, User $admin): JsonResponse|RedirectResponse
    {
        abort_unless($admin->is_admin, 404);
        abort_if($request->user()->is($admin), 403, 'You cannot impersonate yourself.');

        $originalId = $request->session()->get('impersonator_id', $request->user()->id);

        Auth::login($admin);
        $request->session()->put('impersonator_id', $originalId);
        $request->session()->regenerate();

        return $this->respond($request, route('admin.dashboard'));
    }

    public function destroy(Request $request): RedirectResponse
    {
        $originalId = $request->session()->pull('impersonator_id');
        $original = $originalId ? User::find($originalId) : null;

        if ($original?->is_admin) {
            Auth::login($original);
            $request->session()->regenerate();
        }

        return redirect()->route('admin.dashboard');
    }

    private function respond(Request $request, string $redirectTo): JsonResponse|RedirectResponse
    {
        if ($request->expectsJson()) {
            return response()->json(['redirect' => $redirectTo]);
        }

        return redirect()->to($redirectTo);
    }
}
