import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-premium' 
          : 'bg-background/95 backdrop-blur-sm'
      } border-b border-border`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* EHA Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/Images/EHA Header .jpg"
              alt="Echoing Healthy Ageing"
              className="h-14 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Events", "Connect", "About EHA"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {item}
              </a>
            ))}
            <Button
              variant="cta"
              size="sm"
              onClick={() => window.open('https://forms.gle/wfShhrQuzP4hjYhB8', '_blank')}
              className="shadow-card hover:shadow-glow transition-smooth hover:scale-105"
            >
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {["Events", "Connect", "About EHA"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-muted-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                variant="cta"
                size="sm"
                className="w-full shadow-card hover:shadow-glow transition-smooth"
                onClick={() => {
                  window.open('https://forms.gle/wfShhrQuzP4hjYhB8', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Register Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};