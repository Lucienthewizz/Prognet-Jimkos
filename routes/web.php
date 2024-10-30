<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LandingPageController;


// Landing Page
Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('landing.page');

// Landing Page
Route::get('/', [LandingPageController::class, 'index'])->name('landing.page');

// About Us Page
Route::get('/about-us', function () {
    return Inertia::render('AboutUsPage');
});

// Daftar Kost Page
Route::get('/daftar-kost', function () {
    return Inertia::render('DaftarKostPage');
});

// Kontak Page 
Route::get('/kontak', function () {
    return Inertia::render('KontakPage');
});

// Halaman Not Found
Route::fallback(function () {
    return Inertia::render('Errors/NotFound');
});

// Rute untuk halaman login dan register #1
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);



// Rute untuk autentikasi Google
Route::middleware(['web'])->group(function () {
    Route::get('/auth/google', [SocialAuthController::class, 'redirectToGoogle'])->name('google.redirect');
    Route::get('/auth/google/callback', [SocialAuthController::class, 'handleGoogleCallback'])->name('google.callback');
});

// Logout Route
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');



// Include additional auth routes
require __DIR__.'/auth.php';
