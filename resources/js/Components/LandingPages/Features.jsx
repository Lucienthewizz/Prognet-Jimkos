import React from "react";
import FeatureItem from "./FeaturesData/FeatureItem";

const Features = () => {
  return (
    <section className="px-5 py-20 bg-background">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="mb-8 text-2xl font-semibold text-center text-text">
          Mengapa Memilih JimKos?
        </h2>
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <FeatureItem
            icon="ri-shield-check-line"
            title="Aman dan Terpercaya"
            description="Semua kos telah diverifikasi dan dijamin keamanannya."
          />
          <FeatureItem
            icon="ri-money-dollar-circle-line"
            title="Harga Terjangkau"
            description="Berbagai pilihan harga yang sesuai dengan budget Anda."
          />
          <FeatureItem
            icon="ri-map-pin-line"
            title="Lokasi Strategis"
            description="Dekat dengan kampus, pusat perbelanjaan, dan fasilitas umum."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
