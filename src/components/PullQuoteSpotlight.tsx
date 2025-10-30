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
  const ctaLabel = activeQuote?.url ? "Read the article →" : "See our press & partners →";

  return (
    <section
      aria-label="Press pull-quote spotlight"
      className={["", className].join(" ")}
    >
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative min-h-[140px] md:min-h-[170px] rounded-2xl md:rounded-3xl border border-neutral-200/60 bg-white/80 backdrop-blur shadow-sm ring-1 ring-black/5 px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12">
          {items.map((q, i) => {
            const active = i === index;
            return (
              <figure
                key={q.outlet + i}
                className={[
                  "absolute inset-0 grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8",
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
                    className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                    width={160}
                    height={48}
                    loading={active ? "eager" : "lazy"}
                    decoding="async"
                  />
                </a>

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-800">
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
                    {ctaLabel}
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
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
