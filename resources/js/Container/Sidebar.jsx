import React from "react";
import { Link } from "@inertiajs/react";

const Sidebar = ({ user }) => {
    const menuItems = [
        { icon: "ri-dashboard-3-line", label: "Dashboard", route: "/admin/dashboard" },
        { icon: "ri-building-2-line", label: "Kelola Kos", route: "/admin/kos" },
        { icon: "ri-team-line", label: "Kelola Pengguna", route: "/admin/users" },
        { icon: "ri-exchange-funds-line", label: "Transaksi", route: "/admin/transactions" },
        { icon: "ri-settings-4-line", label: "Pengaturan", route: "/admin/settings" },
    ];

    return (
        <div className="w-64 h-screen bg-white shadow-md fixed left-0 top-0">
            {/* User Profile Section */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={user?.avatar || "https://ui-avatars.com/api/?name=" + user?.name}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">{user?.name}</h3>
                        <p className="text-sm text-gray-500">{user?.role || 'Admin'}</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="p-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.route}
                                className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors
                                    ${window.location.pathname === item.route 
                                        ? 'bg-primary text-white' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <i className={`${item.icon} text-xl`}></i>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Section */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
                <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className="flex items-center space-x-3 px-4 py-2.5 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                    <i className="ri-logout-box-line text-xl"></i>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar; 