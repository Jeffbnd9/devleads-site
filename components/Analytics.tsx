"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Pageview à chaque navigation client
  useEffect(() => {
    if (!GA_ID) return;
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    const page_path =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path,
    });
  }, [pathname, searchParams]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          // Consent par défaut: refus (RGPD)
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { 'anonymize_ip': true });
        `}
      </Script>
    </>
  );
}
