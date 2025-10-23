import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <section className="grid gap-6">
          <h1 className="font-serif text-3xl md:text-4xl">Hi, I’m Daksh - an ECE student & emerging researcher.</h1>
          <p className="max-w-2xl text-muted-foreground">
            I design, build, and characterize photonic/quantum devices. This site highlights selected projects,
            publications, and my CV. I’m currently focused on nanofabrication and quantum-tech coursework.
          </p>
          <div className="flex gap-3">
            <Link href="/research" className="underline underline-offset-4">See Projects →</Link>
            <Link href="/publications" className="underline underline-offset-4">Publications →</Link>
            <Link href="/cv" className="underline underline-offset-4">CV →</Link>
          </div>
        </section>

        <section className="mt-12 grid gap-4">
          <h2 className="text-2xl">Highlights</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="rounded-2xl border p-4">
              <h3 className="font-medium">Metasurface nanofab</h3>
              <p className="text-sm text-muted-foreground">EBL → etch → PL/TCSPC; single-photon cavities pipeline.</p>
            </li>
            <li className="rounded-2xl border p-4">
              <h3 className="font-medium">Machine-learning PUFs</h3>
              <p className="text-sm text-muted-foreground">Optical anti-counterfeiting; dataset + code links in pubs.</p>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
