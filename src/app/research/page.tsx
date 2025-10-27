import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { researchItems } from "@/data/research";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";

export const metadata = { title: "Research Projects — Daksh K. Singh" };

export default function ResearchPage() {
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
          <h1 className="text-3xl">Research Projects</h1>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-muted-foreground">
            Newest first. Projects may map to one or more publications.
          </p>
        </Reveal>

        <ul className="mt-6 grid gap-4">
          {researchItems.map((item, i) => (
            <Reveal key={i}>
              <li className="rounded-2xl border p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.period && (
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                {item.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full border px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {item.links && (
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {item.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
