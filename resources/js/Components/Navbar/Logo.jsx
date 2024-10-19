import React from "react";

const Logo = () => {
    return (
        <div className="flex items-center justify-start ml-0 mr-10">
            <h4 className="flex items-center text-lg font-medium">
                {/* Replace the icon with an image */}
                <img
                    src={"/images/logo2.png"}
                    alt="JimKos Icon"
                    className="h-8 mr-5 w-15" // Adjust width and height for the icon size
                />
            </h4>
        </div>
    );
};

export default Logo;
