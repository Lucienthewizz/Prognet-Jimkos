import React from "react";

const SearchBar = ({ className }) => {
    return (
        <div className={`relative w-[150px] xl:w-[300px] lg:w-[150px] md:w-[400px] sm:w-[350px] ${className}`}>
            <i className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2 ri-search-line"></i>
            <input
                type="text"
                placeholder="Cari kos..."
                className="w-full h-10 px-10 text-base text-gray-800 bg-white border rounded-md border-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            />
        </div>
    );
};

export default SearchBar;
