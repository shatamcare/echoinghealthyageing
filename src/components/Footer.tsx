import { Home, Heart, Users, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import FooterHomeButton from "@/components/FooterHomeButton";

export const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickNav = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Heart, label: 'Services', href: '#services' },
    { icon: Users, label: 'Stories', href: '#stories' },
    { icon: Mail, label: 'Blog', href: '/blog' },
    { icon: Phone, label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // If it's the home page link
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If it's the blog page
    if (href === "/blog") {
      navigate("/blog");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If it's a hash link and we're not on the homepage, navigate to homepage first
    if (href.startsWith("#") && location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else if (href.startsWith("#")) {
      // We're already on homepage, just scroll
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-primary/90 via-teal/85 to-sea/90 pb-3 pt-8 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.15),transparent_65%)] opacity-50" />
      
      <div className="container relative mx-auto px-4">
        {/* Right-aligned Home button (hidden on /) */}
        <div className="flex items-center">
          <FooterHomeButton />
        </div>

        {/* Compact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 grid gap-6 text-sm grid-cols-1 md:grid-cols-3"
        >
          {/* Contact */}
          <div className="space-y-2">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Contact</h4>
            <a href="mailto:info@echoinghealthyageing.com" className="flex items-center gap-2 text-white transition-colors hover:text-accent">
              <Mail className="h-4 w-4 text-white" />
              <span className="text-xs">info@echoinghealthyageing.com</span>
            </a>
            <a href="tel:+919867832665" className="flex items-center gap-2 text-white transition-colors hover:text-accent">
              <Phone className="h-4 w-4 text-white" />
              <span className="text-xs">+91 98678 32665</span>
            </a>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Location</h4>
            <div className="flex items-start gap-2 text-white">
              <MapPin className="h-4 w-4 text-white mt-0.5" />
              <span className="text-xs">Mumbai, Maharashtra<br/>Mon-Fri: 9AM - 6PM</span>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Follow Us</h4>
            <div className="flex items-center gap-2">
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
                  className="group rounded-full bg-white/10 p-1.5 transition-all hover:bg-accent hover:scale-110"
                >
                  <s.icon className="h-3.5 w-3.5 text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-3 h-px w-full bg-white/10" />

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-xs text-white/70"
        >
          <p>© {year} Echoing Healthy Ageing · Made with care for those who care.</p>
        </motion.div>
      </div>

      {/* Compact Bottom Navigation Bar */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-teal-200/30 bg-[#E8F5F3]/95 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:hidden"
        aria-label="Mobile quick navigation"
      >
        <div className="flex items-center justify-evenly py-2">
          {quickNav.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="group flex min-w-[60px] flex-col items-center gap-1 px-2 py-1.5 text-[#1C5D55] transition-all duration-200 hover:text-[#174B45] active:scale-95"
              aria-label={label}
            >
              <Icon className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};