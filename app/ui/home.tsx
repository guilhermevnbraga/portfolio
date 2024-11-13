import profile from "./imgs/profile.jpeg";
import Image from "next/image";
import Header from "./header";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] h-0.5 w-full"></div>
            <section className="flex bg-[#1C1C1C] justify-between p-32 grow">
                <article className="flex flex-col justify-between py-12">
                    <div>
                        <h2 className="text-[#B5B5B5] text-4xl">
                            Hi, I'm Guilherme Braga
                        </h2>
                        <div className="mt-6">
                            <h1 className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-transparent bg-clip-text font-bold text-7xl">
                                Full-Stack Web
                            </h1>
                            <h1 className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-transparent bg-clip-text font-bold text-7xl">
                                Developer
                            </h1>
                        </div>
                    </div>
                    <button className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-[#3A3A3A] font-bold w-fit px-12 py-3 rounded-lg text-2xl hover:scale-105 active:scale-95">
                        Contact me
                    </button>
                </article>
                <aside className="w-1/2 grow flex justify-end items-center">
                    <Image
                        className="rounded-[50%] w-1/2"
                        src={profile}
                        alt="Profile"
                        width={200}
                        height={200}
                    />
                </aside>
            </section>
        </div>
    );
}
