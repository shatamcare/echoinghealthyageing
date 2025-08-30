import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Company Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-foreground">Echoing Healthy Ageing</h3>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-right">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <a 
                href="mailto:info@echoinghealthyageing.com"
                className="text-primary-foreground/90 hover:text-gold transition-smooth"
              >
                info@echoinghealthyageing.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal" />
              <span className="text-primary-foreground/90">+91 98678 32665</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Echoing Healthy Ageing (EHA). All rights reserved. | Alzheimer's Month 2025
          </p>
        </div>
      </div>
    </footer>
  );
};