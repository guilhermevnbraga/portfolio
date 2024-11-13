import Image, { StaticImageData } from "next/image";

interface props {
    title: string;
    image: StaticImageData;
    description: string;
}

export default function Project({ title, image, description }: props) {
    return (
        <div className="flex bg-[#3A3A3A]">
            <Image
                src={image}
                alt="Project Image"
                className="w-1/2 h-auto"
            />
            <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-4xl font-bold">{title}</h3>
                    <div></div>
                </div>
                <article className="text-2xl">
                    <p>{description}</p>
                </article>
                <div className="flex gap-4">
                    <button className="gold text-[#3A3A3A] font-bold w-[14vw] py-4 rounded-lg text-2xl btn-hover">
                        See Project
                    </button>
                    <button className="bg-[#1C1C1C] font-bold w-[14vw] px-12 py-3 rounded-lg text-2xl btn-hover">
                        {"< Repository />"}
                    </button>
                </div>
            </div>
        </div>
    );
}
