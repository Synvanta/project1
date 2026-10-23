@extends('admin.layout')

@section('title', 'Admin login')

@push('styles')
    <link rel="stylesheet" href="{{ asset('admin-assets/admin-login.css') }}">
@endpush

@section('body')
    <div
        id="admin-login-root"
        data-home-url="{{ config('app.frontend_url') }}"
        data-action="{{ route('admin.login.store') }}"
        data-email="{{ old('email') }}"
        data-error="{{ $errors->first('email') }}"
    ></div>
@endsection

@push('scripts')
    <script type="module" src="{{ asset('admin-assets/admin-login.js') }}"></script>
@endpush
