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
        <div className="flex flex-col md:flex-row bg-[#3A3A3A] rounded-xl overflow-hidden shadow-lg">
            <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-0">
                <Image
                    src={image}
                    alt="Project Image"
                    className="w-full h-auto object-cover rounded-lg md:rounded-none"
                    priority
                />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between gap-4">
                <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{title}</h3>
                </div>
                <article className="text-base sm:text-lg md:text-2xl mb-4">
                    <p>{description}</p>
                </article>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href={deploy}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gold text-[#3A3A3A] font-bold py-3 rounded-lg text-base sm:text-xl btn-hover"
                    >
                        Ver projeto
                    </Link>
                    <Link
                        href={repo}
                        target="_blank"
                        className="flex-1 flex items-center justify-center bg-[#1C1C1C] font-bold px-4 py-3 rounded-lg text-base sm:text-xl btn-hover"
                    >
                        {"< Repositório />"}
                    </Link>
                </div>
            </div>
        </div>
    );
}