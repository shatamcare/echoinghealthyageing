import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";

export const Connect = () => {
  return (
    <section id="connect" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Fill out the form to register for events or express your interest. We will reach out to you within 24 hours.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <Card className="gradient-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-teal" />
                  Registration Form
                </CardTitle>
                <CardDescription className="text-lg">
                  Complete the form below to join our programs or get more information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-teal mb-2">
                    <ExternalLink className="h-4 w-4" />
                    <span className="font-medium">Google Form</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Click below to access our registration form. It will open in a new tab for your convenience.
                  </p>
                </div>
                
                {/* Embedded Google Form */}
                <div className="w-full">
                  <iframe
                    src="https://forms.gle/wfShhrQuzP4hjYhB8"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg border"
                    title="EHA Registration Form"
                  >
                    Loading form...
                  </iframe>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="gradient-card border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <Phone className="h-6 w-6 text-teal" />
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Prefer to speak directly? Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Phone Numbers</h4>
                      <p className="text-muted-foreground">+91 98678 32665</p>
                      <p className="text-muted-foreground">+91 91676 13665</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Email</h4>
                      <p className="text-muted-foreground">info@echoinghealthyageing.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-lavender/20 p-3 rounded-full">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Website</h4>
                      <a 
                        href="https://www.echoinghealthyageing.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal hover:text-teal/80 transition-smooth"
                      >
                        www.echoinghealthyageing.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-xl bg-lavender/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-3 text-lg">
                      Response Time
                    </h4>
                    <p className="text-muted-foreground">
                      We typically respond to all inquiries within <strong>24 hours</strong>. 
                      For urgent matters, please call us directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};