import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Star, Heart, Users } from "lucide-react";

const STORIES = [
  {
    quote:
      "Tuesday mornings at the Memory Café became our weekly reset. Ma sings, I breathe, and for a while, everything feels normal again.",
    name: "Priya M.",
    role: "Caregiver (Andheri)",
  },
  {
    quote:
      "This training gave me confidence, not just at work but in life. I learned to listen, not correct. That changed everything.",
    name: "Anjali S.",
    role: "Healthcare Aide",
  },
  {
    quote:
      "Before their workshop, dementia felt like a mystery. Now I know how to be kind, patient, and helpful, even at my workplace.",
    name: "Rohan K.",
    role: "Volunteer",
  },
];

export const Stories = () => {
  return (
    <section
      id="stories"
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32 lg:px-8 lg:py-40"
      aria-labelledby="stories-heading"
      style={{
        background: 'linear-gradient(to bottom right, #f0fdf4, #fef9f3, #f0fdfa)'
      }}
    >
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT COLUMN: Image at top → Text content → Image at bottom */}
          <div className="space-y-10">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src="/Images/img 3.jpg" 
                alt="Community members at Memory Café session"
                className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#35B6A6]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#35B6A6]">
                Real Stories
              </span>
              <h2 id="stories-heading" className="text-4xl font-semibold text-[#222] sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Real Stories, Real People
              </h2>
              <p className="text-lg leading-[1.8] text-[#444]">
                Voices from our community of caregivers, volunteers, and professionals. Since 2012, hundreds of Mumbai families have found comfort, strength, and belonging with us.
              </p>
              <div className="grid gap-4 text-sm font-semibold text-[#333] sm:grid-cols-2">
                <span className="flex items-center gap-3 rounded-2xl backdrop-blur-sm bg-white/75 border border-[#E8F3F0] px-5 py-4 shadow-lg">
                  <Heart className="h-5 w-5 text-[#35B6A6]" aria-hidden="true" /> Active since 2012 in Mumbai
                </span>
                <span className="flex items-center gap-3 rounded-2xl backdrop-blur-sm bg-white/75 border border-[#E8F3F0] px-5 py-4 shadow-lg">
                  <Users className="h-5 w-5 text-[#35B6A6]" aria-hidden="true" /> Monthly support sessions
                </span>
              </div>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src="/Images/img 7.jpg" 
                alt="Caregiver support group gathering"
                className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Testimonial Cards (Full Size) */}
          <div className="flex flex-col gap-8">
            {STORIES.map(({ quote, name, role }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="group h-full backdrop-blur-sm bg-white/75 border-2 border-[#E8F3F0] shadow-[0_8px_32px_rgba(53,182,166,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(53,182,166,0.15)] hover:scale-[1.02]">
                  <CardContent className="space-y-6 p-8">
                    <motion.div
                      className="inline-flex"
                      initial={{ rotate: -10, scale: 0.8 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-[#35B6A6]/20 via-[#35B6A6]/10 to-transparent p-4 shadow-lg">
                        <Quote className="h-8 w-8 text-[#35B6A6]" strokeWidth={2.5} aria-hidden="true" />
                      </div>
                    </motion.div>
                    <p className="text-lg leading-[1.8] text-[#333] italic">{quote}</p>
                    <div className="space-y-1 pt-2">
                      <p className="text-base font-semibold text-[#222]" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</p>
                      <p className="text-sm text-[#666]">{role}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-[#35B6A6] text-[#35B6A6] drop-shadow-sm" aria-hidden="true" />
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
