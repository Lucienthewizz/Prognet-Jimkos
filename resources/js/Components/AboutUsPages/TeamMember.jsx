import React from "react";

const TeamMember = ({ member, index }) => {
    const [firstName, lastName] = member.name.split(" ");

    return (
        <div
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
                    <span className="font-normal text-black">{lastName}</span>
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
                    {Object.entries(member.social).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform transform hover:scale-110"
                        >
                            <i className={`text-xl ri-${platform}-line text-primary`} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
