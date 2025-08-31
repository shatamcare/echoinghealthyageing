import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Brain, Heart, BookOpen, ChevronLeft, ChevronRight, Music, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

export const Events = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const events = [
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of card + gap
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < 
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.25 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  // Tag mapping (derived, no change to event data content itself)
  const tagMap = useMemo(() => ({
    'Dementia Caregiver Support Group': 'Support Group',
    'Decoding Dementia (Part 1)': 'Workshop',
    'Decoding Dementia (Part 2)': 'Workshop',
    'Decoding Dementia (Part 3)': 'Workshop',
    'Shankar Mahadevan Academy Music Concert': 'Concert',
    'Memory Café Sessions': 'Memory Café'
  } as Record<string,string>), []);

  const registerUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfQ6F3ef-D1N5AZq9fK3DSn0Xu8exEMtk3e6HlLDL8a3upM_Q/viewform';

  const openRegister = () => window.open(registerUrl, '_blank');

  return (
    <section id="events" className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_15%_25%,#0d9488,transparent_60%),radial-gradient(circle_at_85%_70%,#334155,transparent_65%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 mb-4">
              Upcoming Events & Programs
            </h2>
            <span className="absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full animate-[underlineGrow_1.6s_ease-out_forwards]" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join our community events designed to support seniors, caregivers, and healthcare professionals
          </p>
        </motion.div>

        <motion.div className="relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Carousel Nav Buttons (overlay) */}
          <div className="pointer-events-none hidden md:block">
            {canScrollLeft && (
              <button
                aria-label="Previous events"
                onClick={() => scroll('left')}
                className="pointer-events-auto group absolute -left-3 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/70 backdrop-blur shadow-lg border border-white/50 flex items-center justify-center hover:bg-white transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700 group-hover:scale-110 transition-transform" />
              </button>
            )}
            {canScrollRight && (
              <button
                aria-label="Next events"
                onClick={() => scroll('right')}
                className="pointer-events-auto group absolute -right-3 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/70 backdrop-blur shadow-lg border border-white/50 flex items-center justify-center hover:bg-white transition-all"
              >
                <ChevronRight className="h-6 w-6 text-slate-700 group-hover:scale-110 transition-transform" />
              </button>
            )}
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 px-2 snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
              onScroll={updateScrollButtons}
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{ duration: 0.7 }}
                  className="snap-start w-[300px] sm:w-[340px] md:w-[360px] flex-shrink-0"
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="group h-full relative bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-slate-200/70 rounded-3xl shadow-[0_8px_30px_-10px_rgba(15,23,42,0.25)] hover:shadow-[0_12px_40px_-10px_rgba(13,148,136,0.45)] transition-all">
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-400/10" />
                    {/* Header */}
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <motion.div whileHover={{ rotate: 8 }} className="p-3 rounded-2xl bg-gradient-to-br from-teal-600 to-slate-600 text-white shadow-md">
                          {event.icon}
                        </motion.div>
                        {tagMap[event.title] && (
                          <span className="text-[10px] uppercase tracking-wide font-semibold px-2 py-1 rounded-full bg-teal-600/10 text-teal-700 border border-teal-500/30 shadow-sm">
                            {tagMap[event.title]}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold leading-snug text-slate-800 group-hover:text-teal-700 transition-colors">
                        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>{event.title}</motion.span>
                      </CardTitle>
                      <CardDescription className="text-[13px] text-slate-600 leading-relaxed mt-2">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    {/* Body */}
                    <CardContent className="pt-0 relative z-10 space-y-3">
                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/70 border border-slate-200/60">
                        <Calendar className="h-4 w-4 text-teal-600 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-slate-800 text-[11px] mb-0.5 tracking-wide uppercase">Date & Time</p>
                          <p className="text-slate-700 text-xs leading-tight">{event.date}</p>
                          <p className="text-slate-700 text-xs font-medium">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/70 border border-slate-200/60">
                        <MapPin className="h-4 w-4 text-teal-600 mt-0.5" />
                        <div className="min-w-0">
                          <p className="font-medium text-slate-800 text-[11px] mb-0.5 tracking-wide uppercase">Location</p>
                          <p className="text-slate-700 text-xs leading-tight">{event.locations.join(' • ')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/70 border border-slate-200/60">
                        <Users className="h-4 w-4 text-teal-600 mt-0.5" />
                        <div className="min-w-0">
                          <p className="font-medium text-slate-800 text-[11px] mb-0.5 tracking-wide uppercase">For</p>
                          <p className="text-slate-700 text-xs leading-tight">{event.audience}</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Button
                          variant="cta"
                          size="sm"
                          onClick={openRegister}
                          className="relative w-full rounded-full text-xs font-medium py-2.5 bg-gradient-to-r from-teal-600 to-slate-700 hover:from-teal-500 hover:to-slate-800 shadow-md hover:shadow-lg transition-all group overflow-hidden"
                        >
                          <span className="relative z-10">Register Now</span>
                          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/20 via-transparent to-teal-500/20 transition-opacity" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 p-10 sm:p-14 shadow-[0_12px_40px_-10px_rgba(13,148,136,0.4)]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#ffffff50,transparent_65%)]" />
            <div className="relative flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                  Ready to join our community?
                </h3>
                <p className="text-slate-100/85 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                  Register for any event using our simple form.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  size="lg"
                  onClick={openRegister}
                  className="relative rounded-full px-10 py-6 text-base font-semibold bg-white text-teal-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Register</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
