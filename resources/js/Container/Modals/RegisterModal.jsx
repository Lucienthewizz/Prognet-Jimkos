import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const PrimaryButton = ({ children, ...props }) => {
    return (
        <button className="px-4 py-2 text-base transition duration-300 ease-in-out bg-white border rounded border-primary text-primary hover:bg-primary hover:text-background" {...props}>
            {children}
        </button>
    );
};

const RegisterModal = ({ closeModal }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleRegister = (e) => {
        e.preventDefault();
        post('/register', {
            preserveState: true,
            onSuccess: () => closeModal(),
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
                <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    {Object.keys(errors).length > 0 && (
                        <div className="p-2 text-sm text-red-600 bg-red-100 rounded">
                            {Object.values(errors).map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div>
                    )}
                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation" className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            id="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <PrimaryButton type="button" onClick={closeModal}>
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton type="submit" disabled={processing}>
                            {processing ? 'Registering...' : 'Register'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;