import React from "react";
import { Link } from "@inertiajs/react";

const MenuList = ({ isActive }) => {
    return (
        <ul className="hidden gap-8 pl-5 text-base list-none lgCustom:flex lg:flex-grow">
            {[
                { name: "Beranda", href: "/" },
                { name: "Tentang Kami", href: "/about-us" },
                { name: "Daftar Kos", href: "/daftar-kost" },
                { name: "Kontak", href: "/kontak" },
            ].map((item, index) => (
                <li key={index} className="relative py-1">
                    <Link
                        className={`transition duration-300 ease-in-out text-text hover:text-primary ${
                            isActive(item.href) ? "text-primary font-medium" : ""
                        }`}
                        href={item.href}
                        preserveScroll={false}
                    >
                        {item.name}
                    </Link>
                    {isActive(item.href) && (
                        <div className="absolute left-0 right-0 top-12 mt-0.5 rounded-t-lg h-1.5 bg-primary" />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MenuList;
