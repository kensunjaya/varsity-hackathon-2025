"use client";
import Navbar from "@/components/ui/navbar";
import WorldMap from "@/components/ui/world-map";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center font-primary w-full min-h-screen">
      <Navbar />
      <Hero />
      <WorldMap
        size={20}
        dots={[
          {
            props: { lat: -17.331671385663018, lng: 113.06035799500526 }, // Jakarta, Indonesia
          },
          {
            props: { lat: -42.788532946834664, lng: 150.9023308813543 }, // Australia
          },
          {
            props: { lat: -2.486930353845509, lng: -75.672517986923566 }, // Brazil (Brasília)
          },
          {
            props: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            props: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
        ]}
      />
    </div>
  );
}
