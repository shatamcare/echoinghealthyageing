import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export const Hero = () => {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax effect for background image
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, 120]);

  // Split heading into words for staggered animation
  const headingLines = useMemo(() => ["Join Us", "This Alzheimer's Month"], []);
  const wordVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-20">
      {/* Background / Overlay / Parallax */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: yParallax }}>
        <div className="absolute inset-0">
          <img
            src="/Images/sessions.jpg"
            alt="Elderly people and caregivers in supportive community setting"
            className="w-full h-full object-cover brightness-[0.85] saturate-110 scale-[1.15]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031b28]/70 via-[#032c38]/40 to-[#03121b]/80" />
        </div>
      </motion.div>

      {/* Decorative particles (subtle) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-[8%] w-40 h-40 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[10%] w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-10">
          <h1 className="font-bold leading-tight tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {headingLines.map((line, iLine) => (
              <span key={line} className="block">
                {line.split(" ").map((word, iWord) => {
                  const idx = iLine * 10 + iWord;
                  const highlight = word.includes("Alzheimer's");
                  return (
                    <motion.span
                      key={word + iWord}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.8, ease: [0.22,0.65,0.32,0.9], delay: 0.4 + idx * 0.12 }}
                      whileHover={highlight ? { color: '#5eead4' } : {}}
                      className={`inline-block mr-2 ${highlight ? 'relative cursor-pointer group' : ''}`}
                    >
                      {word}
                      {highlight && (
                        <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-teal-300 to-cyan-400 rounded-full group-hover:w-full transition-all duration-500" />
                      )}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>
        </div>

        <motion.div
          className="mx-auto max-w-3xl"
          variants={itemVariants}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.25)]" />
            <p
              className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-normal px-6 sm:px-8 py-6"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
            >
              Supporting seniors, families, and caregivers through every step of the aging journey
            </p>
          </div>
        </motion.div>

        <motion.div className="mt-14" variants={itemVariants}>
          <Button
            variant="cta"
            size="lg"
            onClick={scrollToEvents}
            className="relative isolate text-base sm:text-lg lg:text-xl px-10 sm:px-12 py-5 rounded-full font-medium shadow-[0_10px_30px_-10px_rgba(14,116,144,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(13,148,136,0.75)] transition-all hover:-translate-y-0.5 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              Discover Our Community Events
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
          >
            <button
              aria-label="Scroll to events"
              onClick={scrollToEvents}
              className="relative group"
            >
              <ArrowDown className="h-8 w-8 text-teal-300 animate-bounce group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};