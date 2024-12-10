<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia; // Pastikan Inertia sudah di-import

class AuthController extends Controller
{
    // Fungsi untuk login user
    public function login(Request $request)
    {
        // Ambil data email dan password dari request
        $credentials = $request->only('email', 'password');

        // Cek apakah email dan password cocok di database
        if (Auth::attempt($credentials)) {
            $user = Auth::user(); // Ambil data user yang sedang login
            // Kalau berhasil login, arahkan ke halaman landing page
            return redirect()->route('landing.page'); // Pastikan route ini sudah ada
        }

        // Kalau login gagal, balikin ke halaman sebelumnya dengan pesan error
        return back()->withErrors(['error' => 'Email atau password salah']);
    }

    // Fungsi untuk registrasi user baru
    public function register(Request $request)
    {
        // Validasi data yang masuk dari form registrasi
        $validated = $request->validate([
            'firstName' => 'required|string|max:255', // Nama depan wajib diisi
            'lastName' => 'required|string|max:255',  // Nama belakang wajib diisi
            'email' => 'required|string|email|max:255|unique:users', // Email harus valid dan belum pernah dipakai
            'password' => 'required|string|min:8|confirmed', // Password minimal 8 karakter dan harus cocok dengan konfirmasi
        ]);

        // Buat user baru di database
        $user = User::create([
            'name' => $validated['firstName'] . ' ' . $validated['lastName'], // Gabung nama depan dan belakang
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']), // Enkripsi password sebelum disimpan
        ]);

        // Login otomatis setelah registrasi
        Auth::login($user);

        // Setelah berhasil registrasi, arahkan ke halaman landing page
        return redirect()->route('landing.page');
    }
}
