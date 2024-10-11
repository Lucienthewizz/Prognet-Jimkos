import React from "react";
import { Head } from "@inertiajs/react"; 
import Navbar from "../Components/LandingPages/Navbar";
import HeroSection from "../Components/LandingPages/HeroSection";
import PopularKos from "../Components/LandingPages/PopularKos";
import RegisterKos from "../Components/LandingPages/RegisterKos";
import Testimonials from "../Components/LandingPages/Testimonials";
import Footer from "../Components/LandingPages/Footer";
import Ads from "../Components/LandingPages/Ads";
import FeaturesSection from "@/Components/LandingPages/FeaturesSection";

const LandingPage = () => {
    return (
        <div>
            <Head title="Jimkos | Informasi Kos-Kosan Terbaik di Jimbaran" />
            <Navbar />
            <HeroSection />
            <Ads />
            <FeaturesSection />
            <PopularKos />
            <RegisterKos />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default LandingPage;
