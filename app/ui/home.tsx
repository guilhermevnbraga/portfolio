import profile from "./imgs/profile.jpeg";
import Image from "next/image";

export default function Home() {
    return (
        <div id="home" className="flex flex-col min-h-screen">
            <div className="gold h-0.5 w-full"></div>
            <section className="flex bg-[#1C1C1C] justify-between p-32 grow">
                <article className="flex flex-col justify-between py-12">
                    <div>
                        <div className="mb-6">
                            <h1
                                data-aos="fade-right"
                                data-aos-out="fade-left"
                                className="gold text-transparent bg-clip-text w-fit text-7xl"
                            >
                                Olá, Eu sou o
                            </h1>
                            <h1
                                data-aos="fade-right"
                                data-aos-out="fade-left"
                                className="gold text-transparent bg-clip-text w-fit text-7xl"
                            >
                                Guilherme Braga
                            </h1>
                        </div>
                        <h2
                            data-aos="fade-right"
                            data-aos-out="fade-left"
                            className="text-[#B5B5B5] text-4xl"
                        >
                            Desenvolvedor Web Full Stack
                        </h2>
                    </div>
                    <a
                        data-aos="fade-right"
                        data-aos-out="fade-left"
                        href="#contact"
                        className="gold text-[#3A3A3A] font-bold w-fit px-12 py-3 rounded-lg text-2xl btn-hover"
                    >
                        Fale comigo
                    </a>
                </article>
                <aside className="w-1/2 grow flex justify-end items-center">
                    <Image
                        data-aos="fade-left"
                        data-aos-out="fade-right"
                        className="rounded-[50%] w-1/2 h-auto"
                        src={profile}
                        alt="Profile"
                    />
                </aside>
            </section>
        </div>
    );
}
