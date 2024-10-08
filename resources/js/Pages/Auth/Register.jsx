import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-xl">Register</h1>
            <form onSubmit={submit} className="w-96">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                </div>
                <button type="submit" disabled={processing} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
