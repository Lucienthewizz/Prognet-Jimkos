<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class KostManagerController extends Controller
{
    protected $middleware = [
        'auth',
        'checkRole:kost_manager'
    ];

    public function dashboard()
    {
        $kosts = Kost::where('manager_id', Auth::id())
                     ->with('facilities')
                     ->get();
        
        return Inertia::render('KostManager/Dashboard', [
            'kosts' => $kosts
        ]);
    }

    public function create()
    {
        return Inertia::render('KostManager/CreateKost');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:Putra,Putri,Campur',
            'price' => 'required|integer',
            'location' => 'required|string',
            'distance' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'required|image|max:2048',
            'facilities' => 'required|array'
        ]);

        $imagePath = $request->file('image')->store('public/kosts');
        $validated['image'] = str_replace('public', '/storage', $imagePath);
        $validated['manager_id'] = Auth::id();

        $kost = Kost::create($validated);
        $kost->facilities()->attach($request->facilities);

        return redirect()->route('kost-manager.dashboard')
            ->with('success', 'Kos berhasil ditambahkan dan menunggu verifikasi admin');
    }
}