import React, { useEffect } from "react";
import AOS from 'aos'; 
import "aos/dist/aos.css"; 
import AboutUsTitle from "@Components/AboutUsPages/AboutUsDetail/AboutUsTitle";
import AboutUsDetailsItems from "@Components/AboutUsPages/AboutUsDetail/AboutUsDetailsItems";

const AboutUsDetail = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Smooth longer duration
            easing: 'ease-out-cubic', // Custom easing for smoother effect
            once: true,  // Animation only happens once
        });
    }, []);

    return (
        <section className="px-5 py-20 bg-gray-100">
            <div className="max-w-[1300px] mx-auto">
                {/* Title Component */}
                <AboutUsTitle />
                {/* Details Component */}
                <AboutUsDetailsItems />
            </div>
        </section>
    );
};

export default AboutUsDetail;
