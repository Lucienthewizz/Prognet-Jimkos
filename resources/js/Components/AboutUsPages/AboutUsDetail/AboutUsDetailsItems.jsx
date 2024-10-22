import React from "react";

const AboutUsDetailsItems = () => {
    const details = [
        {
            title: "Kenyamanan",
            description: "Menyediakan berbagai pilihan kos yang nyaman, aman, dan berkualitas untuk memenuhi kebutuhan Anda.",
            iconClass: "ri-home-heart-line",
            delay: "150"  // Slightly increased delay
        },
        {
            title: "Keamanan",
            description: "Menjamin keamanan pengguna dengan informasi kos yang terpercaya dan sistem verifikasi.",
            iconClass: "ri-shield-keyhole-line",
            delay: "350"  // Increased delay
        },
        {
            title: "Kemudahan Akses",
            description: "Menghadirkan pengalaman pencarian kos yang cepat dan mudah dengan fitur pencarian yang lengkap.",
            iconClass: "ri-search-eye-line",
            delay: "550"  // Longer delay for smoother stagger
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {details.map((detail, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center p-6 text-center border border-gray-300 rounded-lg" 
                    data-aos="fade-up" 
                    data-aos-delay={detail.delay}
                >
                    <div className="mb-4 text-4xl text-primary">
                        <i className={detail.iconClass}></i>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-primary">{detail.title}</h3>
                    <p className="text-gray-700">{detail.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AboutUsDetailsItems;
