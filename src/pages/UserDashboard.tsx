"use client"

import { ProfileInfoProps } from "@/components/profile";
import ProfileCard from "@/components/ui/ProfileCard"
import ProfileInfo from "@/components/ui/ProfileInfo";

const profileInfo : ProfileInfoProps = {
    badge : ['images/badge-1.png', 'images/badge-2.png'],
    donation : [
        {
            amount: 1,
            campaign: 'Clean Drinking Water for Remote Villages',
            address: '17YPQPLjoAH6at9KZU6yFTL6xEB6gyrM8V',
            timestamp: '2024-17-12 at 13:12:10'
        },
        {
            amount: 1,
            campaign: 'Tornado Recovery & Rebuilding Houses',
            address: '17YPQPLjoAH6at9KZU6yFTL6xEB6gyrM8V',
            timestamp: '2024-17-12 at 13:12:10'
        },
    ]
}

export default function UserDashboard() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-sixth">
            <div className="absolute flex flex-row w-4/5 min-h-3/4 p-4 space-x-6">
                <ProfileCard />
                <ProfileInfo profileInfo={profileInfo} />
            </div>
        </div>
    );
}