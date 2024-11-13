import Image from "next/image";
import logo from "./imgs/logo.png";

export default function Header() {
    return (
        <header className="flex w-full justify-between px-16 py-2 bg-[#1C1C1C]">
            <Image src={logo} alt="Logo" width={80} height={80} />
            <nav className="flex gap-24 text-3xl items-center">
                <a
                    href="#home"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow"
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow"
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
