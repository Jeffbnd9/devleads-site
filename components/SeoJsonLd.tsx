// components/SeoJsonLd.tsx
"use client";

import Head from "next/head";

type JsonLdProps = {
  json: Record<string, unknown> | Record<string, unknown>[];
};

export default function SeoJsonLd({ json }: JsonLdProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        // JSON.stringify avec indentation null/2 pour lisibilité
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json, null, 2) }}
      />
    </Head>
  );
}
