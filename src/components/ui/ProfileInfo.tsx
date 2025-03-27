import Profile, { ProfileInfoProps } from "../profile";

export default function ProfileInfo({profileInfo} : {profileInfo: ProfileInfoProps}) {
    return(
        <div className="relative flex w-3/4 rounded-2xl bg-white p-16">
            <div className="flex flex-col space-y-4">
                <h1 className="text-3xl font-bold">BADGE</h1>
                <div className="flex flex-row items-center space-x-4">
                    {profileInfo.badge.map((badge, index) => (
                        <img key={index} src={badge} alt="badge" className="w-[158px] h-[158px]" />
                    ))}
                </div>
                <h1 className="text-3xl font-bold">MY DONATIONS</h1>
                <div className="flex font-redhat text-lg justify-between space-x-6">
                    <div className="flex flex-col">
                            {profileInfo.donation.map((donation, index) => (
                            <div key={index}>
                                <div>{donation.amount} SOL</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                            {profileInfo.donation.map((donation, index) => (
                                <div key={index}>
                            <div>{donation.campaign}</div>
                        </div>
                    ))}
                    </div>
                    <div className="flex flex-col">
                        {profileInfo.donation.map((donation, index) => (
                                <div key={index}>
                                <div>{donation.address}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {profileInfo.donation.map((donation, index) => (
                                <div key={index}>
                                <div>{donation.timestamp}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}