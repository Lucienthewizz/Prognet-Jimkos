<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\KostController;
use App\Http\Controllers\KostManagerController;
use App\Http\Controllers\AdminKostController;
use App\Http\Controllers\AdminController;

// Public Routes
Route::get('/', [LandingPageController::class, 'index'])
    ->name('landing-page');
Route::get('/about-us', [PageController::class, 'about'])->name('about');
Route::get('/daftar-kost', [KostController::class, 'index'])
    ->name('daftar-kost');
Route::get('/kontak', function () {
    return Inertia::render('KontakPage');
})->name('kontak');

// Authentication Routes
Route::middleware('guest')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
    
    Route::post('/login', [AuthController::class, 'login'])->name('login.post');
    
    Route::get('/register', function () {
        return Inertia::render('Auth/Register');
    })->name('register');
    
    Route::post('/register', [AuthController::class, 'register'])->name('register.post');
});

Route::post('/logout', [AuthController::class, 'logout'])
    ->name('logout')
    ->middleware('auth');

// Kost Manager Routes
Route::middleware(['auth', 'checkRole:kost_manager'])->group(function () {
    Route::get('/kost-manager/dashboard', [KostManagerController::class, 'dashboard'])
        ->name('kost-manager.dashboard');
    Route::get('/kost-manager/create', [KostManagerController::class, 'create'])
        ->name('kost-manager.create');
    Route::post('/kost-manager/store', [KostManagerController::class, 'store'])
        ->name('kost-manager.store');
});

// Admin Routes
Route::middleware(['auth', 'checkRole:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])
        ->name('admin.dashboard');
    Route::get('/admin/kosts/pending', [AdminKostController::class, 'pendingKosts'])
        ->name('admin.kosts.pending');
    Route::patch('/admin/kosts/{kost}/verify', [AdminKostController::class, 'verifyKost'])
        ->name('admin.kosts.verify');
});

// Fallback Route
Route::fallback(function () {
    return Inertia::render('Errors/NotFound');
});

Route::get('/kost/{id}', [KostController::class, 'show'])->name('kost.show');
