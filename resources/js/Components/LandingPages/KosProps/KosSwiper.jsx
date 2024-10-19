import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation"; 
import KosItem from "@Components/LandingPages/KosProps/KosItem";

const KosSwiper = ({ popularKosData, handlePrev, handleNext }) => {
    const swiperRef = useRef(null);

    return (
        <Swiper
            spaceBetween={20}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
            }}
            navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
            }} 
            modules={[Navigation]} 
        >
            {popularKosData.map((kos, index) => (
                <SwiperSlide key={index} className="flex flex-col">
                    <KosItem
                        imageUrl={kos.imageUrl}
                        title={kos.title}
                        price={kos.price}
                        facilities={kos.facilities}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default KosSwiper;
