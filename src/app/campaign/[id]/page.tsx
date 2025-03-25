import { campaignData } from "@/contents/resources";
import CampaignDetail from "@/pages/CampaignDetail";

export default function CampaignDetailPage() {
    return <CampaignDetail detail={campaignData[0].campaign} />
}