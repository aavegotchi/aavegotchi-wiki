import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

const ANALYTICS_MODE_GA = "ga";
const ANALYTICS_MODE_RESTRICTED = "restricted";

declare global {
  interface Window {
    __AAVEGOTCHI_ANALYTICS_MODE?: string;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getAnalyticsMode(): string {
  if (typeof window === "undefined") return ANALYTICS_MODE_RESTRICTED;
  return window.__AAVEGOTCHI_ANALYTICS_MODE === ANALYTICS_MODE_GA
    ? ANALYTICS_MODE_GA
    : ANALYTICS_MODE_RESTRICTED;
}

const AnalyticsLoader = () => {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA4_ID;

    if (!gaId) return;
    if (getAnalyticsMode() !== ANALYTICS_MODE_GA) {
      // Fail closed for restricted/unknown regions.
      (window as any)[`ga-disable-${gaId}`] = true;
      return;
    }

    const existingScript = document.querySelector(
      `script[data-ga-id="${gaId}"]`
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      gaId
    )}`;
    script.dataset.gaId = gaId;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", gaId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      transport_type: "beacon",
    });
  }, []);

  return <Analytics />;
};

export default AnalyticsLoader;
