/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState, useCallback } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { ImpactCard } from "./impact-card";

interface MapProps {
  dots?: Array<{
    coord: { lat: number; lng: number; label?: string };
    campaign: {
      title: string;
      description: string;
      shortDesc: string;
      thumbnail: string;
      goal: number;
      raised: number;
    };
  }>;
  size: number;
}

export default function WorldMap({ dots = [], size = 15 }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#8C8075",
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
    shortDesc: string;
    goal: number;
    raised: number;
    thumbnail: string;
  }>({
    x: 0,
    y: 0,
    title: "",
    description: "",
    shortDesc: "",
    goal: 0,
    raised: 0,
    thumbnail: "",
    visible: false,
  });

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const showImpactCard = useCallback(
    debounce(
      (
        e: React.MouseEvent<SVGImageElement>,
        title: string,
        description: string,
        shortDesc: string,
        goal: number,
        raised: number,
        thumbnail: string
      ) => {
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setImpactCard({
          x,
          y,
          title,
          description,
          shortDesc,
          goal,
          raised,
          thumbnail,
          visible: true,
        });
      },
      100
    ),
    []
  );

  const hideImpactCard = () => {
    setImpactCard((prev) => ({ ...prev, visible: false }));
  };

  useEffect(() => {
    console.log(impactCard.thumbnail);
  }, [impactCard]);

  return (
    <div className="">
      <div className="text-center bg-eight pt-20 tracking-wide">
        <h1 className="text-4xl">Impact</h1>
        <p className="text-muted-foreground">
          Our platform has made impact around the world
        </p>
      </div>
      <div className="w-full min-h-screen bg-eight flex items-center justify-center relative font-primary">
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
              onMouseEnter={(e) =>
                showImpactCard(
                  e,
                  dot.campaign.title,
                  dot.campaign.description,
                  dot.campaign.shortDesc,
                  dot.campaign.goal,
                  dot.campaign.raised,
                  dot.campaign.thumbnail
                )
              }
              onMouseLeave={hideImpactCard}
              className="hover:cursor-pointer hover:-translate-y-0.5 transform transition-transform duration-300"
              href="/pinpoint.svg"
              key={i}
            />
          ))}
        </svg>
        {impactCard.visible && (
          <div
            onMouseEnter={() =>
              setImpactCard((prev) => ({ ...prev, visible: true }))
            }
            onMouseLeave={hideImpactCard}
          >
            <ImpactCard
              x={impactCard.x}
              y={impactCard.y}
              title={impactCard.title}
              shortDesc={impactCard.shortDesc}
              goal={impactCard.goal}
              raised={impactCard.raised}
              thumbnail={impactCard.thumbnail}
            />
          </div>
        )}
      </div>
    </div>
  );
}
