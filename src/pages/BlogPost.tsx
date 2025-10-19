import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { BlogPost } from "@/lib/blog";
import {
  getAllPosts,
  updatePageMetadata,
  injectJsonLd,
  buildBlogPostingJson,
  buildBreadcrumbList,
  formatDisplayDate,
  SITE_URL,
  resolveDocAssetUrl,
} from "@/lib/blog";

const buildDocViewerUrl = (docUrl: string) =>
  `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(docUrl)}`;

const BlogPost = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

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
    <main className="blog-simple-page" id="main-content">
      <Link to="/blog" className="blog-simple-back">
        ← Back to all guides
      </Link>

      <article className="blog-simple-article" itemScope itemType="https://schema.org/Article">
        <header>
          <p className="blog-eyebrow">Echoing Healthy Ageing • Mumbai</p>
          <h1 id={`post-${post.slug}`} itemProp="headline">
            {post.title}
          </h1>
          <div className="blog-simple-meta">
            <time dateTime={post.datePublished} itemProp="datePublished">
              {formatDisplayDate(post.datePublished)}
            </time>
            <span aria-hidden="true">•</span>
            <span>{post.readingTimeMinutes} min read</span>
            <span aria-hidden="true">•</span>
            <span itemProp="author">{post.author}</span>
          </div>
          <p className="blog-simple-summary" itemProp="description">
            {post.summary}
          </p>
          {post.tags.length > 0 && (
            <ul className="blog-simple-tags" aria-label="Topics">
              {post.tags.map((tag) => (
                <li key={`${post.slug}-${tag}`}>{tag}</li>
              ))}
            </ul>
          )}
        </header>

        <section className="blog-simple-viewer" aria-label={`${post.title} Word document`}>
          <iframe
            src={buildDocViewerUrl(resolveDocAssetUrl(post.sourceDoc))}
            title={`${post.title} Word document`}
            className="blog-doc-frame"
            loading="lazy"
            allowFullScreen
          />
          <p className="blog-viewer-note">
            If the preview does not load, use the download link below to open the original file.
          </p>
        </section>

        {citationItems.length > 0 && (
          <section className="blog-simple-citations" aria-labelledby="references-heading">
            <h2 id="references-heading">Referenced resources</h2>
            <ul>
              {citationItems.map((citation) => (
                <li key={`${post.slug}-${citation.href}`}>
                  <a
                    href={citation.href}
                    className="inline-link"
                    target={citation.external ? "_blank" : undefined}
                    rel={citation.external ? "noopener noreferrer" : undefined}
                  >
                    {citation.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="blog-simple-footer">
          <a href={post.sourceDoc} className="blog-simple-download" target="_blank" rel="noopener">
            Download Word document
          </a>
        </footer>
      </article>
    </main>
  );
};

export default BlogPost;
