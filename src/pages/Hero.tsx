import React from "react";
import appName from "@/images/app-name.png";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Image from "next/image";
import Card1 from "@/images/Card1.png";
import Card2 from "@/images/Card2.png";
import Card3 from "@/images/Card3.png";
import Card4 from "@/images/Card4.png";
import Card5 from "@/images/Card5.png";
import Card6 from "@/images/Card6.png";
import Card7 from "@/images/Card7.png";
import Card8 from "@/images/Card8.png";
import Card9 from "@/images/Card9.png";
import Card10 from "@/images/Card10.png";
import Card11 from "@/images/Card11.png";
import Card12 from "@/images/Card12.png";
import Card13 from "@/images/Card13.png";
import Card14 from "@/images/Card14.png";
import Card15 from "@/images/Card15.png";
import Card16 from "@/images/Card16.png";
import Card17 from "@/images/Card17.png";
import Card18 from "@/images/Card18.png";
import Card19 from "@/images/Card19.png";
import Card20 from "@/images/Card20.png";
import Card21 from "@/images/Card21.png";

const Hero = () => {
  const images = [
    Card1.src,
    Card2.src,
    Card3.src,
    Card4.src,
    Card5.src,
    Card6.src,
    Card7.src,
    Card8.src,
    Card9.src,
    Card10.src,
    Card11.src,
    Card12.src,
    Card13.src,
    Card14.src,
    Card15.src,
    Card16.src,
    Card17.src,
    Card18.src,
    Card19.src,
    Card20.src,
    Card21.src,
    Card1.src,
    Card2.src,
    Card3.src,
    Card4.src,
    Card5.src,
    Card6.src,
    Card7.src,
    Card8.src,
    Card9.src,
    Card10.src,
    Card11.src,
    Card12.src,
    Card13.src,
    Card14.src,
    Card15.src,
    Card16.src,
    Card17.src,
    Card18.src,
    Card19.src,
    Card20.src,
    Card21.src,
  ];

  return (
    <div className="relative w-full h-screen">
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-screen w-screen bg-white"
        images={images}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
        <Image src={appName} alt="app-name" width={600} height={200} />
        <button className="bg-primary text-xl px-4 h-14 rounded-xl text-white cursor-pointer font-[Red_Hat_Display] font-bold">
          See All Campaign
        </button>
      </div>
    </div>
  );
};

export default Hero;
