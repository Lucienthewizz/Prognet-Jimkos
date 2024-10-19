import React from "react";

const VerticalDivider = () => {
  return <div className="hidden w-px mx-4 h-36 opacity-10 bg-slate-400 lg:block" />; // Vertical line with margin
};

const Footer = () => {
  return (
    <footer className="px-5 py-8 pt-28 bg-background text-text md:px-5">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-4 lg:flex-row lg:gap-0 justify-between items-start mb-6">
        {/* Logo Section */}
        <div className="flex flex-col items-start justify-start w-full mb-6 footer-logo lg:w-1/4">
          <img
            src="/images/logo2.png"
            alt="JimKos Logo"
            className="w-20 h-auto mb-2"
          />
          <div>
            <span className="block text-2xl font-semibold text-primary">
              <span className="font-bold">Jim</span>Kos
            </span>
            <p className="w-full mt-1 text-sm leading-relaxed text-light-text">
              Temukan kos terbaik di Jimbaran, Bali. Kami menyediakan berbagai pilihan kos yang nyaman dan terjangkau.
            </p>
          </div>
        </div>

        <VerticalDivider /> {/* Vertical divider after Logo Section */}

        {/* Quick Links Section */}
        <div className="flex-1 w-full mb-6 footer-links lg:w-1/4">
          <h4 className="mb-2 text-xl font-semibold text-primary">
            Tautan Cepat
          </h4>
          <ul className="p-0 space-y-1 list-none">
            {["Beranda", "Tentang Kami", "Daftar Kos", "FAQ", "Kontak"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-base no-underline transition duration-300 text-text hover:text-secondary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <VerticalDivider /> {/* Vertical divider after Quick Links Section */}

        {/* Contact Us Section */}
        <div className="flex-1 w-full mb-6 footer-contact lg:w-1/4">
          <h4 className="mb-2 text-xl font-semibold text-primary">
            Hubungi Kami
          </h4>
          <p className="flex items-center text-base text-text">
            <i className="mr-2 ri-mail-fill"></i>
            <a href="mailto:info@jimkos.com" className="hover:text-secondary">
              info@jimkos.com
            </a>
          </p>
          <p className="flex items-center text-base text-text">
            <i className="mr-2 ri-phone-fill"></i>
            <a href="tel:+621234567890" className="hover:text-secondary">
              +62 123 4567 890
            </a>
          </p>
        </div>

        <VerticalDivider /> {/* Vertical divider after Contact Us Section */}

        {/* Additional Information Section */}
        <div className="flex-1 w-full mb-6 footer-info lg:w-1/4">
          <h4 className="mb-2 text-xl font-semibold text-primary">
            Informasi
          </h4>
          <p className="text-base leading-relaxed text-text">
            Kami menyediakan berbagai pilihan kos untuk mahasiswa dan profesional. Cek daftar kami sekarang!
          </p>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="flex justify-center mt-16 mx-auto max-w-[1300px]">
        <a href="#" className="mr-4 text-2xl transition duration-300 text-primary hover:text-secondary">
          <i className="ri-facebook-fill"></i>
        </a>
        <a href="#" className="mr-4 text-2xl transition duration-300 text-primary hover:text-secondary">
          <i className="ri-instagram-line"></i>
        </a>
        <a href="#" className="text-2xl transition duration-300 text-primary hover:text-secondary">
          <i className="ri-twitter-fill"></i>
        </a>
      </div>

      {/* Horizontal Line and Copyright Section */}
      <hr className="w-full my-4 border-light" />
      <div className="pt-4 mx-auto mt-6 text-center">
        <p className="text-xs leading-relaxed text-light-text">&copy; 2023 JimKos. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
