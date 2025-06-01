"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./ui/home";
import About from "./ui/about";
import Projects from "./ui/projects";
import Contact from "./ui/contact";
import Header from "./ui/header";

export default function Page() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <main className="flex flex-col">
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}
