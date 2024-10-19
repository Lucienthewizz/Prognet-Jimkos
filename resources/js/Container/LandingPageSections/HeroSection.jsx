import React from "react";

const HeroSection = () => {
    return (
        <section
            className="relative px-5 py-12 bg-gray-100 rounded-lg md:py-16 md:px-5 lg:py-24 lg:px-5"
            style={{
                backgroundImage: "url('/images/Backgrounds/Waves.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "50%",
            }}
            data-aos="fade-up" // Add AOS attribute for the whole section
        >
            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-white opacity-100 sm:opacity-85"></div>

            <div className="flex flex-col md:flex-row md:justify-center lg:justify-between items-center justify-between max-w-[1300px] mx-auto relative z-10">
                <div
                    className="flex-1 max-w-[650px] text-center md:text-center lg:text-left"
                    data-aos="fade-right" // Add AOS attribute for the text container
                >
                    <h1
                        className="mb-5 leading-tight text-primary text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.9rem]"
                        style={{
                            color: "var(--text-color)",
                            lineHeight: "1.2",
                            fontWeight: "600",
                        }}
                    >
                        Temukan Kos Impian Kamu di daerah{" "}
                        <span className="text-primary">Jimbaran</span>
                    </h1>
                    <p className="mb-8 text-base sm:text-lg md:text-lg text-light-text">
                        Mencari tempat tinggal ideal? JimKos mempermudah pencarian kos yang sesuai dengan kebutuhan Anda!
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium transition duration-300 ease-in-out transform rounded-md cta-button bg-primary text-background hover:bg-secondary hover:-translate-y-0.5 hover:text-background md:my-0 md:mx-auto"
                    >
                        Cari Kos Sekarang
                    </a>
                </div>

                {/* Display image only on large screens */}
                <div className="justify-center hidden mt-10 lg:flex md:mt-0" data-aos="fade-left"> {/* Add AOS attribute for the image */}
                    <img
                        src="/images/Gambar-11.png"
                        alt="Kos di Jimbaran"
                        className="w-[300px] sm:w-[400px] lg:w-[500px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
