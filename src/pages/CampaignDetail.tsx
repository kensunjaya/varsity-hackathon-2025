import { CampaignDetailType } from "@/types/structure";
import { useState } from "react";

const CampaignDetail = ({ detail }: { detail: CampaignDetailType }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  // create random entries, including the address and timestamp and amount must be randomized
  const donations = [
    { amount: 50, address: "0x1A2B3C4D5E6F7g8H9I0J", timestamp: "2024 01 12 at 10:30:15" },
    { amount: 10, address: "0x1K2L3M4N5O6P7q8R9S0T", timestamp: "2024 02 12 at 11:45:20" },
    { amount: 225, address: "0x1U2V3W4X5Y6Z7a8B9C0D", timestamp: "2024 03 12 at 12:15:35" },
    { amount: 82, address: "0x1E2F3G4H5I6J7k8L9M0N", timestamp: "2024 04 12 at 13:25:40" },
    { amount: 12, address: "0x1O2P3Q4R5S6T7m8V9W0X", timestamp: "2024 05 12 at 14:50:55" },
    { amount: 600, address: "0x1Y2Z3A4B5C6D7e8F9G0H", timestamp: "2024 06 12 at 15:10:05" },
    { amount: 15, address: "0x1I2J3K4L5M6N7O8p9Q0R", timestamp: "2024 07 12 at 16:35:25" },
    { amount: 75, address: "0x1S2T3U4V5W6X7Y8z9A0B", timestamp: "2024 08 12 at 17:45:50" },
    { amount: 30, address: "0x1C2D3E4F5G6H7I8j9K0L", timestamp: "2024 09 12 at 18:55:30" },
    { amount: 20, address: "0x1M2N3O4P5Q6R7S8t9U0V", timestamp: "2024 10 12 at 19:05:15" },
    { amount: 90, address: "0x1W2X3Y4Z5A6B7C8d9E0F", timestamp: "2024 11 12 at 20:20:40" },
    { amount: 10, address: "0x1G2H3I4J5K6L7M8n9O0P", timestamp: "2024 12 12 at 21:30:55" },
    { amount: 400, address: "0x1Q2R3S4T5U6V7W8x9Y0Z", timestamp: "2024 13 12 at 22:40:10" },
    { amount: 250, address: "0x1A2B3C4D5E6F7G8h9I0J", timestamp: "2024 14 12 at 23:50:20" },
    { amount: 80, address: "0x1K2L3M4N5O6P7Q8r9S0T", timestamp: "2024 15 12 at 00:10:35" }
  ];

  return (
    <div className="flex flex-col w-screen text-justify tracking-wider min-h-screen font-redhat relative">
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) 50%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0.9)), url(${detail.thumbnail})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      />
      <div className="overflow-y-auto flex-col absolute text-black z-10 py-10 px-15 bg-white bottom-0 top-[10rem] rounded-t-4xl left-[15rem] right-[15rem]">
        <div className="flex justify-center">
          <button 
            className="text-2xl hover:shadow-3xl font-bold hover:cursor-pointer relative h-[10vh] flex items-center bg-primary rounded-lg w-[80vh] overflow-hidden"
            onMouseEnter={() => setProgressWidth((detail.raised / detail.goal) * 100)}
            onMouseLeave={() => setProgressWidth(0)}
          >
            <div className="h-full bg-fourth rounded-lg transition-all duration-1000" style={{ width: `${progressWidth}%` }} />
            <div className="absolute inset-0 flex items-center justify-center font-primary text-3xl text-white">DONATE NOW</div>
          </button>
        </div>
        <div className="flex flex-row mt-10 justify-between text-2xl space-x-5 font-primary tracking-widest">
          <div className="flex flex-col items-center">
            <div>Raised</div>
            <div>$ {detail.raised.toLocaleString()}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Deadline</div>
            <div>{detail.deadline.toLocaleString()}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Goal</div>
            <div>$ {detail.goal.toLocaleString()}</div>
          </div>

        </div>
        <h1 className="text-4xl mt-10 font-bold text-center">{detail.title}</h1>
        <p className="mt-10 text-2xl">{detail.description}</p>
        <div className="text-center mt-10 text-2xl font-bold">
          By {detail.institution}
        </div>
        <div className="mt-10">
          <div className="text-2xl font-primary">RECENT DONATIONS</div>
          <div className="flex font-redhat text-lg mt-5 justify-between">
            <div className="flex flex-col">
              <div className="font-bold mb-3">Amount</div>
              {donations.map((donation, index) => (
                <div key={index}>
                  <div>$ {donation.amount}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="font-bold mb-3">Address</div>
              {donations.map((donation, index) => (
                <div key={index}>
                  <div>{donation.address}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="font-bold mb-3">Timestamp</div>
              {donations.map((donation, index) => (
                <div key={index}>
                  <div>{donation.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetail;