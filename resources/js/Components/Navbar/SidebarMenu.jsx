import React from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@Base/Buttons/PrimaryButton";
import SecondaryButton from "@Base/Buttons/SecondaryButton";
import SearchBar from "@Base/SearchBar/SearchBar";
import Logo from "@Components/Navbar/Logo";
import HamburgerMenu from "@Components/Navbar/HamburgerMenu";

const SidebarMenu = ({ menuOpen, closeMenu, isActive, user }) => {
    const menuItemClass = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200";
    const menuItemHoverClass = "hover:bg-gray-50/80 hover:text-primary active:bg-white";
    
    return (
        <div
            className={`fixed left-0 top-0 h-full w-[75%] sm:w-[60%] md:w-[65%] bg-white shadow-xl p-6 lg:hidden transition-transform duration-300 ease-in-out transform ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
            } z-60 overflow-y-auto`}
        >
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <Logo />
                <HamburgerMenu toggleMenu={closeMenu} isOpen={menuOpen} />
            </div>

            {/* User Profile Section (if logged in) */}
            {user && (
                <div className="mb-8">
                    <div className="flex items-center space-x-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                            <img
                                src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=164BA1&color=fff`}
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold text-gray-800 text-lg">{user.name}</h3>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Bar */}
            <div className="mb-6">
                <SearchBar className="w-full" />
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

            {/* Menu Links */}
            <ul className="flex flex-col gap-2 text-base list-none mb-6">
                {[
                    { name: "Beranda", href: "/" },
                    { name: "Tentang Kami", href: "/about-us" },
                    { name: "Daftar Kos", href: "/daftar-kost" },
                    { name: "Kontak", href: "/kontak" },
                ].map((item, index) => (
                    <li key={index} className="relative">
                        <Link
                            className={`${menuItemClass} ${
                                isActive(item.href)
                                    ? "text-primary font-semibold bg-primary/5"
                                    : `text-gray-700 ${menuItemHoverClass}`
                            }`}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

            {/* Login/Register or User Actions */}
            <div className="space-y-4">
                {user ? (
                    <div className="space-y-2">
                        {user.role === 'admin' && (
                            <Link 
                                href="/admin/dashboard"
                                className={`${menuItemClass} text-gray-700 ${menuItemHoverClass}`}
                            >
                                <i className="text-xl ri-dashboard-3-line"></i>
                                <span>Dashboard Admin</span>
                            </Link>
                        )}
                        <Link
                            href="/profile"
                            className={`${menuItemClass} text-gray-700 ${menuItemHoverClass}`}
                        >
                            <i className="text-xl ri-user-line"></i>
                            <span>Profile Saya</span>
                        </Link>
                        <Link
                            href="/settings"
                            className={`${menuItemClass} text-gray-700 ${menuItemHoverClass}`}
                        >
                            <i className="text-xl ri-settings-4-line"></i>
                            <span>Pengaturan</span>
                        </Link>
                        <div className="h-px bg-gray-200 my-4" />
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className={`${menuItemClass} w-full text-red-600 hover:bg-red-50/80 hover:text-red-700 active:bg-white`}
                        >
                            <i className="text-xl ri-logout-box-line"></i>
                            <span>Keluar</span>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/login" className="w-full">
                            <button className="w-full px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 active:bg-primary/80 rounded-lg transition-all duration-200 flex justify-center items-center">
                                Masuk
                            </button>
                        </Link>
                        <Link href="/register" className="w-full">
                            <button className="w-full px-6 py-3 text-sm font-medium text-primary border-2 border-primary hover:bg-primary/5 active:bg-primary/10 rounded-lg transition-all duration-200 flex justify-center items-center">
                                Daftar
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SidebarMenu;
