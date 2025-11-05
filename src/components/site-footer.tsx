import { SocialLinks } from "./social-links";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-5xl px-4 py-10 grid gap-4">
        <SocialLinks />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Daksh K. Singh. Built with Next.js & Tailwind. All rights reserved.
        </p>
        <Link href="/sitemap" className="underline underline-offset-4 hover:text-[rgb(var(--p-gold))]">
          Site Map
        </Link>
      </div>
    </footer>
  );
}
