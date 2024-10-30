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
import LoginModal from "@Container/Modals/LoginModal";
import RegisterModal from "@Container/Modals/RegisterModal";

const LandingPage = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    const openLoginModal = () => setShowLoginModal(true);
    const closeLoginModal = () => setShowLoginModal(false);
    const openRegisterModal = () => setShowRegisterModal(true);
    const closeRegisterModal = () => setShowRegisterModal(false);

    return (
        <PublicLayout>
            <Head title="Jimkos | Informasi Kos-Kosan Terbaik di Jimbaran" />
            <HeroSection onLogin={openLoginModal} onRegister={openRegisterModal} />
            <AdsSection />
            <FeaturesSection />
            <PopularKosSection />
            <RegisterKosSection />
            <TestimonialsSection />
            {showLoginModal && <LoginModal closeModal={closeLoginModal} />}
            {showRegisterModal && <RegisterModal closeModal={closeRegisterModal} />}
        </PublicLayout>
    );
};

export default LandingPage;