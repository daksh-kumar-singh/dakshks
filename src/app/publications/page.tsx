import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PublicationCard from "@/components/publication-card";
import { publications } from "@/data/publications";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";

export const metadata = { title: "Publications — Daksh K. Singh" };

export default function PublicationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative mx-auto max-w-5xl px-4 py-12 overflow-x-hidden overflow-clip">
        {/* Side quantum/molecule effects (particles) */}
        <div className="pointer-events-none absolute left-[-16px] top-0 h-full w-16 md:left-[-40px] md:w-32 -z-10">
          <Particles />
        </div>
        <div className="pointer-events-none absolute right-[-16px] top-0 h-full w-16 md:right-[-40px] md:w-32 -z-10">
          <Particles />
        </div>

        <Reveal>
          <h1 className="text-3xl">Publications</h1>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-muted-foreground">Selected works. Manual list curated for clarity.</p>
        </Reveal>

        <div className="mt-6 grid gap-4">
          {publications.map((pub, i) => (
            <Reveal key={i}>
              <PublicationCard {...pub} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="mt-10 text-2xl">Patents</h2>
        </Reveal>

        {/* Patent styled as a matching card */}
        <div className="mt-4 grid gap-4">
          <Reveal>
            <div className="card">
              <p>
                First Inventor: <strong>Kildishev, Alexander V.</strong>; Co-Inventors:{" "}
                <strong>Singh, Daksh Kumar</strong>; Wilson, Blake A.; Chen, Yuheng; Ojha, Rohan; Pottle, Jaxon; Bezick,
                Michael; Boltasseva, Alexandra; Shalaev, Vladimir M. (2024).
              </p>
              <p className="mt-1">
                <em>ML Assisted Authentication via Tampered Optical Responses</em>. Application No. 19/233,515, filed
                June 10, 2025. <strong>Patent Pending</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
