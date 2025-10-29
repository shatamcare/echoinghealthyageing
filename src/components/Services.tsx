import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SERVICES = [
  {
    title: "Memory Café Sessions",
    description:
      "Weekly circles for older adults and caregivers, filled with music, art, and light conversation. A friendly space to feel seen and connected.",
    image: "/Images/activities.jpg",
    features: ["Weekly sessions on Tuesdays", "Music, art, and joyful connection", "Safe, friendly environment"],
  },
  {
    title: "Caregiver Support Groups",
    description:
      "For anyone supporting an older adult—with or without dementia. Share stories, exchange tips, and rediscover your own strength.",
    image: "/Images/hospital.jpg",
    features: ["In-person and online meetings", "Peer-to-peer guidance", "Monthly sessions"],
  },
  {
    title: "Home-Based Therapy",
    description:
      "At-home music, art, and movement sessions that keep seniors active, engaged, and calm—without the stress of hospital visits.",
    image: "/Images/art.jpg",
    features: ["Music and art therapy at home", "Gentle movement activities", "Flexible scheduling"],
  },
  {
    title: "Caregiver Training",
    description:
      "Practical, hands-on skills for families, aides, and students. Build confidence in daily elder care, with dementia readiness.",
    image: "/Images/caregiver certificate 2.jpg",
    features: ["Certificate program", "Practical caregiving methods", "For families, aides, and students"],
  },
  {
    title: "Decoding Dementia Workshops",
    description:
      "Clear, stigma-free dementia understanding for colleges, offices, and communities across Mumbai—because kinder awareness helps every family.",
    image: "/Images/sessions.jpg",
    features: ["Community outreach programs", "Corporate and campus workshops", "Awareness sessions across Mumbai"],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32 lg:px-8 lg:py-40"
      aria-labelledby="services-heading"
      style={{
        background: 'linear-gradient(to bottom right, #f0fdf4, #fef9f3, #f0fdfa)'
      }}
    >
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[#35B6A6]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#35B6A6]">
            Elder Care Services
          </span>
          <h2 id="services-heading" className="mt-6 text-4xl font-semibold text-[#222] sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Support for Older Adults and Their Caregivers
          </h2>
          <p className="mt-6 text-lg leading-[1.8] text-[#444]">
            From companionship and daily engagement to caregiver guidance and dementia‑specific support, we meet families where they are. Whether you need a moment to breathe, a word of guidance, or a safe hand to hold, we're here.
          </p>
        </motion.div>

        {/* Alternating Image-Content Layout */}
        <div className="mt-24 space-y-28 md:space-y-32 lg:space-y-36">
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
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(53,182,166,0.15)] transition-all duration-500">
                    <img
                      src={image}
                      alt={`${title} at Echoing Healthy Ageing`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#35B6A6]/20 via-transparent to-transparent" />
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
                  <div className="space-y-6 md:space-y-7">
                    {/* Title */}
                    <div>
                      <h3 className="text-3xl font-semibold text-[#222] sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-[1.8] text-[#444] md:text-lg">
                      {description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-4 pt-2">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#35B6A6]/10">
                            <Check className="h-4 w-4 text-[#35B6A6]" strokeWidth={3} />
                          </div>
                          <span className="text-sm font-medium text-[#333] md:text-base leading-[1.7]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Location Badge */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#35B6A6]/20 bg-[#35B6A6]/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#0F6F66]">
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
