"use client";

import { useRef } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    props: { lat: number; lng: number; label?: string };
  }>;
  size: number;
}

export default function WorldMap({ dots = [], size = 15 }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#554559",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative font-primary">
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
        className="w-full h-full absolute inset-0 select-none"
      >
        {/* <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs> */}

        {dots.map((dot, i) => (
          <image
            x={projectPoint(dot.props.lat, dot.props.lng).x}
            y={projectPoint(dot.props.lat, dot.props.lng).y}
            width={size}
            height={size}
            className="hover:cursor-pointer hover:-translate-y-0.5 transform transition-transform duration-300"
            href="/pinpoint.svg"
            key={i}
          />
        ))}
      </svg>
    </div>
  );
}
