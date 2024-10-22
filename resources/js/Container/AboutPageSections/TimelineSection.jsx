import React, { useEffect } from "react";
import GlowIcon from "@Components/AboutUsPages/GlowIcon"; // Make sure this path is correct
import AOS from 'aos'; // Importing AOS

const TimelineSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Increased duration for smoother animation
            easing: 'ease-out-cubic', // Changed easing for a more gradual effect
        });
    }, []);

    return (
        <section className="relative w-full px-8 mx-auto my-20 md:my-40 md:w-[90%] lg:w-[85%] xl:w-[60%] sm:px-10 md:px-0 lg:px-5">
            <h2 className="z-10 mb-20 text-2xl font-semibold text-center text-primary md:text-3xl" data-aos="fade-up" data-aos-delay="100">
                Perjalanan Kami
            </h2>
            <ul className="z-10 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {/* Peluncuran */}
                <li data-aos="fade-up" data-aos-delay="100">
                    <div className="timeline-middle">
                        <div className="glow-icon">
                            <GlowIcon /> {/* Using GlowIcon component */}
                        </div>
                    </div>
                    <div className="mb-10 mr-5 text-left timeline-start md:text-right max-md:pl-9 max-md:pb-10">
                        <time className="text-sm italic font-Poppins text-light-text md:text-base">
                            September 2023
                        </time>
                        <div className="text-lg font-bold text-text font-Poppins md:text-xl">
                            Peluncuran Platform
                        </div>
                        <p className="text-sm text-light-text md:text-base">
                            Kami meluncurkan platform pencarian kos-kosan
                            pertama kami di area Jimbaran, Bali, untuk
                            memudahkan pencari kos dalam menemukan tempat
                            tinggal yang sesuai.
                        </p>
                    </div>
                    <hr className="w-full" />
                </li>

                {/* Penambahan Fitur 1 */}
                <li data-aos="fade-up" data-aos-delay="300"> {/* Increased delay */}
                    <hr className="w-full" />
                    <div className="timeline-middle">
                        <div className="glow-icon">
                            <GlowIcon /> {/* Using GlowIcon component */}
                        </div>
                    </div>
                    <div className="mb-10 ml-5 text-left timeline-end md:text-left max-md:pl-5">
                        <time className="text-sm italic font-Poppins text-light-text md:text-base">
                            Oktober 2023
                        </time>
                        <div className="text-lg font-bold text-text md:text-xl">
                            Penambahan Fitur Pencarian Filter
                        </div>
                        <p className="text-sm text-light-text md:text-base">
                            Kami menambahkan fitur pencarian dengan filter,
                            memungkinkan pengguna menyaring kos berdasarkan
                            harga, fasilitas, dan jarak dari kampus atau
                            tempat kerja.
                        </p>
                    </div>
                    <hr className="w-full" />
                </li>

                {/* Penambahan Fitur 2 */}
                <li data-aos="fade-up" data-aos-delay="500"> {/* Increased delay */}
                    <hr className="w-full" />
                    <div className="timeline-middle">
                        <div className="glow-icon">
                            <GlowIcon /> {/* Using GlowIcon component */}
                        </div>
                    </div>
                    <div className="mb-10 mr-5 text-left timeline-start md:text-end max-md:pl-9 max-md:pb-10">
                        <time className="text-sm italic font-Poppins text-light-text md:text-base">
                            November 2023
                        </time>
                        <div className="text-lg font-bold text-text md:text-xl">
                            Penambahan Fitur Ulasan Pengguna
                        </div>
                        <p className="text-sm text-light-text md:text-base">
                            Kami memperkenalkan fitur ulasan pengguna, yang
                            memungkinkan penghuni kos untuk memberikan
                            penilaian dan ulasan terhadap kos-kosan yang
                            mereka tempati.
                        </p>
                    </div>
                    <hr className="w-full" />
                </li>

                {/* Penambahan Fitur Terbaru */}
                <li data-aos="fade-up" data-aos-delay="600"> {/* Increased delay */}
                    <hr className="w-full" />
                    <div className="timeline-middle">
                        <div className="glow-icon">
                            <GlowIcon /> {/* Using GlowIcon component */}
                        </div>
                    </div>
                    <div className="mb-10 ml-5 text-left timeline-end md:text-left max-md:pl-5">
                        <time className="text-sm italic font-Poppins text-light-text md:text-base">
                            Desember 2023
                        </time>
                        <div className="text-lg font-bold text-text md:text-xl">
                            Penambahan Fitur Booking Kos Langsung
                        </div>
                        <p className="text-sm text-light-text md:text-base">
                            Fitur ini memungkinkan pengguna untuk langsung
                            memesan kos-kosan yang tersedia melalui platform
                            kami, menjadikannya lebih mudah dan cepat untuk
                            mendapatkan tempat tinggal.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default TimelineSection;
