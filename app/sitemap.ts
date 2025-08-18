// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.devleads.org";
  return [
    { url: `${base}/`,            priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/contact`,     priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/prestations`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/projets`,     priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/mentions`,    priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/cgu`,         priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/conf`,        priority: 0.3, changeFrequency: "yearly" },
  ];
}