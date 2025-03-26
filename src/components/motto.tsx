import MottoCard from "./ui/MottoCard";

export interface MottoModel {
  title: string;
  image: string;
  description: string;
}

const mottos: MottoModel[] = [
  {
    title: "Empower Giving, Decentralized Living",
    image: "/images/money-giving.jpg",
    description:
      "Take control of your generosity with DecentraFund! Our blockchain-powered platform lets you donate crypto seamlessly, ensuring every gift supports causes you love—transparently and without middlemen.",
  },
  {
    title: "Trust in Every Token",
    image: "/images/money-bank.jpg",
    description:
      "With DecentraFund, your donations are as secure as they are impactful. Powered by blockchain, every crypto token you give is tracked and trusted, delivering peace of mind with every contribution.",
  },
  {
    title: "Fund the Future, Block by Block",
    image: "/images/block-building.jpg",
    description:
      "Join the revolution at DecentraFund! Your crypto donations build a better tomorrow, one block at a time, connecting you directly to the causes shaping our world—fast, fair, and decentralized.",
  },
];

export default function Motto() {
  return (
    <div className="w-full bg-sixth min-h-96 flex flex-col gap-10 p-10">
      <h1 className="text-center text-4xl tracking-wide">
        Unleash Your Crypto Impact
      </h1>

      <div className="w-full max-w-5xl mx-auto flex items-center justify-center">
        <div className="grid grid-cols-3 place-items-center gap-10">
          {mottos.map((motto, index) => (
            <MottoCard key={index} motto={motto} />
          ))}
        </div>
      </div>
    </div>
  );
}
