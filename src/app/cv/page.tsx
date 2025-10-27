import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";

export const metadata = { title: "CV — Daksh K. Singh" };

export default function CVPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert overflow-x-hidden overflow-clip">
        {/* Side quantum/molecule effects (particles) */}
        <div className="pointer-events-none absolute left-[-16px] top-0 h-full w-16 md:left-[-40px] md:w-32 -z-10">
          <Particles />
        </div>
        <div className="pointer-events-none absolute right-[-16px] top-0 h-full w-16 md:right-[-40px] md:w-32 -z-10">
          <Particles />
        </div>

        <Reveal>
          <h1>Curriculum Vitae</h1>
        </Reveal>

        <Reveal>
          <p>
            <Link href="/cv/Daksh_Singh_CV.pdf">Download PDF</Link>
          </p>
        </Reveal>

        {/* EDUCATION */}
        <Reveal>
          <section>
            <h2>Education</h2>
            <ul>
              <li>
                <strong>Purdue University</strong> — MSECE (May 2027); primary area:{" "}
                <strong>Fields &amp; Optics</strong>; related area:{" "}
                <strong>Microelectronics &amp; Nanotechnology</strong>; concentrations:{" "}
                <strong>Microelectronics &amp; Advanced Semiconductors</strong>.
              </li>
              <li>
                <strong>Purdue University</strong> — BSEE (Dec 2025); concentrations:{" "}
                <strong>Quantum Technologies</strong>, <strong>Wireless/Optical Engineering</strong>,{" "}
                <strong>Microelectronics &amp; Semiconductors</strong>.
              </li>
            </ul>
          </section>
        </Reveal>

        {/* PUBLICATIONS & PATENTS */}
        <Reveal>
          <section>
            <h2>Publications &amp; Patents</h2>

            <h3>Publications</h3>
            <ul>
              <li>
                <strong>Singh, D.K.</strong>, Wilson, B., Chen, Y., Ojha, R., Bezick, M., Boltasseva, A., Shalaev, V.M.,
                Kildishev, A.V. (2025). Machine Learning Framework for Semiconductor Chips Anti-Counterfeiting Using a
                Plasmonic Physically Unclonable Function. <em>Frontiers in Optics + Laser Science 2025</em>.{" "}
                <em>[Accepted Contribution]</em>
              </li>
              <li>
                Chen, Y., McNeil, A.M., Park, T., Wilson, B., Iyer, V., Bezick, M., Choi, J., Ojha, R., Mahendran, P.,{" "}
                <strong>Singh, D.K.</strong>, Chitturi, G., Chen, P., Do, T., Satuloori, V., Kildishev, A.V., Shalaev,
                V.M., Moebius, M., Cai, W., Liu, Y., Boltasseva, A. (2025). Machine-Learning-Assisted Photonic Device
                Development: A Multiscale Approach from Theory to Characterization. <em>Nanophotonics</em>.{" "}
                <a href="https://doi.org/10.1515/nanoph-2025-0049" target="_blank" rel="noopener noreferrer">
                  https://doi.org/10.1515/nanoph-2025-0049
                </a>
              </li>
              <li>
                Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Bezick, M., Pott, J., Shalaev, V. M.,
                Boltasseva, A., &amp; Kildishev, A. V. (2024). Machine-learning-assisted optical authentication of chip
                tampering. <em>Photonic Computing: From Materials and Devices to Systems and Applications</em>, 16.{" "}
                <a href="https://doi.org/10.1117/12.3027858" target="_blank" rel="noopener noreferrer">
                  https://doi.org/10.1117/12.3027858
                </a>
              </li>
              <li>
                Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Pottle, J., Bezick, M., Boltasseva, A.,
                Shalaev, V. M., &amp; Kildishev, A. V. (2024). Authentication through residual attention-based
                processing of tampered optical responses. <em>Advanced Photonics</em>, 6(05).{" "}
                <a href="https://doi.org/10.1117/1.ap.6.5.056002" target="_blank" rel="noopener noreferrer">
                  https://doi.org/10.1117/1.ap.6.5.056002
                </a>
              </li>
            </ul>

            <h3>Patents</h3>
            <ul>
              <li>
                First Inventor: <strong>Kildishev, Alexander V.</strong>; Co-Inventors:{" "}
                <strong>Singh, Daksh Kumar</strong>; Wilson, Blake A.; Chen, Yuheng; Ojha, Rohan; Pottle, Jaxon; Bezick,
                Michael; Boltasseva, Alexandra; Shalaev, Vladimir M. (2024).{" "}
                <em>ML Assisted Authentication via Tampered Optical Responses</em>. Application No. 19/233,515, filed
                June 10, 2025. <strong>Patent Pending</strong>.
              </li>
            </ul>

            <h3>Conference Presentations</h3>
            <ul>
              <li>
                <strong>Singh, D. K.</strong>, Ojha, R.; Co-Authors: Chen, Y., Wilson, B., Shalaev, V., Boltasseva, A.,
                Kildishev, A. (2023). Machine Learning Assisted Realization of PUFs with Random Plasmonic Systems.{" "}
                <em>Cyberinfrastructure Symposium, RCAC</em>, West Lafayette, IN.
              </li>
              <li>
                <strong>Singh, D. K.</strong>, Chen, Y.; Authors: Kudyshev, Z., Bogdanov, S., Isacsson, T., Kildishev,
                A., Boltasseva, A., Shalaev, V. (2023). Rapid Classification of Quantum Sources Enabled by Machine
                Learning. <em>Quantum Science Center All-Hands Meeting</em>, Nashville, TN.
              </li>
            </ul>
          </section>
        </Reveal>

        {/* RESEARCH EXPERIENCE */}
        <Reveal>
          <section>
            <h2>Research Experience</h2>
            <ul className="space-y-6">
              <li>
                <strong>Undergraduate Research Assistant</strong>
                <br />
                <strong>Purdue University</strong>, West Lafayette, IN
                <br />
                <strong>Advisors:</strong> Prof. Alexandra Boltasseva, Prof. Vladimir Shalaev, Prof. Alexander Kildishev
                <br />
                <strong>Dates:</strong> January 2023 – Present
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Contribute to ongoing research in <strong>nanofabrication</strong> and <strong>quantum photonics</strong>,
                    focusing on the design, fabrication, and characterization of photonic devices.
                  </li>
                  <li>
                    Develop cleanroom expertise in <strong>electron-beam lithography (EBL)</strong>,{" "}
                    <strong>thin-film deposition</strong>, and <strong>optical testing</strong> for novel metastructures.
                  </li>
                  <li>
                    Co-author of multiple <strong>peer-reviewed publications</strong> and a{" "}
                    <strong>patent (pending)</strong>.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Summer 2025 Research</strong>
                <br />
                <strong>Purdue University</strong>, West Lafayette, IN
                <br />
                <strong>Dates:</strong> May 2025 – August 2025
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Simulated <strong>nanostructured metasurfaces</strong> to enhance single-photon emission using 2D
                    materials such as <strong>graphene</strong> and <strong>WSe2</strong>.
                  </li>
                  <li>
                    Fabricated <strong>gold contacts</strong> for studying spin injection in monolayer{" "}
                    <strong>CrSBr</strong> flakes.
                  </li>
                  <li>Performed <strong>exfoliation</strong> and <strong>transfer</strong> of 2D CrSBr onto samples.</li>
                  <li>
                    Conducted <strong>optical characterization</strong> for emitter–cavity coupling, integrating
                    fabrication with testing workflows.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Summer 2024 Research</strong>
                <br />
                <strong>Purdue University</strong>, West Lafayette, IN
                <br />
                <strong>Dates:</strong> May 2024 – August 2024
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Designed and simulated <strong>metalenses</strong> for optical tweezer control in analog{" "}
                    <strong>neutral-atom quantum computers</strong>.
                  </li>
                  <li>
                    Modeled and analyzed photonic systems using <strong>GRCWA</strong> and <strong>S4</strong>{" "}
                    electromagnetic solvers in Python.
                  </li>
                  <li>
                    Attended the <strong>U.S. Quantum Information Science (USQIS) Summer School</strong> at{" "}
                    <strong>Oak Ridge National Laboratory</strong>.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Summer Undergraduate Research Fellow (SURF)</strong>
                <br />
                <strong>Birck Nanotechnology Center, Purdue University</strong>
                <br />
                <strong>Dates:</strong> May 2023 – August 2023
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Selected as one of <strong>400</strong> students for Purdue’s competitive <strong>SURF</strong>{" "}
                    program at <strong>Birck Nanotechnology Center</strong>.
                  </li>
                  <li>
                    Manufactured over <strong>10 microwave waveguides</strong> for photonics and quantum device projects.
                  </li>
                  <li>
                    Fabricated thin-film <strong>transparent conducting oxides (TCOs)</strong> and characterized{" "}
                    <strong>optical properties</strong> for radiative heat transfer applications.
                  </li>
                  <li>
                    Captured and analyzed over <strong>200 diagnostic frames</strong> to assist in repairing a{" "}
                    <strong>pulsed laser deposition (PLD)</strong> system.
                  </li>
                  <li>
                    Helped establish a <strong>time-correlated single-photon counting (TCSPC)</strong> system and
                    performed <strong>photoluminescence (PL)</strong> and <strong>g2</strong> correlation measurements to
                    characterize quantum emitters.
                  </li>
                  <li>Integrated optical components, detectors, and software into a functional platform.</li>
                </ul>
              </li>

              <li>
                <strong>First-Time Researcher Fellow</strong>
                <br />
                <strong>Purdue University</strong>, West Lafayette, IN
                <br />
                <strong>Dates:</strong> January 2023 – May 2023
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Fabricated and characterized over <strong>20 samples</strong> for{" "}
                    <strong>microelectronics packaging</strong> and <strong>anti-counterfeiting</strong> applications.
                  </li>
                  <li>
                    Developed early familiarity with <strong>machine learning models</strong> for quantitative analysis
                    of optical/electrical data.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </Reveal>

        {/* SKILLS */}
        <Reveal>
          <section>
            <h2>Skills</h2>
            <ul>
              <li>
                <strong>Fabrication &amp; Processing:</strong> E-beam lithography, photolithography, pulsed laser
                deposition (PLD), metal evaporation &amp; sputtering, CVD, 2D material exfoliation &amp; transfer.
              </li>
              <li>
                <strong>Characterization &amp; Assembly:</strong> Ellipsometry (VASE), dark-field microscopy, SEM, AFM,
                photoluminescence (PL), g2 correlation, optical alignment, lens/mirror system integration.
              </li>
              <li>
                <strong>Simulation &amp; Computation:</strong> Ansys Lumerical FDTD, Ansys HFSS, Tidy3D FDTD, RCWA
                (GRCWA/S4), KiCad, LTspice, MATLAB, Python (ML/AI), HDL (Verilog/SystemVerilog), QICK, Qiskit.
              </li>
              <li>
                <strong>Soft Skills:</strong> Leadership, communication, documentation, time management, teamwork.
              </li>
              <li>
                <strong>Languages:</strong> English (Native/Bilingual), Hindi (Native/Bilingual).
              </li>
            </ul>
          </section>
        </Reveal>

        {/* HONORS & FELLOWSHIPS */}
        <Reveal>
          <section>
            <h2>Honors &amp; Fellowships</h2>
            <ul>
              <li>
                <strong>Dean’s List</strong> — 6/6 semesters (Fall 2022 – Spring 2025)
              </li>
              <li>
                <strong>Semester Honors</strong> — 5/6 semesters
              </li>
              <li>
                <strong>Summer Undergraduate Research Fellowship (SURF)</strong> — Summer 2023
              </li>
              <li>
                <strong>Best Poster Presentation</strong> — Purdue Summer Research Symposium (Aug 2023)
              </li>
              <li>
                <strong>First-Time Researcher Fellowship</strong> — Jan 2023
              </li>
            </ul>
          </section>
        </Reveal>

        {/* AFFILIATIONS */}
        <Reveal>
          <section>
            <h2>Professional Affiliations</h2>
            <ul>
              <li>
                <strong>Optica</strong> (Purdue University Chapter) — Treasurer
              </li>
              <li>
                <strong>DOE Quantum Science Center</strong> (QSC)
              </li>
              <li>
                <strong>Semiconductor Student Alliance</strong> — Purdue Chapter
              </li>
              <li>
                <strong>Collaborator:</strong> QuEra Computing Inc., Microsoft Azure Quantum, Quantinuum
              </li>
            </ul>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
