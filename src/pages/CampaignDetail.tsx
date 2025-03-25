import { CampaignDetailType } from "@/types/structure";
import { useState } from "react";

const CampaignDetail = ({ detail }: { detail: CampaignDetailType }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  return (
    <div className="flex flex-col w-screen text-justify tracking-widest min-h-screen font-redhat relative">
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) 50%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0.9)), url(${detail.thumbnail})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      />
      <div className="overflow-y-auto flex-col absolute text-primary z-10 py-10 px-15 bg-white bottom-0 top-[10rem] rounded-t-4xl left-[15rem] right-[15rem]">
        <div className="flex justify-center">
          <button 
            className="text-2xl hover:shadow-3xl font-bold hover:cursor-pointer relative h-[10vh] flex items-center bg-primary rounded-lg w-[80vh] overflow-hidden"
            onMouseEnter={() => setProgressWidth((detail.raised / detail.goal) * 100)}
            onMouseLeave={() => setProgressWidth(0)}
          >
            <div className="h-full bg-secondary rounded-lg transition-all duration-1000" style={{ width: `${progressWidth}%` }} />
            <div className="absolute inset-0 flex items-center justify-center text-white">DONATE</div>
          </button>
        </div>
        <div className="flex flex-row mt-10 justify-between text-2xl font-bold space-x-5">
          <div className="flex flex-col items-center">
            <div>Goal</div>
            <div>$ {detail.goal.toLocaleString()}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Deadline</div>
            <div>{detail.deadline.toLocaleString()}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Raised</div>
            <div>$ {detail.raised.toLocaleString()}</div>
          </div>
        </div>
        <h1 className="text-4xl mt-10 font-bold text-center">{detail.title}</h1>
        <p className="mt-10 text-2xl">{detail.description}</p>
        <div className="text-center mt-10 text-2xl font-bold">
          By {detail.institution}
        </div>
      </div>
    </div>
  )
}

export default CampaignDetail;