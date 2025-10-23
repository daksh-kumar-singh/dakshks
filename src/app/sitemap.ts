import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dakshks.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/research`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/publications`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cv`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
