import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  MessageCircle, 
  GraduationCap, 
  Building2,
  FileText,
  MapPin,
  Briefcase
} from "lucide-react";
import careersData from "@/data/careers.json";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers at Echoing Healthy Ageing | Dementia Care Jobs in Mumbai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join Echoing Healthy Ageing—Memory Café, home therapy, and caregiver support roles. Evidence-based care with empathy.");
    }
  }, []);

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
              className="text-center"
            >
              <h2 
                className="mb-4 text-3xl font-semibold text-foreground sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Share your interest
              </h2>
              <p className="mb-8 text-base text-foreground/70 sm:text-lg">
                Don't see the perfect role? We're always looking for passionate individuals. Share your story with us.
              </p>
              
              <Button
                asChild
                size="lg"
                className="min-h-[56px] rounded-full px-8 text-lg font-semibold"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdyX1XzzSpaSgyD2NshzBXAI8WgsXsvoZWCYZMk4o-3FllhKQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Fill Out Interest Form
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
              
              <p className="mt-4 text-sm text-muted-foreground">
                Opens in a new tab • Secure Google Form
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
