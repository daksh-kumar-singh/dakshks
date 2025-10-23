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
        <h1 className="text-3xl">Publications</h1>
        <p className="mt-2 text-muted-foreground">Selected works. Manual list curated for clarity.</p>
        <div className="mt-6 grid gap-4">
          {publications.map((pub, i) => <PublicationCard key={i} {...pub} />)}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
