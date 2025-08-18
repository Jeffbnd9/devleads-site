"use client";

import Script from "next/script";

type Props = { json: Record<string, any> | Record<string, any>[] };

export default function SeoJsonLd({ json }: Props) {
  return (
    <Script
      id="jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
