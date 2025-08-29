import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-teal text-teal-foreground rounded-lg p-2 font-bold text-xl">
            EHA
          </div>
          <span className="font-semibold text-primary hidden sm:block">
            Echoing Healthy Ageing
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('events')}
            className="text-foreground hover:text-teal transition-smooth"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection('connect')}
            className="text-foreground hover:text-teal transition-smooth"
          >
            Connect
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-teal transition-smooth"
          >
            About EHA
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-teal transition-smooth"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection('events')}
                className="text-left text-foreground hover:text-teal transition-smooth py-2"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('connect')}
                className="text-left text-foreground hover:text-teal transition-smooth py-2"
              >
                Connect
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-teal transition-smooth py-2"
              >
                About EHA
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-teal transition-smooth py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};