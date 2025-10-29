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
      className="relative overflow-hidden px-4 py-20 md:px-6 md:py-32 lg:px-8 lg:py-40"
      aria-labelledby="contact-heading"
      style={{
        background: 'linear-gradient(to bottom right, #f0fdf4, #fef9f3, #f0fdfa)'
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,218,187,0.2),transparent_60%),radial-gradient(circle_at_85%_80%,rgba(180,218,230,0.18),transparent_55%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-primary shadow-sm">
            Let’s Talk
          </span>
          <h2 id="contact-heading" className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
            Every family’s story is different. Tell us yours, and we will help you find what works best.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10 max-w-7xl mx-auto">
          {/* Left: Contact Image & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/Images/img 3.jpg" 
                alt="Echoing Healthy Ageing care team ready to help"
                className="w-full h-[320px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Quick Contact</h3>
              {CONTACT_INFO.map(({ icon: Icon, label, value, action }) => (
                <Card
                  key={label}
                  className="group cursor-pointer border-2 border-secondary bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  onClick={action || undefined}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                      <Icon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">{value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="border-2 border-secondary bg-white shadow-2xl">
              <CardContent className="space-y-6 p-6 md:p-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                  <p className="mt-2 text-sm text-foreground/60">
                    We usually reply within 24 hours on working days. (If it is urgent, please call us directly.)
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                        Your name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-input bg-white px-4 py-3 text-base text-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                        Email address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-input bg-white px-4 py-3 text-base text-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border-2 border-input bg-white px-4 py-3 text-base text-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-xl border-2 border-input bg-white px-4 py-3 text-base text-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      placeholder="Tell us about your care needs and how we can help..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="group w-full justify-between text-base font-semibold min-h-[54px] shadow-xl"
                  >
                    Send message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" aria-hidden="true" />
                  </Button>
                </form>

                <div className="border-t-2 border-secondary pt-6">
                  <p className="text-center text-sm text-foreground/60">
                    <strong>Response time:</strong> We typically respond within 24 hours on business days
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-white to-primary/5 shadow-xl">
            <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex-shrink-0"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-white shadow-2xl">
                  <MessageCircle className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
                </span>
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground">Need immediate assistance?</h3>
                <p className="mt-1 text-sm text-foreground/70">
                  Call us directly at <strong className="text-primary">+91 98678 32665</strong> or <strong className="text-primary">+91 91586 56665</strong> for urgent care needs.
                </p>
              </div>
              <Button
                variant="default"
                size="lg"
                className="flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold px-6 py-3 min-h-[48px] shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("tel:+919867832665")}
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};