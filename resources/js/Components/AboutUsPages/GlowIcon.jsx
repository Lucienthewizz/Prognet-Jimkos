// resources/js/Components/GlowIcon.jsx
import React from 'react';

const GlowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="my-2 text-primary drop-shadow-lg"
    >
        <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2l4-4" />
        </g>
    </svg>
);

export default GlowIcon;
