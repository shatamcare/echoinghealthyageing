import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, Sparkles } from "lucide-react";

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-white">
      <Header />
      <main id="main-content" className="flex min-h-screen items-center justify-center px-4 py-32 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center px-4"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 md:mb-8 md:h-24 md:w-24"
          >
            <Sparkles className="h-10 w-10 text-primary md:h-12 md:w-12" strokeWidth={2} />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl md:mb-6"
          >
            Care Guides and Stories
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 text-base leading-relaxed text-foreground/70 sm:text-lg md:mb-8"
          >
            We are working on bringing you practical guides, reflections, and insights from our team and caregiver community. From managing daily routines to coping with stress, every post will come from real experiences, not theory.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <span className="flex items-center gap-2 rounded-full border-2 border-secondary bg-white px-5 py-3 text-sm font-semibold text-foreground/80 shadow-sm">
              <BookOpen className="h-5 w-5 text-primary" />
              Care Guides
            </span>
            <span className="flex items-center gap-2 rounded-full border-2 border-secondary bg-white px-5 py-3 text-sm font-semibold text-foreground/80 shadow-sm">
              <Clock className="h-5 w-5 text-accent" />
              Launching Soon
            </span>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 md:mt-12"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
            >
              ← Back to Home
            </a>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
