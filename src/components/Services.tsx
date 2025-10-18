import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Home, HeartHandshake, Users, Stethoscope, Sparkles } from "lucide-react";

const SERVICES = [
  {
    title: "Memory Café Sessions",
    description:
      "Interactive monthly gatherings in Mumbai where persons with dementia and caregivers engage through music, art, conversation, and cognitive activities in a supportive social setting.",
    icon: Users,
  },
  {
    title: "Caregiver Support Groups",
    description:
      "Regular in-person and online peer support meetings offering practical guidance, emotional support, and shared experiences for family caregivers navigating dementia care.",
    icon: HeartHandshake,
  },
  {
    title: "Home-Based Therapy Programs",
    description:
      "Music therapy, art therapy, and movement therapy sessions delivered at home by trained practitioners, designed to enhance cognitive function and quality of life.",
    icon: Home,
  },
  {
    title: "Geriatric Caregiver Training",
    description:
      "Certificate course providing practical training for students, healthcare aides, and family members in evidence-based dementia care techniques and communication strategies.",
    icon: Brain,
  },
  {
    title: "Decoding Dementia Workshops",
    description:
      "Community awareness sessions conducted in colleges, corporate settings, and neighbourhoods across Mumbai to reduce stigma and improve understanding of dementia.",
    icon: Stethoscope,
  },
  {
    title: "Dementia Care Home Project",
    description:
      "Planned residential care facility and training centre under development by Shatam Care Foundation to provide specialized dementia care and caregiver education.",
    icon: Sparkles,
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-secondary via-white to-white px-4 py-20 md:px-6 md:py-28 lg:px-8 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(16,88,110,0.12),transparent_60%),radial-gradient(circle_at_88%_80%,rgba(241,205,179,0.18),transparent_55%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Our Services
          </span>
          <h2 id="services-heading" className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            Real programs building dementia-friendly communities
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            We at Echoing Healthy Ageing work actively in Mumbai and surrounding areas, offering practical support, training, and community engagement for persons with dementia and their caregivers.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="group h-full border-2 border-secondary bg-white shadow-card transition-smooth hover:-translate-y-2 hover:border-accent/30 hover:shadow-xl">
                <CardContent className="space-y-6 p-8">
                  <div className="inline-flex">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">{title}</h3>
                  <p className="text-base leading-relaxed text-foreground/70">{description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
