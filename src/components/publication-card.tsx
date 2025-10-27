import React from "react";
import type { Publication } from "@/data/publications";

type Props = Publication;

const badgeColor: Record<string, string> = {
  journal: "bg-[rgb(var(--p-rush))]/10 text-[rgb(var(--p-rush))]",
  conference: "bg-[rgb(var(--p-rush))]/10 text-[rgb(var(--p-rush))]",
  proceeding: "bg-[rgb(var(--p-rail))]/20 text-foreground",
  patent: "bg-[rgb(var(--p-steel))]/20 text-foreground",
};

export default function PublicationCard({
  type,
  title,
  authors,
  venue,
  year,
  doi,
  url,
  note,
}: Props) {
  const linkHref = doi ? `https://doi.org/${doi}` : url;
  const showBadge = (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${badgeColor[type] ?? "bg-muted text-foreground"}`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );

  return (
    <article className="card">
      <div className="flex items-start justify-between gap-2">
        <h3 className="m-0 text-lg font-semibold">{title}</h3>
        {showBadge}
      </div>

      <p className="mt-1 text-sm text-muted-foreground">{authors}</p>

      <p className="mt-1 text-sm">
        <em>{venue}</em> · <span>{year}</span>
        {note ? <> · <span className="text-muted-foreground">{note}</span></> : null}
      </p>

      {linkHref && (
        <p className="mt-2">
          <a
            className="underline underline-offset-4"
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {doi ? `https://doi.org/${doi}` : url}
          </a>
        </p>
      )}
    </article>
  );
}
