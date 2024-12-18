import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from "@/Layouts/PublicLayout";
import AOS from 'aos';
import 'aos/dist/aos.css';

const KontakPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <PublicLayout>
            <Head title="Kontak Kami | Jimkos" />
            
            <section className="py-28 bg-gray-50">
                <div className="container mx-auto px-4 max-w-[1350px]">
                    <div className="flex flex-wrap">
                        <div className="p-8 w-full md:w-1/2" data-aos="fade-right">
                            <h1 className="mb-4 text-4xl font-bold text-primary">Kontak Kami</h1>
                            <p className="mb-8 text-lg text-gray-600">
                                Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, 
                                jangan ragu untuk menghubungi kami. Kami siap membantu Anda.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-center">
                                    <i className="text-2xl ri-map-pin-line text-primary"></i>
                                    <span className="text-gray-700">Jl. Raya Kampus Unud, Jimbaran, Bali</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <i className="text-2xl ri-phone-line text-primary"></i>
                                    <span className="text-gray-700">+62 812-3456-7890</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <i className="text-2xl ri-mail-line text-primary"></i>
                                    <span className="text-gray-700">info@jimkos.com</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-8 w-full md:w-1/2" data-aos="fade-left">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="px-4 py-3 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="px-4 py-3 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="px-4 py-3 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        className="px-4 py-3 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="px-4 py-3 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-3 text-white rounded-md transition-colors bg-primary hover:bg-primary-dark"
                                >
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default KontakPage;
