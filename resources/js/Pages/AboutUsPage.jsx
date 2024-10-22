// resources/js/Pages/AboutUs.jsx

import PublicLayout from '@Layouts/PublicLayout';
import React from 'react';
import { Head } from "@inertiajs/react";
import AboutUsSection from '@Container/AboutPageSections/AboutUsSection';
import TeamSection from '@Container/AboutPageSections/TeamSection';
import TimelineSection from '@Container/AboutPageSections/TimelineSection';
import AboutUsDetails from '@Container/AboutPageSections/AboutUsDetail';


const AboutUsPage = () => {
    return (
        <PublicLayout>
            <div className="relative public-layout"> {/* Set relative positioning */}
                <Head title="Tentang Kami | Platform Pencarian Kos-Kosan Terbaik di Jimbaran" />
                
                {/* About Us Section */}
                <AboutUsSection />

                {/* About Us Detail Section */}
                <AboutUsDetails />
                
                {/* Timeline Section */}
                <TimelineSection />
                
                {/* Team Section */}
                <TeamSection />
            </div>
        </PublicLayout>
    );
};

export default AboutUsPage;
