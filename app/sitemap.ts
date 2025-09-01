// app/sitemap.ts
import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.devleads.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`,          changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/contact`,   changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/prestations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projets`,   changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/mentions`,  changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/cgu`,       changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/conf`,      changeFrequency: "yearly",  priority: 0.3 },
  ];
}