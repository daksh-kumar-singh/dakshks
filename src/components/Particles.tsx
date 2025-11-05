"use client";

/**
 * Global, continuous particle system (singleton) that survives route changes.
 * Accessibility:
 *  - Respects prefers-reduced-motion
 *  - Pauses when <html> has the .no-anim class (toggled in SiteHeader)
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
  mql?: MediaQueryList;
  htmlObserver?: MutationObserver;
  adderId?: number | null;
  start: () => void;
  stop: () => void;
  ensureRunning: () => void;
  recalc: () => void;
  shouldRun: () => boolean;
};

// put controller on window so it survives remounts
declare global {
  interface Window {
    __particlesCtrl?: Ctrl;
  }
}

function readRGBVar(
  name: string,
  fallback: [number, number, number]
): [number, number, number] {
  try {
    const val = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
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
  canvas.setAttribute("aria-hidden", "true");
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
    resizeObs: undefined,
    mql: undefined,
    htmlObserver: undefined,
    adderId: null,
    start,
    stop,
    ensureRunning,
    recalc,
    shouldRun,
  };

  function shouldRun() {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const paused = document.documentElement.classList.contains("no-anim");
    return !(reduce || paused);
  }

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
      if (side === 0) {
        x = -10;
        y = rand(0, h);
      }
      if (side === 1) {
        x = w + 10;
        y = rand(0, h);
      }
      if (side === 2) {
        x = rand(0, w);
        y = -10;
      }
      if (side === 3) {
        x = rand(0, w);
        y = h + 10;
      }
    }
    const col = pick(palette());
    const ttl = rand(8000, 20000);
    const p: P = {
      x,
      y,
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

  function loop(now: number) {
    if (!ctrl.running) return;

    // If settings changed mid-loop, bail and stop cleanly
    if (!ctrl.shouldRun()) {
      stop();
      return;
    }

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
    if (!ctrl.shouldRun()) {
      // If we shouldn't run, ensure timers are cleared
      stop();
      return;
    }
    ctrl.running = true;
    last = performance.now();
    ctrl.raf = requestAnimationFrame(loop);

    // keep adding up to a soft cap (1.5x target) while running
    const runAdder = () => {
      if (!ctrl.running) return;
      const desired = targetForViewport();
      const hardCap = Math.round(desired * 1.5);
      if (ctrl.particles.length < hardCap) {
        for (let i = 0; i < 6; i++) ctrl.particles.push(spawnParticle(true));
      }
    };
    if (!ctrl.adderId) ctrl.adderId = window.setInterval(runAdder, 1200);
  }

  function stop() {
    ctrl.running = false;
    if (ctrl.raf != null) cancelAnimationFrame(ctrl.raf);
    ctrl.raf = null;
    if (ctrl.adderId) {
      clearInterval(ctrl.adderId);
      ctrl.adderId = null;
    }
    // Clear the canvas so a paused state isn’t “frozen”
    const w = canvas.width / ctrl.dpr;
    const h = canvas.height / ctrl.dpr;
    ctx.clearRect(0, 0, w, h);
  }

  function ensureRunning() {
    if (ctrl.shouldRun()) start();
    else stop();
  }

  function recalc() {
    // Color palette will be used for future spawns. Existing particles keep their color.
  }

  // Visibility: resume when tab becomes visible (if allowed)
  const onVisibility = () => {
    if (document.visibilityState === "visible") ensureRunning();
  };
  document.addEventListener("visibilitychange", onVisibility);

  // Listen for OS reduced-motion changes
  ctrl.mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mqlHandler = () => ensureRunning();
  try {
    ctrl.mql.addEventListener?.("change", mqlHandler);
  } catch {
    ctrl.mql.addListener?.(mqlHandler);
  }

  // Listen for .no-anim class changes on <html>
  ctrl.htmlObserver = new MutationObserver(() => ensureRunning());
  ctrl.htmlObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Keep responsive
  window.addEventListener("beforeunload", () => {
    try {
      stop();
      ctrl.resizeObs?.disconnect();
      ctrl.htmlObserver?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      try {
        ctrl.mql?.removeEventListener?.("change", mqlHandler);
      } catch {
        ctrl.mql?.removeListener?.(mqlHandler);
      }
    } catch {
      /* ignore */
    }
  });

  // Kick it off
  ensureRunning();

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