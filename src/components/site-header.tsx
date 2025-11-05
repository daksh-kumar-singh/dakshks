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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [paused, setPaused] = useState(false);

  /* ---------------- Theme persistence ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (sysDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  /* ---------------- Animation pause (a11y) ---------------- */
  // Initialize from localStorage OR prefers-reduced-motion
  useEffect(() => {
    const stored = localStorage.getItem("animPaused");
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const shouldPause = stored === "true" || m?.matches || false;
    setPaused(!!shouldPause);
  }, []);

  // Apply/remove .no-anim on <html>
  useEffect(() => {
    const el = document.documentElement;
    if (paused) el.classList.add("no-anim");
    else el.classList.remove("no-anim");
    localStorage.setItem("animPaused", String(paused));
  }, [paused]);

  /* ---------------- Menu behavior ---------------- */
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand bg-[color:var(--tw-prose-body,transparent)]/70 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight hover:opacity-90"
          >
            Daksh Kumar Singh
          </Link>
          <span className="hidden text-xs text-muted-foreground md:inline">
            ECE • Nanophotonics &amp; Quantum Optics
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="underline-offset-4 hover:underline"
            >
              {n.label}
            </Link>
          ))}

          {/* Pause animations toggle (a11y) */}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-label={paused ? "Resume animations" : "Pause animations"}
            title={paused ? "Resume animations" : "Pause animations"}
            className="ml-3 flex h-8 items-center justify-center rounded-lg border border-brand px-3 text-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600/60"
          >
            {paused ? "Play animations" : "Pause animations"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-brand hover:bg-muted transition-colors"
          >
            {theme === "dark" ? (
              <span className="text-lg" role="img" aria-label="Light mode">
                ☀️
              </span>
            ) : (
              <span className="text-lg" role="img" aria-label="Dark mode">
                🌙
              </span>
            )}
          </button>
        </nav>

        {/* Mobile controls: pause + theme + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-label={paused ? "Resume animations" : "Pause animations"}
            title={paused ? "Resume animations" : "Pause animations"}
            className="flex h-9 items-center justify-center rounded-lg border border-brand px-3 text-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600/60"
          >
            {paused ? "Play" : "Pause"}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand hover:bg-muted transition-colors"
          >
            {theme === "dark" ? (
              <span className="text-lg" role="img" aria-label="Light mode">
                ☀️
              </span>
            ) : (
              <span className="text-lg" role="img" aria-label="Dark mode">
                🌙
              </span>
            )}
          </button>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand"
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