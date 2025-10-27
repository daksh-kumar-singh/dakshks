import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import ParallaxRings from "@/components/ParallaxRings";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative mx-auto max-w-3xl px-4 pt-4 pb-12 prose dark:prose-invert overflow-x-hidden overflow-clip sm:pt-8">
        {/* Title */}
        <Reveal>
          <section className="grid gap-4">
            <h1 className="text-3xl md:text-4xl">
              Daksh Kumar Singh | Electrical and Computer Engineering | Nanophotonics &amp; Quantum Optics
            </h1>
            <div className="flex flex-wrap gap-3">
              <Link href="/research" className="underline underline-offset-4">Research →</Link>
              <Link href="/publications" className="underline underline-offset-4">Publications →</Link>
              <Link href="/cv" className="underline underline-offset-4">CV →</Link>
              <Link href="/contact" className="underline underline-offset-4">Contact →</Link>
            </div>
          </section>
        </Reveal>

        {/* Decorative rings */}
        <ParallaxRings className="my-10 h-28" />

        {/* Overview */}
        <Reveal>
          <section className="mt-10 grid gap-3">
            <h2 className="text-2xl">Overview</h2>
            <p className="max-w-3xl text-muted-foreground">
              I’m a senior in Purdue’s Elmore Family School of ECE and a member of the John Martinson Honors College,
              pursuing the 4+1 BSEE→MSECE program (graduating Fall 2025). I work as an undergraduate research assistant
              with Profs. Boltasseva, Shalaev, and Kildishev, focusing on nanofabrication, photonic device design, and
              optical characterization in support of quantum and nanoscale systems.
            </p>
          </section>
        </Reveal>

        {/* Research Summary */}
        <Reveal>
          <section className="mt-10 grid gap-3">
            <h2 className="text-2xl">Research Summary</h2>
            <p className="max-w-3xl text-muted-foreground">
              My research explores the design, fabrication, and measurement of photonic structures that enable or enhance
              quantum optical functionality. Contexts include device authentication using plasmonic and disordered systems,
              metasurface optics for beam control, and single-photon platforms benefiting from deterministic emitter–cavity
              coupling. Methods span electron-beam lithography and thin-film deposition for device realization;
              electromagnetic modeling (e.g., RCWA-class solvers) for design; and optical characterization such as
              photoluminescence, time-correlated single-photon counting (TCSPC), and correlation (g2) analyses.
              Recent efforts include metasurface simulations targeting enhanced single-photon emission in 2D materials,
              spin-related contacts for CrSBr, and metalens design for neutral-atom control; in parallel, I contribute to
              machine-learning pipelines for optical PUF authentication and tamper detection with residual-attention models.
            </p>
          </section>
        </Reveal>

        {/* Gallery */}
        <Reveal>
          <section className="mt-10 grid gap-4">
            <h2 className="text-2xl">Gallery</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="rounded-2xl overflow-hidden border border-brand">
                  <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
                    <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(218,170,0,0.15),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(157,151,149,0.15),transparent_55%)]" />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
