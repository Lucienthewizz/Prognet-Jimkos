import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import PublicLayout from "@/Layouts/PublicLayout";
import KostCard from "@/Components/KostCard";

const DaftarKostPage = ({ kosList }) => {
    const [filters, setFilters] = useState({
        priceRange: 'all',
        type: 'all',
        facilities: []
    });

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
        
        // Gunakan Inertia router
        router.get('/daftar-kost', {
            ...filters,
            [filterType]: value
        }, {
            preserveState: true,
            preserveScroll: true
        });
    };

    return (
        <PublicLayout>
            <Head title="Daftar Kos di Jimbaran | Jimkos" />
            
            <section className="py-20">
                <div className="max-w-[1350px] mx-auto px-5">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Filter Section */}
                        <div className="w-full md:w-[280px]">
                            <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                                <h3 className="text-xl font-semibold mb-4">Filter</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tipe Kos
                                        </label>
                                        <select 
                                            value={filters.type}
                                            onChange={(e) => handleFilterChange('type', e.target.value)}
                                            className="w-full rounded-lg border-gray-300"
                                        >
                                            <option value="all">Semua</option>
                                            <option value="Putra">Kos Putra</option>
                                            <option value="Putri">Kos Putri</option>
                                            <option value="Campur">Kos Campur</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Range Harga
                                        </label>
                                        <select 
                                            value={filters.priceRange}
                                            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                                            className="w-full rounded-lg border-gray-300"
                                        >
                                            <option value="all">Semua</option>
                                            <option value="low">Kurang dari Rp 1.000.000</option>
                                            <option value="medium">Rp 1.000.000 - Rp 2.000.000</option>
                                            <option value="high">Lebih dari Rp 2.000.000</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kost List Section */}
                        <div className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {kosList.map((kost) => (
                                    <KostCard key={kost.id} kost={kost} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default DaftarKostPage;