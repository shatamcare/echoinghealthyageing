import { Button } from "@/components/ui/button";
import heroCare from "../../public/Images/care.jpg";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

const STAT_ITEMS = [
  { label: "Active since", value: "2012" },
  { label: "Based in", value: "Mumbai" },
  { label: "Monthly programs", value: "Ongoing" }
];

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const dialCareLine = () => {
    window.open("tel:+919867832665");
  };

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 480], [0, 160]);

  const headingLines = useMemo(
    () => ["Supporting Persons with Dementia", "And Their Caregivers in Mumbai"],
    []
  );

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
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-transparent px-4 pt-28 pb-24 md:px-6 md:pt-36 md:pb-28 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0 -z-10" style={{ y: yParallax }}>
        <div className="absolute inset-0">
          <img
            src={heroCare}
            alt="An experienced caregiver supporting an elderly woman with warmth and dignity"
            className="h-full w-full object-cover object-[50%_35%] md:object-center brightness-[0.95]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-sea/30 to-primary/35" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 text-slate-50 md:flex-row md:items-center md:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-2xl space-y-8 text-center md:text-left">
          <motion.span
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
            variants={itemVariants}
          >
            Dementia Care & Caregiver Support
          </motion.span>

          <h1
            id="hero-heading"
            className="text-balance font-bold text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            {headingLines.map((line) => (
              <span key={line} className="block">
                {line.split(" ").map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.9, ease: [0.18, 0.84, 0.36, 1], delay: 0.4 + index * 0.08 }}
                    className={`inline-block px-[0.2rem] ${word.includes("Alzheimer") ? "bg-white/15 text-accent" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-[1.8] text-white sm:text-lg md:text-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
          >
            When dementia enters a family, everything changes. Since 2012, we've been right here in Mumbai—running Memory Cafés, supporting caregivers, bringing therapy home, and helping families find their way through.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
            role="group"
            aria-label="Primary actions"
          >
            <Button
              variant="cta"
              size="lg"
              className="group w-full min-w-[240px] justify-between px-8 py-4 text-base font-semibold sm:w-auto min-h-[56px] md:min-h-[48px]"
              onClick={scrollToContact}
            >
              Book a Care Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full min-w-[220px] justify-center rounded-full border border-white/30 bg-white/20 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 backdrop-blur hover:bg-white/30 focus-visible:ring-accent min-h-[56px] md:min-h-[48px]"
              onClick={dialCareLine}
            >
              <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />Speak to a Care Specialist
            </Button>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="grid gap-4 text-left text-sm text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {STAT_ITEMS.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border-2 border-white/30 bg-white/95 p-4 shadow-lg transition-smooth hover:bg-white focus-within:bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">
                  {item.label}
                </p>
                <p className="pt-2 text-2xl font-bold text-primary">{item.value}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        
        <motion.aside
          variants={itemVariants}
          className="relative hidden w-full max-w-sm rounded-3xl border-2 border-white/40 bg-white/98 backdrop-blur-sm p-8 text-left shadow-2xl md:block overflow-hidden"
          aria-label="Our approach to dementia care"
        >
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl -z-10" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-8 bg-gradient-to-r from-accent to-primary rounded-full"></div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
                Why We Do This
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
              Every person deserves dignity, connection, and care
            </h3>
            
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Since 2012, we've walked alongside Mumbai families facing dementia. Not with jargon or clinical distance—but with real support, honest conversations, and programs that actually help in daily life.
            </p>

            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-primary/10 mb-6">
              <div className="mt-1">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                <span className="font-semibold text-foreground">No one-size-fits-all.</span> We listen first, then tailor our support to what your family actually needs.
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-foreground/70">Memory Café every Tuesday</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground/70">Home therapy that fits your schedule</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-sea"></span>
                <span className="text-foreground/70">Training for caregivers who need it</span>
              </div>
            </div>

            <div className="pt-4 border-t border-primary/10">
              <p className="text-xs text-foreground/60 italic">
                "You're not alone in this journey. We're here."
              </p>
              <p className="mt-2 text-xs font-semibold text-primary">— Team EHA</p>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
};