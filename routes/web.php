<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SocialAuthController;
use Laravel\Socialite\Facades\Socialite;

// Landing Page
Route::get('/', function () {
    return Inertia::render('LandingPage');
});

// About Us Page
Route::get('/about-us', function () {
    return Inertia::render('AboutUsPage');
});

// Halaman Not Found
Route::fallback(function () {
    return Inertia::render('Errors/NotFound');
});

// Rute untuk halaman login dan register
Route::middleware(['guest'])->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store']);
});

// Rute untuk autentikasi Google
Route::middleware(['web'])->group(function () {
    Route::get('/auth/google', [SocialAuthController::class, 'redirectToGoogle'])->name('google.redirect');
    Route::get('/auth/google/callback', [SocialAuthController::class, 'handleGoogleCallback'])->name('google.callback');
});

// In your routes/web.php
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');



// Include additional auth routes
require __DIR__.'/auth.php';
