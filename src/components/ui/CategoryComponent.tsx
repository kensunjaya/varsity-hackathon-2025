import Image from "next/image";
import { Button } from "./button";

export default function CategoryComponent() {

    let categories = [
        {
            name: "Social Causes",
            image: "/icons/social-causes.svg",
        },
        {
            name: "Environmental Sustainability",
            image: "/icons/environmental-sustainability.svg",
        },
        {
            name: "Creative Projects",
            image: "/icons/creative-projects.svg",
        }
    ]

    return <div className="grid grid-cols-3 place-items-center gap-4 max-w-5xl">
        {categories.map((category, index) => (
            <button key={index} className="flex flex-col items-center gap-2 hover:scale-105 transition-all">
                <Image src={category.image} alt={category.name} width={100} height={100} className="w-16" />
                <p className="text-xs text-balance text-muted-foreground">{category.name}</p>
            </button>
        ))}
    </div>;
}