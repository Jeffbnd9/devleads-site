// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.devleads.org";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // évite d’indexer les endpoints
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}