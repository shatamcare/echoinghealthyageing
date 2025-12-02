import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Brain, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Event {
  title: string;
  description: string;
  icon: ReactNode;
  date: string;
  time: string;
  locations: string[];
  audience: string;
  color: string;
}

export const Events = () => {
  const events: Event[] = [
    {
      title: "Dementia Caregiver Support Group",
      description: "Online support session for family caregivers and friends of dementia patients. Share experiences and learn coping strategies.",
      icon: <Users className="h-6 w-6" />,
      date: "September 5, 2025",
      time: "4:00 PM - 5:00 PM",
      locations: ["Online Session"],
      audience: "Family Caregivers & Friends",
      color: "teal"
    },
    {
      title: "Decoding Dementia (Part 1)",
      description: "Comprehensive workshop for healthcare professionals on dementia care approaches, diagnosis, and treatment strategies.",
      icon: <BookOpen className="h-6 w-6" />,
      date: "September 13, 2025",
      time: "10:00 AM - 2:00 PM",
      locations: ["In-Person Workshop"],
      audience: "Healthcare Professionals",
      color: "lavender"
    },
    {
      title: "Decoding Dementia (Part 2)",
      description: "Second part of the comprehensive dementia workshop covering advanced care techniques and person-centered approaches.",
      icon: <BookOpen className="h-6 w-6" />,
      date: "September 20, 2025",
      time: "10:00 AM - 2:00 PM",
      locations: ["In-Person Workshop"],
      audience: "Healthcare Professionals",
      color: "lavender"
    },
    {
      title: "Shankar Mahadevan Academy Music Concert",
      description: "Special online music concert featuring therapeutic music sessions designed for seniors and their families.",
      icon: <Heart className="h-6 w-6" />,
      date: "September 21, 2025",
      time: "5:00 PM - 6:00 PM",
      locations: ["Online Concert"],
      audience: "Seniors & Families",
      color: "gold"
    },
    {
      title: "Decoding Dementia (Part 3)",
      description: "Final session of the dementia workshop series focusing on practical implementation and case studies.",
      icon: <BookOpen className="h-6 w-6" />,
      date: "September 28, 2025",
      time: "4:00 PM - 6:00 PM",
      locations: ["In-Person Workshop"],
      audience: "Healthcare Professionals",
      color: "lavender"
    },
    {
      title: "Memory Café Sessions",
      description: "Group activities for seniors with puzzles, music, and art therapy in a warm, welcoming community environment.",
      icon: <Brain className="h-6 w-6" />,
      date: "October 1, 2025",
      time: "4:30 PM - 6:00 PM",
      locations: ["Mumbai"],
      audience: "Seniors (60+)",
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
        duration: 0.8
      }
    }
  };

  const EventCard = ({ event, index }: { event: Event; index: number }) => (
    <motion.div 
      variants={cardVariants}
      className="flex-shrink-0 w-80"
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5
      }}
    >
      <Card className="bg-gradient-to-br from-white via-slate-50/80 to-blue-50/60 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
        {/* Compact Header */}
        <CardHeader className="pb-3 bg-gradient-to-r from-slate-600 to-teal-700 text-white rounded-t-lg">
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              className="p-2 rounded-full bg-white/20"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-white text-sm">
                {event.icon}
              </div>
            </motion.div>
            <CardTitle className="text-lg text-white transition-colors duration-300 leading-tight">
              {event.title}
            </CardTitle>
          </div>
          <CardDescription className="text-sm text-slate-100 leading-relaxed line-clamp-2">
            {event.description}
          </CardDescription>
        </CardHeader>

        {/* Compact Content */}
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start gap-2 p-2 rounded-lg bg-slate-100/60 border border-slate-200/40">
            <Calendar className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-medium text-slate-800 text-xs mb-1">Date & Time:</p>
              <p className="text-slate-700 text-xs">{event.date}</p>
              <p className="text-slate-700 text-xs font-medium">{event.time}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/60 border border-slate-200/40">
            <MapPin className="h-4 w-4 text-slate-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-slate-800 text-xs mb-1">Location:</p>
              <p className="text-slate-700 text-xs">{event.locations.join(" • ")}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/60 border border-slate-200/40">
            <Users className="h-4 w-4 text-slate-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-slate-800 text-xs mb-1">For:</p>
              <p className="text-slate-700 text-xs">{event.audience}</p>
            </div>
          </div>

          <div className="pt-2">
            <Button 
              variant="cta" 
              size="sm"
              className="w-full bg-gradient-to-r from-slate-600 to-teal-700 hover:from-slate-700 hover:to-teal-800 text-white shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-200 text-xs"
              onClick={() => window.open('https://forms.gle/wfShhrQuzP4hjYhB8', '_blank')}
            >
              Register Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

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
          className="overflow-hidden py-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Floating Cards Container */}
          <div className="relative">
            <motion.div 
              className="flex gap-6 pb-4"
              animate={{
                x: [0, -40, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {events.map((event, index) => (
                <EventCard key={index} event={event} index={index} />
              ))}
              
              {/* Duplicate cards for seamless loop effect */}
              {events.map((event, index) => (
                <EventCard key={`duplicate-${index}`} event={event} index={index + events.length} />
              ))}
            </motion.div>
          </div>
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
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
