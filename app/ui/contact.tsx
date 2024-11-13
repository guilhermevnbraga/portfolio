import Link from "next/link";
import Image from "next/image";
import linkedin from "./imgs/linkedin.png";
import github from "./imgs/github.webp";

export default function Contact() {
    return (
        <section className="min-h-screen p-32 bg-[#3A3A3A] text-[#F5F5F5] flex flex-col">
            <h1 className="gold text-transparent bg-clip-text w-fit text-7xl mb-12">
                Contact me
            </h1>
            <div className="flex flex-col grow text-4xl gap-12">
                <p>Email: guilhermeviniciuspj@gmail.com</p>
                <p>Telephone: +55 (81) 98728-8691</p>
            </div>
            <div className="flex w-full justify-between">
                <p>© 2024 Guilherme Braga</p>
                <nav className="flex gap-12">
                    <Link target="_blank" href="https://www.linkedin.com/in/guilhermevnbraga/">
                        <Image
                            className="rounded btn-hover"
                            src={linkedin}
                            alt="LinkedIn"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link target="_blank" href="https://www.github.com/guilhermevnbraga/">
                        <Image
                            className="rounded btn-hover"
                            src={github}
                            alt="Github"
                            width={50}
                            height={50}
                        />
                    </Link>
                </nav>
            </div>
        </section>
    );
}
