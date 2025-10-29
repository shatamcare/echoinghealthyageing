import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllPosts, type BlogPost } from "@/lib/blog";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error loading posts:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] pb-20 md:pb-0">
      <Header />
      <main id="main-content" className="px-4 py-32 md:py-36">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center md:mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Care Guides & Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg text-foreground/70"
            >
              Practical insights from our team and caregiver community. Real experiences, not just theory.
            </motion.p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-3 text-lg text-foreground/70">Loading posts...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mx-auto max-w-2xl rounded-lg border-2 border-red-200 bg-red-50 p-6 text-center">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && !error && posts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                      {/* Hero Image */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                        <img
                          src={post.heroImage.fallback}
                          alt={post.heroImage.alt}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col p-6">
                        {/* Tags */}
                        {post.tags.length > 0 && (
                          <div className="mb-3 flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="mb-3 text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {post.title}
                        </h2>

                        {/* Summary */}
                        <p className="mb-4 flex-grow text-sm text-foreground/70 line-clamp-3">
                          {post.summary}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between border-t pt-4 text-xs text-foreground/60">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(post.datePublished).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readingTimeMinutes} min
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Empty State */}
          {!loading && !error && posts.length === 0 && (
            <div className="mx-auto max-w-2xl text-center py-20">
              <p className="text-lg text-foreground/70">
                No blog posts found. Check back soon for new content!
              </p>
            </div>
          )}

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
