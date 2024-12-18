// resources/js/Container/LandingPageSections/RegisterKosSection.jsx
import React, { useState } from "react";
import { usePage, router } from '@inertiajs/react';
import SecondaryButton from "/resources/js/Base/Buttons/SecondaryButton.jsx";
import Modal from '../../Base/Modal';

const RegisterKosSection = () => {
    const { auth } = usePage().props;
    const [isModalOpen, setModalOpen] = useState(false);

    const handleRegisterClick = () => {
        if (auth.user) {
            if (auth.user.role === 'kost_manager' || auth.user.role === 'admin') {
                router.get('/create-kost');
            } else {
                setModalOpen(true);
            }
        } else {
            router.get('/register');
        }
    };

    return (
        <section className="max-w-[1300px] px-5 mx-auto bg-fixed bg-gray-100 bg-top bg-cover rounded-lg py-14" style={{ backgroundImage: "url('./images/Gambar-7.jpg')" }}>
            <div className="container mx-auto">
                <h2 className="mb-8 text-2xl font-medium text-center text-gray-900 sm:text-3xl">
                    Daftarkan Kos Anda di JimKos
                </h2>
                <p className="mx-auto mb-8 w-full max-w-2xl text-base text-center text-gray-500">
                    Daftarkan kos Anda di JimKos dan dapatkan kesempatan untuk meningkatkan visibilitas dan meningkatkan peluang penjualan.
                </p>
                <div className="flex justify-center items-center">
                    <button onClick={handleRegisterClick} className="px-6 py-3 rounded transition duration-300 ease-in-out bg-primary text-background hover:bg-secondary">
                        Pelajari Lebih Lanjut
                    </button>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title="Akses Terbatas"
                onConfirm={() => router.get('/register')}
            >
                Silakan buat akun pemilik kos untuk melanjutkan.
            </Modal>
        </section>
    );
};

export default RegisterKosSection;