import italk from "./imgs/italk2.png";
import ecomar from "./imgs/ecomar.png";
import Project from "./project";

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen px-4 py-16 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-[#1C1C1C] text-[#F5F5F5]"
        >
            <h1
                data-aos="fade-right"
                data-aos-out="fade-left"
                className="gold text-transparent bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-12"
            >
                Projetos
            </h1>
            <div className="flex flex-col gap-12">
                <div data-aos="fade-right" data-aos-out="fade-left">
                    <Project
                        title="iTalk"
                        image={italk}
                        description="Aplicação web de rede social desenvolvida com Next.js 14 (Front-end), Node.js e Express.js (Back-end),
                    TailwindCSS (estilização) Suas principais funcionalidades são um sistema de cadastro e login com autenticação via NextAuth.js
                    e uma API RESTful integrada ao PostgreSQL usando Prisma ORM (banco de dados relacional)"
                        deploy="https://italk-zeta.vercel.app/"
                        repo="https://github.com/guilhermevnbraga/AuthConnect"
                    />
                </div>
                <div data-aos="fade-right" data-aos-out="fade-left">
                    <Project
                        title="EcoMar"
                        image={ecomar}
                        description="O projeto EcoMar foi desenvolvido como parte do meu trabalho final na plataforma Programadores do Amanhã (PDA).
                    Trata-se de uma plataforma inovadora que conecta comunidades envolvidas na preservação marinha, facilita a gestão de coleta de resíduos no mar e
                    promove ações sustentáveis através de ferramentas integradas."
                        deploy="https://ecomar.vercel.app"
                        repo="https://github.com/reury-cardoso/ecoMar-finalproject-frontend"
                    />
                </div>
            </div>
        </section>
    );
}
