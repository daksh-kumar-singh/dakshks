"use client";

import React from "react";

type Props = {
  className?: string;
};

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export default function ParallaxRings({ className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cx("relative w-full select-none", className)}
    >
      {/* container to keep height */}
      <div className="h-full w-full">
        {/* outer ring */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="mx-auto h-full w-full max-w-3xl opacity-30">
              <div
                className="
                  h-full w-full rounded-full border
                  border-[rgb(var(--p-rail))]/40
                "
                style={{
                  boxShadow:
                    "0 0 60px rgba(var(--p-rail), 0.15), inset 0 0 40px rgba(var(--p-rail), 0.08)",
                }}
              />
            </div>
          </div>
        </div>

        {/* inner ring */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-6 top-2 h-[85%] w-[85%]">
            <div className="h-full w-full rounded-full border border-[rgb(var(--p-gold))]/35" />
          </div>
        </div>

        {/* center dot */}
        <div className="pointer-events-none absolute inset-0 -z-10 grid place-items-center">
          <div className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--p-rush))]/70" />
        </div>
      </div>
    </div>
  );
}