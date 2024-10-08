import React from "react";
import KosItem from "./KosProps/KosItem";


const PopularKos = () => {
  return (
    <section className="popular-kos">
      <div className="container">
        <h2>Kos Populer di Jimbaran</h2>
        <div className="kos-list">
          <KosItem
            imageUrl="/images/Gambar-1.jpg"
            title="Kos Nyaman Dekat Kampus"
            price="Mulai dari Rp 1.000.000/bulan"
            rating="4.5"
            facilities={[
              { icon: "ri-wifi-line", name: "WiFi" },
              { icon: "ri-air-conditioner-line", name: "AC" },
              { icon: "ri-parking-box-line", name: "Parkir Motor" },
            ]}
          />
          <KosItem
            imageUrl="/images/Gambar-2.jpg"
            title="Kos Exclusive Jimbaran"
            price="Mulai dari Rp 1.500.000/bulan"
            rating="5.0"
            facilities={[
              { icon: "ri-wifi-line", name: "WiFi" },
              { icon: "ri-air-conditioner-line", name: "AC" },
              { icon: "ri-tv-line", name: "TV" },
              { icon: "ri-parking-box-line", name: "Parkir Mobil" },
            ]}
          />
          <KosItem
            imageUrl="/images/Gambar-3.jpg"
            title="Kos Murah Meriah"
            price="Mulai dari Rp 800.000/bulan"
            rating="4.0"
            facilities={[
              { icon: "ri-wifi-line", name: "WiFi" },
              { icon: "ri-fan-line", name: "Kipas Angin" },
              { icon: "ri-parking-box-line", name: "Parkir Motor" },
            ]}
          />
          <KosItem
            imageUrl="/images/Gambar-4.jpg"
            title="Kos Strategis Pusat Kota"
            price="Mulai dari Rp 1.200.000/bulan"
            rating="4.5"
            facilities={[
              { icon: "ri-wifi-line", name: "WiFi" },
              { icon: "ri-air-conditioner-line", name: "AC" },
              { icon: "ri-24-hours-line", name: "Akses 24 Jam" },
              { icon: "ri-parking-box-line", name: "Parkir Motor & Mobil" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularKos;
