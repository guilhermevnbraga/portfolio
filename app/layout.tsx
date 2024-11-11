import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Guilherme Braga Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased ${nunito.className}`}>
                {children}
            </body>
        </html>
    );
}
