import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
    title: string;
    image: StaticImageData;
    description: string;
    deploy: string;
    repo: string;
}

export default function Project({
    title,
    image,
    description,
    deploy,
    repo,
}: props) {
    return (
        <div className="flex bg-[#3A3A3A]">
            <Image src={image} alt="Project Image" className="w-1/2 h-auto" />
            <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-4xl font-bold">{title}</h3>
                    <div></div>
                </div>
                <article className="text-2xl">
                    <p>{description}</p>
                </article>
                <div className="flex gap-4">
                    <Link
                        href={deploy}
                        target="_blank"
                        className="flex items-center justify-center gold text-[#3A3A3A] font-bold w-[15vw] py-4 rounded-lg text-2xl btn-hover"
                    >
                        Ver projeto
                    </Link>
                    <Link
                        href={repo}
                        target="_blank"
                        className="flex items-center justify-center bg-[#1C1C1C] font-bold w-[15vw] px-12 py-3 rounded-lg text-2xl btn-hover"
                    >
                        {"< Repositório />"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
