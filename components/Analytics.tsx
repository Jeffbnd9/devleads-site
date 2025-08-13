"use client";

import { Suspense, useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/** Partie qui utilise les hooks de navigation */
function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  return null;
}

/** Wrapper rendu par l’app : injection GA + Suspense pour les hooks */
export default function Analytics() {
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

      {/* ⬇️ Cette ligne évite l’erreur sur /404 / _not-found */}
      <Suspense fallback={null}>
        <AnalyticsInner />
      </Suspense>
    </>
  );
}
