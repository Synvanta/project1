<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserCanAddAdmins
{
    public function handle(Request $request, Closure $next): Response
    {
        abort_unless($request->user()?->can_add_admins, 403);

        return $next($request);
    }
}
