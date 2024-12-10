import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import KontakForm from '@/Container/KontakPageSections/KontakForm';

const KontakPage = () => {
    return (
        <PublicLayout>
            <Head title="Kontak - Jimkos" />
            
            {/* Section 1: Heading and Intro */}
            <section className="py-12 bg-background">
                <div className="container px-4 mx-auto">
                    <h1 className="mb-8 text-4xl font-semibold text-center text-primary">
                        Hubungi Kami
                    </h1>
                    
                    <p className="mb-8 text-center text-light-text">
                        Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami. Kami akan segera merespon pesan Anda.
                    </p>
                </div>
            </section>

            {/* Section 2: Contact Form */}
            <section className="py-12 bg-white">
                <div className="container px-4 mx-auto">
                    <KontakForm />
                </div>
            </section>

            {/* Section 3: Contact Information */}
            <section className="py-12 bg-background">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="mb-6 text-3xl font-semibold text-primary">Informasi Kontak</h2>
                    <p className="mb-4 text-light-text">Anda juga dapat menghubungi kami melalui informasi kontak berikut:</p>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-4">
                            <span className="font-semibold text-text">Alamat:</span>
                            <span className="text-light-text">Jl. Raya Jimbaran No. 123, Jimbaran, Bali</span>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <span className="font-semibold text-text">Telepon:</span>
                            <span className="text-light-text">+62 812 3456 7890</span>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <span className="font-semibold text-text">Email:</span>
                            <span className="text-light-text">kontak@jimkos.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default KontakPage;
