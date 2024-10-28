<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class SocialAuthController extends Controller
{
    /**
     * Redirect the user to the Google authentication page.
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from Google.
     */
    public function handleGoogleCallback()
    {
        try {
            // Ambil user tanpa state untuk menghindari InvalidStateException (sementara)
            $googleUser = Socialite::driver('google')->user();
            
            // Cari pengguna berdasarkan email
            $user = User::where('email', $googleUser->getEmail())->first();

            if ($user) {
                // Login pengguna jika sudah ada
                Auth::login($user, true);
            } else {
                // Buat pengguna baru jika belum ada
                $user = User::create([
                    'name' => $googleUser->getName(),
                    'email' => $googleUser->getEmail(),
                    'google_id' => $googleUser->getId(),
                    'password' => Hash::make(uniqid()), // Password acak, bisa juga diatur null jika nullable
                ]);

                Auth::login($user, true);
            }

            // Redirect ke dashboard atau halaman utama
            return redirect()->intended('/dashboard');
        } catch (\Exception $e) {
            // Log error untuk debugging
            \Illuminate\Support\Facades\Log::error('Google Callback Error: ' . $e->getMessage());

            // Redirect kembali ke login dengan pesan error
            return redirect('/login')->with('error', 'Login dengan Google gagal.');
        }
    }
}
