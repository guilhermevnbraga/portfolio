import profile from "./imgs/profile.jpeg";
import Image from "next/image";
import Header from "./header";

export default function Home() {
    return (
        <div id="home" className="flex flex-col min-h-screen">
            <Header />
            <div className="gold h-0.5 w-full"></div>
            <section className="flex bg-[#1C1C1C] justify-between p-32 grow">
                <article className="flex flex-col justify-between py-12">
                    <div>
                        <h2 className="text-[#B5B5B5] text-4xl">
                            Hi, I'm Guilherme Braga
                        </h2>
                        <div className="mt-6">
                            <h1 className="gold text-transparent bg-clip-text w-fit text-7xl">
                                Full-Stack Web
                            </h1>
                            <h1 className="gold text-transparent bg-clip-text w-fit text-7xl">
                                Developer
                            </h1>
                        </div>
                    </div>
                    <button className="gold text-[#3A3A3A] font-bold w-fit px-12 py-3 rounded-lg text-2xl btn-hover">
                        Contact me
                    </button>
                </article>
                <aside className="w-1/2 grow flex justify-end items-center">
                    <Image
                        className="rounded-[50%] w-1/2 h-auto"
                        src={profile}
                        alt="Profile"
                    />
                </aside>
            </section>
        </div>
    );
}
