import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email us",
    value: "info@echoinghealthyageing.com",
    action: () => (window.location.href = "mailto:info@echoinghealthyageing.com"),
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98678 32665 · +91 91586 56665",
    action: () => window.open("tel:+919867832665"),
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Mumbai, Maharashtra",
    action: null,
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM",
    action: null,
  },
];

export const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@echoinghealthyageing.com?subject=Care Consultation Request from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/30 to-white px-4 py-20 md:px-6 md:py-28 lg:px-8 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(16,88,110,0.1),transparent_60%),radial-gradient(circle_at_82%_85%,rgba(241,205,179,0.15),transparent_55%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            Start the conversation with our care team
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            Whether you're seeking immediate support or exploring our services, our specialists are here to listen and guide your next steps with compassion.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="border-2 border-secondary bg-white shadow-card">
              <CardContent className="space-y-6 p-8">
                <h3 className="text-2xl font-semibold text-foreground">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground/80">
                      Your name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-input bg-white px-4 py-3 min-h-[48px] text-base text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground/80">
                      Email address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-input bg-white px-4 py-3 min-h-[48px] text-base text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground/80">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-input bg-white px-4 py-3 min-h-[48px] text-base text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground/80">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-xl border border-input bg-white px-4 py-3 min-h-[120px] text-base text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your care needs..."
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="group w-full justify-between text-base font-semibold min-h-[56px]"
                  >
                    Send message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Chatbot Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Other ways to reach us</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, action }) => (
                  <Card
                    key={label}
                    className="group cursor-pointer border-2 border-secondary bg-white shadow-sm transition-smooth hover:-translate-y-2 hover:border-accent/20 hover:shadow-lg"
                    onClick={action || undefined}
                  >
                    <CardContent className="flex items-start gap-4 p-5">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-teal to-sea text-white shadow-2xl transition-shadow group-hover:shadow-accent/50">
                          <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                        </span>
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                          {label}
                        </p>
                        <p className="mt-1 text-base font-medium text-foreground">{value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Chatbot Placeholder */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-white to-white shadow-card">
              <CardContent className="space-y-4 p-8">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/60 text-white shadow-2xl">
                      <MessageCircle className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground">Chat with Care Assistant</h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground/70">
                  Our 24/7 AI assistant helps answer quick questions about appointments, services, and general Alzheimer's care guidance.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full rounded-full border border-accent/40 bg-white text-base font-semibold text-accent shadow-sm hover:bg-accent/10 focus-visible:ring-accent"
                  disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};