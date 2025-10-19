import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Home, HeartHandshake, Users, Stethoscope, Sparkles, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Memory Café Sessions",
    description:
      "Every Tuesday, families gather for music, art, and conversation. It's not therapy—it's connection. A place where your loved one can be themselves, and you can breathe for a couple of hours.",
    icon: Users,
    image: "/Images/activities.jpg",
    features: ["Weekly Tuesday sessions", "Music & art activities", "Safe, welcoming space"],
  },
  {
    title: "Caregiver Support Groups",
    description:
      "You can't pour from an empty cup. Our support groups (in-person and online) are where caregivers share the weight, swap tips, and remember they're not doing this alone.",
    icon: HeartHandshake,
    image: "/Images/hospital.jpg",
    features: ["In-person & online options", "Peer support", "Monthly meetings"],
  },
  {
    title: "Home-Based Therapy",
    description:
      "Music, art, and movement therapy—brought right to your doorstep. No hospital visits, no stress. Just trained therapists helping your loved one stay engaged and active at home.",
    icon: Home,
    image: "/Images/art.jpg",
    features: ["Music & art therapy", "Movement therapy", "At your convenience"],
  },
  {
    title: "Caregiver Training",
    description:
      "Whether you're a family member, healthcare aide, or student—this certificate course teaches you what actually works. Real techniques, honest conversations, no fluff.",
    icon: Brain,
    image: "/Images/training.jpg",
    features: ["Certificate program", "Practical techniques", "For families & professionals"],
  },
  {
    title: "Decoding Dementia Workshops",
    description:
      "We take our workshops to colleges, offices, and neighborhoods across Mumbai. Because the more people understand dementia, the kinder our city becomes.",
    icon: Stethoscope,
    image: "/Images/sessions.jpg",
    features: ["Community outreach", "Office workshops", "Educational sessions"],
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

        {/* Alternating Image-Content Layout */}
        <div className="mt-20 space-y-24 md:space-y-32">
          {SERVICES.map(({ title, description, icon: Icon, image, features }, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className={`${isEven ? "" : "lg:col-start-2"}`}
                >
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={image}
                      alt={`${title} at Echoing Healthy Ageing`}
                      className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60" />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className={`space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
                >
                  <Card className="border-2 border-secondary bg-white shadow-card">
                    <CardContent className="space-y-6 p-8 md:p-10">
                      {/* Icon & Title */}
                      <div className="space-y-4">
                        <div className="inline-flex">
                          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary shadow-sm">
                            <Icon className="h-7 w-7" strokeWidth={2} />
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                          {title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                        {description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Badge */}
                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
                          <Icon className="h-4 w-4" />
                          Available in Mumbai
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
