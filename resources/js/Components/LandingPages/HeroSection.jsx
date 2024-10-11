import React from "react";

const HeroSection = () => {
    return (
        <section
            className="px-5 py-12 hero md:py-16 md:px-5 lg:py-24 lg:px-5"
            style={{
                backgroundImage: "url('/images/Gambar_5-removebg-preview3.png')",
                backgroundSize: "40%",
                backgroundPosition: "bottom",
                backgroundRepeat: "repeat-x",
            }}
        >
            <div className="hero-container flex flex-col md:flex-row md:justify-center lg:justify-between items-center justify-between max-w-[1300px] mx-auto">
                <div className="hero-content flex-1 max-w-[650px] md:text-center lg:text-left">
                    <h1
                        className="mb-5 leading-tight text-primary"
                        style={{
                            fontSize: "2.9rem",
                            color: "var(--text-color)", 
                            marginBottom: "20px",
                            lineHeight: "1.2",
                            fontWeight: "600",
                        }}
                    >
                        Temukan Kos Impian Kamu di daerah{" "}
                        <span className="text-primary">Jimbaran</span>
                    </h1>
                    <p className="mb-8 text-lg text-light-text">
                        Kami menyediakan berbagai pilihan kos yang nyaman dan
                        terjangkau untuk mahasiswa dan profesional di area
                        Jimbaran.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 font-medium transition duration-300 ease-in-out transform rounded-md cta-button bg-primary text-background hover:bg-secondary hover:-translate-y-0.5 hover:text-background md:my-0 md:mx-auto"
                    >
                        Cari Kos Sekarang
                    </a>
                </div>

                {/* Display image only on large screens */}
                <div className="flex justify-center mt-10 hero-images md:mt-0 md:hidden lg:flex lg:mt-0"> {/* Show on lg screens */}
                    <img
                        src="/images/Gambar-11.png"
                        alt="Kos di Jimbaran"
                        className="w-[500px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
