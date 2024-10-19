import React from "react";
import Navbar from "@Container/Navbar"; 
import Footer from "@Container/Footer"; 

const PublicLayout = ({ children }) => {
    return (
        <div className="public-layout">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
