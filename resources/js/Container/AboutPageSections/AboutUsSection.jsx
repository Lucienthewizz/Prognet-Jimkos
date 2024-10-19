import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="py-16 mb-12">
            {/* Section 1: About Us */}
            <div className="max-w-6xl p-8 mx-auto mb-12 rounded-lg shadow-md bg-background">
                {/* Section Heading */}
                <h2 className="mb-6 text-4xl font-bold text-center text-primary">Tentang Kami</h2>

                {/* Section Description */}
                <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-text">
                    JimKos adalah platform pencarian kos yang berfokus pada kenyamanan dan keamanan pengguna. 
                    Kami berkomitmen untuk menyediakan berbagai pilihan kos yang sesuai dengan kebutuhan Anda.
                </p>

                {/* Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Siapa Kami */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-primary">Siapa Kami</h3>
                        <p className="text-text">
                            Kami adalah tim profesional yang berdedikasi untuk membantu Anda menemukan tempat tinggal yang ideal di Jimbaran. 
                            Dengan pengalaman di industri properti dan teknologi, kami memahami betul kebutuhan pengguna dan berusaha memenuhi harapan Anda.
                        </p>
                    </div>

                    {/* Website Ini untuk Apa */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-primary">Website Ini untuk Apa?</h3>
                        <p className="text-text">
                            Website ini dirancang untuk memudahkan pencari kos dalam menemukan informasi yang relevan tentang kos-kosan di Jimbaran. 
                            Kami menyediakan berbagai fitur untuk meningkatkan pengalaman pencarian Anda, termasuk filter pencarian dan ulasan pengguna.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 2: Visi & Misi */}
            <div className="max-w-6xl p-8 mx-auto rounded-lg shadow-md bg-background">
                {/* Section Heading */}
                <h2 className="mb-6 text-4xl font-bold text-center text-primary">Visi & Misi</h2>

                {/* Visi & Misi Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Visi Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-primary">Visi Kami</h3>
                        <p className="text-text">
                            Menjadi platform terkemuka dalam pencarian kos yang mengutamakan kenyamanan dan keamanan bagi pengguna di Jimbaran.
                        </p>
                    </div>

                    {/* Misi Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-primary">Misi Kami</h3>
                        <ul className="space-y-2 list-disc list-inside text-text">
                            <li>Menyediakan informasi yang akurat dan lengkap tentang kos-kosan.</li>
                            <li>Meningkatkan pengalaman pengguna melalui fitur-fitur yang inovatif.</li>
                            <li>Membangun komunitas yang saling mendukung dan berbagi informasi tentang tempat tinggal di Jimbaran.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
