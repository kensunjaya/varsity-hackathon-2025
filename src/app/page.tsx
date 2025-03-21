"use client";
import { WorldMap } from "@/components/ui/world-map";
 
export default function Home() {
  return (
    <div className="bg-primary flex items-center justify-center font-primary w-full min-h-screen">
      <img src="/pen1.svg" className="absolute left-0 top-[50%]" />
      <img src="/pen2.svg" className="absolute right-0 top-[20%]" />
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