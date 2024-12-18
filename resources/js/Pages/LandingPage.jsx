import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";
import PublicLayout from "@Layouts/PublicLayout";
import HeroSection from "@Container/LandingPageSections/HeroSection";
import PopularKosSection from "@Container/LandingPageSections/PopularKosSection";
import RegisterKosSection from "@Container/LandingPageSections/RegisterKosSection";
import TestimonialsSection from "@Container/LandingPageSections/TestimonialsSection";
import FeaturesSection from "@Container/LandingPageSections/FeaturesSection";
import AdsSection from "@Container/LandingPageSections/AdsSection";

const LandingPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <PublicLayout>
            <div className="landing-page">
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