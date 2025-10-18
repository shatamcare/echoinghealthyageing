import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Star, Heart, Users } from "lucide-react";

const STORIES = [
  {
    quote:
      "Tuesday mornings at Memory Café became the highlight of our week. Ma sings along to old Hindi songs, and I finally met other caregivers who just... get it. We're not experts, but we're in this together.",
    name: "Priya M.",
    role: "Caring for her mother, Andheri",
  },
  {
    quote:
      "Before the training course, I was honestly scared of saying the wrong thing. Now I know how to really listen, how to calm someone down without arguing. It changed everything about how I do my job.",
    name: "Anjali S.",
    role: "Healthcare Aide",
  },
  {
    quote:
      "I didn't know anything about dementia until their workshop came to our office. When my colleague's dad got diagnosed, I actually knew how to help. Now I volunteer because everyone should understand this.",
    name: "Rohan K.",
    role: "IT Professional & Volunteer",
  },
];

export const Stories = () => {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-white px-4 py-20 md:px-6 md:py-28 lg:px-8 lg:py-32"
      aria-labelledby="stories-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(1,58,74,0.08),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(240,202,175,0.16),transparent_55%)]" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
          {/* Left side - Images (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:flex lg:flex-col lg:gap-6 lg:w-48 xl:w-56 lg:sticky lg:top-24">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src="/Images/img 3.jpg" 
                alt="Community members at Memory Café session"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src="/Images/img 7.jpg" 
                alt="Caregiver support group gathering"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Center content - Text and badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl space-y-6 lg:flex-shrink-0"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Patient Stories
            </span>
            <h2 id="stories-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
              Voices from our community
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70">
              These are real experiences from caregivers, healthcare professionals, and community members who have participated in our Memory Café sessions, training programs, and support groups across Mumbai.
            </p>
            <div className="grid gap-4 text-sm font-semibold text-foreground/80 sm:grid-cols-2">
              <span className="flex items-center gap-3 rounded-2xl border-2 border-secondary bg-white px-4 py-3 shadow-sm">
                <Heart className="h-5 w-5 text-accent" aria-hidden="true" /> Active since 2012 in Mumbai
              </span>
              <span className="flex items-center gap-3 rounded-2xl border-2 border-secondary bg-white px-4 py-3 shadow-sm">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" /> Monthly support group sessions
              </span>
            </div>
          </motion.div>

          {/* Right side - Testimonial cards */}
          <div className="grid flex-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {STORIES.map(({ quote, name, role }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <Card className="group h-full border-2 border-secondary bg-white shadow-card transition-smooth hover:-translate-y-2 hover:border-accent/20 hover:shadow-xl">
                  <CardContent className="space-y-6 p-8 text-left">
                    <motion.div
                      className="inline-flex"
                      initial={{ rotate: -10, scale: 0.8 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      whileHover={{ rotateY: 15 }}
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-4 shadow-lg">
                        <Quote className="h-7 w-7 text-accent" strokeWidth={2.5} aria-hidden="true" />
                      </div>
                    </motion.div>
                    <p className="text-lg leading-relaxed text-foreground/85">{quote}</p>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-foreground">{name}</p>
                      <p className="text-sm text-foreground/60">{role}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-accent text-accent drop-shadow-sm" aria-hidden="true" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
