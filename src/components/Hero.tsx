import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/Images/sessions.jpg"
          alt="Elderly people and caregivers in supportive community setting"
          className="w-full h-full object-cover opacity-90 scale-110 translate-x-8"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          Together We Care,<br />
          Together We Age
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed font-light"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
        >
          Supporting seniors, families, and caregivers through every step of the aging journey
        </motion.p>
        
        <motion.div
          className="mt-16"
          variants={itemVariants}
        >
          <Button 
            variant="cta" 
            size="lg"
            onClick={scrollToEvents}
            className="text-lg px-10 py-5 shadow-premium hover:shadow-glow transition-smooth hover:scale-105"
          >
            Discover Our Community Events
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};