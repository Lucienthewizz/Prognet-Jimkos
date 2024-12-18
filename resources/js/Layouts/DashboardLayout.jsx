import React from "react";
import Sidebar from "@/Container/Sidebar";
import { usePage } from "@inertiajs/react";

const DashboardLayout = ({ children }) => {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar user={auth.user} />
            <div className="pl-64">
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
