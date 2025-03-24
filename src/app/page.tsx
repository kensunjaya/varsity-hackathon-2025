"use client";
import Navbar from "@/components/ui/navbar";
import WorldMap from "@/components/ui/world-map";
import { campaignData } from "@/contents/resources";
import CampaignDetail from "@/pages/CampaignDetail";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center font-primary w-full min-h-screen">
      <Navbar />
      <Hero />
      <WorldMap
        size={20}
        dots={campaignData}
      />
      <CampaignDetail detail={campaignData[4].campaign} />
    </div>
  );
}
