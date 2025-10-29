import { differenceInCalendarDays } from "date-fns";

export const SITE_URL = "https://echoinghealthyageing.com";
export const BLOG_TITLE = "Echoing Healthy Ageing Blog";

export interface BlogImage {
  fallback: string;
  webp?: string;
  alt: string;
}

export interface BlogCitation {
  href: string;
  label: string;
  external: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  summary: string;
  excerpt: string;
  tags: string[];
  datePublished: string;
  dateModified: string;
  readingTimeMinutes: number;
  wordCount: number;
  heroImage: BlogImage;
  contentHtml: string;
  citations: BlogCitation[];
  sourceDoc: string;
}

export interface BlogMetadataOptions {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "article" | "website" | "blog";
}

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

// Load Markdown files instead of DOCX
const markdownLoaders = import.meta.glob<string>("../blog/*.md", {
  query: "?raw",
  import: "default",
});

let postsPromise: Promise<BlogPost[]> | null = null;

const HERO_LIBRARY: Record<string, BlogImage> = {
  default: {
    fallback: "/Images/care.jpg",
    webp: "/Images/blog/care.webp",
    alt: "Caregiver supporting an older adult in Mumbai",
  },
  telehealth: {
    fallback: "/Images/hospital.jpg",
    webp: "/Images/blog/dementia-care.webp",
    alt: "Telehealth consultation with a dementia specialist",
  },
  caregiver: {
    fallback: "/Images/activities.jpg",
    webp: "/Images/blog/activities.webp",
    alt: "Caregiver guiding a dementia-friendly activity",
  },
  memoryCafe: {
    fallback: "/Images/sessions.jpg",
    webp: "/Images/blog/sessions.webp",
    alt: "Memory Café session in Mumbai",
  },
};

const ALLOWED_TAGS = new Set([
  "p",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "strong",
  "em",
  "a",
  "blockquote",
  "figure",
  "figcaption",
  "img",
  "section",
  "div",
  "span",
  "br",
]);

const ALLOWED_CLASSES = new Set([
  "lead-paragraph",
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "title", "rel", "target"]),
  img: new Set(["src", "alt", "title", "width", "height", "loading", "decoding"]),
  figure: new Set(["role"]),
  section: new Set(["aria-labelledby"]),
  div: new Set(["role"]),
};

const KEYWORD_TAG_MAP: Array<[RegExp, string]> = [
  [/telehealth|tele-health|virtual consult/i, "Telehealth"],
  [/caregiver|care-giver/i, "Caregiver Support"],
  [/memory\s*caf[eé]/i, "Memory Café"],
  [/therapy|therapist|rehab/i, "Therapy & Rehab"],
  [/mumbai|maharashtra/i, "Mumbai"],
  [/wellbeing|well-being|wellness/i, "Wellbeing"],
];

const WORDS_PER_MINUTE = 210;

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!postsPromise) {
    postsPromise = loadPosts();
  }

  const posts = await postsPromise;
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export function formatDisplayDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const prefix = path.startsWith("/") ? "" : "/";
  return `${SITE_URL}${prefix}${path}`;
}

