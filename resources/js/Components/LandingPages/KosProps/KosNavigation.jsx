import React from "react";

const NavigationButtons = ({ handlePrev, handleNext }) => {
    return (
        <>
            {/* Desktop Navigation Buttons */}
            <div className="absolute flex items-center justify-center hidden space-x-4 top-2 right-4 sm:flex">
                <button
                    className="flex items-center justify-center w-8 h-8 text-white transition duration-300 rounded-full btn-prev bg-primary hover:bg-secondary"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    &lt; {/* Left arrow */}
                </button>
                <button
                    className="flex items-center justify-center w-8 h-8 text-white transition duration-300 rounded-full btn-next bg-primary hover:bg-secondary"
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    &gt; {/* Right arrow */}
                </button>
            </div>

            {/* Mobile Navigation Buttons with Background */}
            <div className="flex justify-center mt-8 sm:hidden">
                <div className="flex p-2 space-x-4 rounded-full bg-background">
                    <button
                        className="flex items-center justify-center w-8 h-8 text-white transition duration-300 rounded-full btn-prev bg-primary hover:bg-secondary"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                    >
                        &lt; {/* Left arrow */}
                    </button>
                    <button
                        className="flex items-center justify-center w-8 h-8 text-white transition duration-300 rounded-full btn-next bg-primary hover:bg-secondary"
                        onClick={handleNext}
                        aria-label="Next slide"
                    >
                        &gt; {/* Right arrow */}
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavigationButtons;
