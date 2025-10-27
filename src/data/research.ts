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
    period: "Summer 2025",
    summary:
      "Modeled and simulated metasurfaces to enhance single-photon emission using 2D materials such as graphene and WSe₂. Integrated fabrication (EBL, gold contacts) and optical characterization for emitter–cavity coupling.",
    tags: ["quantum optics", "2D materials", "metasurfaces"],
  },
  {
    title: "CrSBr Spin-Injection Samples",
    period: "Summer 2025",
    summary:
      "Fabricated gold contacts and performed exfoliation/transfer of monolayer CrSBr flakes. Conducted optical tests for spin-related emission and cavity coupling.",
    tags: ["spin injection", "2D magnets", "fabrication"],
  },
  {
    title: "Metalens Design for Neutral-Atom Control",
    period: "Summer 2024",
    summary:
      "Designed and simulated metalenses for optical tweezer control in analog neutral-atom quantum computers. Modeled photonic responses using RCWA solvers (GRCWA/S4).",
    tags: ["metalenses", "simulation", "quantum control"],
  },
  {
    title: "TCSPC Platform for Quantum Emitters",
    period: "SURF 2023",
    summary:
      "Established a time-correlated single-photon counting (TCSPC) system performing PL and g² correlation measurements. Integrated optics, detectors, and software into a working characterization platform.",
    tags: ["TCSPC", "instrumentation", "quantum emitters"],
  },
  {
    title: "PLD Diagnostics and Thin-Film Optics",
    period: "SURF 2023",
    summary:
      "Captured and analyzed 200+ diagnostic frames to assist in pulsed laser deposition (PLD) system repair. Fabricated thin-film transparent conducting oxides and waveguides for optical projects.",
    tags: ["thin films", "PLD", "optical materials"],
  },
  {
    title: "Machine-Learning Optical Authentication (RAPTOR)",
    period: "2024–2025",
    summary:
      "Developed residual-attention ML pipelines and optical-response models for anti-counterfeiting and tamper detection in plasmonic PUF systems.",
    links: [
      { label: "Advanced Photonics 2024", href: "https://doi.org/10.1117/1.ap.6.5.056002" },
      { label: "SPIE Photonic Computing 2024", href: "https://doi.org/10.1117/12.3027858" },
    ],
    tags: ["machine learning", "PUF", "security"],
  },
];
