<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index()
    {
        // Jika ada data dari database atau logika lain yang ingin ditambahkan
        return Inertia::render('LandingPage');
    }
}
