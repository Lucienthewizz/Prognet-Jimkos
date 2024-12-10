import PublicLayout from "@Layouts/PublicLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import AboutUsSection from "@Container/AboutPageSections/AboutUsSection";
import TeamSection from "@Container/AboutPageSections/TeamSection";
import TimelineSection from "@Container/AboutPageSections/TimelineSection";
import AboutUsDetails from "@Container/AboutPageSections/AboutUsDetail";

const AboutUsPage = () => {
    return (
        <PublicLayout>
            <Head title="Tentang Kami | Platform Pencarian Kos-Kosan Terbaik di Jimbaran" />
            <AboutUsSection />
            <AboutUsDetails />
            <TimelineSection />
            <TeamSection />
        </PublicLayout>
    );
};

export default AboutUsPage;
