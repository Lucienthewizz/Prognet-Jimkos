<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index()
    {
        $popularKosts = Kost::with('facilities')
            ->where('status', 'approved')
            ->orderBy('price', 'desc')
            ->take(8)
            ->get();

        return Inertia::render('LandingPage', [
            'popularKosts' => $popularKosts
        ]);
    }
}