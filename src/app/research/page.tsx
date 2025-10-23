import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "Research Projects — Daksh K. Singh" };

export default function ResearchPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl">Research Projects</h1>
        <p className="mt-2 text-muted-foreground">A curated gallery of ongoing and completed work.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
