import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import PublicLayout from "../Layouts/PublicLayout";
import HeroSection from "../Container/LandingPageSections/HeroSection";
import PopularKosSection from "../Container/LandingPageSections/PopularKosSection";
import RegisterKosSection from "../Container/LandingPageSections/RegisterKosSection";
import TestimonialsSection from "../Container/LandingPageSections/TestimonialsSection";
import FeaturesSection from "../Container/LandingPageSections/FeaturesSection";
import AdsSection from "../Container/LandingPageSections/AdsSection";

const LandingPage = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            easing: "ease-in-out", // Easing function
            once: true, // Whether animation should happen only once
            offset: 100, // Offset (in px) from the original trigger point
        });
    }, []);
    

    return (
        <PublicLayout>
            <div className="public-layout">
                <Head title="Jimkos | Informasi Kos-Kosan Terbaik di Jimbaran" />
                <HeroSection />
                <AdsSection />
                <FeaturesSection />
                <PopularKosSection />
                <RegisterKosSection />
                <TestimonialsSection />
            </div>
        </PublicLayout>
    );
};

export default LandingPage;
