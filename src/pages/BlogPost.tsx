import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import type { BlogPost } from "@/lib/blog";
import {
  getAllPosts,
  updatePageMetadata,
  injectJsonLd,
  buildBlogPostingJson,
  buildBreadcrumbList,
  formatDisplayDate,
  SITE_URL,
} from "@/lib/blog";

const BlogPost = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const posts = await getAllPosts();
        if (!isMounted) {
          return;
        }
        const currentIndex = posts.findIndex((entry) => entry.slug === slug);
        if (currentIndex === -1) {
          navigate("/blog", { replace: true });
          return;
        }

        const currentPost = posts[currentIndex];
        setPost(currentPost);
        setLoading(false);

        updatePageMetadata({
          title: `${currentPost.title} | Echoing Healthy Ageing Blog`,
          description: currentPost.summary || currentPost.excerpt,
          canonical: `${SITE_URL}/blog/${currentPost.slug}`,
          image: currentPost.heroImage.webp ?? currentPost.heroImage.fallback,
          type: "article",
        });

        injectJsonLd("ehablog-post", buildBlogPostingJson(currentPost));
        injectJsonLd("ehablog-breadcrumbs", buildBreadcrumbList(currentPost));
      } catch (error) {
        console.error("Unable to resolve blog post", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    })();

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      isMounted = false;
      injectJsonLd("ehablog-post");
      injectJsonLd("ehablog-breadcrumbs");
    };
  }, [slug, navigate]);

  const citationItems = useMemo(() => {
    if (!post) {
      return [];
    }

    return post.citations.filter(({ href }) => Boolean(href));
  }, [post]);

  if (loading) {
    return (
      <main className="blog-simple-page" aria-busy="true" aria-live="polite">
        <div className="blog-simple-loading" aria-hidden="true">
          <div className="blog-simple-skeleton" />
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="blog-simple-page" role="alert">
        <p className="blog-simple-empty">We couldn’t find that guide. Please return to the blog overview.</p>
        <Link to="/blog" className="blog-simple-back">
          ← Back to all guides
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f5]" id="main-content">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section - Full Width */}
      <header className="relative bg-gradient-to-br from-[#f3e8ff] via-[#fef3f2] to-[#e0f2fe] pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-[#666] hover:text-primary transition-colors mb-8 text-sm font-medium"
            >
              ← Back to Articles
            </Link>

            <div className="flex items-center gap-3 mb-6 text-sm text-[#666]">
              <span className="font-medium text-primary">Echoing Healthy Ageing</span>
              <span>•</span>
              <time dateTime={post.datePublished} itemProp="datePublished">
                {formatDisplayDate(post.datePublished)}
              </time>
              <span>•</span>
              <span>{post.readingTimeMinutes} min read</span>
            </div>

            <h1 
              id={`post-${post.slug}`}
              itemProp="headline"
              className="text-5xl md:text-6xl font-semibold leading-[1.15] mb-6 text-[#222]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {post.title}
            </h1>

            <p 
              className="text-xl md:text-2xl text-[#444] leading-[1.6] font-light mb-8"
              itemProp="description"
            >
              {post.summary}
            </p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2" aria-label="Topics">
                {post.tags.map((tag) => (
                  <span 
                    key={`${post.slug}-${tag}`}
                    className="px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#555] border border-[#e5e5e5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <article className="max-w-[720px] mx-auto px-6 py-16" itemScope itemType="https://schema.org/Article">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:leading-[1.3]
            prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-[#222] prose-h2:bg-gradient-to-r prose-h2:from-[#F6FAF9] prose-h2:to-transparent prose-h2:px-4 prose-h2:py-3 prose-h2:rounded-lg prose-h2:-ml-4
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-[#0F6F66] prose-h3:bg-[#F6FAF9] prose-h3:px-4 prose-h3:py-2 prose-h3:rounded-md prose-h3:-ml-4
            prose-p:text-[#222] prose-p:text-[1.1875rem] prose-p:leading-[1.85] prose-p:mb-8 prose-p:mt-0 prose-p:text-left
            prose-p:first-of-type:first-letter:text-5xl prose-p:first-of-type:first-letter:font-semibold prose-p:first-of-type:first-letter:text-[#35B6A6] prose-p:first-of-type:first-letter:float-left prose-p:first-of-type:first-letter:mr-2 prose-p:first-of-type:first-letter:leading-[0.9] prose-p:first-of-type:first-letter:mt-1
            prose-strong:text-[#222] prose-strong:font-semibold
            prose-em:text-[#444] prose-em:italic
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
            prose-blockquote:border-l-[3px] prose-blockquote:border-[#c4b5fd] prose-blockquote:pl-8 prose-blockquote:pr-8 prose-blockquote:py-8 prose-blockquote:my-12 prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#f3e8ff]/30 prose-blockquote:to-transparent prose-blockquote:italic prose-blockquote:text-[#555] prose-blockquote:text-xl prose-blockquote:leading-[1.85] prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-light
            prose-ul:my-8 prose-ul:space-y-3 prose-ul:list-none prose-ul:pl-0
            prose-ol:my-8 prose-ol:space-y-3
            prose-li:text-[#333] prose-li:leading-[1.85] prose-li:pl-8 prose-li:relative prose-li:mb-2
            prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.6em] prose-li:before:w-1.5 prose-li:before:h-1.5 prose-li:before:rounded-full prose-li:before:bg-primary
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-16
          "
          style={{ fontFamily: "'Inter', 'Source Sans Pro', 'Helvetica Neue', sans-serif" }}
          aria-label={`${post.title} content`}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-[#e5e5e5] to-transparent" />

        {/* Author Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-white to-[#fef3f2] rounded-2xl p-8 border border-[#e5e5e5] shadow-sm"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-semibold text-primary">
                {post.author.charAt(0)}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#222] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                About {post.author}
              </h3>
              <p className="text-[#555] leading-[1.7] mb-4">
                A dedicated healthcare professional specializing in geriatric care and dementia support, 
                committed to bringing empathy, dignity, and expertise to caregiving in Mumbai.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#666]">
                <span itemProp="author">Clinical Expert at Echoing Healthy Ageing</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-[#f3e8ff] to-[#fef3f2] rounded-2xl p-10 text-center"
        >
          <h3 className="text-3xl font-semibold text-[#222] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need Personalized Care Support?
          </h3>
          <p className="text-lg text-[#555] leading-[1.7] mb-8 max-w-2xl mx-auto">
            Our team provides compassionate, expert care for dementia, geriatric health, and home-based support across Mumbai.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </a>
            <Link
              to="/blog"
              className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-50 transition-all border border-primary/20"
            >
              Read More Articles
            </Link>
          </div>
        </motion.div>

        {/* References Section */}
        {citationItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-[#e5e5e5]"
          >
            <h2 className="text-2xl font-semibold text-[#222] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              References & Resources
            </h2>
            <ul className="space-y-4">
              {citationItems.map((citation) => (
                <li key={`${post.slug}-${citation.href}`}>
                  <a
                    href={citation.href}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                    target={citation.external ? "_blank" : undefined}
                    rel={citation.external ? "noopener noreferrer" : undefined}
                  >
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-[#555] group-hover:text-primary transition-colors">{citation.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </article>
    </main>
  );
};

export default BlogPost;
