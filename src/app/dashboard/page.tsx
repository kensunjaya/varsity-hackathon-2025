"use client"

import Navbar from "@/components/ui/navbar"
import UserDashboard from "@/pages/UserDashboard"

export default function DashboardPage() {
    return(
        <>
            <Navbar pageName="dashboard" />
            <UserDashboard />
        </>
    );
}