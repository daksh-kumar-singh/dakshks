import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";

export const metadata = {
  title: "Site Map — Daksh K. Singh",
  description:
    "Accessible HTML sitemap providing links to all primary pages of Daksh Kumar Singh’s academic and professional website.",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "Curriculum Vitae (CV)" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Site Map" },
];

export default function SitemapPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12 prose dark:prose-invert">
        <h1>Site Map</h1>
        <p className="text-muted-foreground">
          This page provides direct links to all main sections of the site for
          ease of navigation and indexing.
        </p>

        <ul className="mt-6 grid gap-2 not-prose list-none pl-0">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="underline underline-offset-4 hover:text-[rgb(var(--p-gold))]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">
          Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
