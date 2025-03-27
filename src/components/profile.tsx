export interface ProfileProps {
    image: string;
    username: string;
    joined: string;
}

interface Donation{
    amount: number;
    campaign: string;
    address: string;
    timestamp: string;
}

export interface ProfileInfoProps {
    badge: string[];
    donation: Donation[];
}

const profile : ProfileProps = {
    image: "/images/profile-picture.png",
    username: "Don Pollo",
    joined: "2024",
}

export default function Profile() {
    return(
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-75 h-75 rounded-full my-4 bg-secondary">
                <img src={profile.image} alt="profile" className="w-70 h-70 rounded-full" />
            </div>
            <h1 className="text-3xl font-bold">{profile.username}</h1>
            <p className="text-lg text-gray-400">Joined {profile.joined}</p>
        </div>
    );
}