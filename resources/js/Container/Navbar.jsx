import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import PrimaryButton from "../Base/Buttons/PrimaryButton";
import SecondaryButton from "../Base/Buttons/SecondaryButton";
import SearchBar from "../Base/SearchBar/SearchBar";
import Logo from "@Components/Navbar/Logo";
import MenuList from "@Components/Navbar/MenuList";
import SidebarMenu from "@Components/Navbar/SidebarMenu";
import HamburgerMenu from "@Components/Navbar/HamburgerMenu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage();

    const openMenu = () => {
        setMenuOpen(true); // Open sidebar
    };

    const closeMenu = () => {
        setMenuOpen(false); // Close sidebar
    };

    return (
        <nav className="sticky top-0 z-50 w-full h-20 bg-white border-b border-lightgrey">
            <div className={`flex items-center justify-between w-full h-full max-w-[1350px] mx-auto px-5`}>
                {/* Div for Hamburger Menu and Logo */}
                <div className="flex items-center justify-between gap-5">
                    <HamburgerMenu toggleMenu={openMenu} isOpen={menuOpen} className="lg:hidden" />
                    <Logo />
                </div>

                {/* Menu List */}
                <MenuList isActive={(path) => url === path} />

                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <SearchBar className="hidden lgCustom:block" />

                    {/* Divider */}
                    <div className="hidden w-px h-10 bg-secondary lgCustom:block" />

                    {/* Login and Register Buttons */}
                    <div className="hidden space-x-4 nav-button lgCustom:flex">
                        <Link href="/login">
                            <PrimaryButton>Masuk</PrimaryButton>
                        </Link>
                        <Link href="/register">
                            <SecondaryButton>Daftar</SecondaryButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sidebar Menu */}
            <SidebarMenu menuOpen={menuOpen} closeMenu={closeMenu} isActive={(path) => url === path} />
        </nav>
    );
};

export default Navbar;
