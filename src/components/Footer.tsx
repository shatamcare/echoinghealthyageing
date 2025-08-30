import { Phone, Mail, Globe, Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Brief Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-teal text-teal-foreground rounded-lg p-3 font-bold text-xl">
                EHA
              </div>
              <div>
                <h3 className="font-bold text-lg">Echoing Healthy Ageing</h3>
                <p className="text-primary-foreground/80 text-sm">Since 2012</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-sm max-w-md">
              Dedicated to geriatric care, dementia support, and caregiver empowerment.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal" />
                <span>+91 98678 32665</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a 
                  href="mailto:info@echoinghealthyageing.com"
                  className="hover:text-gold transition-colors"
                >
                  info@echoinghealthyageing.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-lavender" />
                <a 
                  href="https://www.echoinghealthyageing.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-lavender transition-colors"
                >
                  echoinghealthyageing.com
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-teal transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-teal transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-teal transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-teal transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Echoing Healthy Ageing (EHA). All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Heart className="h-4 w-4 fill-current text-gold" />
              <span>Making a difference since 2012</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};