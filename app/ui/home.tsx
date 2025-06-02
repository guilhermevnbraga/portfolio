import profile from "./imgs/profile.jpeg";
import Image from "next/image";

export default function Home() {
    return (
        <div id="home" className="flex flex-col min-h-screen">
            <section className="mt-12 lg:mt-0 flex flex-col-reverse justify-evenly lg:flex-row bg-[#1C1C1C] p-6 sm:p-12 md:p-20 lg:p-32 grow gap-12">
                <article className="flex flex-col grow justify-evenly items-center lg:items-start py-8 sm:py-12 w-full lg:w-1/2">
                    <div>
                        <div className="mb-6">
                            <h1
                                data-aos="fade-right"
                                data-aos-out="fade-left"
                                className="gold text-transparent bg-clip-text text-center lg:w-fit text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl"
                            >
                                Olá, Eu sou o
                            </h1>
                            <h1
                                data-aos="fade-right"
                                data-aos-out="fade-left"
                                className="gold text-transparent bg-clip-text text-center lg:w-fit text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl"
                            >
                                Guilherme Braga
                            </h1>
                        </div>
                        <h2
                            data-aos="fade-right"
                            data-aos-out="fade-left"
                            className="text-[#B5B5B5] text-2xl sm:text-3xl md:text-4xl"
                        >
                            Desenvolvedor Web Full Stack
                        </h2>
                    </div>
                    <a
                        data-aos="fade-right"
                        data-aos-out="fade-left"
                        href="#contact"
                        className="gold text-[#3A3A3A] font-bold w-fit px-8 py-3 sm:px-12 sm:py-3 rounded-lg text-lg sm:text-2xl btn-hover mt-8"
                    >
                        Fale comigo
                    </a>
                </article>
                <aside className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                    <Image
                        data-aos="fade-left"
                        data-aos-out="fade-right"
                        className="rounded-[50%] w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/2 h-auto border-2 border-[#8F612D] shadow-lg"
                        src={profile}
                        alt="Profile"
                        priority
                    />
                </aside>
            </section>
        </div>
    );
}