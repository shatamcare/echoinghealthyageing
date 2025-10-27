import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type HeroBackgroundSliderProps = {
  images: string[]; // public paths like "/Images/hero1.jpg"
  quotes?: string[]; // optional rotating quotes
  intervalMs?: number; // time each slide stays visible
  transitionMs?: number; // cross-fade duration
  overlayClassName?: string; // optional gradient overlay class
  className?: string; // root wrapper class
  enablePauseControl?: boolean; // show a Pause/Resume control
};

// Subtle easing for luxury feel (use named easings to keep TS happy)
const EASE_MAIN = "easeInOut" as const;
const EASE_ALT = "easeOut" as const;

export function HeroBackgroundSlider({
  images,
  quotes,
  intervalMs = 7000,
  transitionMs = 900,
  overlayClassName = "bg-gradient-to-r from-primary/35 via-accent/25 to-sea/30",
  className = "",
  enablePauseControl = true,
}: HeroBackgroundSliderProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);

  // Defensive: ensure at least one image
  const slides = useMemo(() => (images && images.length > 0 ? images : ["/Images/img 7.jpg"]), [images]);

  // Preload images to avoid flashes
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [slides]);

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Observe in-view to pause when off-screen
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance (respects pause and visibility)
  useEffect(() => {
    const shouldRun = slides.length > 1 && !isPaused && isInView;
    if (!shouldRun) return;

    const start = () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, intervalMs);
    };
    const stop = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    start();
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [slides.length, intervalMs, isPaused, isInView]);

  const quote = quotes && quotes.length > 0 ? quotes[index % quotes.length] : null;

  // Handlers to pause on hover (desktop)
  const handleMouseEnter = () => {
    if (!isPaused && timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const handleMouseLeave = () => {
    if (!isPaused && slides.length > 1 && isInView) {
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, intervalMs);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`absolute inset-0 -z-10 ${className}`}
      aria-hidden
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((src, i) => {
          const isActive = i === index;
          return (
            <motion.img
              key={src + i}
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ opacity: i === 0 ? 1 : 0, scale: 1 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: reducedMotion ? 1 : isActive ? 1.04 : 1,
              }}
              transition={{ duration: transitionMs / 1000, ease: EASE_MAIN }}
              decoding="async"
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
            />
          );
        })}
        {/* Overlay gradient for contrast */}
        <div className={`absolute inset-0 ${overlayClassName}`} />
        {/* Top gradient to soften header overlap */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
      </div>

      {/* Optional rotating quote */}
      {quote ? (
        <div className="absolute bottom-6 left-1/2 z-10 w-[92%] max-w-4xl -translate-x-1/2 px-4 sm:px-6" aria-hidden="true">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 0.95, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: EASE_ALT }}
            className="rounded-2xl bg-black/30 px-4 py-3 text-center text-sm text-white shadow-lg backdrop-blur-md sm:text-base"
          >
            {quote}
          </motion.div>
        </div>
      ) : null}

      {enablePauseControl ? (
        <div className="absolute bottom-6 right-6 z-10">
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-pressed={isPaused}
            aria-label={isPaused ? "Resume background slideshow" : "Pause background slideshow"}
            className="group rounded-full bg-black/35 px-3 py-2 text-xs text-white backdrop-blur-md shadow-lg outline-none ring-0 transition hover:bg-black/45 focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default HeroBackgroundSlider;
