"use client";

export default function ParallaxRings({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ringGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(218,170,0,0.15)" />
            <stop offset="60%" stopColor="rgba(218,170,0,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={600}
            cy={200}
            r={(i + 1) * 80}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="2"
            className="ring-wave"
            style={{ transformOrigin: "600px 200px" }}
          />
        ))}
      </svg>
    </div>
  );
}
