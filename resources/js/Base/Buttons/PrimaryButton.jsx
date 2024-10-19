import React from "react";

const PrimaryButton = ({ children, ...props }) => {
    return (
        <button className="px-4 py-2 text-base transition duration-300 ease-in-out bg-white border rounded border-primary text-primary hover:bg-primary hover:text-background" {...props}>
            {children}
        </button>
    );
};

export default PrimaryButton;
