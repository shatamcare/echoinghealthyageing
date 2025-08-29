import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Elderly people and caregivers in supportive community setting"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="mb-6 inline-block bg-lavender text-lavender-foreground px-4 py-2 rounded-full text-sm font-medium">
          Alzheimer's Month 2024
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
          Join Us This Alzheimer's Month
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-teal font-medium mb-8">
          Awareness, Care & Connection
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover events, support groups, and therapies that bring hope to seniors and caregivers
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="cta" 
            size="lg"
            onClick={scrollToEvents}
            className="text-lg px-8 py-4"
          >
            Explore Events
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://forms.gle/wfShhrQuzP4hjYhB8', '_blank')}
            className="text-lg px-8 py-4 border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground"
          >
            Register Now
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-teal mx-auto cursor-pointer" onClick={scrollToEvents} />
        </div>
      </div>
    </section>
  );
};