import Image from "next/image";
import logo from "./imgs/logo.png";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed z-50 w-[100vw] bg-[#1C1C1C] flex justify-between px-4 sm:px-8 md:px-16 py-2">
            <Image
                src={logo}
                alt="Logo"
                width={60}
                height={60}
                className="z-50"
            />
            <button
                className="lg:hidden flex flex-col justify-center items-center z-50 mr-6"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menu"
            >
                <span
                    className={`block w-8 h-1 bg-[#EADF86] rounded transition-all duration-300 ${
                        open ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                    className={`block w-8 h-1 bg-[#EADF86] rounded my-1 transition-all duration-300 ${
                        open ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`block w-8 h-1 bg-[#EADF86] rounded transition-all duration-300 ${
                        open ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
            </button>
            <nav
                className={`
                    flex-col lg:flex-row flex gap-8 lg:gap-24 text-2xl lg:text-3xl items-center
                    fixed lg:static top-0 right-0 h-screen lg:h-auto max-w-xs lg:max-w-none bg-[#1C1C1C] lg:bg-transparent
                    transition-transform duration-300 z-40 p-6 lg:p-0
                    ${
                        open ? "translate-x-0" : "translate-x-full"
                    } lg:translate-x-0 w-fit
                `}
            >
                <a
                    href="#home"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow mt-20 lg:mt-0"
                    onClick={() => setOpen(false)}
                >
                    Início
                </a>
                <a
                    href="#about"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow"
                    onClick={() => setOpen(false)}
                >
                    Sobre mim
                </a>
                <a
                    href="#projects"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow"
                    onClick={() => setOpen(false)}
                >
                    Projetos
                </a>
                <a
                    href="#contact"
                    className="gold text-transparent bg-clip-text w-fit btn-hover text-shadow"
                    onClick={() => setOpen(false)}
                >
                    Contatos
                </a>
            </nav>
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}
