import React from "react";
import Navbar from "../Components/LandingPages/Navbar";
import HeroSection from "../Components/LandingPages/HeroSection";
import AboutUs from "../Components/LandingPages/AboutUs";
import Features from "../Components/LandingPages/Features";
import PopularKos from "../Components/LandingPages/PopularKos";
import RegisterKos from "../Components/LandingPages/RegisterKos";
import Testimonials from "../Components/LandingPages/Testimonials";
import Footer from "../Components/LandingPages/Footer";
import Divider from "@/Components/LandingPages/PageDivider/Divider";

import '../../css/LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Divider />
      <Features />
      <PopularKos />
      <RegisterKos />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
