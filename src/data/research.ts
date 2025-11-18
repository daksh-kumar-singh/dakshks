export type ResearchItem = {
  title: string;
  period?: string;
  summary: string;
  links?: { label: string; href: string }[];
  tags?: string[];
};

export const researchItems: ResearchItem[] = [
  {
    title: "Realization of BB84 Protocol with Silicon Nitride (SiN) Photonics",
    period: "Fall 2025",
    summary:
      "Designed experiment for realization of BB84 quantum key distribution protocol using single photon emission (SPE) from coupling enhanced cavities in SiN. Simulated and optimized circuits for encoding, transmission, and decoding of quantum states.",
    tags: ["quantum cryptography", "quantum key distribution", "optical design"],
  },
  {
    title: "Studying Effects of Strain on Optical Properties of Thin-Flakes",
    period: "Fall 2025",
    summary:
      "Fabricated samples with nanoholes by etching in Silicon (Si) to study optical properties of suspended 2D thin-flakes. Conducted tests under varying nanohole sizes and strain conditions under cryogenic temperatures.",
    tags: ["nanofabrication", "2d materials", "quantum sensing"],
  },
  {
    title: "CrSBr Spin-Injection Samples",
    period: "Summer/Fall 2025",
    summary:
      "Fabricated platinum (Pt) and palladium (Pd) contacts and performed exfoliation/transfer of monolayer CrSBr flakes. Conducted optical tests for quantum spin Hall effect under cryogenic temperatures and high magnetic fields.",
    tags: ["spin injection", "2d flakes", "fabrication"],
  },
  {
    title: "2D Single-Photon Metasurfaces",
    period: "Summer 2025",
    summary:
      "Modeled and simulated metasurfaces to enhance single-photon emission using 2D materials such as graphene and WSe₂. Studied various structuresa and thin-film stack arrangements to optimize emitter–cavity coupling.",
    tags: ["quantum optics", "2d materials", "metasurfaces"],
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
    period: "FTR 2023",
    summary:
      "Developed ML pipelines and optical-response models for anti-counterfeiting and tamper detection in plasmonic PUF systems. Residual Attention-based Processing of Tampered Optical Response(RAPTOR) (patent pending)",
    links: [
      { label: "Advanced Photonics 2024", href: "https://doi.org/10.1117/1.ap.6.5.056002" },
      { label: "SPIE Photonic Computing 2024", href: "https://doi.org/10.1117/12.3027858" },
    ],
    tags: ["machine learning", "puf", "security"],
  },
];
