import React from "react";
import trustItems from "@/content/press/trust-bar.json";
import { cn } from "@/lib/utils";

// Types for JSON entries
type TrustItem = {
  name: string;
  logo: string; // path under public, e.g., /logos/brand.svg
  url: string;
  alt: string;
};

export type TrustBarProps = {
  className?: string;
};

// Lightweight analytics dispatcher
function sendEvent(item: TrustItem) {
  try {
    if (!item.url) return;
    // Preferred signature
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.logEvent === "function") {
      // @ts-ignore
      window.logEvent('press_logo_click', { outlet: item.name, url: item.url, location: 'home_as_seen_in' });
      return;
    }
    // gtag-style
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", "press_logo_click", { outlet: item.name, url: item.url, location: 'home_as_seen_in' });
      return;
    }
    // dataLayer-style
    // @ts-ignore
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      // @ts-ignore
      window.dataLayer.push({ event: "press_logo_click", outlet: item.name, url: item.url, location: 'home_as_seen_in' });
      return;
    }
  } catch (e) {
    // no-op
  }
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("analytics:", { event: 'press_logo_click', outlet: item.name, url: item.url, location: 'home_as_seen_in' });
  }
}

// JSON-LD Organization (optional)
function OrganizationJsonLd() {
  const sameAs = (trustItems as TrustItem[]).map((t) => t.url);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Echoing Healthy Ageing",
    url: typeof window !== "undefined" ? window.location.origin : "https://echoinghealthyageing.com",
    sameAs,
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export const TrustBar: React.FC<TrustBarProps> = ({ className }) => {
  const items = (trustItems as TrustItem[]);

  return (
    <section aria-label="As seen in" className={cn("bg-white border-t border-neutral-200/60", className)}>
      <OrganizationJsonLd />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Visually hidden heading for screen readers */}
        <h2 className="sr-only">As seen in</h2>

        <ul
          role="list"
          aria-label={`List of ${items.length} logos`}
          className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-4 min-h-14 md:min-h-16 py-3"
        >
          {items.map((item, idx) => (
            <li key={item.name} className="shrink-0">
              <a
                href={item.url}
                title={item.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.name} in a new tab`}
                onClick={() => sendEvent(item)}
                className="inline-flex items-center justify-center transition filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 focus-visible:grayscale-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 focus-visible:ring-offset-1 rounded-md"
              >
                <span className="h-7 md:h-8 w-auto flex items-center">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-7 md:h-8 w-auto object-contain"
                    onError={(e) => {
                      const li = (e.currentTarget.closest("li") as HTMLElement | null);
                      if (li) li.style.display = "none";
                    }}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-xs sm:text-sm text-neutral-700 leading-tight pb-3">
          Independent media & institutions that have featured or supported us.
        </p>
      </div>
    </section>
  );
};

export default TrustBar;
