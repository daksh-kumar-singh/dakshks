"use client";

/**
 * Composite background (no media files):
 * - Animated gold "blobs" (CSS)
 * - Film grain (CSS)
 * - Optional canvas particles
 * - Respects prefers-reduced-motion
 */
import Particles from "./Particles";

export default function QuantumBackground({
  particles = true,
  className = "",
}: {
  particles?: boolean;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`} aria-hidden="true">
      {/* Blobs */}
      <div className="absolute inset-0 qb-blob qb-1" />
      <div className="absolute inset-0 qb-blob qb-2" />
      <div className="absolute inset-0 qb-blob qb-3" />

      {/* Film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />

      {/* Particles */}
      {particles ? <Particles /> : null}
    </div>
  );
}
