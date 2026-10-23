@extends('admin.layout')

@section('title', 'Admin users')

@push('styles')
    <link rel="stylesheet" href="{{ asset('admin-assets/admin-users.css') }}">
@endpush

@section('body')
    <div
        id="admin-users-root"
        data-home-url="{{ config('app.frontend_url') }}"
        data-name="{{ $adminName }}"
        data-count="{{ $adminCount }}"
        data-current-user-id="{{ auth()->id() }}"
        data-can-manage-admins="true"
        data-can-add-admins="{{ $canAddAdmins ? 'true' : 'false' }}"
        data-users-url="{{ route('admin.admins.data') }}"
        data-create-url="{{ route('admin.admins.store') }}"
        data-permission-url="{{ route('admin.admins.permission', ['admin' => '__ADMIN_ID__']) }}"
        data-impersonate-url="{{ route('admin.admins.impersonate', ['admin' => '__ADMIN_ID__']) }}"
        data-logout-url="{{ route('admin.logout') }}"
    ></div>
@endsection

@push('scripts')
    <script type="module" src="{{ asset('admin-assets/admin-users.js') }}"></script>
@endpush
