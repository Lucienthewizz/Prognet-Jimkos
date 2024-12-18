import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@Layouts/PublicLayout';

const Dashboard = ({ kosts }) => {
    return (
        <PublicLayout>
            <Head title="Dashboard Kost Manager" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Kos Saya</h2>
                        <Link
                            href={route('kost-manager.create')}
                            className="px-4 py-2 text-white rounded-lg bg-primary"
                        >
                            Tambah Kos Baru
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {kosts.map((kost) => (
                            <div key={kost.id} className="p-6 bg-white rounded-lg shadow-md">
                                <img src={kost.image} alt={kost.name} className="object-cover mb-4 w-full h-48 rounded-lg" />
                                <h3 className="mb-2 text-lg font-semibold">{kost.name}</h3>
                                <p className="mb-2 font-medium text-primary">
                                    Rp {kost.price.toLocaleString('id-ID')}/bulan
                                </p>
                                <div className="mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm ${
                                        kost.status === 'approved' ? 'bg-green-100 text-green-800' :
                                        kost.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {kost.status === 'approved' ? 'Disetujui' :
                                         kost.status === 'rejected' ? 'Ditolak' :
                                         'Menunggu Verifikasi'}
                                    </span>
                                </div>
                                {kost.rejection_reason && (
                                    <p className="mt-2 text-sm text-red-600">
                                        Alasan: {kost.rejection_reason}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default Dashboard; 