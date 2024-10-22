import React from "react";

const AboutUsSection = () => {
    return (
        <section
            className="relative px-5 py-12 bg-gray-100 md:py-16 md:px-5 lg:py-32 lg:px-5"
            style={{
                backgroundImage: "url('/images/Backgrounds/Waves-8.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "75%",
                backgroundPositionX: "10%",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-white opacity-75 sm:opacity-65"></div>

            <div className="flex flex-col items-center justify-center max-w-[1300px] mx-auto relative z-10">
                {/* Quotes Icon */}
                <div className="mb-6 text-6xl text-primary" data-aos="fade-up">
                    <i className="ri-double-quotes-l"></i> {/* Icon quotes */}
                </div>

                <div
                    className="flex-1 max-w-[950px] text-center sm:text-left lg:text-center"
                    data-aos="fade-up"
                >
                    <h2
                        className="mb-5 leading-tight text-[#395775] text-lg sm:text-xl xl:text-[1.5rem]"
                        style={{
                            lineHeight: "1.4",
                            fontWeight: "400",
                        }}
                    >
                        Kami hadir untuk memudahkan pencarian kos, menghubungkan Anda dengan pilihan terbaik, demi kenyamanan dan keamanan Anda.
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
