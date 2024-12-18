<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Middleware untuk membatasi akses hanya untuk admin
     */
    protected function middleware()
    {
        return ['auth', 'checkRole:admin'];
    }

    public function dashboard()
    {
        // Get statistics
        $stats = [
            'total_kosts' => Kost::count(),
            'total_users' => User::count(), 
            'pending_kosts' => Kost::where('status', 'pending')->count(),
            'approved_kosts' => Kost::where('status', 'approved')->count()
        ];

        // Get recent activities (you may want to create an Activity model for this)
        $recentActivities = [
            // Placeholder data - implement actual activity tracking
            ['user' => 'John Doe', 'action' => 'Melakukan booking kos', 'time' => '5 menit yang lalu'],
            ['user' => 'Jane Smith', 'action' => 'Mendaftar sebagai pengguna baru', 'time' => '1 jam yang lalu'],
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentActivities' => $recentActivities
        ]);
    }
}
