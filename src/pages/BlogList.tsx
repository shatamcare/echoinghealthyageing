import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, Sparkles } from "lucide-react";

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-white">
      <Header />
      <main id="main-content" className="flex min-h-screen items-center justify-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10"
          >
            <Sparkles className="h-12 w-12 text-primary" strokeWidth={2} />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-4xl font-bold text-foreground sm:text-5xl"
          >
            Coming Soon
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-lg leading-relaxed text-foreground/70"
          >
            We're preparing valuable insights, guides, and stories about dementia care. 
            Our blog will feature practical tips for caregivers, updates from our Memory Café sessions, 
            and resources to support families across Mumbai and beyond.
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
            className="mt-12"
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
