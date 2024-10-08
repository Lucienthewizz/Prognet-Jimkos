import React from "react";
import TestimonialSection from "./TestimonialData/TestimonialsSection";

// Data Testimonial
const testimonialData = [
    {
        quote: "Sangat membantu dalam mencari kos yang sesuai dengan kebutuhan saya. Terima kasih JimKos!",
        name: "Andi Pratama",
        occupation: "Mahasiswa",
        imageUrl: "/images/TestimonialImages/boy-1.png",
    },
    {
        quote: "Proses pencarian dan booking kos sangat mudah. Recommended banget!",
        name: "Siti Nurhaliza",
        occupation: "Karyawan Swasta",
        imageUrl: "/images/TestimonialImages/girl-1.png",
    },
    {
        quote: "JimKos sangat memudahkan, dan saya merasa puas dengan pelayanannya.",
        name: "Rina Dewi",
        occupation: "Dosen",
        imageUrl: "/images/TestimonialImages/girl-2.png",
    },
    {
        quote: "Mencari kos jadi lebih cepat dengan JimKos. Fitur-fiturnya lengkap.",
        name: "Budi Santoso",
        occupation: "Wiraswasta",
        imageUrl: "/images/TestimonialImages/boy-2.png",
    },
    {
        quote: "Sangat menyenangkan dapat menemukan kos yang cocok melalui JimKos!",
        name: "Desi Anggraini",
        occupation: "Mahasiswa",
        imageUrl: "/images/TestimonialImages/girl-3.png",
    },
    {
        quote: "JimKos memudahkan hidup saya dalam mencari kos-kosan.",
        name: "Fitri Hasanah",
        occupation: "PNS",
        imageUrl: "/images/TestimonialImages/girl-4.png",
    },
];

const Testimonials = () => {
    return (
        <div>
            <TestimonialSection testimonials={testimonialData} />
        </div>
    );
};

export default Testimonials;
