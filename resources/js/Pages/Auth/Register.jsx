import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'user',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register.post'), {
            onSuccess: () => {
                // Redirect akan ditangani oleh controller
            },
            onError: (errors) => {
                console.error(errors);
            },
            preserveScroll: true
        });
    };

    return (
        <PublicLayout>
            <Head title="Register" />
            
            <div className="flex flex-col items-center pt-6 min-h-screen bg-gray-100 sm:justify-center sm:pt-0">
                <div className="overflow-hidden px-6 py-4 mt-6 w-full bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <div className="flex flex-col items-center mb-8">
                        <img src="/images/Logo2.png" alt="Logo" className="mb-2 w-32" />
                        <h2 className="text-2xl font-bold text-center">Register</h2>
                        <p className="text-center text-gray-600">Buat akun baru</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Nama Depan
                            </label>
                            <input
                                type="text"
                                value={data.firstName}
                                onChange={e => setData('firstName', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                autoComplete="given-name"
                            />
                            {errors.firstName && <div className="mt-1 text-sm text-red-500">{errors.firstName}</div>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Nama Belakang
                            </label>
                            <input
                                type="text"
                                value={data.lastName}
                                onChange={e => setData('lastName', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                autoComplete="family-name"
                            />
                            {errors.lastName && <div className="mt-1 text-sm text-red-500">{errors.lastName}</div>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                autoComplete="email"
                            />
                            {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Daftar Sebagai
                            </label>
                            <select
                                value={data.role}
                                onChange={e => setData('role', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            >
                                <option value="user">Pencari Kos</option>
                                <option value="kost_manager">Pemilik Kos</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                autoComplete="new-password"
                                minLength={8}
                            />
                            {errors.password && <div className="mt-1 text-sm text-red-500">{errors.password}</div>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                autoComplete="new-password"
                                minLength={8}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 w-full font-bold text-white rounded transition duration-150 ease-in-out bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline disabled:opacity-50"
                        >
                            {processing ? 'Loading...' : 'Register'}
                        </button>
                    </form>

                    <p className="mt-4 text-center">
                        Sudah punya akun?{' '}
                        <Link href={route('login')} className="text-primary hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
};

export default Register;
