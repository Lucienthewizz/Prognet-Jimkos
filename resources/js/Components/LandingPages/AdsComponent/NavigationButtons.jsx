import React from 'react';

const NavigationButtons = ({ swiperRef }) => {
  return (
    <div className="absolute left-0 flex justify-center w-full gap-8 py-5 mt-20 bottom-5">
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
  );
};

export default NavigationButtons;
