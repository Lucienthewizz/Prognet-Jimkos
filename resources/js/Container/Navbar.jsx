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
    const { user } = usePage().props; // Assuming `user` is available in props

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full h-20 bg-white border-b border-lightgrey">
            <div className={`flex items-center justify-between w-full h-full max-w-[1350px] mx-auto px-5`}>
                <div className="flex items-center justify-between gap-5">
                    <HamburgerMenu toggleMenu={openMenu} isOpen={menuOpen} className="lg:hidden" />
                    <Logo />
                </div>
                <MenuList isActive={(path) => url === path} />
                <div className="flex items-center space-x-4">
                    <SearchBar className="hidden lgCustom:block" />
                    <div className="hidden w-px h-10 bg-secondary lgCustom:block" />
                    {/* Conditional Rendering for Login/Register or Logout */}
                    <div className="hidden space-x-4 nav-button lgCustom:flex">
                        {user ? (
                            <form action="/logout" method="POST" className="inline">
                                @csrf
                                <PrimaryButton type="submit">Logout</PrimaryButton>
                            </form>
                        ) : (
                            <>
                                <Link href="/login">
                                    <PrimaryButton>Masuk</PrimaryButton>
                                </Link>
                                <Link href="/register">
                                    <SecondaryButton>Daftar</SecondaryButton>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <SidebarMenu menuOpen={menuOpen} closeMenu={closeMenu} isActive={(path) => url === path} />
        </nav>
    );
};


export default Navbar;
