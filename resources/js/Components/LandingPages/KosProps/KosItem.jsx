import React from "react";
import SecondaryButton from "@Base/Buttons/SecondaryButton"; // Import the SecondaryButton

const KosItem = ({ imageUrl, title, price, facilities }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md h-[450px] w-full mx-auto"> {/* Set a max width */}
            <img src={imageUrl} alt={title} className="object-cover w-full rounded-t-lg h-44" />
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
            <div className="flex justify-end p-4"> {/* Justify the button to the end */}
                <SecondaryButton href="#">
                    Lihat Detail
                </SecondaryButton>
            </div>
        </div>
    );
};

export default KosItem;
