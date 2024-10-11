// src/components/Features.jsx

import React, { useState } from 'react';
import Lottie from 'lottie-react'; 
import animationData1 from '../Lottie/Secured.json'; 
import animationData2 from '../Lottie/Money.json'; 
import animationData3 from '../Lottie/Location.json'; 
import animationData4 from '../Lottie/CleanEnvironment.json'; 

// No need to import if it's in the public folder
// DefaultSVG is referenced as a relative URL
const defaultSVGPath = '/images/Default.svg';

// Data accordion dengan animasi
const featuresData = [
  {
    icon: 'ri-shield-check-line',
    title: 'Aman dan Terpercaya',
    description: 'Semua kos telah diverifikasi dan dijamin keamanannya.',
    animationData: animationData1, // Animasi 1
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Harga Terjangkau',
    description: 'Berbagai pilihan harga yang sesuai dengan budget Anda.',
    animationData: animationData2, // Animasi 2
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Lokasi Strategis',
    description: 'Dekat dengan kampus, pusat perbelanjaan, dan fasilitas umum.',
    animationData: animationData3, // Animasi 3
  },
  {
    icon: 'ri-leaf-line', // Ikon untuk lingkungan bersih
    title: 'Lingkungan Bersih dan Nyaman',
    description: 'Kos-kosan kami berada di lingkungan yang bersih dan asri, cocok untuk belajar dan bersantai.',
    animationData: animationData4, // Animasi untuk lingkungan bersih
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Set default active index to null

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Menutup accordion jika diklik lagi
    } else {
      setActiveIndex(index); // Membuka accordion yang dipilih
    }
  };

  return (
    <section className="px-5 py-5 mt-20 bg-white">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row">
        
        {/* Left: Accordion Section */}
        <div className="lg:w-3/4">
          <h2 className="mb-8 text-3xl font-semibold text-center lg:text-left text-text">
            Mengapa Memilih JimKos?
          </h2>

          <div className="space-y-4">
            {featuresData.map((feature, index) => (
              <div key={index} className="border-b">
                <button
                  className="flex items-center justify-between w-full py-4 text-left"
                  onClick={() => handleAccordionClick(index)}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center">
                    <i className={`${feature.icon} text-2xl text-primary mr-3`}></i>
                    <span className="text-lg font-semibold">{feature.title}</span>
                  </div>
                  {/* Toggle Icon: Panah */}
                  <span className="text-xl">
                    {activeIndex === index ? (
                      <i className="ri-arrow-down-s-line"></i> // Ikon panah ke bawah
                    ) : (
                      <i className="ri-arrow-right-s-line"></i> // Ikon panah ke kanan
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                {activeIndex === index && (
                  <div className="pb-4 text-gray-600 pl-9">
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dynamic Animation Section (Hidden on small screens) */}
        <div className="justify-end hidden mt-10 lg:flex lg:mt-0 lg:w-1/2">
          {activeIndex !== null ? (
            <div className="p-4 rounded-lg bg-Lightgrey"> 
              <Lottie
                animationData={featuresData[activeIndex].animationData}
                loop={true}
                speed={0.3} 
                autoplay={true}
                style={{ width: '415px', height: '415px' }} 
              />
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-Lightgrey">
              {/* Display the SVG when no accordion is clicked */}
              <img src={defaultSVGPath} alt="Default" style={{ width: '415px', height: '415px' }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