export function resolveDocAssetUrl(path: string): string {
  if (!path) {
    return path;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (isBrowser && typeof window !== "undefined") {
    const prefix = path.startsWith("/") ? "" : "/";
    return `${window.location.origin}${prefix}${path}`;
  }

  const prefix = path.startsWith("/") ? "" : "/";
  return `${SITE_URL}${prefix}${path}`;
}

export function updatePageMetadata({
  title,
  description,
  canonical,
  image,
  type = "article",
}: BlogMetadataOptions): void {
  if (!isBrowser) {
    return;
  }

  if (title) {
    document.title = title;
    setMetaTag("property", "og:title", title);
    setMetaTag("name", "twitter:title", title);
  }

  if (description) {
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:description", description);
    setMetaTag("name", "twitter:description", description);
  }

  if (canonical) {
    let canonicalLink = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
    setMetaTag("property", "og:url", canonical);
  }

  if (image) {
    const absoluteImage = toAbsoluteUrl(image);
    setMetaTag("property", "og:image", absoluteImage);
    setMetaTag("name", "twitter:image", absoluteImage);
  }

  setMetaTag("property", "og:type", type === "website" ? "website" : "article");
}

export function injectJsonLd(scriptId: string, data?: Record<string, unknown>): void {
  if (!isBrowser) {
    return;
  }

  const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing ?? (document.createElement("script") as HTMLScriptElement);
  script.setAttribute("type", "application/ld+json");
  script.id = scriptId;
  script.textContent = JSON.stringify(data);
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function buildBlogListJsonLd(posts: BlogPost[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: BLOG_TITLE,
    url: `${SITE_URL}/blog`,
    description: "Guides, caregiver stories, and telehealth updates from Echoing Healthy Ageing in Mumbai.",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "Echoing Healthy Ageing",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Images/Ts%20Logo%20tree.jpg`,
      },
      areaServed: {
        "@type": "City",
        name: "Mumbai",
      },
    },
    blogPost: posts.slice(0, 10).map((post) => buildBlogPostingJson(post)),
  };
}

export function buildBlogPostingJson(post: BlogPost): Record<string, unknown> {
  return {
    "@type": "BlogPosting",
    url: `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.summary || post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Echoing Healthy Ageing",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Images/Ts%20Logo%20tree.jpg`,
      },
    },
    image: toAbsoluteUrl(post.heroImage.webp ?? post.heroImage.fallback),
    wordCount: post.wordCount,
    keywords: post.tags.join(", "),
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function buildBreadcrumbList(post: BlogPost): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };
}

