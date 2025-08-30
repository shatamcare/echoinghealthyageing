import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      y: 0
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
              <Card className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <CardHeader className="bg-gradient-to-r from-slate-600 to-teal-700 text-white">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <MessageCircle className="h-6 w-6 text-white" />
                    </motion.div>
                    Registration Form
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-100">
                    Complete the form below to join our programs or get more information
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <motion.div
                    className="bg-slate-100/60 rounded-lg p-4 mb-6 shadow-sm border border-slate-200/40"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-slate-700 mb-2">
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">Google Form</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Click below to access our registration form. It will open in a new tab for your convenience.
                    </p>
                  </motion.div>
                  
                  {/* Google Form Link */}
                  <div className="w-full">
                    <div className="p-8 border-2 border-dashed border-slate-300 rounded-lg text-center bg-gradient-to-br from-white to-slate-50 shadow-sm">
                      <div className="space-y-4">
                        <div className="text-6xl">📝</div>
                        <h4 className="text-xl font-semibold text-slate-800">Registration Form</h4>
                        <p className="text-slate-600">
                          Click the button below to open our registration form in a new tab
                        </p>
                        <Button
                          size="lg"
                          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQ6F3ef-D1N5AZq9fK3DSn0Xu8exEMtk3e6HlLDL8a3upM_Q/viewform', '_blank')}
                          className="bg-gradient-to-r from-slate-600 to-teal-700 hover:from-slate-700 hover:to-teal-800 text-white shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                        >
                          Open Registration Form
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <Card className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <CardHeader className="bg-gradient-to-r from-slate-600 to-teal-700 text-white">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Phone className="h-6 w-6 text-white" />
                    </motion.div>
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-100">
                    Prefer to speak directly? Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-100/60 hover:bg-slate-100/80 transition-all duration-300 border border-slate-200/40"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-slate-500 to-teal-600 p-3 rounded-full shadow-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Phone className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Phone Numbers</h4>
                      <p className="text-slate-700">+91 98678 32665</p>
                      <p className="text-slate-700">+91 91676 13665</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-100/60 hover:bg-slate-100/80 transition-all duration-300 border border-slate-200/40"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-slate-500 to-teal-600 p-3 rounded-full shadow-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Email</h4>
                      <p className="text-slate-700">info@echoinghealthyageing.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-100/60 hover:bg-slate-100/80 transition-all duration-300 border border-slate-200/40"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-slate-500 to-teal-600 p-3 rounded-full shadow-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Website</h4>
                      <a 
                        href="https://www.echoinghealthyageing.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:text-teal-800 transition-smooth font-medium"
                      >
                        www.echoinghealthyageing.com
                      </a>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-slate-600 to-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <span className="text-3xl">⏰</span>
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                        Response Time
                      </h4>
                      <p className="text-slate-700">
                        We typically respond to all inquiries within <strong className="text-slate-800">24 hours</strong>. 
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