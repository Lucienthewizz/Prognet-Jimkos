import React from "react";
import { Head, Link } from "@inertiajs/react";

const NotFound = () => {
    return (
        <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
            <Head title="404 | Error" />
            <div className="text-center">
                <p className="text-base font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="flex items-center justify-center mt-10 gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
