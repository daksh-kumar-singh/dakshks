"use client";

import { useEffect, useRef, useState, ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** HTML tag to render. Use "span" inside list items to avoid breaking bullets. */
  as?: ElementType;
  className?: string;
  /** Optional stagger (ms) */
  delay?: number;
  /** If true, animate in once and never un-reveal */
  once?: boolean;
};

export default function Reveal({
  children,
  as: Tag = "span",
  className = "",
  delay = 0,
  once = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShow(true);
      setHasShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          setHasShown(true);
          if (once) {
            io.disconnect();
          }
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-base ${show ? "reveal-in" : hasShown ? "reveal-pending" : "reveal-pending"} ${
        Tag === "span" ? "block" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
