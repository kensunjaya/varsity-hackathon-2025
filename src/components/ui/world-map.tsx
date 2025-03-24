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
    color: "#595870",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

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
        className="h-full absolute w-[80%] inset-0 select-none"
      >
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
