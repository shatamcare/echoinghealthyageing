import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  MessageCircle, 
  GraduationCap, 
  Building2,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Briefcase
} from "lucide-react";
import careersData from "@/data/careers.json";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    roleInterest: "",
    availability: "",
    linkedIn: "",
    message: "",
    consent: false,
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Careers at Echoing Healthy Ageing | Dementia Care Jobs in Mumbai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join Echoing Healthy Ageing—Memory Café, home therapy, and caregiver support roles. Evidence-based care with empathy.");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf" && file.size <= 5 * 1024 * 1024) {
      setCvFile(file);
      setErrorMessage("");
    } else if (file && file.size > 5 * 1024 * 1024) {
      setErrorMessage("File size must be under 5MB");
      setCvFile(null);
    } else if (file && file.type !== "application/pdf") {
      setErrorMessage("Only PDF files are accepted");
      setCvFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");
    setErrorMessage("");

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.city || !formData.roleInterest || !formData.availability) {
      setSubmitState("error");
      setErrorMessage("Please fill in all required fields");
      return;
    }

    if (!formData.consent) {
      setSubmitState("error");
      setErrorMessage("Please consent to data storage to proceed");
      return;
    }

    // TODO: Wire to actual backend endpoint
    // For now, simulate submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Placeholder: In production, send to your backend/email service
      console.log("Career interest submitted:", { ...formData, cvFile });
      
      setSubmitState("success");
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          roleInterest: "",
          availability: "",
          linkedIn: "",
          message: "",
          consent: false,
        });
        setCvFile(null);
        setSubmitState("idle");
      }, 5000);
    } catch (error) {
      setSubmitState("error");
      setErrorMessage("Something went wrong. Please try again or email us directly at careers@echoinghealthyageing.com");
    }
  };

  const cultureValues = [
    {
      icon: Heart,
      title: "Dignity & consent",
      description: "We put the person and family first."
    },
    {
      icon: Users,
      title: "Evidence with empathy",
      description: "Clinical rigor, human care."
    },
    {
      icon: MessageCircle,
      title: "Listen → Plan → Support",
      description: "No hard sell; transparent communication."
    },
    {
      icon: GraduationCap,
      title: "Learn together",
      description: "Supervision, training, and feedback loops."
    },
    {
      icon: Building2,
      title: "Community impact",
      description: "Memory Cafés, caregiver groups, outreach."
    }
  ];

  const lifeAtEhaImages = [
    { src: "/Images/art.jpg", alt: "Art therapy activity session with seniors", caption: "Art activity at Memory Café" },
    { src: "/Images/training.jpg", alt: "Team training workshop on dementia care", caption: "Team training day" },
    { src: "/Images/activities.jpg", alt: "Group activities promoting cognitive engagement", caption: "Community engagement sessions" },
    { src: "/Images/sessions.jpg", alt: "Supportive group session for caregivers", caption: "Caregiver support group" },
    { src: "/Images/dementia care 1.jpg", alt: "One-on-one care consultation", caption: "Personalized care planning" },
    { src: "/Images/activities 1.jpg", alt: "Interactive activities promoting wellbeing", caption: "Wellness activities" },
    { src: "/Images/art 1.jpg", alt: "Creative expression through art therapy", caption: "Creative therapy session" },
    { src: "/Images/caregiver certificate 2.jpg", alt: "Caregiver training certification ceremony", caption: "Training certification" }
  ];

  const hiringSteps = [
    {
      icon: FileText,
      title: "Apply/Express interest",
      description: "Share your background and what draws you to this work."
    },
    {
      icon: MessageCircle,
      title: "Conversation with our team",
      description: "Discuss your experience, values, and fit."
    },
    {
      icon: Users,
      title: "Shadow/Case exercise",
      description: "Role-dependent: observe a session or work through a scenario."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#f3e8ff] via-[#fef3f2] to-[#e0f2fe] px-4 py-32 sm:px-6 sm:py-36 md:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 
                className="mb-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Careers at Echoing Healthy Ageing
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl md:text-2xl">
                Join a team helping families live well with dementia—kindness first, evidence-based always.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToSection("open-roles")}
                  className="min-h-[48px] rounded-full px-8 text-base font-semibold"
                >
                  View Open Roles
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("interest")}
                  className="min-h-[48px] rounded-full px-8 text-base font-semibold"
                >
                  Share Your Interest
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="mb-12 text-center text-3xl font-semibold text-foreground sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How we work
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cultureValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full p-6 transition-shadow hover:shadow-md">
                      <value.icon className="mb-4 h-8 w-8 text-primary" />
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-base leading-relaxed text-foreground/70">
                        {value.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Life at EHA Section */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="mb-12 text-center text-3xl font-semibold text-foreground sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Life at EHA
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {lifeAtEhaImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105"
                  >
                    <div className="relative aspect-square">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                        {image.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section id="open-roles" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="mb-8 text-center text-3xl font-semibold text-foreground sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Current openings
              </h2>
              
              {careersData.roles.length === 0 ? (
                <div className="rounded-xl bg-white p-8 text-center shadow-sm sm:p-12">
                  <p className="mb-6 text-lg leading-relaxed text-foreground/70">
                    {careersData.noRolesMessage}
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => scrollToSection("interest")}
                    className="min-h-[48px] rounded-full px-8"
                  >
                    Share Your Interest
                  </Button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {careersData.roles.map((role, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full p-6 transition-shadow hover:shadow-md">
                        <h3 className="mb-3 text-xl font-semibold text-foreground">
                          {role.title}
                        </h3>
                        <div className="mb-4 flex flex-wrap gap-3 text-sm text-foreground/60">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {role.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {role.type}
                          </span>
                        </div>
                        <p className="mb-4 text-base leading-relaxed text-foreground/70">
                          {role.impact}
                        </p>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-primary"
                          onClick={() => scrollToSection("interest")}
                        >
                          Apply now →
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* How We Hire Section */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="mb-12 text-center text-3xl font-semibold text-foreground sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How we hire
              </h2>
              <div className="grid gap-8 sm:grid-cols-3">
                {hiringSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-foreground/70">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="mb-8 text-center text-3xl font-semibold text-foreground sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Benefits at a glance
              </h2>
              <div className="rounded-xl bg-gradient-to-br from-white to-[#fef3f2] p-8 shadow-sm sm:p-10">
                <p className="text-center text-lg leading-relaxed text-foreground/80">
                  Supportive supervision · Training allowance · Flexible scheduling (where possible) · 
                  Field safety protocols · Transparent pay bands (shared during process)
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interest Form Section */}
        <section id="interest" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="mb-8 text-center text-3xl font-semibold text-foreground sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Share your interest
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="fullName" className="mb-2 block text-base font-medium">
                      Full name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="min-h-[48px]"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2 block text-base font-medium">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="min-h-[48px]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="phone" className="mb-2 block text-base font-medium">
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="min-h-[48px]"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="mb-2 block text-base font-medium">
                      City/Area <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="min-h-[48px]"
                      placeholder="e.g., Andheri, Mumbai"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="roleInterest" className="mb-2 block text-base font-medium">
                      Role/Interest <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="roleInterest"
                      name="roleInterest"
                      type="text"
                      required
                      value={formData.roleInterest}
                      onChange={handleInputChange}
                      className="min-h-[48px]"
                      placeholder="e.g., Care coordinator, Therapist"
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability" className="mb-2 block text-base font-medium">
                      Availability <span className="text-destructive">*</span>
                    </Label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select availability</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Volunteer">Volunteer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="linkedIn" className="mb-2 block text-base font-medium">
                    LinkedIn URL <span className="text-sm text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="linkedIn"
                    name="linkedIn"
                    type="url"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    className="min-h-[48px]"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <Label htmlFor="cv" className="mb-2 block text-base font-medium">
                    Upload CV/Resume (PDF) <span className="text-sm text-muted-foreground">(optional, max 5MB)</span>
                  </Label>
                  <Input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="min-h-[48px] cursor-pointer"
                  />
                  {cvFile && (
                    <p className="mt-2 text-sm text-foreground/60">
                      Selected: {cvFile.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block text-base font-medium">
                    Message <span className="text-sm text-muted-foreground">(optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="resize-none"
                    placeholder="Tell us what draws you to this work..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    required
                  />
                  <Label htmlFor="consent" className="cursor-pointer text-base leading-relaxed">
                    I consent to EHA storing my details to contact me about roles. <span className="text-destructive">*</span>
                  </Label>
                </div>

                {submitState === "error" && errorMessage && (
                  <div 
                    role="alert" 
                    aria-live="assertive"
                    className="flex items-start gap-3 rounded-lg bg-destructive/10 p-4 text-destructive"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <p className="text-base">{errorMessage}</p>
                  </div>
                )}

                {submitState === "success" && (
                  <div 
                    role="alert" 
                    aria-live="polite"
                    className="flex items-start gap-3 rounded-lg bg-green-50 p-4 text-green-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <p className="text-base">
                      Thanks! We'll review and get back within 5–7 working days.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitState === "loading" || submitState === "success"}
                  className="min-h-[48px] w-full rounded-full text-base font-semibold sm:w-auto sm:px-12"
                >
                  {submitState === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-foreground/60">
                Or email us directly at{" "}
                <a 
                  href="mailto:careers@echoinghealthyageing.com" 
                  className="font-medium text-primary underline-offset-4 hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  careers@echoinghealthyageing.com
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
