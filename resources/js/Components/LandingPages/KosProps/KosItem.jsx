import React from "react";
import SecondaryButton from "@Base/Buttons/SecondaryButton";

const KosItem = ({ imageUrl, title, price, facilities, link }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md h-[450px] w-full mx-auto">
            <img src={imageUrl} alt={title} className="object-cover w-full h-44 rounded-t-lg" />
            <div className="flex flex-col flex-grow p-3">
                <h3 className="mb-3 text-lg font-medium text-text">{title}</h3>
                <ul className="p-0 mb-4 list-none">
                    {facilities.map((facility, index) => (
                        <li key={index} className="inline-block mt-2 mr-2 text-sm text-light-text-color">
                            <i className={`${facility.icon} text-primary mr-1`}></i>
                            {facility.name}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 text-sm text-light-text-color">{price}</p>
            </div>
            <div className="flex justify-end p-4">
                <SecondaryButton href={link}>
                    Lihat Detail
                </SecondaryButton>
            </div>
        </div>
    );
};

export default KosItem;