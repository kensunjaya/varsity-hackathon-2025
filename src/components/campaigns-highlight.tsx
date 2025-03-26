import Link from "next/link"
import CampaignHighlightCard from "./ui/CampaignHighlightCard"

export interface CampaignHighlightModel {
    title: string,
    description?: string,
    image: string,
    rowSpan?: number,
}

let campaignHighlights: CampaignHighlightModel[] = [
    {
        title: "Clean Drinking Water for Remote Villages",
        description: "Millions of people still lack access to clean drinking water, leading to waterborne diseases. This campaign funds the construction of clean water wells, filtration systems, and rainwater harvesting projects in underserved villages.",
        image: "/images/campaign-drinking-water.jpg",
        rowSpan: 1
    },
    {
        title: "Tornado Recovery & Rebuilding Houses",
        description: "Millions of people still lack access to clean drinking water, leading to waterborne diseases. This campaign funds the construction of clean water wells, filtration systems, and rainwater harvesting projects in underserved villages.",
        image: "/images/campaign-tornado-recovery.jpg",
        rowSpan: 2
    },
    {
        title: "Flood Relief and Climate Resilience",
        description: "Millions of people still lack access to clean drinking water, leading to waterborne diseases. This campaign funds the construction of clean water wells, filtration systems, and rainwater harvesting projects in underserved villages.",
        image: "/images/campaign-food-relief.jpg",
        rowSpan: 1
    },
    {
        title: "Save the Amazon Rainforest",
        description: "Millions of people still lack access to clean drinking water, leading to waterborne diseases. This campaign funds the construction of clean water wells, filtration systems, and rainwater harvesting projects in underserved villages.",
        image: "/images/campaign-amazon-rainforest.jpg",
        rowSpan: 1
    },
    {
        title: "Sustainable Bamboo Housing for Homeless Families",
        description: "Millions of people still lack access to clean drinking water, leading to waterborne diseases. This campaign funds the construction of clean water wells, filtration systems, and rainwater harvesting projects in underserved villages.",
        image: "/images/campaign-bamboo-housing.jpg",
        rowSpan: 1
    }
]

export default function CampaignsHighlight() {
    return (
        <div className="bg-gradient-to-b from-[#ECEDE7] to-seventh w-full flex flex-col gap-4 p-8 items-center">
            <h1 className="text-center text-4xl font-bold mb-6 text-black">Campaign Highlights</h1>

            <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-5xl w-full">
                {campaignHighlights.map((campaign, index) => (
                    <Link href={"/campaign/jDFhaodCad72Vas"} key={index} className={`rounded-xl overflow-hidden ${campaign.rowSpan === 2 ? 'row-span-2' : 'row-span-1'}`}>
                        <div className="relative h-full bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: `url(${campaign.image})` }}>
                            <div className="absolute left-0 bottom-0 transition-transform duration-300 hover:transform hover:-translate-y-8 p-4">
                                <h1 className="text-xl">{campaign.title}</h1>
                                <p className="opacity-0 hover:opacity-100 transition-opacity duration-300 font-redhat">{campaign.description}</p>
                            </div>
                            <div className="h-96">
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}