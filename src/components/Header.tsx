import { useState, useEffect } from "react";
import logoTree from "../../public/Images/ts-logo-tree.jpg";
import logoName from "../../public/Images/ts-eha-name.jpg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Stories", href: "#stories" },
    { name: "Telehealth", href: "#telehealth" },
    { name: "Contact", href: "#contact" }
  ];

  const handleConsultation = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full border-b transition-smooth ${
        isScrolled ? "border-border bg-white shadow-premium backdrop-blur-sm" : "border-border/40 bg-white/95 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#top"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={logoTree}
              alt="Echoing Healthy Ageing tree logo"
              className="h-14 w-auto"
              loading="lazy"
            />
            <img
              src={logoName}
              alt="Echoing Healthy Ageing logotype"
              className="h-14 w-auto translate-y-0.5"
              loading="lazy"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-foreground/70 transition-smooth hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="cta"
              size="sm"
              className="rounded-full px-5 py-2 text-sm font-semibold shadow-card"
              onClick={handleConsultation}
            >
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground/80 transition-smooth hover:bg-secondary hover:text-primary active:scale-95 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
              aria-label="Mobile primary navigation"
            >
              <ul className="flex flex-col gap-2 border-t border-border/60 py-6 text-base font-semibold text-foreground/80">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block rounded-xl px-4 py-3 min-h-[48px] flex items-center transition-smooth hover:bg-secondary/50 hover:text-primary active:bg-secondary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pb-6">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full rounded-full text-base font-semibold min-h-[56px]"
                  onClick={handleConsultation}
                >
                  Book Consultation
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};