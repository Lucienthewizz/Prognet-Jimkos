import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const AdsCarousel = ({ adsData, swiperRef }) => {
  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay, Navigation, EffectCoverflow]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        850: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 150,
        },
      }}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      navigation={false}
      loop={true}
      effect={"coverflow"}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 1,
        stretch: 1,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      }}
      className="relative"
    >
      {adsData.map((ad) => (
        <SwiperSlide key={ad.id}>
          <img
            src={ad.image}
            alt={ad.alt}
            className="object-cover w-full rounded-lg shadow-md h-60 md:h-80"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdsCarousel;
