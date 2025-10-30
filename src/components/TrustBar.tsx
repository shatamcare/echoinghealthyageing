import React from "react";
import trustItems from "@/data/trust-bar.json";
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
function sendAnalytics(item: TrustItem) {
  try {
    // gtag-style
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", "click", {
        event_category: "trust_bar",
        event_label: item.name,
        value: item.url,
      });
      return;
    }
    // dataLayer-style
    // @ts-ignore
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      // @ts-ignore
      window.dataLayer.push({
        event: "trust_bar_click",
        category: "trust_bar",
        action: "click",
        label: item.name,
        url: item.url,
      });
      return;
    }
  } catch (e) {
    // no-op
  }
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("analytics:", { category: "trust_bar", action: "click", label: item.name, url: item.url });
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
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Visually hidden heading for screen readers */}
        <h2 className="sr-only">As seen in</h2>

        <ul
          role="list"
          aria-label={`List of ${items.length} logos`}
          className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-4 min-h-14 md:min-h-16 py-3"
        >
          {items.map((item, idx) => (
            <li key={item.name} className="shrink-0">
              <a
                href={item.url}
                title={item.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.alt}
                onClick={() => sendAnalytics(item)}
                className="group inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 focus-visible:ring-offset-1 rounded-md"
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  height={idx < 4 ? 32 : 28}
                  loading={idx < 4 ? "eager" : "lazy"}
                  // @ts-ignore (not yet in TS DOM types in all versions)
                  fetchPriority={idx < 4 ? "high" : "auto"}
                  decoding="async"
                  className={cn(
                    "h-7 md:h-8 w-auto object-contain grayscale opacity-70",
                    "transition-opacity duration-200 motion-reduce:transition-none",
                    "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )}
                  onError={(e) => {
                    // Hide only this item if the asset fails to load
                    const li = (e.currentTarget.closest("li") as HTMLElement | null);
                    if (li) li.style.display = "none";
                  }}
                />
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
