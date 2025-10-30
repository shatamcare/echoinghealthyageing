import React from "react";
import data from "@/content/press/trust-bar.json";

export type TrustBarMarqueeProps = {
  speedSeconds?: number; // default 28–32s feels good
  direction?: "left" | "right"; // default "left"
  className?: string;
};

type Item = {
  name: string;
  logo: string;
  url: string;
  alt: string;
};

function logEventSafe(eventName: string, payload: Record<string, unknown>) {
  try {
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", eventName, payload);
      return;
    }
    // @ts-ignore
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      // @ts-ignore
      window.dataLayer.push({ event: eventName, ...payload });
      return;
    }
    // @ts-ignore custom logEvent if present
    if (typeof window !== "undefined" && typeof window.logEvent === "function") {
      // @ts-ignore
      window.logEvent(eventName, payload);
      return;
    }
  } catch {
    // no-op
  }
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("analytics:", eventName, payload);
  }
}

export default function TrustBarMarquee({
  speedSeconds = 30,
  direction = "left",
  className = "",
}: TrustBarMarqueeProps) {
  const items = data as Item[];
  const animation = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  // Edge fade (no hard cut) + overflow hidden
  const mask = "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

  return (
    <section
      aria-label="As seen in"
      className={`w-full border-t border-neutral-200/60 bg-white/60 backdrop-blur ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4">
        <div
          className="group relative overflow-hidden"
          style={{ WebkitMaskImage: mask as any, maskImage: mask as any }}
        >
          {/* Track: two copies back-to-back for seamless loop */}
          <ul
            role="list"
            aria-label={`List of ${items.length} logos`}
            className={[
              "flex shrink-0 items-center gap-10 md:gap-12 lg:gap-14",
              animation,
              "motion-reduce:animate-none",
              "group-hover:[animation-play-state:paused]",
              "focus-within:[animation-play-state:paused]",
            ].join(" ")}
            style={{ ["--scroll-duration" as any]: `${speedSeconds}s` }}
          >
            {items.map((item) => (
              <li
                key={`a-${item.name}`}
                className="flex items-center justify-center min-w-[140px] md:min-w-[180px] lg:min-w-[220px]"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.name} in a new tab`}
                  title={item.name}
                  className="inline-flex items-center justify-center transition filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 focus-visible:grayscale-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 focus-visible:ring-offset-1 rounded-sm"
                  onClick={() => {
                    if (item.url) {
                      logEventSafe("press_logo_click", {
                        outlet: item.name,
                        url: item.url,
                        location: "home_as_seen_in",
                      });
                    }
                  }}
                >
                  {/* Bigger logos: fixed-height box for CLS safety */}
                  <div className="h-12 md:h-16 lg:h-20 w-auto flex items-center">
                    <img
                      src={item.logo}
                      alt={item.alt}
                      className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                      width={300}
                      height={80}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </a>
              </li>
            ))}

            {/* Clone for seamless scroll */}
            {items.map((item) => (
              <li
                key={`b-${item.name}`}
                className="flex items-center justify-center min-w-[140px] md:min-w-[180px] lg:min-w-[220px]"
                aria-hidden="true"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  className="inline-flex items-center justify-center transition filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100"
                >
                  <div className="h-12 md:h-16 lg:h-20 w-auto flex items-center">
                    <img
                      src={item.logo}
                      alt=""
                      className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                      width={300}
                      height={80}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-3 text-center text-sm md:text-base text-neutral-700">
          Independent media &amp; institutions that have featured or supported us.
        </p>
      </div>
    </section>
  );
}
