import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const linkUnderline = "relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full";

export const Footer = () => {
  const year = new Date().getFullYear();
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfQ6F3ef-D1N5AZq9fK3DSn0Xu8exEMtk3e6HlLDL8a3upM_Q/viewform';

  return (
    <footer id="contact" className="relative mt-32 text-slate-200 bg-[linear-gradient(135deg,#0f766e_0%,#0d4d62_55%,#081d32_100%)] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.15),transparent_65%)]" />
      <div className="container relative mx-auto px-4">
        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-6">
            <p className="text-sm md:text-base text-slate-100 font-medium text-center md:text-left">
              Ready to Join Our Community? <span className="text-teal-200">Register for our events today.</span>
            </p>
            <button
              onClick={() => window.open(formUrl, '_blank')}
              className="relative group rounded-full bg-white text-teal-700 font-medium px-6 py-2 text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-teal-300/60 transition-all" />
            </button>
          </div>
        </motion.div>

        {/* Two Columns */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-12 sm:grid-cols-2 mb-12"
        >
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-teal-200 mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className={`${linkUnderline} inline-block text-slate-200/85 hover:text-white`}>Home</a></li>
              <li><a href="#events" className={`${linkUnderline} inline-block text-slate-200/85 hover:text-white`}>Events</a></li>
              <li><a href="#about" className={`${linkUnderline} inline-block text-slate-200/85 hover:text-white`}>About Us</a></li>
              <li><a href="#contact" className={`${linkUnderline} inline-block text-slate-200/85 hover:text-white`}>Contact</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-teal-200 mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-teal-300 mt-0.5" />
                <a href="mailto:info@echoinghealthyageing.com" className="text-slate-200/85 hover:text-white transition-colors">info@echoinghealthyageing.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-teal-300 mt-0.5" />
                <span className="text-slate-200/85">+91 98678 32665</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-teal-300 mt-0.5" />
                <span className="text-slate-200/85">Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-teal-300 mt-0.5" />
                <span className="text-slate-200/85">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-white/15 mb-6" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-300/80"
        >
          <p className="text-center sm:text-left">© {year} Echoing Healthy Ageing. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {[
                {icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/EchoingHealthyAgeing/'},
                {icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/echoinghealthyageing/?hl=en'},
                {icon: Linkedin, label: 'LinkedIn', href: 'https://in.linkedin.com/company/echoing-healthy-ageing'},
                {icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@echoinghealthyageing1342'}
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="group p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow hover:ring-1 hover:ring-teal-300/40"
                >
                  <s.icon className="h-4 w-4 text-teal-200 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
        </motion.div>
      </div>
    </footer>
  );
};