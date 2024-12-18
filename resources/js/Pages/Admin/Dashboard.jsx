import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";

const Dashboard = () => {
    const stats = [
        { title: "Total Kos", value: "150", icon: "ri-home-4-line", color: "bg-blue-500" },
        { title: "Total Pengguna", value: "1,234", icon: "ri-user-line", color: "bg-green-500" },
        { title: "Booking Aktif", value: "45", icon: "ri-calendar-check-line", color: "bg-yellow-500" },
        { title: "Pendapatan", value: "Rp 15.5M", icon: "ri-money-dollar-circle-line", color: "bg-purple-500" },
    ];

    const recentActivities = [
        { user: "John Doe", action: "Melakukan booking kos", time: "5 menit yang lalu" },
        { user: "Jane Smith", action: "Mendaftar sebagai pengguna baru", time: "1 jam yang lalu" },
        // Add more activities
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm">{stat.title}</p>
                                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                                </div>
                                <div className={`${stat.color} p-3 rounded-full`}>
                                    <i className={`${stat.icon} text-white text-xl`}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Chart Section */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Statistik Booking</h2>
                        {/* Add your chart component here */}
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h2>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                            <i className="ri-user-line text-gray-500"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm">
                                            <span className="font-medium">{activity.user}</span>
                                            {" "}{activity.action}
                                        </p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;

