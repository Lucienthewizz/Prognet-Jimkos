import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>Tentang Kami</h2>
        <p>JimKos adalah platform pencarian kos yang berfokus pada kenyamanan dan keamanan pengguna. Kami berkomitmen untuk menyediakan berbagai pilihan kos yang sesuai dengan kebutuhan Anda.</p>
        <div className="about-us-content">
          <div className="about-us-item">
            <i className="ri-user-line"></i>
            <h3>Tim Kami</h3>
            <p>Kami adalah tim yang berdedikasi untuk memberikan pengalaman terbaik dalam mencari kos.</p>
          </div>
          <div className="about-us-item">
            <i className="ri-building-line"></i>
            <h3>Visi dan Misi</h3>
            <p>Menjadi platform pencarian kos terpercaya dan terbaik di Jimbaran.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
