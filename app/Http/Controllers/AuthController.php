<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia; // Make sure to include Inertia

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            // Return an Inertia response after successful login
            return redirect()->route('landing.page'); // Ensure this route is defined
        }

        return back()->withErrors(['error' => 'Invalid credentials']); // Use back for Inertia error handling
    }

    public function register(Request $request)
    {
        // Validate incoming request data
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Create a new user
        $user = User::create([
            'name' => $validated['firstName'] . ' ' . $validated['lastName'], // Combining first and last name
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Log the user in
        Auth::login($user);

        // Redirect to the landing page using Inertia's response
        return redirect()->route('landing.page'); // Make sure this route matches your routes
    }
}
