import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PublicationCard from "@/components/publication-card";
import { publications } from "@/data/publications";

export const metadata = { title: "Publications — Daksh K. Singh" };

export default function PublicationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl">Publications &amp; Patents</h1>
        <p className="mt-2 text-muted-foreground">
          Peer-reviewed publications and intellectual property contributions.
        </p>

        <div className="mt-6 grid gap-4">
          {publications.map((pub, i) => (
            <PublicationCard key={i} {...pub} />
          ))}
        </div>

        {/* Patent styled as card */}
        <div className="mt-8 rounded-2xl border border-brand p-4">
          <h3 className="text-lg font-semibold">Patent</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            First Inventor: <strong>Kildishev, Alexander V.</strong>; Co-Inventors:{" "}
            <strong>Singh, Daksh Kumar</strong>; Wilson, Blake A.; Chen, Yuheng; Ojha,
            Rohan; Pottle, Jaxon; Bezick, Michael; Boltasseva, Alexandra; Shalaev,
            Vladimir M. (2024). <em>ML Assisted Authentication via Tampered Optical
            Responses</em>. Application No. 19/233,515, filed June 10 2025.{" "}
            <strong>Patent Pending.</strong>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
