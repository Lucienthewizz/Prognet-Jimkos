import React from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@Base/Buttons/PrimaryButton";
import SecondaryButton from "@Base/Buttons/SecondaryButton";
import { Link } from "@inertiajs/react";

const LoginModal = ({ closeModal, openRegisterModal }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post("/login", {
            preserveState: true,
            onSuccess: () => closeModal(),
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-md p-8 py-12 bg-white rounded-lg shadow-xl">
                {/* Tombol X untuk Close */}
                <button
                    onClick={closeModal}
                    className="absolute text-gray-600 top-4 right-4 hover:text-gray-800"
                >
                    <i className="text-2xl ri-close-line"></i>
                </button>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="w-auto h-10 mx-auto"
                        src="/images/logo2.png"
                        alt="JimKos Logo"
                    />
                    <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <form onSubmit={handleLogin} className="mt-10 space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-primary hover:text-secondary"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-5 text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div>
                        <SecondaryButton
                            type="submit"
                            disabled={processing}
                            className="flex w-full justify-center rounded-md bg-primary hover:bg-secondary px-3 py-1.5 mt-8 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            {processing ? "Signing in..." : "Sign in"}
                        </SecondaryButton>
                    </div>
                </form>

                {/* Login dengan Google */}
                <div className="mt-6">
                    <SecondaryButton
                        type="button"
                        onClick={() => window.location.href = "/auth/google"}
                        className="flex w-full justify-center rounded-md bg-white hover:bg-gray-100 border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <i className="mr-2 text-lg ri-google-line"></i> Sign in with Google
                    </SecondaryButton>
                </div>

                {/* Opsi Daftar */}
                <p className="mt-6 text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <button
                        onClick={() => {
                            closeModal();
                            openRegisterModal();
                        }}
                        className="font-semibold leading-6 text-primary hover:text-secondary"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
