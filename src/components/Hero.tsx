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
          className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight drop-shadow-lg"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          Join Us<br />
          This Alzheimer's Month
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <Button 
            variant="cta" 
            size="lg"
            onClick={scrollToEvents}
            className="text-lg px-8 py-4 shadow-premium hover:shadow-glow transition-smooth hover:scale-105"
          >
            Explore Events
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://forms.gle/wfShhrQuzP4hjYhB8', '_blank')}
            className="text-lg px-8 py-4 border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground hover:scale-105 transition-smooth shadow-card"
          >
            Register Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};