export function generateRssFeed(posts: BlogPost[]): string {
  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.datePublished).toUTCString();
      return `    <item>\n      <title><![CDATA[${escapeXml(post.title)}]]></title>\n      <link>${link}</link>\n      <guid isPermaLink="true">${link}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description><![CDATA[${escapeXml(post.excerpt)}]]></description>\n      <category><![CDATA[${post.tags.join(", ")}]]></category>\n    </item>`;
    })
    .join("\n");

  const latestPost = posts[0];
  const lastBuildDate = latestPost ? new Date(latestPost.dateModified).toUTCString() : new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>${BLOG_TITLE}</title>\n    <link>${SITE_URL}/blog</link>\n    <description>Dementia care guides, Memory Café highlights, and telehealth support for Mumbai caregivers.</description>\n    <language>en-IN</language>\n    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n${items}\n  </channel>\n</rss>\n`;
}

export function generateBlogSitemap(posts: BlogPost[]): string {
  const sitemapEntries: Array<{
    loc: string;
    lastmod?: string;
    changefreq?: string;
    priority?: string;
  }> = [
    {
      loc: SITE_URL,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      loc: `${SITE_URL}/blog`,
      changefreq: "daily",
      priority: "0.8",
    },
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.dateModified,
      changefreq: differenceInCalendarDays(new Date(), new Date(post.dateModified)) <= 30 ? "weekly" : "monthly",
      priority: "0.6",
    })),
  ];

  const urls = sitemapEntries
    .map(({ loc, lastmod, changefreq, priority }) => {
      const lines = [
        `    <loc>${loc}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : undefined,
        changefreq ? `    <changefreq>${changefreq}</changefreq>` : undefined,
        priority ? `    <priority>${priority}</priority>` : undefined,
      ].filter(Boolean);
      return `  <url>\n${lines.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function loadPosts(): Promise<BlogPost[]> {
  if (!isBrowser) {
    return [];
  }

  const entries = Object.entries(markdownLoaders);
  const posts = await Promise.all(
    entries.map(async ([path, loader]) => {
      const slug = deriveSlugFromPath(path);
      try {
        const markdownContent = await loader();
        const post = parseMarkdownPost(markdownContent, slug);
        return post;
      } catch (error) {
        console.error(`Failed to parse blog post ${slug}`, error);
        return null;
      }
    })
  );

  const resolved = posts.filter((post): post is BlogPost => Boolean(post));

  return resolved.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

function deriveSlugFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "post";
  return filename.replace(/\.(docx|md)$/i, "");
}

function parseMarkdownPost(markdownContent: string, slug: string): BlogPost | null {
  if (!isBrowser) {
    return null;
  }

  try {
    // Split frontmatter and content
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdownContent.match(frontmatterRegex);
    
    if (!match) {
      console.error(`No frontmatter found in ${slug}`);
      return null;
    }

    const frontmatterText = match[1];
    const content = match[2];

    // Parse frontmatter
    const frontmatter: Record<string, string> = {};
    frontmatterText.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
        frontmatter[key] = value;
      }
    });

    const title = frontmatter.title || "Untitled Post";
    const author = frontmatter.author || "Echoing Healthy Ageing";
    const summary = frontmatter.summary || frontmatter.description || "";
    const datePublishedIso = frontmatter.date 
      ? parseDate(frontmatter.date) || new Date().toISOString()
      : new Date().toISOString();
    const tagsString = frontmatter.tags || "";
    const explicitTags = tagsString.split(',').map(t => t.trim()).filter(Boolean);

    // Convert markdown to HTML (improved conversion with proper paragraph spacing)
    let html = content;
    
    // First, handle block-level elements (headers, blockquotes)
    html = html
      // Headers (must be on their own line) - with serif font
      .replace(/^### (.+)$/gim, '<h3 style="font-family: \'Playfair Display\', Georgia, serif;">$1</h3>')
      .replace(/^## (.+)$/gim, '<h2 style="font-family: \'Playfair Display\', Georgia, serif;">$1</h2>')
      .replace(/^# (.+)$/gim, '<h1 style="font-family: \'Playfair Display\', Georgia, serif;">$1</h1>')
      // Blockquotes
      .replace(/^> (.+)$/gim, '<blockquote>$1</blockquote>');
    
    // Handle inline formatting
    html = html
      // Bold and italic
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      // Images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
    
    // Split into paragraphs by double line breaks
    const paragraphs = html.split(/\n\n+/).map(para => para.trim()).filter(Boolean);
    
    // Wrap non-block elements in <p> tags
    html = paragraphs.map(para => {
      // Don't wrap if already a block element
      if (para.match(/^<(h[1-6]|blockquote|img|ul|ol|li)/i)) {
        return para;
      }
      // Replace single line breaks within paragraphs with spaces (not <br>)
      const cleanPara = para.replace(/\n/g, ' ');
      return `<p>${cleanPara}</p>`;
    }).join('\n');
    
    // Clean up any empty tags
    html = html.replace(/<p>\s*<\/p>/g, '').replace(/<blockquote>\s*<\/blockquote>/g, '');

    const workingDoc = document.implementation.createHTMLDocument("Blog Post");
    const articleContainer = workingDoc.createElement("div");
    articleContainer.innerHTML = html;

    const { sanitisedHtml, citations } = sanitiseRichText(articleContainer);
    const plainText = stripHtml(sanitisedHtml);
    const wordCount = countWords(plainText);
    const excerpt = buildExcerpt(summary || plainText);
    const readingTime = Math.max(2, Math.round(wordCount / WORDS_PER_MINUTE) || 2);

    // Infer tags from content if not provided
    const inferredTags = explicitTags.length > 0 
      ? explicitTags 
      : inferTags(title, summary, Array.from(articleContainer.children) as HTMLElement[]);
    
    const heroImage = selectHeroImage(inferredTags);

    return {
      slug,
      title,
      author,
      summary,
      excerpt,
      tags: inferredTags,
      datePublished: datePublishedIso,
      dateModified: datePublishedIso,
      readingTimeMinutes: readingTime,
      wordCount,
      heroImage,
      contentHtml: sanitisedHtml,
      citations,
      sourceDoc: slug,
    };
  } catch (error) {
    console.error(`Error parsing markdown for ${slug}:`, error);
    return null;
  }
}

async function fetchDocxBuffer(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load DOCX asset: ${response.status} ${response.statusText}`);
  }

  return response.arrayBuffer();
}

