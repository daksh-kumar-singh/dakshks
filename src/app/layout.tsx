import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import QuantumBackground from "@/components/QuantumBackground";
import SideMolecules from "@/components/SideMolecules";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Daksh K. Singh — Student Researcher",
  description:
    "Student-scientist portfolio: research, publications, projects, CV, contact.",
  metadataBase: new URL("https://dakshks.com"),
  openGraph: {
    title: "Daksh K. Singh",
    description: "Research & projects",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            {/* Global static background */}
            <QuantumBackground />

            {/* Side molecules (if still desired) */}
            <SideMolecules />

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
