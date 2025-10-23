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
          <li><strong>Purdue University</strong> - MSECE (May 2027); primary area: Fields & Optics. related area: Microelectronics & Nanotechnology; concentrations: Microelectronics & Advanced Semiconductors</li>
        </ul>
	<ul>
          <li><strong>Purdue University</strong> - BSEE (Dec 2025); concentrations: Quantum Technologies, Wireless/Optical Engineering, Microelectronics & Semiconductors.</li>
        </ul>

        <h2>Publications & Patents</h2>
        <h3>Publications</h3>
	<ul>
	  <li><strong>Singh, D.K.</strong>, Wilson, B., Chen, Y., Ojha, R., Bezick, M., Boltasseva, A., Shalaev, V.M., Kildishev, A.V. (2025). Machine Learning Framework for Semiconductor Chips Anti-Counterfeiting Using a Plasmonic Physically Unclonable Function. Frontiers in Optics + Laser Science 2025. <em>[Accepted Contribution]<em></li>
	</ul>
	<ul>
	  <li>Chen, Y., McNeil, A.M., Park, T., Wilson, B., Iyer, V., Bezick, M., Choi, J., Ojha, R., Mahendran, P., <strong>Singh, D.K.</strong>, Chitturi, G., Chen, P., Do, T., Satuloori, V., Kildishev, A.V., Shalaev, V.M., Moebius, M., Cai, W., Liu, Y., Boltasseva, A. (2025). Machine-Learning-Assisted Photonic Device Development: A Multiscale Approach from Theory to Characterization. Nanophotonics 2025. <a href="url">https://doi.org/10.1515/nanoph-2025-0049</a></li>
	</ul>
	<ul>
	  <li>Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Bezick, M., Pott, J., Shalaev, V. M., Boltasseva, A., & Kildishev, A. V. (2024). Machine-learning-assisted optical authentication of chip tampering. Photonic Computing: From Materials and Devices to Systems and Applications, 16. <a href="url">https://doi.org/10.1117/12.3027858</a></li>
	</ul>
	<ul>
	  <li>Wilson, B., Chen, Y., <strong>Singh, D. K.</strong>, Ojha, R., Pottle, J., Bezick, M., Boltasseva, A., Shalaev, V. M., & Kildishev, A. V. (2024). Authentication through residual attention-based processing of tampered optical responses. Advanced Photonics, 6(05). <a href="url">https://doi.org/10.1117/1.ap.6.5.056002</a></li>
	</ul>
	<h3>Patents</h3>
	<ul>
	  <li>First Inventor: Kildishev, Alexander V.; Co-Inventors: <strong>Singh, Daksh Kumar</strong>; Wilson, Blake A.; Chen, Yuheng; Ojha, Rohan; Pottle, Jaxon; Bezick, Michael; Boltasseva, Alexandra; Shalaev, Vladimir M. 2024. ML Assisted Authentication via Tampered Optical Responses. Application No. 19/233,515, filed June 10, 2025. Patent Pending.</li>
	</ul>
	<h3>Conference Presentations</h3>
	<ul>
	  <li><strong>Singh, D. K.</strong>, Ojha, R.; Co-Authors: Chen, Y., Wilson, B., Shalaev, V., Boltasseva, A., Kildishev, A. (2023). Machine Learning Assisted Realization of PUFs with Random Plasmonic Systems. Cyberinfrastructure Symposium, RCAC, West Lafayette, IN.</li>
	</ul>
	<ul>
	  <li><strong>Singh, D. K.</strong>, Chen, Y.; Authors: Kudyshev, Z., Bogdanov, S., Isacsson, T., Kildishev, A., Boltasseva, A., Shalaev, V. (2023). Rapid Classification of Quantum Sources Enabled by Machine Learning. Quantum Science Center All-Hands Meeting, Nashville, TN.</li>
	</ul>
	<ul>
          <li>See the <a href="/publications">Publications</a> page for the full list.</li>
        </ul>

        <h2>Research Experience</h2>
	<ul className="space-y-6">

  	  <li>
    	    <strong>Undergraduate Research Assistant</strong><br/>
    	    <strong>Purdue University</strong>, West Lafayette, IN<br/>
    	    <strong>Advisors:</strong> Prof. Alexandra Boltasseva, Prof. Vladimir Shalaev, Prof. Alexander Kildishev<br/>
    	    <strong>Dates:</strong> January 2023 – Present
    	    <ul className="list-disc list-inside mt-2 space-y-1">
      	  <li>Contribute to ongoing research in <strong>nanofabrication</strong> and <strong>quantum photonics</strong>, with focus on designing, fabricating, and characterizing photonic devices.</li>
      	  <li>Develop cleanroom expertise in <strong>electron-beam lithography (EBL)</strong>, <strong>thin-film deposition</strong>, and <strong>optical testing</strong> for novel metastructures.</li>
      	  <li>Co-author of multiple <strong>peer-reviewed publications</strong> and one <strong>patent (pending)</strong> in nanophotonics and device authentication.</li>
    	</ul>
  	  </li>

  	  <li>
    	    <strong>Summer 2025 Research</strong><br/>
    	    <strong>Purdue University</strong>, West Lafayette, IN<br/>
    	    <strong>Dates:</strong> May 2025 – August 2025
    	    <ul className="list-disc list-inside mt-2 space-y-1">
      	    <li>Simulated <strong>nanostructured metasurfaces</strong> to enhance single-photon emission using 2D materials such as <strong>graphene</strong> and <strong>WSe₂</strong>.</li>
      	    <li>Fabricated <strong>gold contacts</strong> for studying spin injection in monolayer <strong>CrSBr</strong> flakes.</li>
      	  <li>Performed <strong>exfoliation</strong> and <strong>transfer</strong> of 2D CrSBr onto multiple samples.</li>
      	  <li>Conducted <strong>optical characterization</strong> for emitter–cavity coupling, integrating fabrication and measurement workflows.</li>
    	</ul>
  	  </li>

  	  <li>
    	    <strong>Summer 2024 Research</strong><br/>
    	    <strong>Purdue University</strong>, West Lafayette, IN<br/>
    	    <strong>Dates:</strong> May 2024 – August 2024
    	    <ul className="list-disc list-inside mt-2 space-y-1">
      	  <li>Designed and simulated <strong>metalenses</strong> for optical tweezer control in analog <strong>neutral-atom quantum computers</strong>.</li>
      	  <li>Modeled and analyzed photonic systems using <strong>GRCWA</strong> and <strong>S4</strong> electromagnetic solvers in Python.</li>
      	  <li>Attended the <strong>U.S. Quantum Information Science (USQIS) Summer School</strong> at <strong>Oak Ridge National Laboratory</strong>, focusing on quantum device fundamentals and computation.</li>
    	</ul>
  	  </li>

  	  <li>
    	    <strong>Summer Undergraduate Research Fellow (SURF)</strong><br/>
    	    <strong>Birck Nanotechnology Center, Purdue University</strong><br/>
    	    <strong>Dates:</strong> May 2023 – August 2023
    	<ul className="list-disc list-inside mt-2 space-y-1">
      	  <li>Selected as one of <strong>400 students</strong> for Purdue’s competitive SURF program to conduct interdisciplinary research at <strong>Birck Nanotechnology Center</strong>.</li>
      	  <li>Manufactured over <strong>10 microwave waveguides</strong> for various photonics and quantum device projects.</li>
      	  <li>Fabricated thin-film <strong>transparent conducting oxides (TCOs)</strong> and characterized their <strong>optical properties</strong> for radiative heat transfer applications.</li>
      	  <li>Captured and analyzed over <strong>200 diagnostic frames</strong> to assist in repairing a <strong>pulsed laser deposition (PLD)</strong> system.</li>
      	  <li>Helped establish a <strong>time-correlated single-photon counting (TCSPC)</strong> system and performed <strong>photoluminescence (PL)</strong> and <strong>g² correlation</strong> measurements to characterize quantum emitters.</li>
      	  <li>Integrated optical components, detectors, and software into a functional quantum emitter characterization platform.</li>
    	</ul>
  	  </li>

  	  <li>
    	    <strong>First-Time Researcher Fellow</strong><br/>
    	    <strong>Purdue University</strong>, West Lafayette, IN<br/>
    	    <strong>Dates:</strong> January 2023 – May 2023
    	<ul className="list-disc list-inside mt-2 space-y-1">
      	  <li>Fabricated and characterized over <strong>20 samples</strong> for <strong>microelectronics packaging</strong> and <strong>anti-counterfeiting</strong> applications.</li>
      	  <li>Developed early familiarity with <strong>machine learning models</strong> for quantitative analysis of optical and electrical data.</li>
    	</ul>
  	  </li>
	</ul>

        <h2>Skills</h2>
        <ul>
          <li><strong>Fabrication & Processing</strong>E-Beam Lithography, Photolithography, Pulsed Laser Deposition, Metal Evaporation and Sputtering, Chemical Vapor Deposition, 2D material exfoliation and transfer.</li>
        </ul>
	<ul>
          <li><strong>Characterization & Assembly</strong>Variable Angle Spectroscopic Ellipsometry, Dark Field Microscopy, Scanning Electron Microscopy, Atomic Force Microscopy, Photoluminescence (PL), g(2) correlation measurements, Optical Alignment, Lens/Mirror system assembly.</li>
        </ul>
	<ul>
          <li><strong>Simulation & Computation</strong>Ansys Lumerical FDTD, Ansys HFSS, Tidy3D FDTD, RCWA, KiCad, LTSpice, MatLab, Python: ML/AI, HDL: Verilog/SystemVerilog, QICK, QISKIT.</li>
        </ul>
	<ul>
          <li><strong>Soft Skills</strong>Leadership, Communication, Documentation, Time Management, Teamwork</li>
        </ul>
	<ul>
          <li><strong>Languages</strong>English (Native/Bilingual Proficiency), Hindi (Native/Bilingual Proficiency)</li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
