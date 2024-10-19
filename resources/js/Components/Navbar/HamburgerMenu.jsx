import React from "react";

const HamburgerMenu = ({ toggleMenu, isOpen }) => {
    return (
        <div className="flex items-center p-2 transition-colors duration-100 rounded-md lg:hidden hover:bg-slate-200 text-primary">
            <i
                className={`flex items-center justify-center text-2xl w-8 cursor-pointer transition-colors duration-200 ${
                    isOpen ? "ri-close-line" : "ri-menu-line"
                }`}
                onClick={toggleMenu} 
            ></i>
        </div>
    );
};

export default HamburgerMenu;
