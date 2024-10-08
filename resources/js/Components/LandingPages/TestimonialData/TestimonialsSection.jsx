import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; // Hapus Navigation dari sini

const TestimonialSection = ({ testimonials }) => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2>Testimonials</h2> 
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
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
                    modules={[Autoplay, Pagination]} // Hapus Navigation dari sini
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-item">
                                <img
                                    src={testimonial.imageUrl}
                                    alt={testimonial.name}
                                    className="user-image"
                                />
                                <div className="testimonial-content">
                                    <h4 className="author">
                                        {testimonial.name}
                                    </h4>
                                    <p className="occupation">
                                        {testimonial.occupation}
                                    </p>
                                    <div className="quote-box">
                                        <p>"{testimonial.quote}"</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default TestimonialSection;
