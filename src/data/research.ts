export type ResearchItem = {
  title: string;
  period?: string;
  summary: string;
  links?: { label: string; href: string }[];
  tags?: string[];
};

export const researchItems: ResearchItem[] = [
  {
    title: "2D Single-Photon Metasurfaces",
    period: "2025",
    summary:
      "Modeled and simulated metasurfaces to enhance single-photon emission using 2D materials such as graphene and WSe₂. Studied various structuresa and thin-film stack arrangements to optimize emitter–cavity coupling.",
    tags: ["quantum optics", "2d materials", "metasurfaces"],
  },
  {
    title: "CrSBr Spin-Injection Samples",
    period: "2025",
    summary:
      "Fabricated gold (Au) and platinum (Pt) contacts and performed exfoliation/transfer of monolayer CrSBr flakes. Conducted optical tests for quantum spin Hall effect under cryogenic temperatures and high magnetic fields.",
    tags: ["spin injection", "2d magnets", "fabrication"],
  },
  {
    title: "Metalens Design for Neutral-Atom Control",
    period: "2024",
    summary:
      "Designed and simulated metalenses for optical tweezer control in analog neutral-atom quantum computers. Modeled photonic responses using RCWA-class solvers (GRCWA, S4). Collaborated with QuEra Computing Inc.",
    tags: ["metalenses", "simulation", "quantum control"],
  },
  {
    title: "TCSPC Platform for Quantum Emitters",
    period: "SURF 2023",
    summary:
      "Established a time-correlated single-photon counting (TCSPC) system performing PL and g² correlation measurements. Integrated optics, detectors, and software into a working characterization platform.",
    tags: ["tcspc", "instrumentation", "quantum emitters"],
  },
  {
    title: "PLD Diagnostics and Thin-Film Optics",
    period: "SURF 2023",
    summary:
      "Planned to study near-field radiative heat transfer in transparent conducting oxide (TCO) films. Fabricated 20+ samples. Captured and analyzed 200+ diagnostic frames to assist in pulsed laser deposition (PLD) system repair. Fabricated thin-film TCOs and waveguides for optical projects.",
    tags: ["thin films", "pld", "optical materials"],
  },
  {
    title: "Machine-Learning Optical Authentication (RAPTOR)",
    period: "2023",
    summary:
      "Developed ML pipelines and optical-response models for anti-counterfeiting and tamper detection in plasmonic PUF systems. Residual Attention-based Processing of Tampered Optical Response(RAPTOR) (patent pending)",
    links: [
      { label: "Advanced Photonics 2024", href: "https://doi.org/10.1117/1.ap.6.5.056002" },
      { label: "SPIE Photonic Computing 2024", href: "https://doi.org/10.1117/12.3027858" },
    ],
    tags: ["machine learning", "puf", "security"],
  },
];
