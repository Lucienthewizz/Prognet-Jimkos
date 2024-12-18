<?php

namespace Database\Seeders;

use App\Models\Kost;
use App\Models\Facility;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class KostSeeder extends Seeder
{
    public function run()
    {
        // Buat user kost manager
        $manager = User::create([
            'name' => 'Kost Manager',
            'email' => 'manager@jimkos.com',
            'password' => Hash::make('password'),
            'role' => 'kost_manager',
        ]);

        // Buat fasilitas dasar
        $facilities = [
            'AC', 'WiFi', 'Kamar Mandi Dalam', 'Dapur', 'Parkir Motor', 
            'Parkir Mobil', 'Laundry', 'Cleaning Service', 'TV', 'Kipas Angin',
            'Akses 24 Jam'
        ];

        foreach ($facilities as $facility) {
            Facility::create(['name' => $facility]);
        }

        // Buat data kos dengan status approved
        $kosts = [
            [
                'name' => 'Kos Nyaman Dekat Kampus',
                'type' => 'Campur',
                'price' => 1000000,
                'location' => 'Jl. Raya Kampus Unud, Jimbaran',
                'distance' => '300m dari Kampus Unud',
                'description' => 'Kos nyaman dengan lokasi strategis dekat kampus',
                'image' => '/images/Gambar-1.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'AC', 'Parkir Motor']
            ],
            [
                'name' => 'Kos Exclusive Jimbaran',
                'type' => 'Campur',
                'price' => 1500000,
                'location' => 'Jl. Utama Jimbaran',
                'distance' => '1km dari Kampus Unud',
                'description' => 'Kos exclusive dengan fasilitas lengkap',
                'image' => '/images/Gambar-2.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'AC', 'TV', 'Parkir Mobil']
            ],
            [
                'name' => 'Kos Murah Meriah',
                'type' => 'Putra',
                'price' => 800000,
                'location' => 'Jl. Gang Mawar, Jimbaran',
                'distance' => '800m dari Kampus Unud',
                'description' => 'Kos terjangkau untuk mahasiswa',
                'image' => '/images/Gambar-3.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'Kipas Angin', 'Parkir Motor']
            ],
            [
                'name' => 'Kos Strategis Pusat Kota',
                'type' => 'Campur',
                'price' => 1200000,
                'location' => 'Jl. Pusat Jimbaran',
                'distance' => '500m dari Pusat Kota',
                'description' => 'Lokasi strategis dekat dengan pusat keramaian',
                'image' => '/images/Gambar-4.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'AC', 'Akses 24 Jam', 'Parkir Motor']
            ],
            [
                'name' => 'Kos Hemat di Pusat Kota',
                'type' => 'Putri',
                'price' => 900000,
                'location' => 'Jl. Ekonomi Jimbaran',
                'distance' => '600m dari Kampus Unud',
                'description' => 'Kos hemat dengan lokasi strategis',
                'image' => '/images/Gambar-8.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'Kipas Angin', 'Parkir Motor']
            ],
            [
                'name' => 'Kos Minimalis Dekat Pantai',
                'type' => 'Campur',
                'price' => 1300000,
                'location' => 'Jl. Pantai Jimbaran',
                'distance' => '200m dari Pantai',
                'description' => 'Kos dengan desain minimalis dekat pantai',
                'image' => '/images/Gambar-6.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'AC', 'Parkir Mobil']
            ],
            [
                'name' => 'Kos Modern dengan Fasilitas Lengkap',
                'type' => 'Campur',
                'price' => 2000000,
                'location' => 'Jl. Modern Jimbaran',
                'distance' => '400m dari Kampus Unud',
                'description' => 'Kos modern dengan fasilitas premium',
                'image' => '/images/Gambar-9.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'TV', 'Parkir Mobil', 'AC']
            ],
            [
                'name' => 'Kos Dekat Universitas',
                'type' => 'Putra',
                'price' => 1100000,
                'location' => 'Jl. Kampus Jimbaran',
                'distance' => '100m dari Kampus Unud',
                'description' => 'Lokasi sangat dekat dengan kampus',
                'image' => '/images/Gambar-10.jpg',
                'manager_id' => $manager->id,
                'status' => 'approved',
                'facilities' => ['WiFi', 'Parkir Motor', 'Akses 24 Jam']
            ]
        ];

        foreach ($kosts as $kostData) {
            $facilities = $kostData['facilities'];
            unset($kostData['facilities']);
            
            $kost = Kost::create($kostData);
            
            $facilityIds = Facility::whereIn('name', $facilities)->pluck('id');
            $kost->facilities()->attach($facilityIds);
        }
    }
} 