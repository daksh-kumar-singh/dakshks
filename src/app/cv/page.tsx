import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";

export const metadata = { title: "CV — Daksh K. Singh" };

export default function CVPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose">
        <h1>Curriculum Vitae</h1>
        <p><Link href="/cv/Daksh_Singh_CV.pdf">Download PDF</Link></p>

        <h2>Education</h2>
        <ul>
          <li><strong>Purdue University</strong> — BSEE (Dec 2025); concentrations: Quantum Tech, Wireless/Optical, Microelectronics.</li>
        </ul>

        <h2>Publications (selected)</h2>
        <ul>
          <li>See the <a href="/publications">Publications</a> page for the full list.</li>
        </ul>

        <h2>Research Experience</h2>
        <ul>
          <li>Nanofabrication & photonics lab — EBL, PLD, etch, characterization (PL, TCSPC, g²).</li>
        </ul>

        <h2>Skills</h2>
        <ul>
          <li>Design/Sim: Tidy3D, Lumerical, COMSOL, HFSS, GRCWA; Python/MATLAB.</li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
