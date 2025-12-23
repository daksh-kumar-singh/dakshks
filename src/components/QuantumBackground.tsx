"use client";

/**
 * Composite background (STATIC):
 * - Soft static Purdue-colored particles
 * - Film grain overlay
 * - No animations, no JS loops
 * - Fully accessibility-safe
 */

export default function QuantumBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-clip [contain:paint] ${className}`}
      aria-hidden="true"
    >
      {/* Static particles */}
      <div className="absolute inset-0">
        <span className="static-particle sp-1" />
        <span className="static-particle sp-2" />
        <span className="static-particle sp-3" />
        <span className="static-particle sp-4" />
        <span className="static-particle sp-5" />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
    </div>
  );
}
