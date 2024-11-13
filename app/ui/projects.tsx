import italk from "./imgs/italk2.png";
import ecomar from "./imgs/EcoMar.png";
import Project from "./project";

export default function Projects() {
    return (
        <section className="min-h-screen p-32 bg-[#1C1C1C] text-[#F5F5F5]">
            <h1 className="gold text-transparent bg-clip-text w-fit text-7xl mb-12">
                My Projects
            </h1>
            <div className="flex flex-col gap-12">
                <Project
                    title="iTalk"
                    image={italk}
                    description="Social networking web application developed using Next.js 14, Node.js, Express.js, and TailwindCSS. 
                                It features a registration and login system with authentication powered by NextAuth.js.
                                The API leverages Prisma ORM and PostgreSQL as the database."
                />
                <Project
                    title="EcoMar"
                    image={ecomar}
                    description="The EcoMar project was developed as part of my final project on the Programadores do Amanhã (PDA) platform.
                                EcoMar is an innovative platform that connects communities and facilitates the management and promotion of
                                marine waste collection."
                />
            </div>
        </section>
    );
}
