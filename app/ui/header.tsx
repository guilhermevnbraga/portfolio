import Image from "next/image";
import logo from "./imgs/logo.png";
import brasil from "./imgs/brasil.jpeg";

export default function Header() {
    return (
        <header className="flex w-full justify-between px-16 py-2 bg-[#1C1C1C]">
            <Image src={logo} alt="Logo" width={80} height={80} />
            <nav className="flex gap-24 text-3xl">
                <button className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-transparent bg-clip-text hover:scale-105 active:scale-95">
                    Home
                </button>
                <button className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-transparent bg-clip-text hover:scale-105 active:scale-95">
                    About
                </button>
                <button className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-transparent bg-clip-text hover:scale-105 active:scale-95">
                    Projects
                </button>
                <button className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-transparent bg-clip-text hover:scale-105 active:scale-95">
                    Contact
                </button>
                <button className="-ml-8">
                    <Image src={brasil} alt="Brasil" width={60} height={60} />
                </button>
            </nav>
        </header>
    );
}
