import Image from "next/image";
import Link from "next/link";

export default function CampaignListCard(
    {
        name,
        category,
        raised,
        goal
    } : {
        name: string,
        category: string,
        raised: number,
        goal: number
    }
) {
    const progressPercentage = (raised / goal) * 100;

    return (
        <Link href={"/campaign/kodfkfsv24dfSj"}>
            <div className="rounded-xl overflow-hidden">
                <div className="relative">
                    <Image src={`/campaigns/${name.split(" ").join("-")}.png`} alt={name.replace(" ", "-")} width={800} height={800} className="w-64 aspect-4/3"/>

                    <div className="absolute bottom-0 left-0 bg-opacity-50 text-white p-4 text-start">
                        {name}
                    </div>
                </div>

                <div className="w-full bg-gray-200 h-4 rounded-b-xl">
                    <div className="bg-primary h-4 rounded-b-xl" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <p>{`Funds Raised: $${raised} of $${goal}`}</p>
            </div>
        </Link>
    )
}