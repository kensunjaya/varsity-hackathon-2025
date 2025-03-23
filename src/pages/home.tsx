import React from "react";
import background from "@/images/background-home.jpg";
import appName from "@/images/app-name.png";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={background.src}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
        <img src={appName.src} alt="App Name" className="w-1/3" />
        <button className="bg-[#201F3F] text-2xl px-4 h-14 rounded-xl text-white cursor-pointer">
          See All Campaign
        </button>
      </div>
    </div>
  );
};

export default HomePage;
