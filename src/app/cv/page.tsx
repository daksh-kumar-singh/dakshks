import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = { title: "CV — Daksh K. Singh" };

export default function CVPage() {
  const ulCls =
    "list-disc list-outside pl-5 marker:text-[rgb(var(--p-rush))] dark:marker:text-[rgb(var(--p-gold))]";

  return (
    <>
      <SiteHeader />
      <main className="relative mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert overflow-x-hidden overflow-clip">
        <Reveal as="div">
          <h1>Curriculum Vitae</h1>
        </Reveal>

        {/* Descriptive, same-tab link (avoids AAA target=_blank warning) */}
        <p>
          <Reveal as="span">
            <Link href="/cv/Daksh_Singh_CV.pdf" download className="underline underline-offset-4">
              Download CV (PDF)
            </Link>
          </Reveal>
        </p>

        {/* =========================
            EDUCATION (item-by-item)
           ========================= */}
        <section>
          <Reveal as="div">
            <h2>Education</h2>
          </Reveal>
          <ul className={ulCls}>
            <li>
              <Reveal as="span">
                <strong>Purdue University</strong> — MSECE (May 2027); primary area:{" "}
                <strong>Fields &amp; Optics</strong>; related area:{" "}
                <strong>Microelectronics &amp; Nanotechnology</strong>; concentrations:{" "}
                <strong>Microelectronics &amp; Advanced Semiconductors</strong>.
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                <strong>Purdue University</strong> - BSEE (Dec 2025); concentrations:{" "}
                <strong>Quantum Technologies</strong>, <strong>Wireless/Optical Engineering</strong>,{" "}
                <strong>Microelectronics &amp; Semiconductors</strong>.
              </Reveal>
            </li>
          </ul>
        </section>

        {/* =================================
            PUBLICATIONS & PATENTS (per item)
           ================================= */}
        <section>
          <Reveal as="div">
            <h2>Publications &amp; Patents</h2>
          </Reveal>

          <Reveal as="div">
            <h3>Publications</h3>
          </Reveal>
          <ul className={ulCls}>
            <li>
              <Reveal as="span">
                <strong>Singh, D.K.</strong>, Wilson, B., Chen, Y., Ojha, R., Bezick, M., Boltasseva, A., Shalaev,
                V.M., Kildishev, A.V. (2025). Machine Learning Framework for Semiconductor Chips Anti-Counterfeiting
                Using a Plasmonic Physically Unclonable Function. <em>Frontiers in Optics + Laser Science 2025</em>.{" "}
                <em>[Accepted Contribution]</em>
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                Chen, Y., McNeil, A.M., Park, T., Wilson, B., Iyer, V., Bezick, M., Choi, J., Ojha, R., Mahendran, P.,{" "}
                <strong>Singh, D.K.</strong>, Chitturi, G., Chen, P., Do, T., Satuloori, V., Kildishev, A.V., Shalaev,
                V.M., Moebius, M., Cai, W., Liu, Y., Boltasseva, A. (2025). Machine-Learning-Assisted Photonic Device
                Development: A Multiscale Approach from Theory to Characterization. <em>Nanophotonics</em>.{" "}
                <a href="https://doi.org/10.1515/nanoph-2025-0049" target="_blank" rel="noopener noreferrer">
                  https://doi.org/10.1515/nanoph-2025-0049
                </a>
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Bezick, M., Pott, J., Shalaev, V. M.,
                Boltasseva, A., &amp; Kildishev, A. V. (2024). Machine-learning-assisted optical authentication of chip
                tampering. <em>Photonic Computing: From Materials and Devices to Systems and Applications</em>, 16.{" "}
                <a href="https://doi.org/10.1117/12.3027858" target="_blank" rel="noopener noreferrer">
                  https://doi.org/10.1117/12.3027858
                </a>
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Pottle, J., Bezick, M., Boltasseva, A.,
                Shalaev, V. M., &amp; Kildishev, A. V. (2024). Authentication through residual attention-based
                processing of tampered optical responses. <em>Advanced Photonics</em>, 6(05).{" "}
                <a href="https://doi.org/10.1117/1.ap.6.5.056002" target="_blank" rel="noopener noreferrer">
                  https://doi.org/10.1117/1.ap.6.5.056002
                </a>
              </Reveal>
            </li>
          </ul>

          <Reveal as="div">
            <h3>Patents</h3>
          </Reveal>
          <ul className={ulCls}>
            <li>
              <Reveal as="span">
                First Inventor: <strong>Kildishev, Alexander V.</strong>; Co-Inventors:{" "}
                <strong>Singh, Daksh Kumar</strong>; Wilson, Blake A.; Chen, Yuheng; Ojha, Rohan; Pottle, Jaxon;
                Bezick, Michael; Boltasseva, Alexandra; Shalaev, Vladimir M. (2024).{" "}
                <em>ML Assisted Authentication via Tampered Optical Responses</em>. Application No. 19/233,515, filed
                June 10, 2025. <strong>Patent Pending</strong>.
              </Reveal>
            </li>
          </ul>

          <Reveal as="div">
            <h3>Conference Presentations</h3>
          </Reveal>
          <ul className={ulCls}>
            <li>
              <Reveal as="span">
                <strong>Singh, D. K.</strong>, Ojha, R.; Co-Authors: Chen, Y., Wilson, B., Shalaev, V., Boltasseva, A.,
                Kildishev, A. (2023). Machine Learning Assisted Realization of PUFs with Random Plasmonic Systems.{" "}
                <em>Cyberinfrastructure Symposium, RCAC</em>, West Lafayette, IN.
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                <strong>Singh, D. K.</strong>, Chen, Y.; Authors: Kudyshev, Z., Bogdanov, S., Isacsson, T., Kildishev,
                A., Boltasseva, A., Shalaev, V. (2023). Rapid Classification of Quantum Sources Enabled by Machine
                Learning. <em>Quantum Science Center All-Hands Meeting</em>, Nashville, TN.
              </Reveal>
            </li>
          </ul>
        </section>

        {/* =============================
            RESEARCH EXPERIENCE (per li)
           ============================= */}
        <section>
          <Reveal as="div">
            <h2>Research Experience</h2>
          </Reveal>

          <ul className={`${ulCls} space-y-6`}>
            <li>
              <Reveal as="span">
                <>
                  <strong>Undergraduate Research Assistant</strong>
                  <br />
                  <strong>Purdue University</strong>, West Lafayette, IN
                  <br />
                  <strong>Advisors:</strong> Prof. Alexandra Boltasseva, Prof. Vladimir Shalaev, Prof. Alexander
                  Kildishev
                  <br />
                  <strong>Dates:</strong> January 2023 – Present
                </>
              </Reveal>

              <ul className={ulCls + " mt-2 space-y-1"}>
                <li>
                  <Reveal as="span">
                    Contributing to ongoing research in <strong>nanophotonics</strong> and{" "}
                    <strong>quantum optics</strong>, focusing on the design, fabrication, and characterization of
                    photonic devices.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Working on <strong> machine-learning for inverse photonics design</strong>,{" "}
                    integrated photonics for quantum technologies, and <strong>quantum cryptography</strong> efforts.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Develop cleanroom expertise in <strong>electron-beam lithography (EBL)</strong>,{" "}
                    <strong>thin-film deposition</strong>, and <strong>optical testing</strong> for novel metastructures.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Co-author of multiple <strong>peer-reviewed publications</strong> and a{" "}
                    <strong>patent (pending)</strong>.
                  </Reveal>
                </li>
              </ul>
            </li>

            <li>
              <Reveal as="span">
                <>
                  <strong>2025 Research</strong>
                  <br />
                  <strong>Purdue University</strong>, West Lafayette, IN
                  <br />
                  <strong>Dates:</strong> May 2025 – August 2025
                </>
              </Reveal>
              <ul className={ulCls + " mt-2 space-y-1"}>
                <li>
                  <Reveal as="span">
                    Worked on designing and simulating implementation of the <strong>BB84 quantum key distribution protocol</strong> using{" "}
                    <strong>silicon nitride (SiN) photonics</strong> for <strong>single photon emission</strong>.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Simulated <strong>nanostructured metasurfaces</strong> to enhance single-photon emission using 2D
                    materials such as <strong>graphene</strong> and <strong>WSe2</strong>.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Fabricated <strong>platinum (Pt) contacts</strong> for studying spin injection in monolayer{" "}
                    <strong>CrSBr</strong> flakes.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Performed <strong>exfoliation</strong> and <strong>transfer</strong> of 2D CrSBr onto samples.
                  </Reveal>
                </li>
              </ul>
            </li>

            <li>
              <Reveal as="span">
                <>
                  <strong>2024 Research</strong>
                  <br />
                  <strong>Purdue University</strong>, West Lafayette, IN
                  <br />
                  <strong>Dates:</strong> May 2024 – August 2024
                </>
              </Reveal>
              <ul className={ulCls + " mt-2 space-y-1"}>
                <li>
                  <Reveal as="span">
                    Designed and simulated <strong>metalenses</strong> for optical tweezer control in analog{" "}
                    <strong>neutral-atom quantum computers</strong>.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Modeled and analyzed photonic systems using <strong>GRCWA</strong> and <strong>S4</strong>{" "}
                    electromagnetic solvers in Python.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Attended the <strong>U.S. Quantum Information Science (USQIS) Summer School</strong> at{" "}
                    <strong>Oak Ridge National Laboratory</strong>.
                  </Reveal>
                </li>
              </ul>
            </li>

            <li>
              <Reveal as="span">
                <>
                  <strong>Summer Undergraduate Research Fellow (SURF)</strong>
                  <br />
                  <strong>Birck Nanotechnology Center, Purdue University</strong>
                  <br />
                  <strong>Dates:</strong> May 2023 – August 2023
                </>
              </Reveal>
              <ul className={ulCls + " mt-2 space-y-1"}>
                <li>
                  <Reveal as="span">
                    Selected as one of <strong>400</strong> students for Purdue’s competitive <strong>SURF</strong>{" "}
                    program at <strong>Birck Nanotechnology Center</strong>.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Manufactured over <strong>10 microwave waveguides</strong> for photonics and quantum device
                    projects.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Fabricated thin-film <strong>transparent conducting oxides (TCOs)</strong> and characterized{" "}
                    <strong>optical properties</strong> for radiative heat transfer applications.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Captured and analyzed over <strong>200 diagnostic frames</strong> to assist in repairing a{" "}
                    <strong>pulsed laser deposition (PLD)</strong> system.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Helped establish a <strong>time-correlated single-photon counting (TCSPC)</strong> system and
                    performed <strong>photoluminescence (PL)</strong> and <strong>g2</strong> correlation measurements
                    to characterize quantum emitters.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">Integrated optical components, detectors, and software into a functional platform.</Reveal>
                </li>
              </ul>
            </li>

            <li>
              <Reveal as="span">
                <>
                  <strong>First-Time Researcher Fellow</strong>
                  <br />
                  <strong>Purdue University</strong>, West Lafayette, IN
                  <br />
                  <strong>Dates:</strong> January 2023 – May 2023
                </>
              </Reveal>
              <ul className={ulCls + " mt-2 space-y-1"}>
                <li>
                  <Reveal as="span">
                    Fabricated and characterized over <strong>20 samples</strong> for{" "}
                    <strong>microelectronics packaging</strong> and <strong>anti-counterfeiting</strong> applications.
                  </Reveal>
                </li>
                <li>
                  <Reveal as="span">
                    Developed early familiarity with <strong>machine learning models</strong> for quantitative analysis
                    of optical/electrical data.
                  </Reveal>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* ===========
            SKILLS (per li)
           =========== */}
        <section>
          <Reveal as="div">
            <h2>Skills</h2>
          </Reveal>
          <ul className={ulCls}>
            <li>
              <Reveal as="span">
                <strong>Fabrication &amp; Processing:</strong> E-beam lithography, photolithography, pulsed laser
                deposition (PLD), metal evaporation &amp; sputtering, CVD, 2D material exfoliation &amp; transfer.
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                <strong>Characterization &amp; Assembly:</strong> Ellipsometry (VASE), dark-field microscopy, SEM, AFM,
                photoluminescence (PL), g2 correlation, optical alignment, lens/mirror system integration.
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                <strong>Simulation &amp; Computation:</strong> Ansys Lumerical FDTD, Ansys HFSS, Tidy3D FDTD, RCWA
                (GRCWA/S4), KiCad, LTspice, MATLAB, Python (ML/AI), HDL (Verilog/SystemVerilog), QICK, Qiskit.
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                <strong>Soft Skills:</strong> Leadership, communication, documentation, time management, teamwork.
              </Reveal>
            </li>
            <li>
              <Reveal as="span">
                <strong>Languages:</strong> English (Native/Bilingual), Hindi (Native/Bilingual).
              </Reveal>
            </li>
          </ul>
        </section>

        {/* ============================
            HONORS & AFFILIATIONS (per li)
           ============================ */}
        <section>
          <Reveal as="div">
            <h2>Honors &amp; Fellowships</h2>
          </Reveal>
          <ul className={ulCls}>
            <li><Reveal as="span"><strong>Dean’s List</strong> — 6/6 semesters (Fall 2022 – Spring 2025)</Reveal></li>
            <li><Reveal as="span"><strong>Semester Honors</strong> — 5/6 semesters</Reveal></li>
            <li><Reveal as="span"><strong>Summer Undergraduate Research Fellowship (SURF)</strong> — Summer 2023</Reveal></li>
            <li><Reveal as="span"><strong>Best Poster Presentation</strong> — Purdue Summer Research Symposium (Aug 2023)</Reveal></li>
            <li><Reveal as="span"><strong>First-Time Researcher Fellowship</strong> — Jan 2023</Reveal></li>
          </ul>
        </section>

        <section>
          <Reveal as="div">
            <h2>Professional Affiliations</h2>
          </Reveal>
          <ul className={ulCls}>
            <li><Reveal as="span"><strong>Optica</strong> (Purdue University Chapter) — Treasurer</Reveal></li>
            <li><Reveal as="span"><strong>DOE Quantum Science Center</strong> (QSC)</Reveal></li>
            <li><Reveal as="span"><strong>Semiconductor Student Alliance</strong> — Purdue Chapter</Reveal></li>
            <li>
              <Reveal as="span">
                <strong>Collaborator:</strong> QuEra Computing Inc., Microsoft Azure Quantum, Quantinuum
              </Reveal>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
