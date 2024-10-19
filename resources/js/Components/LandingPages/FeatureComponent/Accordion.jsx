// Accordion.jsx
import React, { useState } from "react";

const Accordion = ({ featuresData, activeIndex, onAccordionClick }) => {
    return (
        <div className="lg:w-3/4">
            <h2 className="mb-8 text-2xl font-semibold text-center sm:text-3xl lg:text-left text-text">
                Mengapa Memilih JimKos?
            </h2>

            <div className="mr-5 space-y-4">
                {featuresData.map((feature, index) => (
                    <div key={index} className="border-b">
                        <button
                            className="flex items-center justify-between w-full py-4 text-left"
                            onClick={() => onAccordionClick(index)}
                        >
                            {/* Icon and Title */}
                            <div className="flex items-center">
                                <i
                                    className={`${feature.icon} text-2xl text-primary mr-3`}
                                ></i>
                                <span className="text-lg font-semibold">
                                    {feature.title}
                                </span>
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
    );
};

export default Accordion;
