"use client";

import { useEffect, useState } from "react";

type ConsentStatus = "granted" | "denied";
const STORAGE_KEY = "cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function readStoredConsent(): ConsentStatus | null {
  try {
    const v =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function storeConsent(v: ConsentStatus) {
  try {
    window.localStorage.setItem(STORAGE_KEY, v);
  } catch {
    // ignore
  }
}

function updateGtagConsent(status: ConsentStatus) {
  if (typeof window === "undefined" || !window.gtag) return;
  const granted = status === "granted";
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      updateGtagConsent(stored);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    storeConsent("granted");
    updateGtagConsent("granted");
    setVisible(false);
  };

  const handleDecline = () => {
    storeConsent("denied");
    updateGtagConsent("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="
        fixed bottom-5 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-3xl
        rounded-2xl border border-[#26292f]
        bg-[#2f3136] text-white
        shadow-[6px_6px_20px_#1e2025,-6px_-6px_16px_#3a3d45]
        p-4 md:p-5
      "
    >
      <h2 className="text-lg font-semibold mb-2">Cookies</h2>
      <p className="text-sm text-gray-200">
        Nous utilisons des cookies pour mesurer l’audience (Google Analytics) et
        améliorer votre expérience. Vous pouvez accepter ou refuser.
      </p>

      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          onClick={handleDecline}
          className="
            px-4 py-2 rounded-xl
            bg-[#2a2c31] text-white
            border border-[#454953]
            shadow-[4px_4px_12px_#23252c,-4px_-4px_10px_#3a3d45]
            transition hover:scale-105
          "
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="
            px-4 py-2 rounded-xl
            bg-emerald-500 text-black font-semibold
            shadow transition hover:bg-emerald-400
          "
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
