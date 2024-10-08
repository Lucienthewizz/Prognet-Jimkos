import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <h4>
                        <i className="ri-home-2-fill"></i>
                        <span className="logo-text">
                            <span className="logo-jimbaran">Jim</span>
                            <span className="logo-kos">Kos</span>
                        </span>
                    </h4>
                </div>

                <ul>
                    <li>
                        <a href="#">Beranda</a>
                    </li>
                    <li>
                        <a href="#">Tentang Kami</a>
                    </li>
                    <li>
                        <a href="#">Daftar Kos</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Kontak</a>
                    </li>
                </ul>

                <div className="nav-button">
                    <Link href="/login">
                        <button className="button_login">Masuk</button>
                    </Link>
                    <Link href="/register">
                        <button className="button_register">Daftar</button>
                    </Link>
                </div>

                <div className="menu-toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
