import React, { useRef } from "react";
import KosItem from "./KosProps/KosItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation
import "swiper/css";
import "swiper/css/navigation"; // Import CSS for Navigation
import popularKosData from "./KosProps/popularKosData";


const PopularKos = () => {
    const swiperRef = useRef(null);

    return (
        <section className="popular-kos">
            <div className="container">
                <div className="header">
                    <h2>Kos Populer di Jimbaran</h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={{
                        nextEl: '.btn-next',
                        prevEl: '.btn-prev',
                    }} // Add navigation options
                    modules={[Navigation]} // Register Navigation module
                    style={{ height: '415px' }} // Set a fixed height for the Swiper
                >
                    {popularKosData.map((kos, index) => (
                        <SwiperSlide key={index}>
                            <KosItem
                                imageUrl={kos.imageUrl}
                                title={kos.title}
                                price={kos.price}
                                facilities={kos.facilities}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="carousel-buttons">
                    <button className="btn-prev">
                        &lt; {/* Left arrow */}
                    </button>
                    <button className="btn-next">
                        &gt; {/* Right arrow */}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularKos;
