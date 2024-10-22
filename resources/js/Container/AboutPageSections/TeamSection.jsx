import React, { useEffect } from "react";
import AOS from 'aos'; // Mengimpor AOS
import "aos/dist/aos.css"; // Mengimpor stylesheet AOS
import TeamMember from "@Components/AboutUsPages/TeamMember"; // Pastikan jalur ini benar

const TeamSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Durasi animasi yang lebih cepat
            easing: 'ease-in-out', // Easing function untuk animasi yang halus
            once: true, // Animasi hanya terjadi sekali
        });
    }, []);

    const teamMembers = [
        {
            name: "Tugus Wiswa",
            position: "Founder & CEO",
            description:
                "Memiliki pengalaman lebih dari 15 tahun dalam memimpin perusahaan teknologi.",
            image: "/images/Foto/Tugus.jpg",
            social: {
                instagram: "#",
                linkedin: "#",
                twitter: "#",
                github: "#",
            },
        },
        {
            name: "Aditya Nugraha",
            position: "Chief Technology Officer",
            description:
                "Ahli dalam teknologi inovatif dengan fokus pada solusi perangkat lunak.",
            image: "/images/Foto/Adit.jpg",
            social: {
                instagram: "#",
                linkedin: "#",
                twitter: "#",
                github: "#",
            },
        },
        {
            name: "Lucien Purnawarman",
            position: "Lead Developer",
            description:
                "Berpengalaman dalam pengembangan aplikasi berbasis web dan mobile.",
            image: "/images/Foto/Lucien.jpg",
            social: {
                instagram: "#",
                linkedin: "#",
                twitter: "#",
                github: "#",
            },
        },
        {
            name: "Aries Pratama",
            position: "Product Designer",
            description:
                "Memiliki mata tajam untuk detail, fokus pada user experience dan desain minimalis.",
            image: "/images/Foto/Aris.jpg",
            social: {
                instagram: "#",
                linkedin: "#",
                twitter: "#",
                github: "#",
            },
        },
    ];

    return (
        <section className="mx-auto my-16 mb-32 text-center max-w-[90%] lg:max-w-[1400px] md:px-10">
            <h2 className="mb-5 text-2xl font-semibold text-text md:text-3xl" data-aos="fade-up" data-aos-delay="50">
                Temui Tim Inovatif 
                <span className="text-primary"> <span className="font-bold">Jim</span>Kos</span>
            </h2>
            <h4 className="w-full mb-10 text-base text-gray-600 md:text-lg" data-aos="fade-up" data-aos-delay="100">
                Kami adalah tim profesional yang berdedikasi untuk menyediakan
                solusi inovatif dan layanan berkualitas tinggi. Dengan latar
                belakang beragam dan pengalaman luas, kami berkomitmen untuk
                membantu klien mencapai tujuan mereka.
            </h4>
            
            {/* Tambahkan animasi pada garis horizontal */}
            <hr className="my-10" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" />
            
            {/* Daftar anggota tim */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <TeamMember 
                        key={index} 
                        member={member} 
                        index={index} 
                        data-aos="fade-up" 
                        data-aos-delay={`${200 + index * 50}`} // Tambahkan delay untuk setiap anggota tim, dengan sedikit jeda
                        data-aos-duration="800" // Durasi animasi yang lebih cepat
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
