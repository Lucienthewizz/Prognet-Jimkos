import { Link } from '@inertiajs/react';

const KostCard = ({ kost }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
            <div className="flex flex-col h-full relative pb-[60px]">
                <div className="w-full h-[200px]">
                    <img
                        src={kost.image}
                        alt={kost.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col p-4 flex-grow">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">{kost.name}</h3>
                        <p className="text-primary font-medium mb-2">
                            Rp {kost.price.toLocaleString('id-ID')}/bulan
                        </p>
                        <div className="space-y-1 mb-3">
                            <p className="text-gray-600 flex items-center gap-2 text-sm">
                                <i className="ri-map-pin-line text-primary"></i>
                                {kost.location}
                            </p>
                            <p className="text-gray-500 flex items-center gap-2 text-sm">
                                <i className="ri-route-line text-primary"></i>
                                {kost.distance}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {kost.facilities.map((facility) => (
                                <span
                                    key={facility.id}
                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1"
                                >
                                    <i className={`${getFacilityIcon(facility.name)} text-primary`}></i>
                                    {facility.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                    <Link 
                        href={route('kost.show', kost.id)}
                        className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-all duration-200 text-sm font-medium text-center inline-flex items-center justify-center gap-2"
                    >
                        Lihat Detail
                        <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Helper function untuk mendapatkan icon fasilitas
const getFacilityIcon = (facilityName) => {
    const iconMap = {
        'WiFi': 'ri-wifi-line',
        'AC': 'ri-air-conditioner-line',
        'TV': 'ri-tv-line',
        'Parkir Motor': 'ri-parking-box-line',
        'Parkir Mobil': 'ri-parking-box-line',
        'Kipas Angin': 'ri-fan-line',
        'Akses 24 Jam': 'ri-24-hours-line',
    };
    return iconMap[facilityName] || 'ri-checkbox-circle-line';
};

export default KostCard; 