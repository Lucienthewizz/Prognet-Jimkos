import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Apa Kata Mereka?</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"Sangat membantu dalam mencari kos yang sesuai dengan kebutuhan saya. Terima kasih JimKos!"</p>
            <h4>Andi Pratama</h4>
            <p>Mahasiswa</p>
          </div>
          <div className="testimonial-item">
            <p>"Proses pencarian dan booking kos sangat mudah. Recommended banget!"</p>
            <h4>Siti Nurhaliza</h4>
            <p>Karyawan Swasta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
