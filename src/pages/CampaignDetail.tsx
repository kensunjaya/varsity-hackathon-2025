import { CampaignDetailType } from "@/types/structure";

const CampaignDetail = ({ detail }: { detail: CampaignDetailType }) => {
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
      <div className="flex overflow-y-auto flex-col absolute text-primary z-10 py-10 px-15 bg-white bottom-0 top-[10rem] rounded-t-4xl left-[15rem] right-[15rem]">
        <h1 className="text-4xl font-bold text-center">{detail.title}</h1>
        <p className="mt-4 text-2xl">{detail.description}</p>
        <div className="flex flex-row mt-10 text-2xl font-bold space-x-5">
          <div className="flex flex-col">
            <div>Goal:</div>
            <div>Raised:</div>
          </div>
          <div className="flex flex-col">
            <div>$ {detail.goal.toLocaleString()}</div>
            <div>$ {detail.raised.toLocaleString()}</div>
          </div>
          <div className="ml-auto">
          <button className="bg-primary tracking-normal px-15 text-2xl py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-5xl duration-100 text-white cursor-pointer font-[Red_Hat_Display] font-bold">
            <div>DONATE</div>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetail;