import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { EB_Garamond, Inter } from "next/font/google";

const ebg = EB_Garamond({ subsets: ["latin"], variable: "--font-ebg" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Daksh K. Singh — Student Researcher",
  description: "Student-scientist portfolio: research, publications, projects, CV, contact.",
  metadataBase: new URL("https://dakshks.com"),
  openGraph: { title: "Daksh K. Singh", description: "Research & projects", type: "website" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ebg.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}