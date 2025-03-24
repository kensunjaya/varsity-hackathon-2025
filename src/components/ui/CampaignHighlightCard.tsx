import Image from "next/image"
import { CampaignHighlightModel } from "../campaigns-highlight"


export default function CampaignHighlightCard({
    campaignHighlight
}: {
    campaignHighlight: CampaignHighlightModel
}) {
    return (
        <div>
            <div className="relative h-64 bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: `url(${campaignHighlight.image})` }}>
                <div className="absolute left-0 bottom-0 transition-transform duration-300 hover:transform hover:-translate-y-8 p-4">
                    <h1 className="text-xl">{campaignHighlight.title}</h1>
                    <p className="opacity-0 hover:opacity-100 transition-opacity duration-300 font-redhat">{campaignHighlight.description}</p>
                </div>
            </div>
        </div>
    )
}