import { Button } from "@/components/ui/button";
import heroCare from "../../public/Images/care.jpg";
import { ArrowRight, PhoneCall, Heart, Users, Home, Brain, HeartHandshake } from "lucide-react";
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

  const headingLines = useMemo(
    () => ["Dementia Care & Support", "For Families in Mumbai"],
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
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-transparent px-4 pt-28 pb-24 md:min-h-[85vh] md:px-6 md:pt-36 md:pb-28 lg:min-h-[88vh] lg:px-8"
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-sea/25" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 text-slate-50 md:gap-12 md:flex-row md:items-center lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-2xl space-y-6 text-center md:space-y-7 md:text-left lg:space-y-8">
          <motion.span
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
            variants={itemVariants}
          >
            Since 2012 in Mumbai
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
            Memory Cafés, caregiver support groups, home therapy, and training. Real support for families living with dementia.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 sm:justify-center md:justify-start"
            role="group"
            aria-label="Primary actions"
          >
            <Button
              variant="cta"
              size="lg"
              className="group w-full min-w-[240px] justify-between px-6 py-4 text-sm font-semibold sm:text-base sm:w-auto sm:px-8 min-h-[56px] md:min-h-[52px] lg:min-h-[48px]"
              onClick={scrollToContact}
            >
              Book a Care Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full min-w-[220px] justify-center rounded-full border border-white/30 bg-white/20 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur hover:bg-white/30 focus-visible:ring-accent sm:text-base sm:px-8 min-h-[56px] md:min-h-[52px] lg:min-h-[48px]"
              onClick={dialCareLine}
            >
              <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />Speak to a Care Specialist
            </Button>
          </motion.div>
        </div>

        
        <motion.aside
          variants={itemVariants}
          className="relative hidden w-full max-w-sm rounded-3xl border-4 border-accent/50 bg-white/95 backdrop-blur-sm shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] p-6 text-left overflow-hidden md:block lg:max-w-md"
          aria-label="Our approach to dementia care"
          whileHover={{ scale: 1.02, boxShadow: "0 25px 60px -15px rgba(0,0,0,0.3)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Softer gradient accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent/30 to-gold/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-teal/25 to-sea/25 rounded-full blur-3xl" />
          
          <div className="relative">
            {/* Bold header with strong visual */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-primary rounded-full mb-4 shadow-lg">
                <Heart className="w-5 h-5 text-white fill-white" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">
                  Our Approach
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-foreground leading-tight mb-2">
                What We Offer
              </h3>
              <p className="text-sm text-foreground/70">Programs & services</p>
            </div>

            {/* Key value props - bold visual boxes */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="group p-4 bg-gradient-to-br from-accent/20 to-accent/30 hover:from-accent/30 hover:to-accent/40 rounded-2xl border-2 border-accent/40 transition-all hover:scale-110 hover:shadow-xl cursor-pointer">
                <Users className="w-7 h-7 text-accent mb-2 drop-shadow-lg" />
                <p className="text-xs font-bold text-foreground">Memory Café</p>
                <p className="text-[10px] text-foreground/70 mt-1 font-medium">Weekly sessions</p>
              </div>
              
              <div className="group p-4 bg-gradient-to-br from-primary/20 to-primary/30 hover:from-primary/30 hover:to-primary/40 rounded-2xl border-2 border-primary/40 transition-all hover:scale-110 hover:shadow-xl cursor-pointer">
                <Home className="w-7 h-7 text-primary mb-2 drop-shadow-lg" />
                <p className="text-xs font-bold text-foreground">Home Therapy</p>
                <p className="text-[10px] text-foreground/70 mt-1 font-medium">Your schedule</p>
              </div>
              
              <div className="group p-4 bg-gradient-to-br from-sea/20 to-sea/30 hover:from-sea/30 hover:to-sea/40 rounded-2xl border-2 border-sea/40 transition-all hover:scale-110 hover:shadow-xl cursor-pointer">
                <Brain className="w-7 h-7 text-sea mb-2 drop-shadow-lg" />
                <p className="text-xs font-bold text-foreground">Training</p>
                <p className="text-[10px] text-foreground/70 mt-1 font-medium">For caregivers</p>
              </div>
              
              <div className="group p-4 bg-gradient-to-br from-teal/20 to-teal/30 hover:from-teal/30 hover:to-teal/40 rounded-2xl border-2 border-teal/40 transition-all hover:scale-110 hover:shadow-xl cursor-pointer">
                <HeartHandshake className="w-7 h-7 text-teal mb-2 drop-shadow-lg" />
                <p className="text-xs font-bold text-foreground">Support Groups</p>
                <p className="text-[10px] text-foreground/70 mt-1 font-medium">Peer connections</p>
              </div>
            </div>

          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
};