async function convertDocxToHtml(buffer: ArrayBuffer): Promise<string> {
  const mammothModule = await import("mammoth/mammoth.browser");
  const mammoth = mammothModule?.default ?? mammothModule;
  const { value } = await mammoth.convertToHtml({ arrayBuffer: buffer });
  return value as string;
}

function transformDocxHtml(html: string, slug: string, sourceDocUrl: string): BlogPost | null {
  if (!isBrowser) {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const elements = Array.from(doc.body.children) as HTMLElement[];

  if (!elements.length) {
    return null;
  }

  const workingDoc = document.implementation.createHTMLDocument("Blog Post");
  const articleContainer = workingDoc.createElement("div");

  let title = "";
  let author = "Echoing Healthy Ageing";
  let summary = "";
  let datePublishedIso = new Date().toISOString();

  const bodyNodes: HTMLElement[] = [];

  for (const element of elements) {
    const text = normaliseWhitespace(element.textContent ?? "");

    if (!text) {
      continue;
    }

    if (!title) {
      title = text;
      continue;
    }

    if (text.toLowerCase().startsWith("author:")) {
      author = text.replace(/author:/i, "").trim() || author;
      continue;
    }

    if (text.toLowerCase().startsWith("date:")) {
      const rawDate = text.replace(/date:/i, "").trim();
      const parsedDate = parseDate(rawDate);
      if (parsedDate) {
        datePublishedIso = parsedDate;
      }
      continue;
    }

    if (!summary) {
      summary = text;
      continue;
    }

    bodyNodes.push(element.cloneNode(true) as HTMLElement);
  }

  if (!summary && bodyNodes.length) {
    summary = normaliseWhitespace(bodyNodes[0].textContent ?? "");
  }

  const tags = inferTags(title, summary, bodyNodes);
  const heroImage = selectHeroImage(tags);

  const leadParagraph = workingDoc.createElement("p");
  leadParagraph.className = "lead-paragraph";
  leadParagraph.textContent = summary;
  articleContainer.appendChild(leadParagraph);

  for (const node of bodyNodes) {
    articleContainer.appendChild(workingDoc.importNode(node, true));
  }

  const { sanitisedHtml, citations } = sanitiseRichText(articleContainer);
  const plainText = stripHtml(sanitisedHtml);
  const wordCount = countWords(plainText);
  const excerpt = buildExcerpt(summary || plainText);
  const readingTime = Math.max(2, Math.round(wordCount / WORDS_PER_MINUTE) || 2);

  return {
    slug,
    title,
    author,
    summary,
    excerpt,
    tags,
    datePublished: datePublishedIso,
    dateModified: datePublishedIso,
    readingTimeMinutes: readingTime,
    wordCount,
    heroImage,
    contentHtml: sanitisedHtml,
    citations,
    sourceDoc: sourceDocUrl,
  };
}

function parseDate(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const parsed = new Date(trimmed);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString();
}

function inferTags(title: string, summary: string, nodes: HTMLElement[]): string[] {
  const haystack = `${title} ${summary} ${nodes.map((node) => node.textContent ?? "").join(" ")}`;
  const deduped = new Set<string>();

  for (const [regex, tag] of KEYWORD_TAG_MAP) {
    if (regex.test(haystack)) {
      deduped.add(tag);
    }
  }

  if (!deduped.size) {
    deduped.add("Dementia Care");
  }

  return Array.from(deduped);
}

function selectHeroImage(tags: string[]): BlogImage {
  if (tags.includes("Telehealth")) {
    return HERO_LIBRARY.telehealth;
  }
  if (tags.includes("Caregiver Support")) {
    return HERO_LIBRARY.caregiver;
  }
  if (tags.includes("Memory Café")) {
    return HERO_LIBRARY.memoryCafe;
  }
  return HERO_LIBRARY.default;
}

function sanitiseRichText(fragment: HTMLElement): { sanitisedHtml: string; citations: BlogCitation[] } {
  const workDocument = document.implementation.createHTMLDocument("Sanitised Blog");
  const wrapper = workDocument.createElement("div");
  wrapper.innerHTML = fragment.innerHTML;

  const citationSet = new Set<string>();
  const walker = workDocument.createTreeWalker(wrapper, NodeFilter.SHOW_ELEMENT);
  const elementsToProcess: Element[] = [];

  while (walker.nextNode()) {
    const current = walker.currentNode as Element;
    elementsToProcess.push(current);
  }

  for (const element of elementsToProcess) {
    const tagName = element.tagName.toLowerCase();

    if (!ALLOWED_TAGS.has(tagName)) {
      unwrapElement(element);
      continue;
    }

    for (const attribute of Array.from(element.attributes)) {
      const name = attribute.name.toLowerCase();

      if (name === "class") {
        const valid = attribute.value
          .split(/\s+/)
          .map((cls) => cls.trim())
          .filter((cls) => ALLOWED_CLASSES.has(cls));

        if (valid.length) {
          element.setAttribute("class", valid.join(" "));
        } else {
          element.removeAttribute("class");
        }
        continue;
      }

      const allowedForTag = ALLOWED_ATTRS[tagName] ?? new Set<string>();
      if (!allowedForTag.has(name)) {
        element.removeAttribute(attribute.name);
        continue;
      }

      if (tagName === "a" && name === "href") {
        const hrefValue = attribute.value.trim();
        if (!hrefValue || /^javascript:/i.test(hrefValue)) {
          element.removeAttribute("href");
          continue;
        }

        const isExternal = /^https?:/i.test(hrefValue);
        if (isExternal) {
          element.setAttribute("target", "_blank");
          element.setAttribute("rel", "noopener noreferrer");
        } else {
          element.removeAttribute("target");
          element.setAttribute("rel", "noopener");
        }

        const label = normaliseWhitespace(element.textContent ?? hrefValue) || hrefValue;
        const citationKey = JSON.stringify({
          href: hrefValue,
          label,
          external: isExternal,
        });
        citationSet.add(citationKey);
      }

      if (tagName === "img") {
        if (name === "loading") {
          element.setAttribute("loading", "lazy");
        }
        if (!element.hasAttribute("decoding")) {
          element.setAttribute("decoding", "async");
        }
      }
    }

    if (tagName === "img" && !element.hasAttribute("loading")) {
      element.setAttribute("loading", "lazy");
      element.setAttribute("decoding", "async");
    }
  }

  const sanitisedHtml = wrapper.innerHTML;
  const citations = Array.from(citationSet).map((entry) => JSON.parse(entry) as BlogCitation);

  return {
    sanitisedHtml,
    citations,
  };
}

function unwrapElement(element: Element): void {
  const parent = element.parentElement;
  if (!parent) {
    element.remove();
    return;
  }

  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }
  parent.removeChild(element);
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function buildExcerpt(text: string, wordLimit = 36): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= wordLimit) {
    return words.join(" ");
  }
  return `${words.slice(0, wordLimit).join(" ")}…`;
}

function stripHtml(html: string): string {
  if (!isBrowser) {
    return html.replace(/<[^>]+>/g, " ");
  }
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return normaliseWhitespace(tmp.textContent ?? "");
}

function normaliseWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function setMetaTag(attribute: "name" | "property", key: string, value: string): void {
  if (!isBrowser) {
    return;
  }

  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}='${key}']`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
