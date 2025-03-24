import { useEffect, useRef, useState } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { ImpactCard } from "./impact-card";

interface MapProps {
  dots?: Array<{
    coord: { lat: number; lng: number; label?: string },
    campaign: { title: string; description: string; thumbnail: string; goal: number; raised: number };
  }>;
  size: number;
}

export default function WorldMap({ dots = [], size = 15 }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#595870",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const [impactCard, setImpactCard] = useState<{ 
    x: number; 
    y: number; 
    visible: boolean;
    title: string;
    description: string;
    goal: number;
    raised: number;
    thumbnail: string;
  }>({ x: 0, y: 0, title: "", description: "", goal: 0, raised: 0, thumbnail: "", visible: false });

  const showImpactCard = (e: React.MouseEvent<SVGImageElement>, title: string, description: string, goal: number, raised: number, thumbnail: string) => {
    console.log("mouse entered");
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setImpactCard({ x: x, y: y, title: title, description: description, goal: goal, raised: raised, thumbnail: thumbnail, visible: true });
    console.log("set card")
  };

  const hideImpactCard = () => {
    setTimeout(() => {
      setImpactCard({ x: 0, y: 0, title: "", description: "", goal: 0, raised: 0, thumbnail: "", visible: false });
    }, 1000)
  };

  useEffect(() => {
    console.log(impactCard.thumbnail);
  }
  , [impactCard]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative font-primary">
      <Image
        src="/pen1.svg"
        className="absolute w-[20vh] left-0 top-[50vh]"
        alt=""
        width={100}
        height={100}
      />
      <Image
        src="/pen2.svg"
        className="absolute w-[20vh] right-0 top-[30vh]"
        alt=""
        width={100}
        height={100}
      />
      <Image src="/grad-ellipse-top.svg" className="absolute w-full top-0" alt="" width={100} height={100} />
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="w-[80%] select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="h-full absolute w-full inset-0 select-none"
      >
        {dots.map((dot, i) => (
          <image
            x={projectPoint(dot.coord.lat, dot.coord.lng).x}
            y={projectPoint(dot.coord.lat, dot.coord.lng).y}
            width={size}
            height={size}
            onMouseEnter={(e) => showImpactCard(e, dot.campaign.title, dot.campaign.description, dot.campaign.goal, dot.campaign.raised, dot.campaign.thumbnail)}
            onMouseLeave={hideImpactCard}
            className="hover:cursor-pointer hover:-translate-y-0.5 transform transition-transform duration-300"
            href="/pinpoint.svg"
            key={i}
          />
        ))}
      </svg>
      {impactCard.visible && (
        <ImpactCard x={impactCard.x} y={impactCard.y} title={impactCard.title} shortDesc={impactCard.description} goal={impactCard.goal} raised={impactCard.raised} thumbnail={impactCard.thumbnail} />
      )}
    </div>
  );
}