// src/components/site-footer.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Daksh K. Singh. Built with Next.js & Tailwind. All rights
          reserved.
        </p>

        <div className="mt-2">
          <Link
            href="/sitemap"
            className="underline underline-offset-4 hover:text-[rgb(var(--p-gold))]"
          >
            Site Map
          </Link>
        </div>
      </div>
    </footer>
  );
}