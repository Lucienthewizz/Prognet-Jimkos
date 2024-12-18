import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { router } from '@inertiajs/react';

const PendingKosts = ({ kosts }) => {
    const handleVerification = (kostId, status, rejectionReason = null) => {
        router.patch(route('admin.kosts.verify', kostId), {
            status,
            rejection_reason: rejectionReason
        });
    };

    return (
        <DashboardLayout>
            <Head title="Verifikasi Kos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold mb-6">Verifikasi Kos</h2>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {kosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {kosts.map((kost) => (
                                        <div key={kost.id} className="bg-white rounded-lg shadow-md p-6">
                                            <img 
                                                src={kost.image} 
                                                alt={kost.name} 
                                                className="w-full h-48 object-cover rounded-lg mb-4"
                                            />
                                            <h3 className="text-lg font-semibold mb-2">{kost.name}</h3>
                                            <p className="text-gray-600 mb-2">
                                                Pemilik: {kost.manager.name}
                                            </p>
                                            <p className="text-primary font-medium mb-2">
                                                Rp {kost.price.toLocaleString('id-ID')}/bulan
                                            </p>
                                            <div className="space-y-2 mt-4">
                                                <button
                                                    onClick={() => handleVerification(kost.id, 'approved')}
                                                    className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                                >
                                                    Setujui
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        const reason = prompt('Alasan penolakan:');
                                                        if (reason) {
                                                            handleVerification(kost.id, 'rejected', reason);
                                                        }
                                                    }}
                                                    className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                                >
                                                    Tolak
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    Tidak ada kos yang menunggu verifikasi
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PendingKosts; 