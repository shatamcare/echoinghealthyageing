import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Brain, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export const Events = () => {
  const events = [
    {
      title: "Memory Café Sessions",
      description: "Group activities for seniors (60+) with puzzles, music, and art therapy. A warm, welcoming space for connection and cognitive stimulation.",
      icon: <Brain className="h-6 w-6" />,
      locations: ["Breach Candy", "Malad", "Borivali"],
      format: "In-person & Online",
      color: "teal"
    },
    {
      title: "Therapy Awareness Workshops",
      description: "Learn about person-centered therapy, reminiscence therapy, art therapy, and music therapy approaches for dementia care.",
      icon: <Heart className="h-6 w-6" />,
      locations: ["Multiple venues", "Online sessions"],
      format: "Workshop series",
      color: "lavender"
    },
    {
      title: "Caregiver Support Groups",
      description: "Support sessions and training for family carers and healthcare professionals. Share experiences and learn coping strategies.",
      icon: <Users className="h-6 w-6" />,
      locations: ["Community centers", "Virtual meetings"],
      format: "Group sessions",
      color: "gold"
    },
    {
      title: "Professional Training",
      description: "Comprehensive training programs for healthcare professionals and caregivers on dementia care best practices.",
      icon: <BookOpen className="h-6 w-6" />,
      locations: ["Training centers", "Online certification"],
      format: "Certification course",
      color: "teal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="events" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-shadow">
            Upcoming Events & Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community events designed to support seniors, caregivers, and healthcare professionals
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="gradient-card border-0 shadow-premium hover:shadow-glow transition-smooth hover:scale-[1.02] h-full group">
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <motion.div
                      className={`p-3 rounded-full ${
                        event.color === 'teal' ? 'bg-teal text-teal-foreground' :
                        event.color === 'lavender' ? 'bg-lavender text-lavender-foreground' :
                        'bg-gold text-gold-foreground'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {event.icon}
                    </motion.div>
                    <CardTitle className="text-2xl text-primary group-hover:text-teal transition-smooth">
                      {event.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary mb-1">Locations:</p>
                      <p className="text-muted-foreground">{event.locations.join(" • ")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-teal flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary mb-1">Format:</p>
                      <p className="text-muted-foreground">{event.format}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="cta" 
                      className="w-full shadow-card hover:shadow-glow transition-smooth hover:scale-105"
                      onClick={() => window.open('https://forms.gle/wfShhrQuzP4hjYhB8', '_blank')}
                    >
                      Register for {event.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our community? Register for any event using our simple form.
          </p>
          <Button 
            variant="teal" 
            size="lg"
            onClick={() => window.open('https://forms.gle/wfShhrQuzP4hjYhB8', '_blank')}
            className="text-lg px-8 py-4 shadow-premium hover:shadow-glow transition-smooth hover:scale-105"
          >
            View All Events & Register
          </Button>
        </motion.div>
      </div>
    </section>
  );
};