"use client";

/**
 * Global, continuous particle system (singleton) that survives route changes.
 * - Creates ONE fixed, full-screen canvas attached to <body>
 * - Persists and keeps animating across Next.js page transitions
 * - If remounted, it resumes/ensures running instead of exiting early
 * - Theme-aware (reads CSS custom properties), reduced-motion aware
 */

import { useEffect } from "react";

type Options = {
  density?: number; // particles per 1000x1000 logical px
  maxSize?: number; // px
  speed?: { min: number; max: number }; // px/sec
  maxAlpha?: number; // 0..1
  links?: boolean;
};

const DEFAULTS: Required<Options> = {
  density: 110,
  maxSize: 2.2,
  speed: { min: 8, max: 18 },
  maxAlpha: 1.0,
  links: false,
};

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  life: number;
  ttl: number;
  color: [number, number, number];
};

type Ctrl = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  running: boolean;
  raf: number | null;
  particles: P[];
  opts: Required<Options>;
  dpr: number;
  resizeObs?: ResizeObserver;
  start: () => void;
  stop: () => void;
  ensureRunning: () => void;
  recalc: () => void;
};

// put controller on window so it survives remounts
declare global {
  interface Window {
    __particlesCtrl?: Ctrl;
  }
}

function readRGBVar(name: string, fallback: [number, number, number]): [number, number, number] {
  try {
    const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const parts = val.split(/\s+/).map((n) => parseFloat(n));
    if (parts.length >= 3 && parts.every((n) => Number.isFinite(n))) {
      return [parts[0], parts[1], parts[2]];
    }
  } catch {
    /* noop */
  }
  return fallback;
}

