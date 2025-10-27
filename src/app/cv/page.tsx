import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";

export const metadata = { title: "CV — Daksh K. Singh" };

export default function CVPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert">
        <h1>Curriculum Vitae</h1>
        <p>
          <Link href="/cv/Daksh_Singh_CV.pdf">Download PDF</Link>
        </p>

        {/* ---------------------- EDUCATION ---------------------- */}
        <details className="group" open={false}>
          <summary className="cursor-pointer font-semibold text-lg">
            Education — Purdue BSEE + MSECE 4+1 program
          </summary>
          <div className="mt-2">
            <ul>
              <li>
                <strong>Purdue University</strong> — MSECE (May 2027);
                primary area: <strong>Fields &amp; Optics</strong>; related
                area: <strong>Microelectronics &amp; Nanotechnology</strong>;
                concentrations: <strong>Microelectronics &amp; Advanced Semiconductors</strong>.
              </li>
              <li>
                <strong>Purdue University</strong> — BSEE (Dec 2025);
                concentrations: <strong>Quantum Technologies</strong>,
                <strong> Wireless/Optical Engineering</strong>,
                <strong> Microelectronics &amp; Semiconductors</strong>.
              </li>
            </ul>
          </div>
        </details>

        {/* ---------------------- PUBLICATIONS & PATENTS ---------------------- */}
        <details className="group mt-6" open={false}>
          <summary className="cursor-pointer font-semibold text-lg">
            Publications &amp; Patents — Peer-reviewed works and one pending patent
          </summary>
          <div className="mt-2 space-y-4">

            {/* Publications */}
            <details className="group" open={false}>
              <summary className="cursor-pointer font-semibold">
                Publications — 4 peer-reviewed papers
              </summary>
              <ul className="mt-2">
                <li>
                  <strong>Singh, D.K.</strong>, Wilson, B., Chen, Y., Ojha, R., Bezick, M., Boltasseva, A., Shalaev, V.M., Kildishev, A.V. (2025).
                  Machine Learning Framework for Semiconductor Chips Anti-Counterfeiting Using a Plasmonic Physically Unclonable Function.
                  <em> Frontiers in Optics + Laser Science 2025</em>. <em>[Accepted Contribution]</em>
                </li>
                <li>
                  Chen, Y., McNeil, A.M., Park, T., Wilson, B., Iyer, V., Bezick, M., Choi, J., Ojha, R., Mahendran, P.,
                  <strong> Singh, D.K.</strong>, Chitturi, G., Chen, P., Do, T., Satuloori, V., Kildishev, A.V., Shalaev, V.M.,
                  Moebius, M., Cai, W., Liu, Y., Boltasseva, A. (2025).
                  Machine-Learning-Assisted Photonic Device Development: A Multiscale Approach from Theory to Characterization.
                  <em> Nanophotonics</em>.
                  <a href="https://doi.org/10.1515/nanoph-2025-0049" target="_blank" rel="noopener noreferrer">
                    {" "}
                    https://doi.org/10.1515/nanoph-2025-0049
                  </a>
                </li>
                <li>
                  Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Bezick, M., Pott, J., Shalaev, V. M.,
                  Boltasseva, A., &amp; Kildishev, A. V. (2024).
                  Machine-learning-assisted optical authentication of chip tampering.
                  <em> Photonic Computing: From Materials and Devices to Systems and Applications</em>, 16.
                  <a href="https://doi.org/10.1117/12.3027858" target="_blank" rel="noopener noreferrer">
                    {" "}
                    https://doi.org/10.1117/12.3027858
                  </a>
                </li>
                <li>
                  Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Pottle, J., Bezick, M., Boltasseva, A.,
                  Shalaev, V. M., &amp; Kildishev, A. V. (2024).
                  Authentication through residual attention-based processing of tampered optical responses.
                  <em> Advanced Photonics</em>, 6(05).
                  <a href="https://doi.org/10.1117/1.ap.6.5.056002" target="_blank" rel="noopener noreferrer">
                    {" "}
                    https://doi.org/10.1117/1.ap.6.5.056002
                  </a>
                </li>
              </ul>
            </details>

            {/* Patents */}
            <details className="group" open={false}>
              <summary className="cursor-pointer font-semibold">
                Patent — ML-assisted Authentication via Tampered Optical Responses
              </summary>
              <div className="mt-3 rounded-2xl border p-4">
                <p>
                  First Inventor: <strong>Kildishev, Alexander V.</strong>; Co-Inventors:
                  <strong> Singh, Daksh Kumar</strong>; Wilson, Blake A.; Chen, Yuheng; Ojha, Rohan; Pottle, Jaxon;
                  Bezick, Michael; Boltasseva, Alexandra; Shalaev, Vladimir M. (2024).
                </p>
                <p>
                  <em>ML Assisted Authentication via Tampered Optical Responses.</em> Application No. 19/233,515,
                  filed June 10, 2025. <strong>Patent Pending</strong>.
                </p>
              </div>
            </details>

            {/* Conferences */}
            <details className="group" open={false}>
              <summary className="cursor-pointer font-semibold">
                Conference Presentations — 2 invited talks
              </summary>
              <ul className="mt-2">
                <li>
                  <strong>Singh, D. K.</strong>, Ojha, R.; Co-Authors: Chen, Y., Wilson, B., Shalaev, V., Boltasseva, A.,
                  Kildishev, A. (2023). Machine Learning Assisted Realization of PUFs with Random Plasmonic Systems.
                  <em> Cyberinfrastructure Symposium, RCAC</em>, West Lafayette, IN.
                </li>
                <li>
                  <strong>Singh, D. K.</strong>, Chen, Y.; Authors: Kudyshev, Z., Bogdanov, S., Isacsson, T., Kildishev,
                  A., Boltasseva, A., Shalaev, V. (2023). Rapid Classification of Quantum Sources Enabled by Machine Learning.
                  <em> Quantum Science Center All-Hands Meeting</em>, Nashville, TN.
                </li>
              </ul>
            </details>
          </div>
        </details>

        {/* ---------------------- RESEARCH EXPERIENCE ---------------------- */}
        <details className="group mt-6" open={false}>
          <summary className="cursor-pointer font-semibold text-lg">
            Research Experience — Nanofabrication, Quantum Photonics &amp; ML-integrated optics
          </summary>
          <div className="mt-2 space-y-3">
            <p>
              Roles across multiple research programs at Purdue University, integrating cleanroom fabrication,
              simulation, and optical characterization for nanophotonic and quantum systems.
            </p>
            <ul className="space-y-4">
              <li>
                <strong>Undergraduate Research Assistant</strong> — Purdue University (Jan 2023 – Present)  
                Advisors: Profs. Boltasseva, Shalaev, Kildishev.  
                Contributions in <strong>nanofabrication</strong>, <strong>device characterization</strong>, and <strong>machine-learning–assisted optics</strong>.
              </li>
              <li>
                <strong>Summer 2025 Research</strong> — Fabrication of <strong>CrSBr spin-injection</strong> samples;
                optical coupling studies and metasurface modeling.
              </li>
              <li>
                <strong>Summer 2024 Research</strong> — Design and simulation of <strong>metalenses</strong> for
                neutral-atom quantum systems.
              </li>
              <li>
                <strong>SURF 2023 Fellow</strong> — Established a <strong>TCSPC</strong> setup and performed PL and
                g² measurements; led diagnostics on a <strong>PLD system</strong>.
              </li>
              <li>
                <strong>First-Time Researcher Fellow (Spring 2023)</strong> — Microelectronics packaging and ML-driven
                optical data analysis.
              </li>
            </ul>
          </div>
        </details>

        {/* ---------------------- SKILLS ---------------------- */}
        <details className="group mt-6" open={false}>
          <summary className="cursor-pointer font-semibold text-lg">
            Skills — Fabrication, Characterization, Simulation, Computation
          </summary>
          <div className="mt-2">
            <ul>
              <li>
                <strong>Fabrication &amp; Processing:</strong> E-beam lithography, photolithography, pulsed laser deposition (PLD),
                metal evaporation &amp; sputtering, CVD, 2D material exfoliation &amp; transfer.
              </li>
              <li>
                <strong>Characterization &amp; Assembly:</strong> Ellipsometry (VASE), dark-field microscopy, SEM, AFM, PL,
                g² correlation, optical alignment, lens/mirror system integration.
              </li>
              <li>
                <strong>Simulation &amp; Computation:</strong> Lumerical FDTD, HFSS, Tidy3D, RCWA (GRCWA/S4), KiCad,
                LTSpice, MATLAB, Python (ML/AI), HDL (Verilog/SystemVerilog), QICK, Qiskit.
              </li>
              <li>
                <strong>Soft Skills:</strong> Leadership, communication, documentation, time management, teamwork.
              </li>
              <li>
                <strong>Languages:</strong> English (Native/Bilingual), Hindi (Native/Bilingual).
              </li>
            </ul>
          </div>
        </details>

        {/* ---------------------- HONORS & FELLOWSHIPS ---------------------- */}
        <details className="group mt-6" open={false}>
          <summary className="cursor-pointer font-semibold text-lg">
            Honors &amp; Fellowships — Academic awards &amp; recognitions
          </summary>
          <div className="mt-2">
            <ul>
              <li><strong>Dean’s List</strong> — 6/6 semesters (Fall 2022 – Spring 2025)</li>
              <li><strong>Semester Honors</strong> — 5/6 semesters</li>
              <li><strong>SURF Fellowship</strong> — Summer 2023</li>
              <li><strong>Best Poster Award</strong> — Purdue Summer Research Symposium, 2023</li>
              <li><strong>First-Time Researcher Fellowship</strong> — Spring 2023</li>
            </ul>
          </div>
        </details>

        {/* ---------------------- AFFILIATIONS ---------------------- */}
        <details className="group mt-6" open={false}>
          <summary className="cursor-pointer font-semibold text-lg">
            Professional Affiliations — Optics, Quantum, Semiconductor organizations
          </summary>
          <div className="mt-2">
            <ul>
              <li><strong>Optica (Purdue Chapter)</strong> — Treasurer</li>
              <li><strong>DOE Quantum Science Center (QSC)</strong></li>
              <li><strong>Semiconductor Student Alliance</strong> — Purdue Chapter</li>
              <li>
                <strong>Collaborator:</strong> QuEra Computing Inc., Microsoft Azure Quantum, Quantinuum
              </li>
            </ul>
          </div>
        </details>
      </main>
      <SiteFooter />
    </>
  );
}
