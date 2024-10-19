import React from "react";
import SecondaryButton from "/resources/js/Base/Buttons/SecondaryButton.jsx"; // Update to SecondaryButton

const RegisterKosSection = () => {
    return (
        <section
            className="max-w-[1300px] px-5 mx-auto bg-fixed bg-gray-100 bg-top bg-cover rounded-lg py-14"
            style={{ backgroundImage: "url('./images/Gambar-7.jpg')" }}
        >
            <div className="container mx-auto">
                <h2 className="mb-8 text-2xl font-medium text-center text-gray-900 sm:text-3xl">
                    Daftarkan Kos Anda di JimKos
                </h2>
                <p className="w-full max-w-2xl mx-auto mb-8 text-base text-center text-gray-500">
                    Daftarkan kos Anda di JimKos dan dapatkan kesempatan untuk
                    meningkatkan visibilitas dan meningkatkan peluang penjualan.
                </p>

                <div className="flex items-center justify-center">
                    <a href="#">
                        <SecondaryButton className="px-6 py-3 transition duration-300 ease-in-out rounded bg-primary text-background hover:bg-secondary">
                            Pelajari Lebih Lanjut
                        </SecondaryButton>{" "}
                        {/* Using SecondaryButton */}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RegisterKosSection;
