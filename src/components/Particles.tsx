"use client";

/**
 * Global, continuous particle system (singleton).
 * - Creates one fixed, full-screen canvas and keeps it running across pages.
 * - Subsequent mounts are NO-OPs (we keep only one instance).
 * - Theme-aware (reads CSS variables for gold/gray).
 * - Reduced-motion friendly.
 */
import { useEffect } from "react";

type Options = {
  /** particles per 1000x1000 logical pixels (density) */
  density?: number;
  /** maximum particle size in px */
  maxSize?: number;
  /** speed range (px per second) */
  speed?: { min: number; max: number };
  /** maximum opacity */
  maxAlpha?: number;
  /** whether to draw faint links between close particles */
  links?: boolean;
};

const DEFAULTS: Required<Options> = {
  density: 140, // higher = more particles
  maxSize: 2.2,
  speed: { min: 8, max: 28 },
  maxAlpha: 0.9,
  links: false,
};

function readRGBVar(name: string, fallback: [number, number, number]): [number, number, number] {
  try {
    const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    // Expecting "r g b" numbers per your globals.css custom props
    const parts = val.split(/\s+/).map((n) => parseFloat(n));
    if (parts.length >= 3 && parts.every((n) => Number.isFinite(n))) {
      return [parts[0], parts[1], parts[2]];
    }
  } catch {
    /* noop */
  }
  return fallback;
}

export default function Particles(_props: Options = {}) {
  useEffect(() => {
    // Respect reduced motion
    const reduce = typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Singleton canvas
    const EXISTING_ID = "global-particles-canvas";
    let canvas = document.getElementById(EXISTING_ID) as HTMLCanvasElement | null;
    if (canvas) {
      // Already running; do nothing (keep a single particle system for the app)
      return;
    }

    const opts: Required<Options> = { ...DEFAULTS, ..._props };

    // Create and mount canvas
    canvas = document.createElement("canvas");
    canvas.id = EXISTING_ID;
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-10";
    canvas.style.pointerEvents = "none";
    canvas.style.userSelect = "none";
    // slight transparency via compositing
    canvas.style.opacity = "0.8";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d", { alpha: true })!;
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2)); // cap DPR for perf

    // Sizing
    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    // Colors from CSS custom properties
    const goldBright = readRGBVar("--p-rush", [218, 170, 0]); // Rush Gold
    const goldMuted = readRGBVar("--p-gold", [207, 185, 145]); // CFB991-ish
    const steelGray = readRGBVar("--p-steel", [85, 89, 96]);
    const railGray = readRGBVar("--p-rail", [157, 151, 149]);

    // Particle data
    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number; // alpha
      life: number;
      ttl: number;
      color: [number, number, number];
    };
    const particles: P[] = [];

    // Target particle count based on area & density
    const targetForViewport = () => {
      const area = (canvas!.width / dpr) * (canvas!.height / dpr); // logical px
      return Math.round((area / 1_000_000) * opts.density); // density per 1000x1000
    };

    // Random helpers
    const rand = (min: number, max: number) => min + Math.random() * (max - min);
    const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

    function spawnParticle(edge?: boolean): P {
      const w = canvas!.width / dpr;
      const h = canvas!.height / dpr;
      const r = Math.max(0.8, rand(0.8, opts.maxSize));
      const speed = rand(opts.speed.min, opts.speed.max) / 60; // per frame @ ~60fps
      const angle = rand(0, Math.PI * 2);
      let x = rand(0, w);
      let y = rand(0, h);

      // If spawning at edges, bias to edges for nicer flow
      if (edge) {
        const side = Math.floor(Math.random() * 4);
        if (side === 0) { x = -10; y = rand(0, h); }
        if (side === 1) { x = w + 10; y = rand(0, h); }
        if (side === 2) { x = rand(0, w); y = -10; }
        if (side === 3) { x = rand(0, w); y = h + 10; }
      }

      const palette: [number, number, number][] = [
        goldBright,
        goldMuted,
        steelGray,
        railGray,
      ];
      const color = pick(palette);
      const ttl = rand(8_000, 20_000); // ms
      const p: P = {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r,
        a: 0, // fade in
        life: 0,
        ttl,
        color,
      };
      return p;
    }

    // Seed initial particles up to target
    let desired = targetForViewport();
    for (let i = 0; i < desired; i++) {
      const p = spawnParticle(false);
      // distribute life so they are at different phases
      p.life = rand(0, p.ttl);
      p.a = Math.min(opts.maxAlpha, p.life / 1200); // quick fade in
      particles.push(p);
    }

    // Continuously add a few more (up to 1.5x target) for a “more everywhere” feel
    let hardCap = Math.round(desired * 1.5);
    const adder = setInterval(() => {
      desired = targetForViewport();
      hardCap = Math.round(desired * 1.5);
      if (particles.length < hardCap) {
        for (let i = 0; i < 6; i++) {
          particles.push(spawnParticle(true));
        }
      }
    }, 1200);

    // Animation loop
    let raf = 0;
    let last = performance.now();
    function frame(now: number) {
      const dt = now - last;
      last = now;

      const w = canvas!.width / dpr;
      const h = canvas!.height / dpr;

      // Clear with subtle composite for softer trails
      ctx.clearRect(0, 0, w, h);

      // Update/draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // integrate
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life += dt;

        // wrap around edges for continuous presence
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        // alpha ramp in/out
        const fadeIn = Math.min(1, p.life / 400);
        const fadeOut = Math.max(0, (p.ttl - p.life) / 1000);
        p.a = Math.min(opts.maxAlpha, fadeIn, fadeOut);

        // kill and respawn
        if (p.life > p.ttl) {
          particles.splice(i, 1);
          particles.push(spawnParticle(true));
          continue;
        }

        // draw
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Optional links between close particles (disabled by default for perf/cleanliness)
      // if (opts.links) { ...draw lines... }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    // Listen for theme changes dynamically (swap palette without reloading)
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const themeRecalc = () => {
      // We don't need to do anything heavy; colors are read at spawn time.
      // If you want live tint change, you could rebuild particles here.
    };
    try {
      mql.addEventListener?.("change", themeRecalc);
    } catch {
      mql.addListener?.(themeRecalc);
    }

    // Cleanup: keep canvas around (singleton), but stop loops if page unloaded
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      // Do NOT remove the canvas — keep singleton across route changes.
      clearInterval(adder);
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      try {
        mql.removeEventListener?.("change", themeRecalc);
      } catch {
        mql.removeListener?.(themeRecalc);
      }
      ro.disconnect();
    };
  }, [_props]);

  // Headless: the global canvas is inserted into <body>, so render nothing here.
  return null;
}
