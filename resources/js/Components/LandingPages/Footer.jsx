import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <h3>
            <i className="ri-home-2-fill"></i>
            <span className="logo-text">
              <span className="logo-jimbaran">Jim</span>
              <span className="logo-kos">Kos</span>
            </span>
          </h3>
          <p>Temukan kos impianmu di Jimbaran</p>
        </div>

        <div className="footer-section footer-links">
          <h4>Tautan Cepat</h4>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Daftar Kos</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Kontak</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Hubungi Kami</h4>
          <p>Email: info@jimkos.com</p>
          <p>Telepon: +62 123 4567 890</p>
          <div className="social-media">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 JimKos. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
