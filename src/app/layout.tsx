import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Owen Park's Portfolio",
    description: "A portfolio site by Owen Park",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full scroll-smooth">
            <body
                className={cn(
                    "relative h-full font-sans antialiased",
                    inter.className,
                )}
            >
                <main className="relative flex flex-col min-h-screen">
                    <div className="flex-grow flex-1">{children}</div>
                </main>
            </body>
        </html>
    );
}
