export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  code?: string;
  abstract?: string;
};

export default function PublicationCard(p: Publication) {
  return (
    <article className="rounded-2xl border p-4 grid gap-2">
      <h3 className="font-medium">{p.title}</h3>
      <p className="text-sm">{p.authors}</p>
      <p className="text-sm text-muted-foreground">{p.venue} · {p.year}</p>
      <div className="text-sm flex flex-wrap gap-3">
        {p.doi && <a className="underline underline-offset-4" href={`https://doi.org/${p.doi}`} target="_blank">DOI</a>}
        {p.arxiv && <a className="underline underline-offset-4" href={p.arxiv} target="_blank">arXiv</a>}
        {p.pdf && <a className="underline underline-offset-4" href={p.pdf} target="_blank">PDF</a>}
        {p.code && <a className="underline underline-offset-4" href={p.code} target="_blank">Code</a>}
      </div>
      {p.abstract && <p className="text-sm text-muted-foreground">{p.abstract}</p>}
    </article>
  );
}
