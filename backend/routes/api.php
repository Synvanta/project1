<?php

use App\Http\Controllers\Api\DemoRequestController;
use Illuminate\Support\Facades\Route;

Route::post('/demo-requests', [DemoRequestController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('api.demo-requests.store');
