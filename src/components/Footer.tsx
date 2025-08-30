import { Phone, Mail, Globe, Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/Images/EHA Logo .jpg"
                alt="Echoing Healthy Ageing"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              A social enterprise dedicated to geriatric care, dementia support, and caregiver empowerment. 
              Started during Alzheimer's Month 2012, we continue to make a difference.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <Heart className="h-5 w-5 fill-current" />
              <span className="font-medium">Making a difference since Alzheimer's Month 2012</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Phone Numbers</p>
                  <p className="text-primary-foreground/90">+91 98678 32665</p>
                  <p className="text-primary-foreground/90">+91 91676 13665</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a 
                    href="mailto:info@echoinghealthyageing.com"
                    className="text-primary-foreground/90 hover:text-gold transition-smooth"
                  >
                    info@echoinghealthyageing.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-lavender mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Website</p>
                  <a 
                    href="https://www.echoinghealthyageing.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/90 hover:text-lavender transition-smooth"
                  >
                    www.echoinghealthyageing.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links and Social */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl mb-4">Connect With Us</h4>
            
            {/* Social Media Icons */}
            <div className="space-y-4">
              <p className="text-primary-foreground/90">Follow us on social media for updates:</p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-primary-foreground/10 p-3 rounded-full hover:bg-teal hover:scale-110 transition-bounce"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-foreground/10 p-3 rounded-full hover:bg-teal hover:scale-110 transition-bounce"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-foreground/10 p-3 rounded-full hover:bg-teal hover:scale-110 transition-bounce"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-foreground/10 p-3 rounded-full hover:bg-teal hover:scale-110 transition-bounce"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <p className="font-medium">Quick Links</p>
              <div className="space-y-2">
                <a 
                  href="#events" 
                  className="block text-primary-foreground/90 hover:text-gold transition-smooth"
                >
                  → View Events
                </a>
                <a 
                  href="https://forms.gle/wfShhrQuzP4hjYhB8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/90 hover:text-gold transition-smooth"
                >
                  → Register Now
                </a>
                <a 
                  href="#about" 
                  className="block text-primary-foreground/90 hover:text-gold transition-smooth"
                >
                  → About EHA
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Echoing Healthy Ageing (EHA). All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>Alzheimer's Month 2025</span>
              <span>•</span>
              <span>Spreading Awareness & Hope</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};