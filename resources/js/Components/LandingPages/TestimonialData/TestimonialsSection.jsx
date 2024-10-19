import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialSection = ({ testimonials }) => {
    return (
        <section className="px-5 py-16 pb-36">
            <div className="max-w-[1300px] mx-auto">
                <h2 className="mb-8 text-3xl font-semibold text-center text-primary">
                    Testimonials
                </h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1} // Default to 1 slide on small screens
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // 2 slides for tablets
                        },
                        1024: {
                            slidesPerView: 2, // 3 slides for small desktops
                        },
                        1280: {
                            slidesPerView: 3, // 4 slides for large desktops
                        },
                    }}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        dynamicBullets: true,
                    }}
                    rewind={true}
                    modules={[Autoplay, Pagination]}
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col p-5 min-h-[300px] text-center transition-transform duration-300 bg-white rounded-lg shadow-md mb-14 hover:shadow-lg">
                                <img
                                    src={testimonial.imageUrl}
                                    alt={testimonial.name}
                                    className="w-16 h-16 mx-auto mb-4"
                                />
                                <div className="flex flex-col flex-grow">
                                    <h4 className="mb-1 font-medium text-primary">
                                        {testimonial.name}
                                    </h4>
                                    <p className="mb-2 text-sm text-gray-600">
                                        {testimonial.occupation}
                                    </p>
                                    <div className="p-4 border border-gray-300 rounded-lg mt-4 min-h-[100px]">
                                        <p className="text-gray-700">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="mt-10 text-center swiper-pagination"></div>
            </div>
        </section>
    );
};

export default TestimonialSection;
