"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealProps = {
  /** The element to render (defaults to 'div'). */
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  /** Optional stagger (ms). */
  delay?: number;
  /** If true, animate in once and never un-reveal. */
  once?: boolean;

  /* Common explicit props (no ...rest) */
  id?: string;
  role?: string;
  tabIndex?: number;
  ariaLabel?: string;       // maps to aria-label
  ariaHidden?: boolean;     // maps to aria-hidden
  title?: string;
};

export default function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  once = false,
  id,
  role,
  tabIndex,
  ariaLabel,
  ariaHidden,
  title,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduce) {
      el.classList.add("reveal-in");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-in");
          if (once) io.disconnect();
        } else if (!once) {
          el.classList.remove("reveal-in");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      id={id}
      role={role}
      tabIndex={typeof tabIndex === "number" ? tabIndex : undefined}
      aria-label={ariaLabel}
      aria-hidden={typeof ariaHidden === "boolean" ? ariaHidden : undefined}
      title={title}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={["reveal-base", className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
