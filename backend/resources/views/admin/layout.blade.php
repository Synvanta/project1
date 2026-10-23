<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#090a10">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Demo requests') | Synvanta Admin</title>
    @stack('styles')
    <style>
        * { box-sizing: border-box; }
        html, body { min-height: 100%; margin: 0; background: #090a10; }
        .admin-impersonation-bar { position: fixed; bottom: 18px; left: 50%; z-index: 60; display: flex; align-items: center; gap: 16px; transform: translateX(-50%); padding: 9px 10px 9px 16px; border-radius: 8px; background: #101a33; color: #eef2ff; font-family: system-ui, sans-serif; font-size: 12px; box-shadow: 0 12px 34px rgb(9 10 16 / 45%); }
        .admin-impersonation-bar strong { color: #ff9a56; }
        .admin-impersonation-bar button { min-height: 30px; padding: 0 12px; border: 0; border-radius: 5px; background: #ff9a56; color: #241605; font-size: 11px; font-weight: 600; cursor: pointer; }
    </style>
</head>
<body>
    @if ($impersonator ?? null)
        <div class="admin-impersonation-bar" role="status">
            <span>Signed in as <strong>{{ auth()->user()->name }}</strong> · impersonating from {{ $impersonator->name }}</span>
            <form method="post" action="{{ route('admin.impersonate.stop') }}">
                @csrf
                <button type="submit">Stop impersonating</button>
            </form>
        </div>
    @endif
    @yield('body')
    @stack('scripts')
</body>
</html>
