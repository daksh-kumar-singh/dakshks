export type PubType = "journal" | "conference" | "patent";

export type Publication = {
  type: PubType;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  note?: string;
};

export const publications: Publication[] = [
  // ---------- Publications (journal etc.)
  {
    type: "conference",
    title:
      "Machine Learning Framework for Semiconductor Chips Anti-Counterfeiting Using a Plasmonic Physically Unclonable Function",
    authors:
      "Singh, D.K.; Wilson, B.; Chen, Y.; Ojha, R.; Bezick, M.; Boltasseva, A.; Shalaev, V.M.; Kildishev, A.V.",
    venue: "Optica: Frontiers in Optics + Laser Science 2025",
    year: 2025,
    note: "Accepted Contribution",
  },
  {
    type: "journal",
    title:
      "Machine-Learning-Assisted Photonic Device Development: A Multiscale Approach from Theory to Characterization",
    authors:
      "Chen, Y.; McNeil, A.M.; Park, T.; Wilson, B.; Iyer, V.; Bezick, M.; Choi, J.; Ojha, R.; Mahendran, P.; Singh, D.K.; Chitturi, G.; Chen, P.; Do, T.; Satuloori, V.; Kildishev, A.V.; Shalaev, V.M.; Moebius, M.; Cai, W.; Liu, Y.; Boltasseva, A.",
    venue: "Nanophotonics",
    year: 2025,
    doi: "10.1515/nanoph-2025-0049",
  },
  {
    type: "conference",
    title: "Machine-learning-assisted optical authentication of chip tampering",
    authors:
      "Wilson, B.; Chen, Y.; Singh, D. K.; Ojha, R.; Bezick, M.; Pott, J.; Shalaev, V. M.; Boltasseva, A.; Kildishev, A. V.",
    venue: "Photonic Computing: From Materials and Devices to Systems and Applications, 16",
    year: 2024,
    doi: "10.1117/12.3027858",
  },
  {
    type: "journal",
    title:
      "Authentication through residual attention-based processing of tampered optical responses",
    authors:
      "Wilson, B.; Chen, Y.; Singh, D. K.; Ojha, R.; Pottle, J.; Bezick, M.; Boltasseva, A.; Shalaev, V. M.; Kildishev, A. V.",
    venue: "Advanced Photonics, 6(05)",
    year: 2024,
    doi: "10.1117/1.ap.6.5.056002",
  },
  {
    type: "conference",
    title:
      "Machine Learning Realization of PUFS with Random Plasmonic Systems",
    authors:
      "Singh, D.K., Ojha, R., Chen, Y., Wilson, B., Bezick, M., Boltasseva, A., Shalaev, V. M., Kildishev, A. V.",
    venue: "Cyberinfrastructure Symposium, RCAC - Purdue University",
    year: 2023,
    note: "Conference Presentation",
  },
  {
    type: "conference",
    title:
      "Plasmonic nanoparticle densities for physical verification of unclonable spectral tags in microelectronics packaging",
    authors:
      "Singh, D.K., Chen, Y., Wilson, B., Boltasseva, A., Shalaev, V. M., Kildishev, A. V.",
    venue: "Spring Undergraduate Research Symposium - Purdue University",
    year: 2023,
    note: "Conference Presentation",
  },
  {
    type: "conference",
    title:
      "Rapid Classification of Quantum Sources Enabled by Machine Learning",
    authors:
      "Singh, D. K., Chen, Y., Kudyshev, Z., Bogdanov, S., Isacsson, T., Kildishev, A. V., Boltasseva, A., Shalaev, V. M.",
    venue: "DoE Quantum Science Center All-Hands Meeting",
    year: 2023,
    note: "Conference Presentation",
  },



  // ---------- Patents
  {
    type: "patent",
    title: "ML Assisted Authentication via Tampered Optical Responses",
    authors:
      "First Inventor: Kildishev, Alexander V.; Co-Inventors: Singh, Daksh Kumar; Wilson, Blake A.; Chen, Yuheng; Ojha, Rohan; Pottle, Jaxon; Bezick, Michael; Boltasseva, Alexandra; Shalaev, Vladimir M.",
    venue:
      "Application No. 19/233,515, filed June 10, 2025. Patent Pending.",
    year: 2025,
  },
];
