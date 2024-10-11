import React from "react";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex-1 p-6 text-center bg-white rounded-lg shadow-lg">
      <i className={`${icon} text-4xl text-primary mb-4`}></i>
      <h3 className="mb-2 text-lg font-semibold text-text">{title}</h3>
      <p className="text-sm text-light-text">{description}</p>
    </div>
  );
};

export default FeatureItem;
