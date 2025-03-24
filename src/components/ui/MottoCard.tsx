import Image from "next/image";
import { MottoModel } from "../motto";

export default function MottoCard({
    motto,
}: {
    motto: MottoModel;
}) {
    return (
        <div className="bg-white w-full h-full rounded-xl">
            <div className="rounded-b-xl">
                <Image src={motto.image} alt={motto.title} width={400} height={500} className="w-full h-56 object-cover rounded-xl" />
            </div>
            <div className="p-4">
                <h1 className="text-center text-2xl">{motto.title}</h1>
                <p className="font-redhat">{motto.description}</p>
            </div>
        </div>
    )
}