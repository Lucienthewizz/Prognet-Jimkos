<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
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
        // Ambil user tanpa state untuk menghindari InvalidStateException
        $googleUser = Socialite::driver('google')->user();
        
        // Cari pengguna berdasarkan google_id
        $user = User::where('google_id', $googleUser->getId())->first();

        if ($user) {
            // Login pengguna jika sudah ada
            Auth::login($user, true);
        } else {
            // Buat pengguna baru jika belum ada
            $user = User::create([
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'google_id' => $googleUser->getId(),
                'password' => Hash::make(uniqid()), // Optional if you don't need password
            ]);

            Auth::login($user, true);
        }

        // Redirect ke landing page
        return redirect()->route('landing.page'); // Pastikan ada route dengan nama 'landing.page'
    } catch (\Exception $e) {
        Log::error('Google Callback Error: ' . $e->getMessage());
        return redirect('/login')->with('error', 'Login dengan Google gagal.');
    }
}



}
