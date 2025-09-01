import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/Contact", destination: "/contact", permanent: true },
      { source: "/Projets", destination: "/projets", permanent: true },
      { source: "/Prestations", destination: "/prestations", permanent: true },
      // ajoute d'autres variantes si besoin
    ];
  },
};

export default nextConfig;