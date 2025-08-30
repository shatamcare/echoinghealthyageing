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
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
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
        <motion.div
          className="mb-6 inline-block bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm"
          variants={itemVariants}
        >
          Alzheimer's Month 2025
        </motion.div>
        
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          Join Us<br />
          This Alzheimer's Month
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl text-white font-semibold mb-8 drop-shadow-md"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
        >
          Awareness, Care & Connection
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md bg-black/30 backdrop-blur-sm rounded-lg p-4"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
        >
          Discover events, support groups, and therapies that bring hope to seniors and caregivers
        </motion.p>

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

        {/* Scroll Indicator */}
        <motion.div
          className="animate-bounce cursor-pointer"
          variants={itemVariants}
          onClick={scrollToEvents}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDown className="h-8 w-8 text-teal mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};