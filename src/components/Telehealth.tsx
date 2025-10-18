import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Video, ShieldCheck, Clock, FileText, CalendarCheck, Wifi } from "lucide-react";

const FEATURES = [
  {
    icon: Video,
    title: "Virtual Support Sessions",
    description: "Online caregiver support group meetings via Zoom for families unable to attend in-person gatherings in Mumbai.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduled Consultations",
    description: "Book one-on-one virtual sessions with our dementia care advisors for guidance on care planning and resources.",
  },
  {
    icon: FileText,
    title: "Digital Resources",
    description: "Access educational materials, workshop recordings, and practical care tips through our online sharing platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "All virtual sessions respect confidentiality with password-protected meetings and consent-based participation.",
  },
];

export const Telehealth = () => {
  return (
    <section
      id="telehealth"
      className="relative overflow-hidden bg-gradient-to-tr from-primary/95 via-sea/90 to-teal/95 px-4 py-20 text-white md:px-6 md:py-28 lg:px-8 lg:py-32"
      aria-labelledby="telehealth-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(255,189,168,0.22),transparent_60%)]" />
      <div className="container relative mx-auto flex flex-col gap-16 px-4 lg:flex-row lg:items-center">
        <motion.div
          className="max-w-xl space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Telehealth
          </span>
          <h2 id="telehealth-heading" className="text-3xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl">
            Connect with us online
          </h2>
          <p className="text-lg leading-relaxed text-white drop-shadow-md">
            For caregivers and families outside Mumbai or unable to travel, we offer virtual support group meetings and online consultations to share knowledge, resources, and emotional support.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 text-sm text-white"
          >
            <span className="flex items-center gap-3 rounded-full bg-white/25 px-4 py-2 shadow">
              <Video className="h-5 w-5" aria-hidden="true" /> Zoom-based sessions
            </span>
            <span className="flex items-center gap-3 rounded-full bg-white/25 px-4 py-2 shadow">
              <Wifi className="h-5 w-5" aria-hidden="true" /> Accessible from anywhere
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid flex-1 gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <Card
              key={title}
              className="group border-2 border-white/30 bg-white/20 shadow-lg backdrop-blur-lg transition-smooth hover:-translate-y-2 hover:border-white/50 hover:bg-white/25 hover:shadow-2xl"
            >
              <CardContent className="space-y-4 p-6">
                <div className="inline-flex">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/40 text-white shadow-2xl backdrop-blur-sm">
                    <Icon className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white drop-shadow-md">{title}</h3>
                <p className="text-sm leading-relaxed text-white/95 drop-shadow-sm">{description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
