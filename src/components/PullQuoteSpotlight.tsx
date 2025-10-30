import React from "react";
import quotes from "@/content/press/pull-quotes.json";

// (optional) lightweight analytics
function logPressQuoteClick(kind: "logo" | "cta", outlet: string, url?: string) {
  const payload = { event: "press_quote_click", kind, outlet, url, location: "pull_quote_spotlight" };
  // @ts-ignore
  if (typeof window !== "undefined" && (window as any).gtag) (window as any).gtag("event", "press_quote_click", payload);
  // @ts-ignore
  if (typeof window !== "undefined" && (window as any).dataLayer) (window as any).dataLayer.push(payload);
  if (typeof window !== "undefined" && !((window as any).gtag || (window as any).dataLayer)) {
    // eslint-disable-next-line no-console
    console.debug(payload);
  }
}

type Props = {
  intervalMs?: number; // rotation interval
  className?: string;
};

type QuoteItem = {
  text: string;
  outlet: string;
  logo: string;
  url: string;
  alt: string;
};

export default function PullQuoteSpotlight({ intervalMs = 7000, className = "" }: Props) {
  const items = quotes as QuoteItem[];
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = items.length;

  // Auto-rotate (respects reduced motion)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || paused || count <= 1) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, paused, count]);

  // keyboard focus within -> pause
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onFocusIn = () => setPaused(true);
    const onFocusOut = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node)) setPaused(false);
    };
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut as any);
    return () => {
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut as any);
    };
  }, []);

  // NEW: derive active quote once to reuse for CTA
  const activeQuote = items[index];
  const ctaHref = activeQuote?.url || "/press";
  const ctaTitle = activeQuote?.url ? `Read full coverage on ${activeQuote.outlet}` : "See all press & partners";

  return (
    <section aria-label="Press pull-quote spotlight" className={className}>
      <div
        ref={containerRef}
        className="mx-auto max-w-5xl px-4 md:px-6 py-6 md:py-8 rounded-2xl bg-white/70 backdrop-blur border border-neutral-200/60"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative min-h-[110px] md:min-h-[120px]">
          {items.map((q, i) => {
            const active = i === index;
            return (
              <figure
                key={q.outlet + i}
                className={[
                  "absolute inset-0 grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6",
                  "transition-opacity duration-500 ease-out",
                  active ? "opacity-100" : "opacity-0 pointer-events-none",
                  "motion-reduce:transition-none",
                ].join(" ")}
              >
                {/* Outlet logo */}
                <a
                  href={q.url || "/press"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                  title={q.outlet}
                  aria-label={`Open ${q.outlet} coverage in a new tab`}
                  onClick={() => logPressQuoteClick("logo", q.outlet, q.url)}
                >
                  <img
                    src={q.logo}
                    alt={q.alt}
                    className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                    width={160}
                    height={48}
                    loading={active ? "eager" : "lazy"}
                    decoding="async"
                  />
                </a>

                {/* Quote text */}
                <blockquote className="text-base md:text-lg lg:text-xl leading-snug text-neutral-800">
                  <span className="sr-only">Quote: </span>
                  <span className="italic">“{q.text}”</span>
                  <figcaption className="mt-1 text-sm text-neutral-600">
                    — <cite className="not-italic">{q.outlet}</cite>
                  </figcaption>
                </blockquote>

                {/* CTA */}
                <div className="hidden sm:block">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                    aria-label={ctaTitle}
                    title={ctaTitle}
                    onClick={() => logPressQuoteClick("cta", activeQuote?.outlet, activeQuote?.url)}
                  >
                    See our press & partners →
                  </a>
                </div>
              </figure>
            );
          })}
        </div>

        {/* CTA visible on mobile below */}
        <div className="mt-4 sm:hidden text-center">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            aria-label={ctaTitle}
            title={ctaTitle}
            onClick={() => logPressQuoteClick("cta", activeQuote?.outlet, activeQuote?.url)}
          >
            See our press & partners →
          </a>
        </div>
      </div>
    </section>
  );
}
