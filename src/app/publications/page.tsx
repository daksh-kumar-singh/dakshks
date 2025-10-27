import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PublicationCard from "@/components/publication-card";
import { publications } from "@/data/publications";
import type { Publication } from "@/data/publications";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
import NewsCard from "@/components/news-card";
import { news } from "@/data/news";

export const metadata = { title: "Publications — Daksh K. Singh" };

function groupAndSort(items: Publication[]) {
  const byType: Record<string, Publication[]> = {
    journal: [],
    conference: [], // includes conference papers + proceedings
    patent: [],
  };
  for (const it of items) (byType[it.type] ??= []).push(it);
  const sortDesc = (a: Publication, b: Publication) => (b.year ?? 0) - (a.year ?? 0);
  Object.keys(byType).forEach((k) => byType[k].sort(sortDesc));
  return byType;
}

export default function PublicationsPage() {
  const { journal, conference, patent } = groupAndSort(publications);

  return (
    <>
      <SiteHeader />
      <main className="relative mx-auto max-w-5xl px-4 py-12 overflow-x-hidden overflow-clip prose dark:prose-invert">
        {/* Side quantum/molecule effects (particles) */}
        <div className="pointer-events-none absolute left-[-16px] top-0 h-full w-16 md:left-[-40px] md:w-32 -z-10">
          <Particles />
        </div>
        <div className="pointer-events-none absolute right-[-16px] top-0 h-full w-16 md:right-[-40px] md:w-32 -z-10">
          <Particles />
        </div>

        {/* Title */}
        <Reveal as="div">
          <h1 className="text-3xl">Publications</h1>
        </Reveal>
        <Reveal as="div">
          <p className="mt-2 text-muted-foreground">
            Centralized list of journal articles, conference papers &amp; proceedings, patents, and media coverage.
          </p>
        </Reveal>

        {/* Journal Articles */}
        {journal.length > 0 && (
          <>
            <Reveal as="div">
              <h2 className="mt-8 text-2xl">Journal Articles</h2>
            </Reveal>
            <div className="mt-4 grid gap-4">
              {journal.map((pub, i) => (
                <Reveal key={`j-${i}`}>
                  <PublicationCard {...pub} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* Conference Papers & Proceedings (combined) */}
        {conference.length > 0 && (
          <>
            <Reveal as="div">
              <h2 className="mt-10 text-2xl">Conference Papers &amp; Proceedings</h2>
            </Reveal>
            <div className="mt-4 grid gap-4">
              {conference.map((pub, i) => (
                <Reveal key={`c-${i}`}>
                  <PublicationCard {...pub} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* Patents */}
        {patent.length > 0 && (
          <>
            <Reveal as="div">
              <h2 className="mt-10 text-2xl">Patents</h2>
            </Reveal>
            <div className="mt-4 grid gap-4">
              {patent.map((pub, i) => (
                <Reveal key={`p-${i}`}>
                  <PublicationCard {...pub} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* In the News (venue-importance ordering via rank) */}
        <Reveal as="div">
          <h2 className="mt-10 text-2xl">In the News</h2>
        </Reveal>
        <div className="mt-4 grid gap-4">
          {[...news].sort((a, b) => a.rank - b.rank).map((item, i) => (
            <Reveal key={`n-${i}`}>
              <NewsCard {...item} />
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
