import React from "react";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div className="menu-toggle md:hidden" onClick={toggleMenu}>
            <i className={`ri-menu-${isOpen ? 'close' : 'line'} text-2xl cursor-pointer`} />
        </div>
    );
};

export default HamburgerMenu;