function createController(_opts: Options = {}): Ctrl {
  const opts: Required<Options> = { ...DEFAULTS, ..._opts };

  const canvas = document.createElement("canvas");
  canvas.id = "global-particles-canvas";
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.zIndex = "-10";
  canvas.style.pointerEvents = "none";
  canvas.style.userSelect = "none";
  canvas.style.opacity = "0.8";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d", { alpha: true })!;
  const ctrl: Ctrl = {
    canvas,
    ctx,
    running: false,
    raf: null,
    particles: [],
    opts,
    dpr: Math.max(1, Math.min(window.devicePixelRatio || 1, 2)),
    start,
    stop,
    ensureRunning,
    recalc,
    resizeObs: undefined,
  };

  // size canvas
  function size() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.floor(w * ctrl.dpr);
    canvas.height = Math.floor(h * ctrl.dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(ctrl.dpr, 0, 0, ctrl.dpr, 0, 0);
  }
  size();
  ctrl.resizeObs = new ResizeObserver(size);
  ctrl.resizeObs.observe(document.documentElement);

  // seed particles
  const targetForViewport = () => {
    const w = canvas.width / ctrl.dpr;
    const h = canvas.height / ctrl.dpr;
    const area = w * h;
    return Math.round((area / 1_000_000) * ctrl.opts.density);
  };

  function palette(): [number, number, number][] {
    const goldBright = readRGBVar("--p-rush", [218, 170, 0]);
    const goldMuted = readRGBVar("--p-gold", [207, 185, 145]);
    const steelGray = readRGBVar("--p-steel", [85, 89, 96]);
    const railGray = readRGBVar("--p-rail", [157, 151, 149]);
    return [goldBright, goldMuted, steelGray, railGray];
  }

  const rand = (min: number, max: number) => min + Math.random() * (max - min);
  const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

  function spawnParticle(edge?: boolean): P {
    const w = canvas.width / ctrl.dpr;
    const h = canvas.height / ctrl.dpr;
    const r = Math.max(0.8, rand(0.8, ctrl.opts.maxSize));
    const speed = rand(ctrl.opts.speed.min, ctrl.opts.speed.max) / 60;
    const angle = rand(0, Math.PI * 2);
    let x = rand(0, w);
    let y = rand(0, h);
    if (edge) {
      const side = Math.floor(Math.random() * 4);
      if (side === 0) { x = -10; y = rand(0, h); }
      if (side === 1) { x = w + 10; y = rand(0, h); }
      if (side === 2) { x = rand(0, w); y = -10; }
      if (side === 3) { x = rand(0, w); y = h + 10; }
    }
    const col = pick(palette());
    const ttl = rand(8000, 20000);
    const p: P = {
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r,
      a: 0,
      life: 0,
      ttl,
      color: col,
    };
    return p;
  }

  // build up to target
  const desired0 = targetForViewport();
  for (let i = 0; i < desired0; i++) {
    const p = spawnParticle(false);
    p.life = rand(0, p.ttl);
    p.a = Math.min(ctrl.opts.maxAlpha, p.life / 1200);
    ctrl.particles.push(p);
  }

  let last = performance.now();
  let adderId: number | null = null;

  function loop(now: number) {
    if (!ctrl.running) return;
    const dt = now - last;
    last = now;

    const w = canvas.width / ctrl.dpr;
    const h = canvas.height / ctrl.dpr;

    ctx.clearRect(0, 0, w, h);

    // tick/draw
    for (let i = ctrl.particles.length - 1; i >= 0; i--) {
      const p = ctrl.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life += dt;

      if (p.x < -20) p.x = w + 20;
      if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20;
      if (p.y > h + 20) p.y = -20;

      const fadeIn = Math.min(1, p.life / 400);
      const fadeOut = Math.max(0, (p.ttl - p.life) / 1000);
      p.a = Math.min(ctrl.opts.maxAlpha, fadeIn, fadeOut);

      if (p.life > p.ttl) {
        ctrl.particles.splice(i, 1);
        ctrl.particles.push(spawnParticle(true));
        continue;
      }

      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctrl.raf = requestAnimationFrame(loop);
  }

  function start() {
    if (ctrl.running) return;
    // reduced motion respect
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      ctrl.running = false;
      return;
    }
    ctrl.running = true;
    last = performance.now();
    ctrl.raf = requestAnimationFrame(loop);

    // keep adding up to a soft cap (1.5x target)
    const runAdder = () => {
      const desired = targetForViewport();
      const hardCap = Math.round(desired * 1.5);
      if (ctrl.particles.length < hardCap) {
        for (let i = 0; i < 6; i++) ctrl.particles.push(spawnParticle(true));
      }
    };
    if (adderId == null) {
      adderId = window.setInterval(runAdder, 1200);
    }
  }

  function stop() {
    // We generally DON'T stop on unmount; only on full unload if needed.
    ctrl.running = false;
    if (ctrl.raf != null) cancelAnimationFrame(ctrl.raf);
    ctrl.raf = null;
  }

  function ensureRunning() {
    // called when component remounts on a new route
    start();
  }

  function recalc() {
    // Re-seed colors for future spawns (existing particles keep their color)
    // Optionally we could also update all current particle colors here.
  }

  // Resume on visibility gain
  const onVisibility = () => {
    if (document.visibilityState === "visible") ensureRunning();
  };
  document.addEventListener("visibilitychange", onVisibility);

  // Track theme changes (optional hook point)
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const onTheme = () => recalc();
  try {
    mql.addEventListener?.("change", onTheme);
  } catch {
    mql.addListener?.(onTheme);
  }

  // DO NOT tear down on route change. We keep a persistent canvas/loop.
  // The only time we might want full cleanup is a hard reload/unload.
  window.addEventListener("beforeunload", () => {
    try {
      stop();
      ctrl.resizeObs?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      try {
        mql.removeEventListener?.("change", onTheme);
      } catch {
        mql.removeListener?.(onTheme);
      }
      // Leave canvas in DOM; browser will clear it on unload anyway.
    } catch {
      /* ignore */
    }
  });

  // Kick it off
  start();

  return ctrl;
}

export default function Particles(props: Options = {}) {
  useEffect(() => {
    // If controller already exists, ensure it's running
    if (window.__particlesCtrl) {
      window.__particlesCtrl.ensureRunning();
      return;
    }
    // else create it
    window.__particlesCtrl = createController(props);
    // No cleanup: keep singleton alive across route transitions
  }, [props]);

  return null;
}
