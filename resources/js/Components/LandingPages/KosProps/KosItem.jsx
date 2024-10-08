import React from "react";

const KosItem = ({ imageUrl, title, price, rating, facilities }) => {
  return (
    <div className="kos-item">
      <img src={imageUrl} alt={title} />
      <div className="rating">
        <i className="ri-star-fill"></i> {rating}
      </div>
      <h3>{title}</h3>
      <p>{price}</p>
      <ul className="fasilitas">
        {facilities.map((facility, index) => (
          <li key={index}>
            <i className={facility.icon}></i> {facility.name}
          </li>
        ))}
      </ul>
      <a href="#" className="btn-detail">Lihat Detail</a>
    </div>
  );
};

export default KosItem;
