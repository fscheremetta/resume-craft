import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "../styles/globals.css";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontTitle = Nunito({
    subsets: ["latin"],
    variable: "--font-title",
});

export const metadata: Metadata = {
    title: "Resume Craft",
    description: "Craft your resume with ease",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontTitle.variable,
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
