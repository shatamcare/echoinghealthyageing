import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import {
  SITE_URL,
  buildBlogListJsonLd,
  formatDisplayDate,
  getAllPosts,
  injectJsonLd,
  resolveDocAssetUrl,
  updatePageMetadata,
} from "@/lib/blog";

const buildDocViewerUrl = (docUrl: string) =>
  `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(docUrl)}`;

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const loaded = await getAllPosts();
        if (!isMounted) {
          return;
        }

        setPosts(loaded);
        setLoading(false);

        if (loaded.length) {
          updatePageMetadata({
            title: "Echoing Healthy Ageing Blog | Dementia Care Guides",
            description:
              "Browse Word-document guides covering caregiver routines, telehealth tips, and Memory Café learnings from Mumbai.",
            canonical: `${SITE_URL}/blog`,
            image: loaded[0].heroImage.webp ?? loaded[0].heroImage.fallback,
            type: "blog",
          });

          injectJsonLd("ehablog-listing", buildBlogListJsonLd(loaded));
        }
      } catch (error) {
        console.error("Unable to load blog posts", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
      injectJsonLd("ehablog-listing");
    };
  }, []);

  return (
    <main className="blog-simple-page" id="main-content">
      <header className="blog-simple-header">
        <p className="blog-eyebrow">Echoing Healthy Ageing • Mumbai</p>
        <h1>Guides you can read or download</h1>
        <p className="blog-simple-description">
          These posts come straight from the Word documents we circulate with caregivers and partners. Read the full text below or grab the original file for your records.
        </p>
      </header>

      {loading && (
        <div className="blog-simple-loading" aria-hidden="true">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={`simple-skeleton-${index}`} className="blog-simple-skeleton" />
          ))}
        </div>
      )}

      {!loading && posts.length === 0 && (
        <p className="blog-simple-empty" role="status">
          The first set of blog documents will appear here soon.
        </p>
      )}

      {!loading && posts.length > 0 && (
        <div className="blog-simple-list" aria-live="polite">
          {posts.map((post) => (
            <article key={post.slug} className="blog-simple-article">
              <header>
                <h2 id={`post-${post.slug}`}>{post.title}</h2>
                <div className="blog-simple-meta">
                  <time dateTime={post.datePublished}>{formatDisplayDate(post.datePublished)}</time>
                  <span aria-hidden="true">•</span>
                  <span>{post.readingTimeMinutes} min read</span>
                  <span aria-hidden="true">•</span>
                  <span>{post.author}</span>
                </div>
                <p className="blog-simple-summary">{post.summary}</p>
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
                  If the preview does not load, use the button below to download and open the document.
                </p>
              </section>

              <footer className="blog-simple-footer">
                <a href={post.sourceDoc} className="blog-simple-download" target="_blank" rel="noopener">
                  Download Word document
                </a>
              </footer>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default BlogList;
