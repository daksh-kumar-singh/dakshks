"use client";

import { Github, Link as LinkIcon, Linkedin } from "lucide-react";

function External({
  href,
  children,
  title,
}: {
  href: string;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`
        group inline-flex items-center gap-1 text-sm underline-offset-4
        text-muted-foreground transition-colors duration-200
        hover:text-[rgb(var(--p-gold))] focus:text-[rgb(var(--p-gold))]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgb(var(--p-gold))]
        rounded-sm
      `}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function SocialLinks() {
  const baseIconSize = 16;

  // Reusable class for tasteful hover scaling that respects reduced motion
  const iconCls =
    "motion-safe:transition-transform motion-safe:duration-150 group-hover:scale-110";

  return (
    <nav aria-label="Social links" className="flex flex-wrap gap-3">
      {/* ORCID — keep visible text exactly "ORCID iD" to satisfy the label/name rule */}
      <External
        href="https://orcid.org/0009-0004-8334-8500"
        title="ORCID iD (opens in a new tab)"
      >
        {/* Custom ORCID glyph */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className={iconCls}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="10"
            fill="black"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            iD
          </text>
        </svg>
        ORCID iD
      </External>

      <External
        href="https://scholar.google.com/citations?user=AW-RqKsAAAAJ&hl=en"
        title="Google Scholar (opens in a new tab)"
      >
        {/* Simple “Scholar” house/roof mark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className={iconCls}
          aria-hidden="true"
        >
          <path d="M12 2 1 9l11 7 9-5.73V17h2V9L12 2Zm0 13L3.74 9 12 4.27 20.26 9 12 15Z" />
        </svg>
        Google Scholar
      </External>

      <External
        href="http://arxiv.org/a/singh_d_7"
        title="arXiv author page (opens in a new tab)"
      >
        {/* Circular a/x motif */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className={iconCls}
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 3 6 8h-4v6h-4v-6H6l6-8z" />
        </svg>
        arXiv
      </External>

      <External
        href="https://www.researchgate.net/profile/Daksh-Kumar-Singh"
        title="ResearchGate (opens in a new tab)"
      >
        {/* RG monogram-style box */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className={iconCls}
          aria-hidden="true"
        >
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.5 5H8v8h1.5v-3h1.4l1.8 3H14l-2-3.2a2.3 2.3 0 0 0 1.8-2.3c0-1.5-1-2.5-2.3-2.5zM9.5 9.5h2a1 1 0 1 1 0 2h-2v-2z" />
        </svg>
        ResearchGate
      </External>

      <External
        href="https://www.linkedin.com/in/daksh-kumar-singh"
        title="LinkedIn (opens in a new tab)"
      >
        <Linkedin size={baseIconSize} className={iconCls} aria-hidden="true" />
        LinkedIn
      </External>

      <External
        href="https://github.com/daksh-kumar-singh"
        title="GitHub (opens in a new tab)"
      >
        <Github size={baseIconSize} className={iconCls} aria-hidden="true" />
        GitHub
      </External>
    </nav>
  );
}
