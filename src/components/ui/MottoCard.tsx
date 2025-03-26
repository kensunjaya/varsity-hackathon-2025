import Image from "next/image";
import { MottoModel } from "../motto";

export default function MottoCard({
    motto,
}: {
    motto: MottoModel;
}) {
    return (
        <div className="bg-white w-full flex flex-col h-full rounded-xl">
            <div className="rounded-b-xl">
                <Image src={motto.image} alt={motto.title} width={400} height={500} className="w-full h-56 object-cover rounded-xl" />
                <h1 className="text-center text-2xl tracking-wide mx-4 mt-4">{motto.title}</h1>
            </div>
            <div className="p-4 flex flex-col mt-auto">
                <p className="font-redhat text-balance mt-auto">{motto.description}</p>
            </div>
        </div>
    )
}