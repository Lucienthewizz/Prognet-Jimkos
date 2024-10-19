import React from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@Base/Buttons/PrimaryButton";
import SecondaryButton from "@Base/Buttons/SecondaryButton";
import SearchBar from "@Base/SearchBar/SearchBar";
import Logo from "@Components/Navbar/Logo";
import HamburgerMenu from "@Components/Navbar/HamburgerMenu";

const SidebarMenu = ({ menuOpen, closeMenu, isActive }) => {
    return (
        <div
            className={`fixed left-0 top-0 h-full w-[75%] sm:w-[60%] md:w-[65%] bg-background shadow-lg p-5 lg:hidden transition-transform duration-300 ease-in-out transform ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
            } z-60`}
        >
            {/* Hamburger Close Button */}
            <div className="flex items-center justify-between mb-4">
                {/* JimKos Logo */}
                <Logo />

                {/* Close button (Hamburger Menu) */}
                <HamburgerMenu toggleMenu={closeMenu} isOpen={menuOpen} />
            </div>

            {/* Search Bar */}
            <div className="mt-16 mb-4">
                <SearchBar className="w-full" />
            </div>

            {/* Divider between search bar and menu list */}
            <hr className="mb-4 border-lightgrey" />

            {/* Menu Links */}
            <ul className="flex flex-col gap-4 text-base list-none">
                {[
                    { name: "Beranda", href: "/" },
                    { name: "Tentang Kami", href: "/about-us" },
                    { name: "Daftar Kos", href: "#" },
                    { name: "Kontak", href: "#" },
                ].map((item, index) => (
                    <li key={index} className="relative py-3">
                        <Link
                            className={`transition duration-300 ease-in-out text-text hover:text-primary ${
                                isActive(item.href) ? "text-primary font-semibold" : ""
                            }`}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                        {isActive(item.href) && (
                            <div className="absolute left-0 right-0 h-1 rounded-t-xl top-10 bg-primary" />
                        )}
                    </li>
                ))}
            </ul>

            {/* Divider between menu list and login/register buttons */}
            <hr className="my-4 border-lightgrey" />

            {/* Login and Register Buttons */}
            <div className="flex flex-row justify-start gap-5 mt-10 ">
                <Link href="/login">
                    <PrimaryButton>Masuk</PrimaryButton>
                </Link>
                <Link href="/register">
                    <SecondaryButton>Daftar</SecondaryButton>
                </Link>
            </div>
        </div>
    );
};

export default SidebarMenu;
