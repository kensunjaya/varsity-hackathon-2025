import { useEffect, useState } from "react";

export const ImpactCard = (
  {title, shortDesc, goal, raised, thumbnail, x, y} 
  : 
  { title: string, 
    shortDesc: string, 
    goal: number, 
    raised: number,
    thumbnail: string,
    x: number,
    y: number
  }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  // useEffect ensures the progress bar animation works correctly, every time the raised or goal changes
  useEffect(() => {
    setProgressWidth((raised / goal) * 100);
  }, [raised, goal]);

  return (
    <div 
      className="flex flex-col max-w-60 hover:cursor-pointer absolute border text-white border-secondary font-redhat rounded-lg p-4"
      style={{ top: `${y}px`, left: `${x}px`, backgroundColor: 'black' }}
    >
      <div 
        className="absolute inset-0 rounded-lg"
        style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}
      />
      <div className="relative z-10 space-y-4">
        <div className="font-bold font-lg">
          {title}
        </div>
        <div className="flex">
          {shortDesc}
        </div>
        <div className="space-y-1">
          <div className="flex flex-col">
            <div>
              {"Raised"}
            </div>
            <div>
             {`$${raised.toLocaleString()} / $${goal.toLocaleString()}`}
            </div>
          </div>
          <div className="h-2 bg-primary rounded-lg overflow-hidden">
            <div className="h-full bg-secondary rounded-lg transition-all duration-1000" style={{ width: `${progressWidth}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}