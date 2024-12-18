import React, { useState } from 'react';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Pembayaran Berhasil",
            message: "Pembayaran kos untuk bulan ini telah diterima",
            time: "5 menit yang lalu",
            isRead: false
        },
        {
            id: 2,
            title: "Pengumuman Pemeliharaan",
            message: "Akan ada pemeliharaan fasilitas pada tanggal...",
            time: "1 jam yang lalu",
            isRead: false
        }
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const unreadCount = notifications.filter(n => !n.isRead).length;

    const markAsRead = (id) => {
        setNotifications(notifications.map(notif =>
            notif.id === id ? { ...notif, isRead: true } : notif
        ));
    };

    return (
        <div className="dropdown dropdown-end">
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <i className="text-xl ri-notification-3-line"></i>
                    {unreadCount > 0 && (
                        <span className="badge badge-sm badge-primary indicator-item">
                            {unreadCount}
                        </span>
                    )}
                </div>
            </button>
            
            <ul className="mt-4 w-96 bg-white rounded-xl divide-y divide-gray-100 shadow-lg dropdown-content menu p-0">
                <div className="px-6 py-4 rounded-t-xl bg-gray-50/80">
                    <h3 className="text-lg font-semibold text-gray-900">Notifikasi</h3>
                </div>
                {notifications.length > 0 ? (
                    notifications.map((notif) => (
                        <li key={notif.id} className={`${!notif.isRead ? 'bg-blue-50/60' : ''}`}>
                            <button 
                                onClick={() => markAsRead(notif.id)}
                                className="w-full px-6 py-4 hover:bg-gray-50/80 active:bg-white focus:bg-white transition-colors"
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="font-medium text-sm text-gray-900">
                                        {notif.title}
                                    </span>
                                    <span className="text-sm text-gray-600">{notif.message}</span>
                                    <span className="text-xs text-gray-400 mt-1">{notif.time}</span>
                                </div>
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="py-8 text-center text-gray-500">
                        Tidak ada notifikasi
                    </li>
                )}
            </ul>
        </div>
    );
};

export default NotificationBell; 