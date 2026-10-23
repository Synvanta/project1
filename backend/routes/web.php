<?php

use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DemoRequestController;
use App\Http\Controllers\Admin\ImpersonationController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/admin');

Route::prefix('admin')->name('admin.')->group(function (): void {
    Route::middleware('guest')->group(function (): void {
        Route::get('/login', [AuthController::class, 'create'])->name('login');
        Route::post('/login', [AuthController::class, 'store'])->middleware('throttle:5,1')->name('login.store');
    });

    Route::middleware(['auth', 'admin'])->group(function (): void {
        Route::get('/', [DemoRequestController::class, 'index'])->name('dashboard');
        Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');
        Route::post('/impersonate/stop', [ImpersonationController::class, 'destroy'])->name('impersonate.stop');
        Route::get('/demo-requests', [DemoRequestController::class, 'index'])->name('demo-requests.index');
        Route::get('/api/demo-requests', [DemoRequestController::class, 'data'])->name('demo-requests.data');
        Route::post('/api/demo-requests/{demoRequest}/contact', [DemoRequestController::class, 'contact'])
            ->middleware('throttle:20,1')
            ->name('demo-requests.contact');
        Route::middleware('admin.manage')->group(function (): void {
            Route::get('/admins', [AdminUserController::class, 'index'])->name('admins.index');
            Route::get('/api/admins', [AdminUserController::class, 'data'])->name('admins.data');
            Route::post('/api/admins', [AdminUserController::class, 'store'])
                ->middleware(['admin.add', 'throttle:10,1'])
                ->name('admins.store');
            Route::patch('/api/admins/{admin}/permission', [AdminUserController::class, 'updatePermission'])
                ->middleware('throttle:20,1')
                ->name('admins.permission');
            Route::post('/api/admins/{admin}/impersonate', [ImpersonationController::class, 'store'])
                ->middleware('throttle:10,1')
                ->name('admins.impersonate');
        });
    });
});
