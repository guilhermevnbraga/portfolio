import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen p-32 bg-[#3A3A3A] text-[#F5F5F5] flex flex-col items-center"
        >
            <h1 className="gold text-transparent bg-clip-text w-fit text-7xl mb-12">
                Contact me
            </h1>
            <div className="flex w-full justify-between grow">
                <nav className="flex w-full gap-40 items-center justify-center hover:cursor-default">
                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/guilhermevnbraga/"
                        className="flex flex-col items-center justify-center"
                    >
                        <FaLinkedinIn
                            className="w-20 h-20 mb-4 bg-[#1C1C1C] p-2 rounded-[25%] btn-hover hover:cursor-pointer"
                            style={{ fill: "url(#gold-gradient)" }}
                        />
                        <p className="font-bold text-2xl">Linkedin</p>
                        <p className="text-[#B5B5B5] text-sm">
                            /guilhermevnbraga
                        </p>
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.github.com/guilhermevnbraga/"
                        className="flex flex-col items-center justify-center hover:cursor-default"
                    >
                        <TbBrandGithubFilled
                            className="w-20 h-20 mb-4 bg-[#1C1C1C] p-2 rounded-[25%] btn-hover hover:cursor-pointer"
                            style={{ fill: "url(#gold-gradient)" }}
                        />
                        <p className="font-bold text-2xl">Github</p>
                        <p className="text-[#B5B5B5] text-sm">
                            /guilhermevnbraga
                        </p>
                    </Link>
                    <Link
                        href="mailto:guilhermeviniciuspj@gmail.com"
                        target="_blank"
                        className="flex flex-col items-center justify-center hover:cursor-default"
                    >
                        <MdOutlineEmail
                            className="w-20 h-20 mb-4 bg-[#1C1C1C] p-2 rounded-[25%] btn-hover hover:cursor-pointer"
                            style={{ fill: "url(#gold-gradient)" }}
                        />
                        <p className="font-bold text-2xl">E-mail</p>
                        <p className="text-[#B5B5B5] text-sm">
                            guilhermeviniciuspj@gmail.com
                        </p>
                    </Link>
                    <Link
                        href="https://api.whatsapp.com/send?phone=5581995180108"
                        target="_blank"
                        className="flex flex-col items-center justify-center hover:cursor-default"
                    >
                        <FaWhatsapp
                            className="w-20 h-20 mb-4 bg-[#1C1C1C] p-2 rounded-[25%] btn-hover hover:cursor-pointer"
                            style={{ fill: "url(#gold-gradient)" }}
                        />
                        <p className="font-bold text-2xl">Whatsapp</p>
                        <p className="text-[#B5B5B5] text-sm">
                            +55 (81) 99518-0108
                        </p>
                    </Link>
                </nav>

                <svg width="0" height="0">
                    <defs>
                        <linearGradient
                            id="gold-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#8F612D" />
                            <stop offset="50%" stopColor="#EADF86" />
                            <stop offset="100%" stopColor="#8F612D" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <p className="w-full flex justify-end">© 2024 Guilherme Braga</p>
        </section>
    );
}
