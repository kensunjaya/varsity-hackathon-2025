"use client";
import CampaignsHighlight from "@/components/campaigns-highlight";
import Motto from "@/components/motto";
import Navbar from "@/components/ui/navbar";
import WorldMap from "@/components/ui/world-map";
import { campaignData } from "@/contents/resources";
import CampaignDetail from "@/pages/CampaignDetail";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="relative flex-col items-center justify-center font-primary w-full min-h-screen">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <Motto />
      <CampaignsHighlight />
      <WorldMap size={20} dots={campaignData} />
      <CampaignDetail detail={campaignData[3].campaign} />
    </div>
  );
}
