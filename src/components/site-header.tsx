import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium">Daksh K. Singh</Link>
        <nav className="flex items-center gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm hover:opacity-80">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
