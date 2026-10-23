@extends('admin.layout')

@section('title', 'Demo requests')

@push('styles')
    <link rel="stylesheet" href="{{ asset('admin-assets/admin-dashboard.css') }}">
@endpush

@section('body')
    <div
        id="admin-dashboard-root"
        data-home-url="{{ config('app.frontend_url') }}"
        data-name="{{ $adminName }}"
        data-total="{{ $totalRequests }}"
        data-can-manage-admins="{{ $canManageAdmins ? 'true' : 'false' }}"
        data-data-url="{{ route('admin.demo-requests.data') }}"
        data-contact-url="{{ route('admin.demo-requests.contact', ['demoRequest' => '__REQUEST_ID__']) }}"
        data-logout-url="{{ route('admin.logout') }}"
    ></div>
@endsection

@push('scripts')
    <script type="module" src="{{ asset('admin-assets/admin-dashboard.js') }}"></script>
@endpush
