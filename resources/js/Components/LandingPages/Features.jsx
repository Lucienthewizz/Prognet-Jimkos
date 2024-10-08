import React from "react";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Mengapa Memilih JimKos?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <i className="ri-shield-check-line"></i>
            <h3>Aman dan Terpercaya</h3>
            <p>Semua kos telah diverifikasi dan dijamin keamanannya.</p>
          </div>
          <div className="feature-item">
            <i className="ri-money-dollar-circle-line"></i>
            <h3>Harga Terjangkau</h3>
            <p>Berbagai pilihan harga yang sesuai dengan budget Anda.</p>
          </div>
          <div className="feature-item">
            <i className="ri-map-pin-line"></i>
            <h3>Lokasi Strategis</h3>
            <p>Dekat dengan kampus, pusat perbelanjaan, dan fasilitas umum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
