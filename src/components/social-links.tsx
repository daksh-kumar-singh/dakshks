import { Github, Link as LinkIcon, Linkedin } from "lucide-react";

export function SocialLinks() {
  const baseIconSize = 16;

  const items = [
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0004-8334-8500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className="transition-transform duration-150 delay-0 group-hover:scale-110"
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
      ),
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=AW-RqKsAAAAJ&hl=en",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className="transition-transform duration-150 delay-0 group-hover:scale-110"
        >
          <path d="M12 2L1 9l11 7 9-5.73V17h2V9L12 2zm0 13L3.74 9 12 4.27 20.26 9 12 15z" />
        </svg>
      ),
    },
    {
      label: "arXiv",
      href: "http://arxiv.org/a/singh_d_7",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className="transition-transform duration-150 delay-0 group-hover:scale-110"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l6 8h-4v6h-4v-6H6l6-8z" />
        </svg>
      ),
    },
    {
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Daksh-Kumar-Singh",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={baseIconSize}
          height={baseIconSize}
          fill="currentColor"
          className="transition-transform duration-150 delay-0 group-hover:scale-110"
        >
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.5 5H8v8h1.5v-3h1.4l1.8 3H14l-2-3.2a2.3 2.3 0 0 0 1.8-2.3c0-1.5-1-2.5-2.3-2.5zM9.5 9.5h2a1 1 0 1 1 0 2h-2v-2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/daksh-kumar-singh",
      icon: (
        <Linkedin
          size={baseIconSize}
          className="transition-transform duration-150 delay-0 group-hover:scale-110"
        />
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/daksh-kumar-singh",
      icon: (
        <Github
          size={baseIconSize}
          className="transition-transform duration-150 delay-0 group-hover:scale-110"
        />
      ),
    },
  ];

  return (
    <nav aria-label="Social links" className="flex flex-wrap gap-3">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group flex items-center gap-1 text-sm underline-offset-4
            text-muted-foreground transition-colors duration-200 delay-75
            hover:text-[rgb(var(--p-gold))]
            dark:text-muted-foreground dark:hover:text-[rgb(var(--p-gold))]
          `}
        >
          {it.icon ?? (
            <LinkIcon
              size={baseIconSize}
              className="transition-transform duration-150 delay-0 group-hover:scale-110"
            />
          )}
          {it.label}
        </a>
      ))}
    </nav>
  );
}
