<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KostController extends Controller
{
    public function index(Request $request)
    {
        $query = Kost::with('facilities')
            ->where('status', 'approved');

        // Filter berdasarkan tipe
        if ($request->type && $request->type !== 'all') {
            $query->where('type', $request->type);
        }

        // Filter berdasarkan range harga
        if ($request->priceRange && $request->priceRange !== 'all') {
            $ranges = [
                'low' => [0, 1000000],
                'medium' => [1000001, 2000000],
                'high' => [2000001, 999999999]
            ];
            
            if (isset($ranges[$request->priceRange])) {
                $query->whereBetween('price', $ranges[$request->priceRange]);
            }
        }

        // Filter berdasarkan pencarian
        if ($request->search) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        $kosts = $query->get();

        return Inertia::render('DaftarKostPage', [
            'kosList' => $kosts
        ]);
    }

    public function show($id)
    {
        $kost = Kost::with('facilities')->findOrFail($id);

        return Inertia::render('KostManager/DetailKost', [
            'kost' => $kost
        ]);
    }
} 