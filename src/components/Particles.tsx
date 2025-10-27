"use client";

import { useEffect, useRef } from "react";

export default function Particles({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    // Respect reduced motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const particles = Array.from({ length: 28 }).map(() => {
      const r = Math.random() * 1.5 + 0.5;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: r * devicePixelRatio,
        a: Math.random() * Math.PI * 2,
        s: 0.2 + Math.random() * 0.6, // speed
        o: 0.2 + Math.random() * 0.5, // opacity
      };
    });

    const gold = "rgba(218,170,0,";
    const gray = "rgba(157,151,149,";

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // faint orbit guide (centered)
      const orbitR = Math.min(w, h) * 0.25;
      const center = { x: w / 2, y: h / 2 };
      ctx.lineWidth = 1 * devicePixelRatio;
      [0.5, 1, 1.5].forEach((m) => {
        ctx.strokeStyle = `${gray}${0.18})`;
        ctx.beginPath();
        ctx.arc(center.x, center.y, orbitR * m, 0, Math.PI * 2);
        ctx.stroke();
      });

      // particles
      particles.forEach((p) => {
        p.a += 0.002 * p.s;
        p.x += Math.cos(p.a) * 0.3 * devicePixelRatio;
        p.y += Math.sin(p.a) * 0.3 * devicePixelRatio;

        ctx.beginPath();
        ctx.fillStyle = `${gold}${0.35 + p.o * 0.65})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    draw();
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className={`absolute inset-0 -z-10 ${className}`} aria-hidden="true" />;
}
