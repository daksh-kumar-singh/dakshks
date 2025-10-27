"use client";

import { useEffect, useRef, useState, ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** HTML tag to render. Use "span" inside list items to avoid breaking bullets. */
  as?: ElementType;
  className?: string;
  /** Optional stagger (ms) */
  delay?: number;
};

export default function Reveal({
  children,
  as: Tag = "span",
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${show ? "reveal-in" : "reveal-pending"} ${
        // ensure inline-friendly default for list items
        Tag === "span" ? "block" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
