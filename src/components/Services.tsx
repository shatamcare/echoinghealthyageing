import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Home, HeartHandshake, Users, Stethoscope, Sparkles } from "lucide-react";

const SERVICES = [
  {
    title: "Memory Café Sessions",
    description:
      "Every Tuesday, families gather for music, art, and conversation. It's not therapy—it's connection. A place where your loved one can be themselves, and you can breathe for a couple of hours.",
    icon: Users,
  },
  {
    title: "Caregiver Support Groups",
    description:
      "You can't pour from an empty cup. Our support groups (in-person and online) are where caregivers share the weight, swap tips, and remember they're not doing this alone.",
    icon: HeartHandshake,
  },
  {
    title: "Home-Based Therapy",
    description:
      "Music, art, and movement therapy—brought right to your doorstep. No hospital visits, no stress. Just trained therapists helping your loved one stay engaged and active at home.",
    icon: Home,
  },
  {
    title: "Caregiver Training",
    description:
      "Whether you're a family member, healthcare aide, or student—this certificate course teaches you what actually works. Real techniques, honest conversations, no fluff.",
    icon: Brain,
  },
  {
    title: "Decoding Dementia Workshops",
    description:
      "We take our workshops to colleges, offices, and neighborhoods across Mumbai. Because the more people understand dementia, the kinder our city becomes.",
    icon: Stethoscope,
  },
  {
    title: "Dementia Care Home (Coming Soon)",
    description:
      "We're building something special—a residential care home and training center where families can find respite and quality care. Currently in development by Shatam Care Foundation.",
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
            How we support families living with dementia
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            These aren't just programs on paper. They're spaces where real people meet, learn, and find strength. Whether you need a break, some guidance, or just someone who gets it—we're here.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
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
