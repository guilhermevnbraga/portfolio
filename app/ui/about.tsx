import { Source_Sans_3 } from "next/font/google";

const sans = Source_Sans_3({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["latin"],
});

export default function About() {
    return (
        <section className="flex flex-col min-h-screen p-32 bg-[#3A3A3A] justify-evenly">
            <h1 className="bg-gradient-to-r from-[#8F612D] via-[#EADF86] to-[#8F612D] text-transparent bg-clip-text font-bold text-7xl w-fit mb-12">
                About me
            </h1>
            <article className={`${sans.className} text-4xl indent-12 text-[#F5F5F5]`}>
                <p>
                    Hi, I'm Guilherme, and I currently live in Pernambuco,
                    Brazil. I am a Full Stack Web Developer specializing in
                    responsive and dynamic applications using TypeScript. On the
                    Front-End, I work with the Next.js framework, built on
                    React.js, along with TailwindCSS for interface styling. On
                    the Back-End, I use Node.js, Prisma, and PostgreSQL,
                    focusing on high performance and scalability.
                </p><br />
                <p>
                    I have a strong interest in continuously expanding my
                    skills, which has led me to develop knowledge in areas
                    beyond my main stack, such as computer vision with Python
                    and C++ programming for robotics and microprocessor
                    electronics.
                </p><br />
                <p>
                    My experience includes collaborating in development teams,
                    where I have honed the necessary soft skills to work
                    efficiently and agilely, both under leadership and in team
                    leadership roles.
                </p>
            </article>
        </section>
    );
}
