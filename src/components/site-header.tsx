"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change (hash change too)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, []);

  // Lock body scroll when menu is open (mobile nicety)
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand bg-[color:var(--tw-prose-body,transparent)]/70 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="text-base font-semibold tracking-tight hover:opacity-90">
            Daksh Kumar Singh
          </Link>
          <span className="hidden text-xs text-muted-foreground md:inline">
            ECE • Nanophotonics &amp; Quantum Optics
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="underline-offset-4 hover:underline">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-[rgb(var(--p-rush))] transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-[rgb(var(--p-rush))] transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-[rgb(var(--p-rush))] transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden border-t border-brand ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="mx-auto grid max-w-5xl gap-1 px-4 py-3">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 underline-offset-4 hover:underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
