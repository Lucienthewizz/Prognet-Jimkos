import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import PublicLayout from '@Layouts/PublicLayout';

const CreateKost = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        type: '',
        price: '',
        location: '',
        distance: '',
        description: '',
        image: null,
        facilities: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('kost-manager.store'), {
            preserveScroll: true
        });
    };

    return (
        <PublicLayout>
            <Head title="Tambah Kos Baru" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h2 className="mb-6 text-2xl font-semibold">Tambah Kos Baru</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nama Kos
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                    {errors.name && <div className="mt-1 text-sm text-red-500">{errors.name}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Tipe Kos
                                    </label>
                                    <select
                                        value={data.type}
                                        onChange={e => setData('type', e.target.value)}
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    >
                                        <option value="">Pilih Tipe</option>
                                        <option value="Putra">Kos Putra</option>
                                        <option value="Putri">Kos Putri</option>
                                        <option value="Campur">Kos Campur</option>
                                    </select>
                                    {errors.type && <div className="mt-1 text-sm text-red-500">{errors.type}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Harga per Bulan
                                    </label>
                                    <input
                                        type="number"
                                        value={data.price}
                                        onChange={e => setData('price', e.target.value)}
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                    {errors.price && <div className="mt-1 text-sm text-red-500">{errors.price}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Lokasi
                                    </label>
                                    <input
                                        type="text"
                                        value={data.location}
                                        onChange={e => setData('location', e.target.value)}
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                    {errors.location && <div className="mt-1 text-sm text-red-500">{errors.location}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Jarak dari Kampus
                                    </label>
                                    <input
                                        type="text"
                                        value={data.distance}
                                        onChange={e => setData('distance', e.target.value)}
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                    {errors.distance && <div className="mt-1 text-sm text-red-500">{errors.distance}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Deskripsi
                                    </label>
                                    <textarea
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        rows="4"
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                    {errors.description && <div className="mt-1 text-sm text-red-500">{errors.description}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Foto Kos
                                    </label>
                                    <input
                                        type="file"
                                        onChange={e => setData('image', e.target.files[0])}
                                        className="block mt-1 w-full"
                                        accept="image/*"
                                    />
                                    {errors.image && <div className="mt-1 text-sm text-red-500">{errors.image}</div>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-4 py-2 w-full text-white rounded-lg bg-primary hover:bg-primary-dark disabled:opacity-50"
                                    >
                                        {processing ? 'Memproses...' : 'Tambah Kos'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default CreateKost; 