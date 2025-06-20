import CampaignListCard from "@/components/ui/CampaignListCard"
import CategoryComponent from "@/components/ui/CategoryComponent"
import Navbar from "@/components/ui/navbar"

export default function CampaignsPage() {

    const socialCauses = [
        {
            name: "Tornado Recovery & Rebuilding Houses",
            category: "Social Causes",
            raised: 5609,
            goal: 10000,
        },
        {
            name: "Flood Relief and Climate Resilience",
            category: "Social Causes",
            raised: 8990,
            goal: 10000,
        },
        {
            name: "Clean Drinking Water for Remote Villages",
            category: "Social Causes",
            raised: 1589,
            goal: 10000,
        }
    ]

    return (
        <div className="relative flex-col items-center justify-center font-primary w-full min-h-screen bg-yellow-50">
            <Navbar pageName="Campaigns" />
            
            <div className="py-50 flex flex-col items-center gap-20">
                <CategoryComponent />

                <div className="text-center flex flex-col gap-10">
                    <h1 className="text-3xl">Social Causes</h1>
                    <div className="flex flex-row gap-10">
                        {socialCauses.map((campaign, index) => (
                            <CampaignListCard key={index} name={campaign.name} category={campaign.category} raised={campaign.raised} goal={campaign.goal} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}