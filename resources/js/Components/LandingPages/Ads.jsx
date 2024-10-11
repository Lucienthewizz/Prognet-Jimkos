import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// Sample advertisement data
const adsData = [
  {
    id: 1,
    image: '/images/Ads/Ads-1.jpg',
    alt: 'Advertisement 1',
  },
  {
    id: 2,
    image: '/images/Ads/Ads-1.jpg',
    alt: 'Advertisement 2',
  },
  {
    id: 3,
    image: '/images/Ads/Ads-1.jpg',
    alt: 'Advertisement 3',
  },
  {
    id: 4,
    image: '/images/Ads/Ads-1.jpg',
    alt: 'Advertisement 4',
  },
];

const Ads = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative hidden pt-20 py-28 bg-background md:block"> {/* Hidden on small screens */}
      <div className="max-w-[1550px] mx-auto px-4 md:px-10 lg:px-20"> {/* Responsiveness for padding */}
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

        {/* Custom Navigation Buttons at the Bottom */}
        <div className="absolute left-0 flex justify-center w-full gap-8 bottom-5">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="flex items-center justify-center p-2 px-3.5 bg-white rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            <i className="text-lg ri-arrow-left-s-line"></i>
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="flex items-center justify-center p-2 px-3.5 bg-white rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            <i className="text-lg ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ads;
