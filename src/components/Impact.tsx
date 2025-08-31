import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Activity, Handshake } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Stat {
  icon: JSX.Element;
  number: string;
  label: string;
}

const rawStats: Stat[] = [
  { icon: <Users className="h-7 w-7" />, number: "120+", label: "Elderly & Persons with Dementia Supported" },
  { icon: <Award className="h-7 w-7" />, number: "1500+", label: "Caregivers & Professionals Trained" },
  { icon: <Activity className="h-7 w-7" />, number: "3600+", label: "Therapy Sessions Conducted" },
  { icon: <Handshake className="h-7 w-7" />, number: "10+", label: "Partnerships Across India" }
];

const parseTarget = (value: string) => parseInt(value.replace(/\D/g, ""), 10) || 0;

export const Impact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState<number[]>(rawStats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;
    const durations = 1200; // ms
    const start = performance.now();
    const targets = rawStats.map(s => parseTarget(s.number));

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durations);
      setCounts(targets.map(t => Math.round(t * progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView]);

  return (
    <section id="impact" className="relative py-28 bg-gradient-to-br from-teal-50 via-white to-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_30%,#0d948860,transparent_60%),radial-gradient(circle_at_80%_70%,#33415560,transparent_65%)]" />
      <div className="container relative mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 inline-block relative mb-6">
            Our Impact
            <span className="absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 rounded-full animate-[underlineGrow_1.4s_ease-out_forwards]" />
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tangible outcomes achieved through person-centred care, training, and collaborative community engagement.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {rawStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="relative h-full rounded-3xl border border-teal-200/50 bg-white/70 backdrop-blur-sm shadow-[0_8px_28px_-8px_rgba(13,148,136,0.3)] hover:shadow-[0_12px_40px_-8px_rgba(13,148,136,0.45)] transition-all overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-400/10" />
                <CardContent className="relative p-8 flex flex-col items-start">
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-teal-600 to-slate-600 text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 mb-3">
                    {counts[i]}{stat.number.includes('+') && '+'}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
