export type ResearchItem = {
  title: string;
  period?: string;
  summary: string;
  links?: { label: string; href: string }[];
  tags?: string[];
};

export const researchItems: ResearchItem[] = [
  {
    title: "ML-assisted optical authentication (RAPTOR/PUF tamper detection)",
    period: "2024–2025",
    summary:
      "Residual-attention pipelines and optical-response modeling for anti-counterfeiting and tamper detection on photonic/PUF systems.",
    links: [
      { label: "Nanophotonics 2025 (DOI)", href: "https://doi.org/10.1515/nanoph-2025-0049" },
      { label: "SPIE 2024 (DOI)", href: "https://doi.org/10.1117/12.3027858" },
      { label: "Advanced Photonics 2024 (DOI)", href: "https://doi.org/10.1117/1.ap.6.5.056002" },
    ],
    tags: ["ML", "security", "optics"],
  },
  {
    title: "Metasurface design for single-photon emission (2D materials)",
    period: "Summer 2025",
    summary:
      "Modeled metasurfaces to enhance emission from graphene/WSe2 emitters; integrated with fabrication (contacts, exfoliation/transfer) and optical characterization for cavity coupling.",
    tags: ["metasurfaces", "2D materials", "quantum optics"],
  },
  {
    title: "Metalens design for neutral-atom control",
    period: "Summer 2024",
    summary:
      "Designed/simulated metalenses for optical tweezers; explored photonic responses using RCWA-class solvers (GRCWA/S4).",
    tags: ["metalenses", "neutral atoms", "simulation"],
  },
  {
    title: "TCSPC platform & PLD diagnostics",
    period: "SURF 2023",
    summary:
      "Established a TCSPC setup (PL, g2 correlation) for quantum emitters; assisted PLD diagnostics with 200+ image frames and waveguide/TCO fabrication for group projects.",
    tags: ["TCSPC", "PLD", "instrumentation"],
  },
  {
    title: "CrSBr spin-injection samples",
    period: "Summer 2025",
    summary:
      "Fabricated Au contacts for CrSBr monolayer flakes; exfoliation/transfer across samples; optical tests for emitter–cavity coupling.",
    tags: ["2D magnets", "spin injection"],
  },
];
