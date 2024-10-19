import React, { useState } from "react";
import Accordion from "@Components/LandingPages/FeatureComponent/Accordion";
import Animation from "@Components/LandingPages/FeatureComponent/Animation";
import animationData1 from "/resources/js/Components/Lottie/Secured.json";
import animationData2 from "/resources/js/Components/Lottie/Money.json";
import animationData3 from "/resources/js/Components/Lottie/Location.json";
import animationData4 from "/resources/js/Components/Lottie/CleanEnvironment.json";

// DefaultSVG is referenced as a relative URL
const defaultSVGPath = "/images/Default.svg";

// Data accordion dengan animasi
const featuresData = [
    {
        icon: "ri-shield-check-line",
        title: "Aman dan Terpercaya",
        description: "Semua kos telah diverifikasi dan dijamin keamanannya.",
        animationData: animationData1,
    },
    {
        icon: "ri-money-dollar-circle-line",
        title: "Harga Terjangkau",
        description: "Berbagai pilihan harga yang sesuai dengan budget Anda.",
        animationData: animationData2,
    },
    {
        icon: "ri-map-pin-line",
        title: "Lokasi Strategis",
        description:
            "Dekat dengan kampus, pusat perbelanjaan, dan fasilitas umum.",
        animationData: animationData3,
    },
    {
        icon: "ri-leaf-line",
        title: "Lingkungan Bersih dan Nyaman",
        description:
            "Kos-kosan kami berada di lingkungan yang bersih dan asri, cocok untuk belajar dan bersantai.",
        animationData: animationData4,
    },
];

const FeaturesSection = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Set default active index to null

    const handleAccordionClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Menutup accordion jika diklik lagi
        } else {
            setActiveIndex(index); // Membuka accordion yang dipilih
        }
    };

    return (
        <section
            className="px-5 py-5 mt-1 sm:py-8 lg:py-12 lg:mt-24"
        >
            <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row-reverse">
                {/* Right: Dynamic Animation Section */}
                <Animation
                    activeIndex={activeIndex}
                    animationData={
                        activeIndex !== null
                            ? featuresData[activeIndex].animationData
                            : null
                    }
                    defaultSVGPath={defaultSVGPath}
                />

                {/* Left: Accordion Section */}
                <Accordion
                    featuresData={featuresData}
                    activeIndex={activeIndex}
                    onAccordionClick={handleAccordionClick}
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
