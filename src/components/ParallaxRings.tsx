"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

export default function ParallaxRings({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  const shouldAnimate = () => {
    if (typeof window === "undefined") return false;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const paused = document.documentElement.classList.contains("no-anim");
    return !(reduce || paused);
  };

  useEffect(() => {
    const el = ref.current!;
    let rot = 0;

    const tick = () => {
      if (shouldAnimate()) {
        rot += 0.02; /* very subtle */
        el.style.transform = `rotate(${rot}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const obs = new MutationObserver(() => {});
    mq.addEventListener?.("change", () => {});
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      mq.removeEventListener?.("change", () => {});
      obs.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "pointer-events-none relative mx-auto aspect-[12/3] w-full opacity-70 will-change-transform",
        className
      )}
      aria-hidden="true"
    >
      {/* your ring SVGs or divs go here */}
      <div className="absolute inset-0 rounded-full border border-yellow-700/30" />
      <div className="absolute inset-6 rounded-full border border-yellow-700/20" />
      <div className="absolute inset-12 rounded-full border border-yellow-700/10" />
    </div>
  );
}