import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'), {
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
            <Head title="Login" />
            
            <div className="flex flex-col items-center pt-6 min-h-screen bg-gray-100 sm:justify-center sm:pt-0">
                <div className="overflow-hidden px-6 py-4 mt-6 w-full bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <div className="flex flex-col items-center mb-8">
                        <img src="/images/logo2.png" alt="Logo" className="mb-2 w-32" />
                        <h2 className="text-2xl font-bold text-center">Login</h2>
                        <p className="text-center text-gray-600">Selamat datang kembali!</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                autoComplete="email"
                            />
                            {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password" 
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                autoComplete="current-password"
                            />
                            {errors.password && <div className="mt-1 text-sm text-red-500">{errors.password}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {processing ? 'Loading...' : 'Login'}
                        </button>
                    </form>

                    <p className="mt-4 text-center">
                        Belum punya akun?{' '}
                        <Link href={route('register')} className="text-primary hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
};

export default Login;
