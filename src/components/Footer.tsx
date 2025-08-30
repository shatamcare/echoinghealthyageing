import { Mail, Phone, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-gray-800 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Company Logo */}
          <div className="text-center md:text-left">
            <img 
              src="/Images/Untitled design.png" 
              alt="Echoing Healthy Ageing Logo" 
              className="h-32 md:h-40 w-auto mx-auto md:mx-0"
            />
          </div>

          {/* Contact Info and Additional Links */}
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-right">
            {/* Contact Information */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <a 
                    href="mailto:info@echoinghealthyageing.com"
                    className="text-gray-700 hover:text-teal-600 transition-smooth"
                  >
                    info@echoinghealthyageing.com
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <span className="text-gray-700">+91 98678 32665</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-gray-700 hover:text-teal-600 transition-smooth">About Us</a>
                <a href="#events" className="text-gray-700 hover:text-teal-600 transition-smooth">Events</a>
                <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-smooth">Contact</a>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 justify-center md:justify-end text-gray-700 hover:text-teal-600 transition-smooth bg-transparent border-none cursor-pointer"
                  title="Back to Top"
                >
                  <ArrowUp className="h-4 w-4" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Echoing Healthy Ageing (EHA). All rights reserved. | Alzheimer's Month 2025
          </p>
        </div>
      </div>
    </footer>
  );
};