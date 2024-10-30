import React, { useState } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import PrimaryButton from "../Base/Buttons/PrimaryButton";
import SecondaryButton from "../Base/Buttons/SecondaryButton";
import SearchBar from "../Base/SearchBar/SearchBar";
import Logo from "@Components/Navbar/Logo";
import MenuList from "@Components/Navbar/MenuList";
import SidebarMenu from "@Components/Navbar/SidebarMenu";
import HamburgerMenu from "@Components/Navbar/HamburgerMenu";
import LoginModal from "@Container/Modals/LoginModal";
import RegisterModal from "@Container/Modals/RegisterModal";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const { url } = usePage();
    const { user } = usePage().props; // Assuming `user` is available in props
    const { post } = useForm();

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        post("/logout");
    };

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    const openRegisterModal = () => {
        setShowRegisterModal(true);
    };

    const closeRegisterModal = () => {
        setShowRegisterModal(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full h-20 bg-white border-b border-lightgrey">
            <div
                className={`flex items-center justify-between w-full h-full max-w-[1350px] mx-auto px-5`}
            >
                <div className="flex items-center justify-between gap-5">
                    <HamburgerMenu
                        toggleMenu={openMenu}
                        isOpen={menuOpen}
                        className="lg:hidden"
                    />
                    <Logo />
                </div>
                <MenuList isActive={(path) => url === path} />
                <div className="flex items-center space-x-4">
                    <SearchBar className="hidden lgCustom:block" />
                    <div className="hidden w-px h-10 bg-secondary lgCustom:block" />
                    {/* Conditional Rendering for Login/Register or Logout */}
                    <div className="hidden space-x-4 nav-button lgCustom:flex">
                        {user ? (
                            <>
                                <UserNavbar />
                            </>
                        ) : (
                            <>
                                <PrimaryButton onClick={openLoginModal}>
                                    Masuk
                                </PrimaryButton>
                                <SecondaryButton onClick={openRegisterModal}>
                                    Daftar
                                </SecondaryButton>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <SidebarMenu
                menuOpen={menuOpen}
                closeMenu={closeMenu}
                isActive={(path) => url === path}
            />
            {showLoginModal && <LoginModal closeModal={closeLoginModal} />}
            {showRegisterModal && (
                <RegisterModal closeModal={closeRegisterModal} />
            )}
        </nav>
    );
};

export default Navbar;

const UserNavbar = () => {
    const { user } = usePage().props;
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post("/logout");
    };

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    <img
                        alt="User Avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu-sm dropdown-content bg-white rounded-box z-[1] mt-4 w-52 p-3 shadow space-y-1"
            >
                <li>
                    <a className="flex items-center gap-2 cursor-pointer">
                        <i className="text-lg ri-user-line"></i>
                        Profile
                    </a>
                </li>
                <li>
                    <a className="flex items-center gap-2 cursor-pointer">
                        <i className="text-lg ri-settings-3-line"></i>
                        Settings
                    </a>
                </li>
                <li className="border-t border-lightgrey">
                    <a
                        onClick={handleLogout}
                        className="flex items-center gap-2 mt-2 text-red-500 cursor-pointer hover:text-red-900"
                    >
                        <i className="text-lg ri-logout-box-line "></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};
