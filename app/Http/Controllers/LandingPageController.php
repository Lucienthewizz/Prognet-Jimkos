<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index()
    {
        return Inertia::render('LandingPage', [
            'user' => Auth::user(), // Pass the authenticated user
        ]);
    }
}