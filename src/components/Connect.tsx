import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Connect = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="connect" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-shadow">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Fill out the form to register for events or express your interest. We will reach out to you within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Form Section */}
            <motion.div variants={itemVariants}>
              <Card className="gradient-card border-0 shadow-premium hover:shadow-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <MessageCircle className="h-6 w-6 text-teal" />
                    </motion.div>
                    Registration Form
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Complete the form below to join our programs or get more information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="bg-muted/30 rounded-lg p-4 mb-6 shadow-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-teal mb-2">
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">Google Form</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Click below to access our registration form. It will open in a new tab for your convenience.
                    </p>
                  </motion.div>
                  
                  {/* Embedded Google Form */}
                  <div className="w-full">
                    <iframe
                      src="https://forms.gle/wfShhrQuzP4hjYhB8"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="rounded-lg border shadow-card"
                      title="EHA Registration Form"
                    >
                      Loading form...
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <Card className="gradient-card border-0 shadow-premium hover:shadow-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Phone className="h-6 w-6 text-teal" />
                    </motion.div>
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Prefer to speak directly? Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="bg-teal/10 p-3 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Phone className="h-5 w-5 text-teal" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Phone Numbers</h4>
                      <p className="text-muted-foreground">+91 98678 32665</p>
                      <p className="text-muted-foreground">+91 91676 13665</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="bg-gold/10 p-3 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Mail className="h-5 w-5 text-gold" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Email</h4>
                      <p className="text-muted-foreground">info@echoinghealthyageing.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="bg-lavender/20 p-3 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </motion.div>
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
                  </motion.div>
                </CardContent>
              </Card>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="gradient-card border-0 shadow-premium bg-lavender/20">
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};