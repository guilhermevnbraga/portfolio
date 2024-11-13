import Home from "./ui/home";
import About from "./ui/about";
import Projects from "./ui/projects";

export default function Page() {
    return (
        <main className="flex flex-col">
            <Home />
            <About />
            <Projects />
        </main>
    );
}
