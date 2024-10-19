import React from "react";
import KosSwiper from "@Components/LandingPages/KosProps/KosSwiper"; // Import the KosSwiper component
import KosNavigation from "@Components/LandingPages/KosProps/KosNavigation"; // Import the NavigationButtons component
import popularKosData from "@Components/LandingPages/KosProps/popularKosData";

const PopularKosSection = () => {
    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <section className="px-5 py-16">
            <div className="max-w-[1300px] mx-auto relative">
                <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-left text-text sm:text-3xl">
                        Kos Populer di Jimbaran
                    </h2>
                </div>
                <KosSwiper popularKosData={popularKosData} handlePrev={handlePrev} handleNext={handleNext} />
                <KosNavigation handlePrev={handlePrev} handleNext={handleNext} />
            </div>
        </section>
    );
};

export default PopularKosSection;
