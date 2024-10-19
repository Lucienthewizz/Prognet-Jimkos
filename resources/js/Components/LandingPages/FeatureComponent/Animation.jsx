// Animation.jsx
import React from 'react';
import Lottie from 'lottie-react';

const Animation = ({ activeIndex, animationData, defaultSVGPath }) => {
  return (
    <div className="justify-end hidden mt-10 lg:flex lg:mt-0 lg:w-1/2">
      {activeIndex !== null ? (
        <div className="p-4 rounded-lg bg-Lightgrey">
          <Lottie
            animationData={animationData}
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
  );
};

export default Animation;
