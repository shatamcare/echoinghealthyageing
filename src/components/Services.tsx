import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SERVICES = [
  {
    title: "Memory Café Sessions",
    description:
      "Every Tuesday, we gather in small circles filled with music, art, and laughter. It is not a therapy room, it is a place where your loved one feels seen, and you feel lighter.",
    image: "/Images/activities.jpg",
    features: ["Weekly sessions on Tuesdays", "Music, art, and joyful connection", "Safe, friendly environment"],
  },
  {
    title: "Caregiver Support Groups",
    description:
      "Caring for someone with dementia can feel lonely, but it doesn’t have to. Our groups help caregivers share stories, exchange tips, and rediscover their own strength.",
    image: "/Images/hospital.jpg",
    features: ["In-person and online meetings", "Peer-to-peer guidance", "Monthly sessions"],
  },
  {
    title: "Home-Based Therapy",
    description:
      "Therapy should never feel like a hospital visit. We bring music, art, and movement therapy to your doorstep, helping your loved one stay active, engaged, and calm.",
    image: "/Images/art.jpg",
    features: ["Music and art therapy at home", "Gentle movement activities", "Flexible scheduling"],
  },
  {
    title: "Caregiver Training",
    description:
      "If you are caring for a loved one or planning to work in elder care, this hands-on course will prepare you for the real world with practical skills and honest conversations.",
    image: "/Images/caregiver certificate 2.jpg",
    features: ["Certificate program", "Practical caregiving methods", "For families, aides, and students"],
  },
  {
    title: "Decoding Dementia Workshops",
    description:
      "We take dementia awareness to colleges, offices, and communities because when more people understand, life gets easier for those who live it every day.",
    image: "/Images/sessions.jpg",
    features: ["Community outreach programs", "Corporate and campus workshops", "Awareness sessions across Mumbai"],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-secondary/30 px-4 py-20 md:px-6 md:py-28 lg:px-8 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(251,218,187,0.25),transparent_65%),radial-gradient(circle_at_88%_80%,rgba(180,218,230,0.20),transparent_60%)]" />
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
            For families living with dementia and those who care for them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            These are not programs written on paper. They are living spaces where families meet, share, and find strength. Whether you need a moment to breathe, a word of guidance, or a safe hand to hold, we are here.
          </p>
        </motion.div>

        {/* Alternating Image-Content Layout */}
        <div className="mt-20 space-y-20 md:space-y-28 lg:space-y-32">
          {SERVICES.map(({ title, description, image, features }, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`grid gap-8 md:gap-10 lg:grid-cols-5 lg:gap-12 items-center ${
                  isEven ? "" : ""
                }`}
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`lg:col-span-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <img
                      src={image}
                      alt={`${title} at Echoing Healthy Ageing`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`lg:col-span-3 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="space-y-5 md:space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                        {title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                      {description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 pt-2">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                            <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                          </div>
                          <span className="text-sm font-medium text-foreground/80 md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Location Badge */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 rounded-full border-2 border-accent/20 bg-accent/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
                        Available in Mumbai
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
