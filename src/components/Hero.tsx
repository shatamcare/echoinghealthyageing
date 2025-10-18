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
            We at Echoing Healthy Ageing provide Memory Café sessions, caregiver support groups, home-based therapy programs, and dementia awareness workshops across Mumbai under the Shatam Care Foundation.
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
          className="relative hidden w-full max-w-sm rounded-3xl border-2 border-white/40 bg-white/95 p-6 text-left shadow-2xl md:block"
          aria-label="Community insight"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">
            Our Approach
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground">
            We believe in creating dementia-friendly communities through awareness, practical training, and compassionate peer support that empowers families and caregivers.
          </p>
          <p className="mt-6 text-sm font-medium text-accent">— Echoing Healthy Ageing Team</p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-xs uppercase tracking-wide">
            <span className="rounded-xl border-2 border-primary/30 bg-secondary px-4 py-3 font-semibold text-foreground">Memory Café</span>
            <span className="rounded-xl border-2 border-primary/30 bg-secondary px-4 py-3 font-semibold text-foreground">Support Groups</span>
            <span className="rounded-xl border-2 border-primary/30 bg-secondary px-4 py-3 font-semibold text-foreground">Home Therapy</span>
            <span className="rounded-xl border-2 border-primary/30 bg-secondary px-4 py-3 font-semibold text-foreground">Training Courses</span>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
};