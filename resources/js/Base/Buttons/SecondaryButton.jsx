import React from "react";

const SecondaryButton = ({ children, ...props }) => {
    return (
        <button className="px-4 py-2 text-base transition duration-300 ease-in-out border rounded bg-primary border-primary text-background hover:bg-secondary hover:border-secondary" {...props}>
            {children}
        </button>
    );
};

export default SecondaryButton;
