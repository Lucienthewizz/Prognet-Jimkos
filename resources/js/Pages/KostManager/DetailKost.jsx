import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@Layouts/PublicLayout';

const DetailKost = ({ kost }) => {
    return (
        <PublicLayout>
            <Head title={`Detail Kos - ${kost.name}`} />
            
            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <img src={kost.image} alt={kost.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h1 className="text-3xl font-bold mb-4">{kost.name}</h1>
                            <p className="text-primary font-medium mb-2">
                                Rp {kost.price.toLocaleString('id-ID')}/bulan
                            </p>
                            <p className="text-gray-600 mb-4">{kost.description}</p>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Fasilitas</h3>
                                <ul className="list-disc list-inside">
                                    {kost.facilities.map((facility) => (
                                        <li key={facility.id}>{facility.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
                                <p>{kost.location}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Jarak dari Kampus</h3>
                                <p>{kost.distance}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default DetailKost; 