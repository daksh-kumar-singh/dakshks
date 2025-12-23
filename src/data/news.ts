export type NewsItem = {
  title: string;
  outlet: string;
  url: string;
  /** ISO date string if known (YYYY-MM-DD). If unknown, leave empty string "" */
  date: string;
  /** Lower rank = higher importance (1 is best) */
  rank: number;
  /** Optional short note if the exact date is not listed on the page */
  note?: string;
};

export const news: NewsItem[] = [
  {
    title: "From Concept to Competition: Purdue ECE students shine at SPARK Challenge",
    outlet: "Purdue University ECE News",
    url: "https://engineering.purdue.edu/ECE/News/2025/from-concept-to-competition-purdue-ece-students-shine-at-spark-challenge",
    date: "2025-12-15",
    rank: 1
  },
  {
    title: "AI-assisted photonic detector identifies fake semiconductor chips",
    outlet: "Physics World",
    url: "https://physicsworld.com/a/ai-assisted-photonic-detector-identifies-fake-semiconductor-chips/",
    date: "2024-09-20",
    rank: 2,
  },
  {
    title: "AI-powered optical detection to thwart counterfeit chips",
    outlet: "SPIE News",
    url: "https://spie.org/news/ai-powered-optical-detection-to-thwart-counterfeit-chips",
    date: "2024-09-18",
    rank: 3,
  },
  {
    title: "Purdue deep-learning innovation secures semiconductors against counterfeit chips",
    outlet: "Purdue University News",
    url: "https://www.purdue.edu/newsroom/2024/Q3/purdue-deep-learning-innovation-secures-semiconductors-against-counterfeit-chips/",
    date: "2024-09-17",
    rank: 4,
  },
  {
    title: "AI-optical method to curb counterfeit chips",
    outlet: "Electro Optics",
    url: "https://www.electrooptics.com/article/ai-optical-method-curb-counterfeit-chips",
    date: "",
    rank: 5,
    note: "Exact publish date not listed on page",
  },
  {
    title: "RAPTOR takes a bite out of global counterfeit semiconductor market",
    outlet: "Purdue Research Foundation Stories",
    url: "https://stories.prf.org/raptor-takes-a-bite-out-of-global-counterfeit-semiconductor-market/",
    date: "2024-09-10",
    rank: 6,
  },
  {
    title: "AI-powered optical detection tackles fake chips",
    outlet: "Securing Industry",
    url: "https://www.securingindustry.com/electronics-and-industrial/ai-powered-optical-detection-tackles-fake-chips/s105/a16228/",
    date: "2024-07-24",
    rank: 7,
  },
  {
    title: "Purdue engineers tackle counterfeit chips with AI-powered RAPTOR",
    outlet: "Astute Group",
    url: "https://www.astutegroup.com/news/industrial/purdue-engineers-tackle-counterfeit-chips-with-ai-powered-raptor/",
    date: "2024-09-18",
    rank: 8,
  },
  {
    title: "RAPTOR turns a beady eye onto counterfeit or maliciously modified chips",
    outlet: "Hackster.io",
    url: "https://www.hackster.io/news/raptor-turns-a-beady-eye-onto-counterfeit-or-maliciously-modified-chips-8924edf2b108",
    date: "",
    rank: 9,
    note: "Site shows relative time; month/year 2024",
  },
].sort((a, b) => a.rank - b.rank);
