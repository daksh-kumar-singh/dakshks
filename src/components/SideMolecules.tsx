"use client";

export default function SideMolecules() {
  return (
    <>
      {/* Left molecule */}
      <div
        className="pointer-events-none fixed left-[-80px] top-1/4 hidden lg:block -z-10"
        aria-hidden="true"
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="mol-spin-slow mol-float"
        >
          <g fill="none" stroke="rgba(157,151,149,0.35)" strokeWidth="1.5">
            <circle cx="150" cy="150" r="70" />
            <circle cx="150" cy="150" r="110" />
            <circle cx="150" cy="150" r="145" />
            <line x1="150" y1="5" x2="150" y2="295" />
            <line x1="5" y1="150" x2="295" y2="150" />
          </g>
          <g>
            <circle cx="150" cy="40" r="5" fill="rgba(218,170,0,0.85)" />
            <circle cx="260" cy="150" r="5" fill="rgba(218,170,0,0.5)" />
            <circle cx="150" cy="260" r="5" fill="rgba(218,170,0,0.65)" />
            <circle cx="40" cy="150" r="5" fill="rgba(218,170,0,0.35)" />
          </g>
        </svg>
      </div>

      {/* Right molecule */}
      <div
        className="pointer-events-none fixed right-[-80px] bottom-1/4 hidden lg:block -z-10"
        aria-hidden="true"
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="mol-spin-slower mol-float-rev"
        >
          <g fill="none" stroke="rgba(157,151,149,0.35)" strokeWidth="1.5">
            <ellipse cx="150" cy="150" rx="140" ry="90" />
            <ellipse cx="150" cy="150" rx="90" ry="140" />
          </g>
          <g>
            <circle cx="220" cy="90" r="5" fill="rgba(218,170,0,0.6)" />
            <circle cx="90" cy="220" r="5" fill="rgba(218,170,0,0.85)" />
            <circle cx="80" cy="80" r="4" fill="rgba(218,170,0,0.4)" />
          </g>
        </svg>
      </div>
    </>
  );
}
