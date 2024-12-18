import React from "react";

const NavigationButtons = ({ handlePrev, handleNext }) => {
    return (
        <>
            <div className="flex hidden absolute top-2 right-4 justify-center items-center space-x-4 sm:flex">
                <button
                    className="flex justify-center items-center w-8 h-8 text-white rounded-full transition duration-300 btn-prev bg-primary hover:bg-secondary"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    &lt;
                </button>
                <button
                    className="flex justify-center items-center w-8 h-8 text-white rounded-full transition duration-300 btn-next bg-primary hover:bg-secondary"
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    &gt;
                </button>
            </div>

            <div className="flex justify-center mt-8 sm:hidden">
                <div className="flex p-2 space-x-4 rounded-full bg-background">
                    <button
                        className="flex justify-center items-center w-8 h-8 text-white rounded-full transition duration-300 btn-prev bg-primary hover:bg-secondary"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                    >
                        &lt;
                    </button>
                    <button
                        className="flex justify-center items-center w-8 h-8 text-white rounded-full transition duration-300 btn-next bg-primary hover:bg-secondary"
                        onClick={handleNext}
                        aria-label="Next slide"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavigationButtons;
