import React, { useEffect } from "react";
import AOS from 'aos'; // Mengimpor AOS
import "aos/dist/aos.css"; // Mengimpor stylesheet AOS

const TeamSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Durasi animasi
            easing: 'ease-in-out', // Easing function
            once: true, // Animasi hanya terjadi sekali
        });
    }, []);

    return (
        <section className="mx-auto my-16 mb-32 text-center max-w-[90%] lg:max-w-[1400px] md:px-10">
            <h2 className="mb-5 text-2xl font-semibold text-text md:text-3xl">
                Temui Tim Inovatif 
                <span className="text-primary"> <span className="font-bold">Jim</span>Kos</span>
            </h2>
            <h4 className="w-full mb-10 text-base text-gray-600 md:text-lg">
                Kami adalah tim profesional yang berdedikasi untuk menyediakan
                solusi inovatif dan layanan berkualitas tinggi. Dengan latar
                belakang beragam dan pengalaman luas, kami berkomitmen untuk
                membantu klien mencapai tujuan mereka.
            </h4>
            <hr className="my-10" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {[
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
                ].map((member, index) => {
                    const [firstName, lastName] = member.name.split(" ");
                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
                        >
                            <figure className="relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover object-center w-full h-48 rounded-t-lg md:h-56"
                                />
                                <div className="absolute inset-0 rounded-t-lg bg-gradient-to-b from-transparent to-primary opacity-30" />
                            </figure>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-primary md:text-md lg:text-md xl:text-xl">
                                    {firstName}{" "}
                                    <span className="font-normal text-black">
                                        {lastName}
                                    </span>
                                </h3>
                                <p className="mb-2 text-sm text-secondary md:text-base">
                                    {member.position}
                                </p>
                                <div className="p-3 border border-gray-300 rounded-lg mt-4 min-h-[120px] md:min-h-[150px]">
                                    <p className="text-sm text-center text-text md:text-md">
                                        {member.description}
                                    </p>
                                </div>
                                <div className="flex justify-center mt-4 space-x-4">
                                    <a
                                        href={member.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform transform hover:scale-110"
                                    >
                                        <i className="text-xl ri-instagram-line text-primary" />
                                    </a>
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform transform hover:scale-110"
                                    >
                                        <i className="text-xl ri-linkedin-box-line text-primary" />{" "}
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform transform hover:scale-110"
                                    >
                                        <i className="text-xl ri-twitter-line text-primary" />
                                    </a>
                                    <a
                                        href={member.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform transform hover:scale-110"
                                    >
                                        <i className="text-xl ri-github-line text-primary" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TeamSection;
