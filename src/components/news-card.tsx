import Link from "next/link";
import type { NewsItem } from "@/data/news";

type Props = NewsItem;

export default function NewsCard({ title, outlet, url, date, note }: Props) {
  return (
    <article className="card">
      <h3 className="m-0 text-base md:text-lg">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:underline underline-offset-4"
        >
          {title}
        </Link>
      </h3>
      <p className="m-0 mt-1 text-sm text-muted-foreground">
        {outlet}
        {date ? ` — ${new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}` : ""}
        {(!date && note) ? ` — ${note}` : ""}
      </p>
    </article>
  );
}
