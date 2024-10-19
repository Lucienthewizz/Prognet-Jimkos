import React from 'react';
import AdsCarousel from '@Components/LandingPages/AdsComponent/AdsCarousel';
import NavigationButtons from '@Components/LandingPages/AdsComponent/NavigationButtons';

const adsData = [
  { id: 1, image: '/images/Ads/Ads-1.jpg', alt: 'Advertisement 1' },
  { id: 2, image: '/images/Ads/Ads-1.jpg', alt: 'Advertisement 2' },
  { id: 3, image: '/images/Ads/Ads-1.jpg', alt: 'Advertisement 3' },
  { id: 4, image: '/images/Ads/Ads-1.jpg', alt: 'Advertisement 4' },
];

const AdsSection = () => {
  const swiperRef = React.useRef(null);

  return (
    <section className="relative hidden pt-20 py-28 bg-gradient-to-b from-transparent to-background md:block" data-aos="fade-up">
      <div className="max-w-[1550px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Render the Carousel with animation */}
        <div data-aos="fade-right" data-aos-duration="800">
          <AdsCarousel adsData={adsData} swiperRef={swiperRef} />
        </div>
        
        {/* Render the Navigation Buttons with animation */}
        <div>
          <NavigationButtons swiperRef={swiperRef} />
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
