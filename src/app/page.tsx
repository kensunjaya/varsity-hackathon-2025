"use client";
import CampaignsHighlight from "@/components/campaigns-highlight";
import Motto from "@/components/motto";
import Navbar from "@/components/ui/navbar";
import WorldMap from "@/components/ui/world-map";
import { campaignData } from "@/contents/resources";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="relative flex-col items-center justify-center font-primary w-full min-h-screen">
      <Navbar pageName="Home" />
      <Hero />
      <Motto />
      <CampaignsHighlight />
      <div id="impacts">
        <WorldMap size={20} dots={campaignData} />
      </div>
    </div>
  );
}
