// Clean, complete About component with named export (no default) to avoid HMR cache mismatches
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, BookOpen, Coffee, Quote, Star, HeartHandshake, Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type Service = { icon: JSX.Element; title: string; description: string };
type Testimonial = { text: string; author: string; relation: string };

export const About = () => {
  const services: Service[] = [
    { icon: <Heart className="h-6 w-6" />, title: "Home-based Therapies", description: "Personalised, evidence-based interventions" },
    { icon: <BookOpen className="h-6 w-6" />, title: "Training Programs", description: "Capacity building for carers & staff" },
    { icon: <Coffee className="h-6 w-6" />, title: "Memory Café", description: "Social & cognitive engagement sessions" },
    { icon: <Users className="h-6 w-6" />, title: "Caregiver Support", description: "Peer groups & counselling pathways" }
  ];

  const testimonials: Testimonial[] = [
    { text: "The brain-stimulating activities help her immensely; she now shares memories we thought were lost.", author: "Neha Doshi", relation: "Family Caregiver" },
    { text: "EHA's training reshaped our dementia care approach. Person-centred practice made a real difference.", author: "Dr. Rajesh Kumar", relation: "Healthcare Professional" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="about" className="relative py-28 bg-gradient-to-br from-teal-50 via-white to-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_15%_25%,#0d948880,transparent_60%),radial-gradient(circle_at_85%_75%,#33415566,transparent_65%)]" />
      <div className="container relative mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 mb-6 relative inline-block">
            About Echoing Healthy Ageing (EHA)
            <span className="absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 rounded-full animate-[underlineGrow_1.4s_ease-out_forwards]" />
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Since 2012, we support seniors & families with dignified, person-centred geriatric & dementia care— blending therapeutic engagement, caregiver empowerment, and collaborative community programs.
          </p>
        </motion.div>

        {/* Two Column Layout (Mission + Services). Impact stats moved to dedicated Impact section */}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start mb-24">
          {/* Mission */}
          <div className="space-y-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="relative border border-teal-200/50 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-[0_8px_30px_-10px_rgba(13,148,136,0.25)] overflow-hidden">
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-100/40 via-transparent to-cyan-100/50" />
                <CardContent className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-600 to-slate-600 text-white shadow">
                      <HeartHandshake className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800">Our Mission</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    We enhance quality of life through compassionate, person-centred dementia & geriatric support— empowering caregivers, connecting communities, and fostering meaningful engagement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              <Card className="relative border border-teal-200/50 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-[0_8px_30px_-10px_rgba(13,148,136,0.25)] overflow-hidden">
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-100/40 via-transparent to-cyan-100/50" />
                <CardContent className="relative p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-600 to-slate-600 text-white shadow">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800">Contact Us</h3>
                  </div>
                  <ul className="space-y-4 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-teal-600 mt-0.5" />
                      <a href="mailto:info@echoinghealthyageing.com" className="text-slate-700 hover:text-teal-700 transition-colors font-medium">info@echoinghealthyageing.com</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-teal-600 mt-0.5" />
                      <div className="flex flex-col">
                        <a href="tel:+919867832665" className="text-slate-700 hover:text-teal-700 transition-colors font-medium">+91 98678 32665</a>
                        <a href="tel:+919158656665" className="text-slate-700 hover:text-teal-700 transition-colors font-medium">+91 91586 56665</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span className="text-slate-700 font-medium">Mumbai, Maharashtra</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span className="text-slate-700 font-medium">Mon – Fri: 9:00 AM – 6:00 PM</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => window.location.href = 'mailto:info@echoinghealthyageing.com'}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-slate-700 hover:from-teal-500 hover:to-slate-800 text-white text-sm font-medium px-5 py-2.5 shadow-md hover:shadow-lg transition-all"
                    >
                      <Mail className="h-4 w-4" /> Email
                    </button>
                    <button
                      onClick={() => window.open('tel:+919867832665')}
                      className="inline-flex items-center gap-2 rounded-full border border-teal-600/40 text-teal-700 hover:bg-teal-50 text-sm font-medium px-5 py-2.5 shadow-sm hover:shadow transition-all"
                    >
                      <Phone className="h-4 w-4" /> Call
                    </button>
                    <button
                      onClick={() => window.open('tel:+919158656665')}
                      className="inline-flex items-center gap-2 rounded-full border border-teal-600/40 text-teal-700 hover:bg-teal-50 text-sm font-medium px-5 py-2.5 shadow-sm hover:shadow transition-all"
                    >
                      <Phone className="h-4 w-4" /> Call 2
                    </button>
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium px-5 py-2.5 shadow-sm hover:shadow transition-all"
                    >
                      <ExternalLink className="h-4 w-4" /> More
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-semibold text-slate-800 flex items-center gap-3">
              <Heart className="h-7 w-7 text-teal-600" /> Services We Provide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.09 }}
                  whileHover={{ y: -6 }}
                >
                  <Card className="h-full border border-teal-200/60 hover:border-teal-500/50 transition-colors bg-white/70 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_-6px_rgba(13,148,136,0.25)] hover:shadow-[0_8px_28px_-6px_rgba(13,148,136,0.4)]">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-teal-600 to-slate-600 text-white shadow">
                        {service.icon}
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2 tracking-wide">
                        {service.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-semibold text-slate-800 mb-12 text-center">What Families & Professionals Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-slate-200/70 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <Quote className="h-6 w-6 text-teal-600" />
                    <p className="text-slate-700 leading-relaxed text-sm">{t.text}</p>
                    <div className="mt-2 text-sm">
                      <span className="font-semibold text-slate-800">{t.author}</span>
                      <span className="text-slate-500"> — {t.relation}</span>
                    </div>
                    <div className="flex gap-1 text-teal-500 mt-auto">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-teal-500/70" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Explicit re-export (helps some tooling)