import { Button } from "@/components/ui/button";
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const dialCareLine = () => {
    window.open("tel:+919867832665");
  };

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 480], [0, 160]);

  // Curated background images from public/Images
  const heroImages = useMemo(
    () => [
      "/Images/img 1.jpg",
      "/Images/img 2.jpg",
      "/Images/sessions.jpg",
      "/Images/activities 2.jpg",
      "/Images/kit.jpg",
    ],
    []
  );

  const heroQuotes = useMemo(
    () => [
      "Every memory matters, even the fading ones.",
      "Care is not about curing, it is about connecting.",
      "One small act of kindness can change an entire day.",
    ],
    []
  );

  const headingLines = useMemo(() => ["Care That Feels Like Home"], []);

  const wordVariants = {
    hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.25, 
        duration: 0.7
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6
      } 
    }
  };

  return (
	<section
  className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-transparent px-4 pt-20 pb-16 md:min-h-[90vh] md:px-8 md:pt-24 md:pb-20 lg:min-h-[92vh] lg:px-12"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0 -z-10" style={{ y: yParallax }}>
        <HeroBackgroundSlider 
          images={heroImages} 
          quotes={[]}
          overlayClassName=""
          enablePauseControl={false}
        />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <motion.span
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl"
            variants={itemVariants}
          >
            Since 2012 in Mumbai
          </motion.span>

          <h1
            id="hero-heading"
            className="text-balance font-semibold text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] max-w-4xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {headingLines.map((line) => (
              <span key={line} className="block mb-1">
                {line.split(" ").map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.9, ease: [0.18, 0.84, 0.36, 1], delay: 0.4 + index * 0.08 }}
                    className="inline-block px-[0.25rem]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm leading-relaxed text-white sm:text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Support that goes beyond medicine, through conversations, music, and companionship. We've been walking beside families for over a decade, helping them find comfort, dignity, and calm in the middle of it all.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 sm:flex-row sm:gap-4 pt-2"
            role="group"
            aria-label="Primary actions"
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto min-w-[260px] justify-between px-8 py-3 text-base font-semibold min-h-[56px] shadow-2xl bg-[#35B6A6] hover:bg-[#0F6F66] text-white rounded-full transition-all duration-500 hover:scale-[1.03]"
              onClick={scrollToContact}
            >
              Book a Care Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[240px] justify-center rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-md px-8 py-3 text-base font-semibold text-white shadow-2xl hover:bg-white/30 hover:border-white/60 focus-visible:ring-[#35B6A6] min-h-[56px] transition-all duration-500 hover:scale-[1.03]"
              onClick={dialCareLine}
            >
              <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />
              Call a Care Specialist
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};