import { Source_Sans_3 } from "next/font/google";

const sans = Source_Sans_3({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["latin"],
});

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col min-h-screen bg-[#3A3A3A] justify-evenly px-4 py-16 sm:px-8 md:px-16 lg:px-32 xl:px-48"
        >
            <h1
                data-aos="fade-right"
                data-aos-out="fade-left"
                className="gold text-transparent bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-12"
            >
                Sobre mim
            </h1>
            <article
                className={`${sans.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] leading-relaxed max-w-4xl lg:max-w-full`}
            >
                <p data-aos="fade-right" data-aos-out="fade-left">
                    Crio aplicações web completas, do Front-end ao Back-end,
                    focadas em alta performance e experiência do usuário. Meu
                    objetivo? Entregar soluções que sejam:
                </p>
                <br />
                <p data-aos="fade-right" data-aos-out="fade-left">
                    🚀 Rápidas e responsivas - Desenvolvidas com Next.js e
                    TypeScript para um desempenho impecável em qualquer
                    dispositivo;
                </p>
                <br />
                <p data-aos="fade-right" data-aos-out="fade-left">
                    💡 Fáceis de usar - Interfaces intuitivas e bem
                    estruturadas, estilizadas com TailwindCSS;
                </p>
                <br />
                <p data-aos="fade-right" data-aos-out="fade-left">
                    📈 Prontas para crescer - Back-end robusto (Node.js +
                    PostgreSQL) com arquitetura escalável.
                </p>
                <br />
                <p data-aos="fade-right" data-aos-out="fade-left">
                    Trabalho com metodologias ágeis e boas práticas de código
                    para garantir projetos eficientes e de fácil manutenção. Se
                    você busca um desenvolvedor comprometido em transformar sua
                    ideia em um produto funcional e moderno, vamos conversar!
                </p>
            </article>
        </section>
    );
}
