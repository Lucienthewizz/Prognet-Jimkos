import React, { useState } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import PrimaryButton from "../Base/Buttons/PrimaryButton";
import SecondaryButton from "../Base/Buttons/SecondaryButton";
import SearchBar from "../Base/SearchBar/SearchBar";
import Logo from "@Components/Navbar/Logo";
import MenuList from "@Components/Navbar/MenuList";
import SidebarMenu from "@Components/Navbar/SidebarMenu";
import HamburgerMenu from "@Components/Navbar/HamburgerMenu";
import NotificationBell from "@Components/Navbar/NotificationBell";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage();
    const { user } = usePage().props.auth;
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

    const UserNavbar = ({ user }) => (
        <div className="flex items-center space-x-4">
            <NotificationBell />
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="User Avatar" src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=164BA1&color=fff`} />
                    </div>
                </div>
                <ul tabIndex={0} className="menu-sm dropdown-content bg-white rounded-xl z-[1] mt-4 w-72 shadow-xl divide-y divide-gray-100">
                    <li className="px-6 py-4 rounded-t-xl bg-gray-50/80">
                        <div className="flex flex-col space-y-2">
                            <div className="text-base font-semibold text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                    </li>
                    <div className="py-3">
                        {user.role === 'admin' && (
                            <li className="px-2">
                                <Link 
                                    href="/admin" 
                                    className="flex gap-3 items-center px-4 py-3 text-sm text-gray-700 rounded-lg transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                                >
                                    <i className="text-lg ri-dashboard-3-line"></i>
                                    Admin Dashboard
                                </Link>
                            </li>
                        )}
                        <li className="px-2 mt-1">
                            <Link 
                                href="/profile" 
                                className="flex gap-3 items-center px-4 py-3 text-sm text-gray-700 rounded-lg transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                            >
                                <i className="text-lg ri-user-line"></i>
                                Profile
                            </Link>
                        </li>
                        <li className="px-2 mt-1">
                            <Link 
                                href="/settings" 
                                className="flex gap-3 items-center px-4 py-3 text-sm text-gray-700 rounded-lg transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                            >
                                <i className="text-lg ri-settings-4-line"></i>
                                Settings
                            </Link>
                        </li>
                    </div>
                    <div className="py-3">
                        <li className="px-2">
                            <button
                                onClick={handleLogout}
                                className="flex gap-3 items-center px-4 py-3 w-full text-sm text-red-600 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-700 hover:translate-x-1"
                            >
                                <i className="text-lg ri-logout-box-line"></i>
                                Logout
                            </button>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );

    return (
        <nav className="sticky top-0 z-50 w-full h-20 bg-white border-b border-lightgrey">
            <div className="flex items-center justify-between w-full h-full max-w-[1350px] mx-auto px-5">
                <div className="flex gap-5 justify-between items-center">
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
                    <div className="hidden space-x-4 nav-button lgCustom:flex">
                        {user ? (
                            <UserNavbar user={user} />
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
            {menuOpen && (
                <SidebarMenu
                    menuOpen={menuOpen}
                    closeMenu={closeMenu}
                    isActive={(path) => url === path}
                    user={user}
                />
            )}
        </nav>
    );
};

export default Navbar;
