<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminKostController extends Controller
{
    protected $middleware = [
        'checkRole:admin'
    ];

    public function pendingKosts()
    {
        $kosts = Kost::with(['facilities', 'manager'])
            ->where('status', 'pending')
            ->latest()
            ->get();

        return Inertia::render('Admin/PendingKosts', [
            'kosts' => $kosts
        ]);
    }

    public function verifyKost(Request $request, Kost $kost)
    {
        $validated = $request->validate([
            'status' => 'required|in:approved,rejected',
            'rejection_reason' => 'required_if:status,rejected|nullable|string'
        ]);

        $kost->update($validated);

        return redirect()->back()
            ->with('success', 'Status kos berhasil diperbarui');
    }
}