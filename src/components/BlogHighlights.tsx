import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/lib/blog";
import { formatDisplayDate, getLatestPosts } from "@/lib/blog";

export const BlogHighlights = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const latest = await getLatestPosts(3);
        if (!isMounted) {
          return;
        }
        setPosts(latest);
      } catch (error) {
        console.error("Failed to load latest blog posts", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!posts.length && !loading) {
    return null;
  }

  return (
    <section className="blog-highlights" aria-labelledby="blog-highlights-heading">
      <header className="blog-highlights-header">
        <p className="blog-eyebrow">Echoing Healthy Ageing • Blog</p>
        <h2 id="blog-highlights-heading">Latest dementia care guidance</h2>
        <p className="blog-highlights-summary">
          Field-tested advice from Mumbai-based counsellors, Memory Café facilitators, and telehealth specialists to keep families supported between visits.
        </p>
      </header>
      {loading && (
        <div className="blog-simple-loading" aria-hidden="true">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={`highlight-skeleton-${index}`} className="blog-simple-skeleton" />
          ))}
        </div>
      )}

      {!loading && posts.length > 0 && (
        <div className="blog-highlights-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-highlights-item">
              <div className="blog-highlights-meta">
                <span>{formatDisplayDate(post.datePublished)}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              <h3>
                <Link to={`/blog/${post.slug}`} className="inline-link">
                  {post.title}
                </Link>
              </h3>
              <p className="blog-highlights-summary">{post.excerpt}</p>
              {post.tags.length > 0 && (
                <ul className="blog-simple-tags" aria-label="Topics">
                  {post.tags.map((tag) => (
                    <li key={`${post.slug}-${tag}`}>{tag}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}

      <div className="blog-highlights-links">
        <Link to="/blog" className="blog-simple-download">
          Browse all guides
        </Link>
        <a href="/rss.xml" className="blog-simple-download">
          RSS feed
        </a>
      </div>
    </section>
  );
};
