import { Github, Link as LinkIcon } from "lucide-react";

export function SocialLinks() {
  const items = [
    { label: "ORCID", href: "https://orcid.org/0009-0004-8334-8500" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=AW-RqKsAAAAJ&hl=en" },
    { label: "arXiv", href: "https://arxiv.org/a/dakshkumarsingh.html" },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/Daksh-Kumar-Singh" },
    { label: "GitHub", href: "https://github.com/daksh-kumar-singh", icon: <Github size={16}/> },
  ];
  return (
    <nav aria-label="Social links" className="flex flex-wrap gap-3">
      {items.map((it) => (
        <a key={it.label} href={it.href} className="text-sm underline-offset-4 hover:underline flex items-center gap-1"
           target="_blank" rel="noopener noreferrer">
          {it.icon ?? <LinkIcon size={16}/>}
          {it.label}
        </a>
      ))}
    </nav>
  );
}
