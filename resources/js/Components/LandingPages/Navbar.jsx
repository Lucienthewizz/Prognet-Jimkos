import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 w-full h-20 shadow-lg bg-background">
            <div className="flex items-center justify-between w-full h-full max-w-[1350px] mx-auto px-5 lg:-0">
                <div className="flex items-center logo">
                    <h4 className="flex items-center text-lg font-medium">
                        <i className="mr-2 text-2xl ri-home-2-fill text-primary"></i>
                        <span className="flex">
                            <span className="font-semibold text-primary">Jim</span>
                            <span className="font-medium text-primary">Kos</span>
                        </span>
                    </h4>
                </div>

                {/* Hide the list on custom 1000px and below */}
                <ul className={`hidden list-none gap-8 lgCustom:flex`}>
                    <li>
                        <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Beranda</Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Tentang Kami</Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Daftar Kos</Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">FAQ</Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Kontak</Link>
                    </li>
                </ul>

                <div className="hidden space-x-4 nav-button lgCustom:flex">
                    <Link href="/login">
                        <button className="px-4 py-2 transition duration-300 ease-in-out border rounded bg-background border-primary text-primary hover:bg-primary hover:text-background">
                            Masuk
                        </button>
                    </Link>
                    <Link href="/register">
                        <button className="px-4 py-2 transition duration-300 ease-in-out rounded bg-primary text-background hover:bg-secondary">
                            Daftar
                        </button>
                    </Link>
                </div>

                {/* Hamburger button visible on custom 1000px and below */}
                <div className="flex items-center lgCustom:hidden" onClick={toggleMenu}>
                    <i className={`ri-menu-line text-3xl cursor-pointer text-primary`}></i>
                </div>
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
                <div className="absolute left-0 right-0 mx-4 shadow-lg top-20 bg-background lgCustom:hidden">
                    <ul className="flex flex-col items-center gap-4 list-none">
                        <li>
                            <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Beranda</Link>
                        </li>
                        <li>
                            <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Tentang Kami</Link>
                        </li>
                        <li>
                            <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Daftar Kos</Link>
                        </li>
                        <li>
                            <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">FAQ</Link>
                        </li>
                        <li>
                            <Link className="transition duration-300 ease-in-out text-text hover:text-primary" href="#">Kontak</Link>
                        </li>
                    </ul>

                    <div className="flex justify-center mt-4 space-x-4 nav-button">
                        <Link href="/login">
                            <button className="px-4 py-2 transition duration-300 ease-in-out border rounded bg-background border-primary text-primary hover:bg-primary hover:text-background">
                                Masuk
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="px-4 py-2 transition duration-300 ease-in-out rounded bg-primary text-background hover:bg-secondary">
                                Daftar
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
