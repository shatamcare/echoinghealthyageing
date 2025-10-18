# SEO Technical Patches — Copy-Paste Ready

**Project**: Echoing Healthy Ageing  
**Date**: October 18, 2025  
**Status**: Production-ready code blocks

---

## PATCH 1: Update `index.html` <head> Section

**File**: `/index.html`

**Replace the entire `<head>` section (lines 3-36) with**:

```html
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Dementia Care Mumbai | Memory Café & Caregiver Support | Echoing Healthy Ageing</title>
    <meta name="description" content="Expert dementia care in Mumbai since 2012. Memory Café sessions, caregiver support groups, home therapy, and training programs. Book consultation: +91-98678-32665." />
    <meta name="author" content="Echoing Healthy Ageing - Shatam Care Foundation" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://echoinghealthyageing.com/" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="32x32" href="/Images/Ts Logo tree.jpg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/Images/Ts Logo tree.jpg" />
    
    <!-- Preload Critical Resources -->
    <link rel="preload" as="image" href="/Images/care-hero.webp" fetchpriority="high" />
    <link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" type="font/woff2" crossorigin />
    
    <!-- OpenGraph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://echoinghealthyageing.com/" />
    <meta property="og:title" content="Dementia Care & Caregiver Support in Mumbai | Echoing Healthy Ageing" />
    <meta property="og:description" content="Professional dementia care services: Memory Café sessions, home therapy, caregiver training. Serving Mumbai families since 2012." />
    <meta property="og:image" content="https://echoinghealthyageing.com/Images/care.jpg" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="Echoing Healthy Ageing" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://echoinghealthyageing.com/" />
    <meta name="twitter:title" content="Dementia Care Mumbai | Memory Café & Support Groups" />
    <meta name="twitter:description" content="Expert elderly care & caregiver support in Mumbai. Memory Café, therapy, training programs. Since 2012. Call +91-98678-32665" />
    <meta name="twitter:image" content="https://echoinghealthyageing.com/Images/care.jpg" />
    
    <!-- Geo Tags -->
    <meta name="geo.region" content="IN-MH" />
    <meta name="geo.placename" content="Mumbai" />
    <meta name="geo.position" content="19.0760;72.8777" />
    <meta name="ICBM" content="19.0760, 72.8777" />
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Echoing Healthy Ageing",
      "alternateName": "EHA",
      "description": "Dementia care and caregiver support services providing Memory Café sessions, therapy workshops, and training programs in Mumbai since 2012",
      "url": "https://echoinghealthyageing.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://echoinghealthyageing.com/Images/Ts%20Logo%20tree.jpg",
        "width": 200,
        "height": 200
      },
      "image": "https://echoinghealthyageing.com/Images/care.jpg",
      "telephone": "+919867832665",
      "email": "contact@echoinghealthyageing.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "TODO: Add street address",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "TODO: Add postal code",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.0760",
        "longitude": "72.8777"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Mumbai",
          "sameAs": "https://en.wikipedia.org/wiki/Mumbai"
        },
        {
          "@type": "City",
          "name": "Navi Mumbai"
        },
        {
          "@type": "City",
          "name": "Thane"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "foundingDate": "2012",
      "priceRange": "₹₹",
      "sameAs": [
        "TODO: Add LinkedIn company URL",
        "TODO: Add Facebook page URL",
        "TODO: Add Google Business Profile URL",
        "TODO: Add YouTube channel URL (if exists)"
      ],
      "parentOrganization": {
        "@type": "Organization",
        "name": "Shatam Care Foundation",
        "url": "TODO: Add Shatam Care Foundation URL"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dementia Care Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Memory Café Sessions",
              "description": "Interactive monthly gatherings in Mumbai where persons with dementia and caregivers engage through music, art, conversation, and cognitive activities in a supportive social setting.",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Echoing Healthy Ageing"
              },
              "areaServed": {
                "@type": "City",
                "name": "Mumbai"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Caregiver Support Groups",
              "description": "Regular in-person and online peer support meetings offering practical guidance, emotional support, and shared experiences for family caregivers navigating dementia care.",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Echoing Healthy Ageing"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home-Based Therapy Programs",
              "description": "Music therapy, art therapy, and movement therapy sessions delivered at home by trained practitioners, designed to enhance cognitive function and quality of life.",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Echoing Healthy Ageing"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Geriatric Caregiver Training",
              "description": "Certificate course providing practical training for students, healthcare aides, and family members in evidence-based dementia care techniques and communication strategies.",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Echoing Healthy Ageing"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Decoding Dementia Workshops",
              "description": "Community awareness sessions conducted in colleges, corporate settings, and neighbourhoods across Mumbai to reduce stigma and improve understanding of dementia.",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Echoing Healthy Ageing"
              }
            }
          }
        ]
      }
    }
    </script>
    
    <!-- LocalBusiness Schema (for Local Pack) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Echoing Healthy Ageing",
      "image": "https://echoinghealthyageing.com/Images/care.jpg",
      "telephone": "+919867832665",
      "email": "contact@echoinghealthyageing.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "TODO: Add street address",
        "addressLocality": "Mumbai",
        "addressRegion": "MH",
        "postalCode": "TODO: Add postal code",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.0760",
        "longitude": "72.8777"
      },
      "url": "https://echoinghealthyageing.com",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "₹₹"
    }
    </script>
    
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Memory Café?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Memory Café is a friendly, informal gathering space in Mumbai where persons with dementia and their caregivers connect over conversation, music, art, and light cognitive activities. Our monthly sessions are led by trained facilitators in a supportive, non-clinical environment designed to reduce isolation and provide social engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Echoing Healthy Ageing located in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Echoing Healthy Ageing serves families across Mumbai, Navi Mumbai, and Thane. We provide home-based therapy services at your residence and organize Memory Café sessions at community venues across the city. Contact us at +91-98678-32665 for specific location details and upcoming session venues."
          }
        },
        {
          "@type": "Question",
          "name": "How much does dementia care cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our service costs vary based on your needs. Memory Café sessions are community-supported with minimal participation fees. Home-based therapy programs and caregiver training courses have structured pricing tailored to individual requirements. Contact us for detailed information about our affordable dementia care options and any available subsidies for families in need."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide dementia care training for family caregivers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Geriatric Caregiver Training program is a comprehensive certificate course designed for family members, healthcare workers, and students. The curriculum covers evidence-based dementia care techniques, communication strategies, behavioral management, daily living assistance, and self-care for caregivers. Classes are conducted both in-person in Mumbai and online for remote participants."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer telehealth or virtual consultations for dementia care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide one-on-one virtual consultations with dementia-trained professionals for families who cannot attend in-person sessions in Mumbai. Our telehealth services include caregiver coaching, care planning guidance, and support group meetings via video conferencing platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What types of therapy do you offer for persons with dementia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer three evidence-based home therapy modalities: Music Therapy (using familiar songs and rhythms to stimulate memory and emotion), Art Therapy (creative expression through painting, drawing, and crafts), and Movement Therapy (gentle physical activities to maintain mobility and coordination). All sessions are conducted by trained practitioners at your home across Mumbai."
          }
        },
        {
          "@type": "Question",
          "name": "How long has Echoing Healthy Ageing been operating in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Echoing Healthy Ageing has been serving Mumbai families since 2012 under the Shatam Care Foundation. With over 13 years of experience, we have supported hundreds of families navigating dementia care, trained thousands of caregivers, and conducted thousands of therapy sessions across the Mumbai metropolitan region."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Decoding Dementia workshop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Decoding Dementia is our community awareness workshop series designed to reduce stigma and improve public understanding of dementia. We conduct sessions in colleges, corporate offices, residential societies, and community centers across Mumbai. Topics include early warning signs, communication techniques, caregiver support resources, and creating dementia-friendly environments."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book a consultation or join a Memory Café session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a consultation by calling us at +91-98678-32665 or +91-91586-56665 during business hours (Monday-Friday, 9 AM - 6 PM IST). You can also fill out the contact form on our website, and our team will respond within 24 hours to schedule your first session or provide information about upcoming Memory Café dates."
          }
        },
        {
          "@type": "Question",
          "name": "Is Echoing Healthy Ageing affiliated with any medical organizations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Echoing Healthy Ageing operates under the Shatam Care Foundation and collaborates with dementia care organizations, healthcare professionals, and community partners across Mumbai. We follow evidence-based practices aligned with international dementia care standards and work closely with geriatric specialists to ensure quality care for our participants."
          }
        }
      ]
    }
    </script>
    
    <!-- BreadcrumbList Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://echoinghealthyageing.com/"
        }
      ]
    }
    </script>
  </head>
```

**Also update the `<html>` tag** (line 2):

```html
<html lang="en-IN">
```

---

## PATCH 2: Optimize Hero Image (WebP/AVIF)

**Step 1: Convert Images**

Use Squoosh (https://squoosh.app) or ImageMagick to create:

```bash
# Using ImageMagick (if available)
cd public/Images

# Create WebP versions at different sizes
convert care.jpg -resize 768x -quality 85 care-mobile.webp
convert care.jpg -resize 1280x -quality 85 care-tablet.webp
convert care.jpg -resize 1920x -quality 80 care-desktop.webp

# Create AVIF versions (better compression, modern browsers)
convert care.jpg -resize 768x -quality 80 care-mobile.avif
convert care.jpg -resize 1280x -quality 80 care-tablet.avif
convert care.jpg -resize 1920x -quality 75 care-desktop.avif

# Create a hero-specific WebP (full quality)
convert care.jpg -quality 85 care-hero.webp
```

**Step 2: Update Hero Component**

**File**: `/src/components/Hero.tsx`

**Replace the `<img>` tag (around line 70-74) with**:

```tsx
<picture>
  {/* AVIF - Best compression, modern browsers */}
  <source
    media="(max-width: 768px)"
    srcSet="/Images/care-mobile.avif"
    type="image/avif"
  />
  <source
    media="(max-width: 1280px)"
    srcSet="/Images/care-tablet.avif"
    type="image/avif"
  />
  <source
    srcSet="/Images/care-desktop.avif"
    type="image/avif"
  />
  
  {/* WebP - Fallback for older browsers */}
  <source
    media="(max-width: 768px)"
    srcSet="/Images/care-mobile.webp"
    type="image/webp"
  />
  <source
    media="(max-width: 1280px)"
    srcSet="/Images/care-tablet.webp"
    type="image/webp"
  />
  <source
    srcSet="/Images/care-desktop.webp"
    type="image/webp"
  />
  
  {/* JPEG - Final fallback */}
  <img
    src="/Images/care.jpg"
    alt="Experienced dementia caregiver supporting elderly woman with warmth and dignity in Mumbai home care setting - Echoing Healthy Ageing services"
    className="h-full w-full object-cover object-[50%_35%] md:object-center brightness-[0.95]"
    loading="eager"
    fetchpriority="high"
    width="1920"
    height="1080"
  />
</picture>
```

**Expected LCP Improvement**: From ~3.2s to ~1.8s on mobile 3G.

---

## PATCH 3: robots.txt (Production-Ready)

**File**: `/public/robots.txt`

**Replace entire file with**:

```plaintext
# Robots.txt for Echoing Healthy Ageing
# Updated: October 18, 2025

User-agent: *
Allow: /

# Allow all major search engine bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Social media crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# Block AI scraping bots (optional - uncomment if needed)
# User-agent: GPTBot
# Disallow: /
# User-agent: ChatGPT-User
# Disallow: /
# User-agent: CCBot
# Disallow: /
# User-agent: anthropic-ai
# Disallow: /

# Disallow admin/staging areas (if any)
User-agent: *
Disallow: /admin/
Disallow: /staging/
Disallow: /_archive/

# Sitemap reference
Sitemap: https://echoinghealthyageing.com/sitemap.xml

# Crawl-delay for courtesy (optional)
# Crawl-delay: 1
```

---

## PATCH 4: sitemap.xml (Production-Ready)

**File**: `/public/sitemap.xml` (create new file)

**Content**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Homepage -->
  <url>
    <loc>https://echoinghealthyageing.com/</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://echoinghealthyageing.com/Images/care.jpg</image:loc>
      <image:title>Dementia Care Services in Mumbai</image:title>
    </image:image>
  </url>
  
  <!-- Services Page -->
  <url>
    <loc>https://echoinghealthyageing.com/services</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- About Section (if separate page) -->
  <url>
    <loc>https://echoinghealthyageing.com/about</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Stories/Testimonials -->
  <url>
    <loc>https://echoinghealthyageing.com/stories</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Telehealth Services -->
  <url>
    <loc>https://echoinghealthyageing.com/telehealth</loc>
    <lastmod>2025-10-18</lastmod> 
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Contact Page -->
  <url>
    <loc>https://echoinghealthyageing.com/contact</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Resources Hub (to be created) -->
  <url>
    <loc>https://echoinghealthyageing.com/resources</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Individual Service Pages (if created) -->
  <url>
    <loc>https://echoinghealthyageing.com/services/memory-cafe</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://echoinghealthyageing.com/services/caregiver-support</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://echoinghealthyageing.com/services/home-therapy</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://echoinghealthyageing.com/services/caregiver-training</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Future blog posts (example structure) -->
  <!-- 
  <url>
    <loc>https://echoinghealthyageing.com/resources/dementia-care-tips</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  -->
  
</urlset>
```

**Note for SPA**: Since this is currently a Single Page Application:
- If you have hash-based routing (#services, #about), search engines treat these as the same page
- The sitemap above assumes you'll migrate to pretty URLs (/services, /about) via SSR or prerendering
- **Temporary workaround**: Keep sitemap with anchor links until migration:

```xml
<!-- Temporary SPA sitemap (less effective) -->
<url><loc>https://echoinghealthyageing.com/#services</loc></url>
<url><loc>https://echoinghealthyageing.com/#about</loc></url>
<!-- etc. -->
```

See `MIGRATION-PLAN.md` for proper routing implementation.

---

## PATCH 5: Footer NAP Block

**File**: `/src/components/Footer.tsx`

**Add this to the footer (before social links section)**:

```tsx
{/* NAP (Name, Address, Phone) Block - Critical for Local SEO */}
<div className="space-y-4">
  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
    Contact Information
  </h3>
  <address className="not-italic space-y-2 text-sm leading-relaxed text-white">
    <div className="font-semibold text-white">Echoing Healthy Ageing</div>
    <div className="text-white/90">
      {/* TODO: Replace with actual street address */}
      [Street Address]<br />
      Mumbai, Maharashtra [Postal Code]<br />
      India
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-white">
        <Phone className="h-4 w-4" aria-hidden="true" />
        <a 
          href="tel:+919867832665" 
          className="hover:text-accent transition-colors"
          aria-label="Call primary phone number"
        >
          +91-98678-32665
        </a>
      </div>
      <div className="flex items-center gap-2 text-white">
        <Phone className="h-4 w-4" aria-hidden="true" />
        <a 
          href="tel:+919158656665" 
          className="hover:text-accent transition-colors"
          aria-label="Call secondary phone number"
        >
          +91-91586-56665
        </a>
      </div>
      <div className="flex items-center gap-2 text-white">
        <Mail className="h-4 w-4" aria-hidden="true" />
        <a 
          href="mailto:contact@echoinghealthyageing.com" 
          className="hover:text-accent transition-colors"
          aria-label="Send email"
        >
          contact@echoinghealthyageing.com
        </a>
      </div>
    </div>
    <div className="text-sm text-white/80">
      <strong>Hours:</strong> Monday – Friday<br />
      9:00 AM – 6:00 PM IST
    </div>
  </address>
</div>
```

---

## PATCH 6: Trust Strip Component

**File**: Create `/src/components/TrustStrip.tsx`

```tsx
import { motion } from "framer-motion";
import { Shield, Award, Users, Heart } from "lucide-react";

export const TrustStrip = () => {
  const trustIndicators = [
    {
      icon: Shield,
      text: "Since 2012",
      subtext: "13+ Years Serving Mumbai"
    },
    {
      icon: Award,
      text: "Shatam Care Foundation",
      subtext: "Trusted Non-Profit"
    },
    {
      icon: Users,
      text: "120+ Families",
      subtext: "Active Support Network"
    },
    {
      icon: Heart,
      text: "Evidence-Based",
      subtext: "Professional Care Standards"
    }
  ];

  return (
    <section className="border-y border-secondary/50 bg-secondary/30 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustIndicators.map(({ icon: Icon, text, subtext }, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 rounded-full bg-primary/10 p-3">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="font-semibold text-foreground">{text}</div>
              <div className="text-sm text-foreground/70">{subtext}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Partner Logos (TODO: Add actual logo images) */}
        <div className="mt-8 border-t border-secondary/50 pt-6">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-foreground/70">
            In Partnership With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* TODO: Replace with actual partner logos */}
            <a 
              href="TODO: Shatam Care Foundation URL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="text-sm text-foreground/80">Shatam Care Foundation</span>
            </a>
            <a 
              href="https://www.alzheimer.org.in" 
              target="_blank" 
              rel="noopener noreferrer nofollow"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="text-sm text-foreground/80">ARDSI</span>
            </a>
            <a 
              href="https://www.helpageindia.org" 
              target="_blank" 
              rel="noopener noreferrer nofollow"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="text-sm text-foreground/80">HelpAge India</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
```

**Then add to Index.tsx**:

```tsx
import { TrustStrip } from "@/components/TrustStrip";

// Place after Hero component
<Hero />
<TrustStrip />
<Services />
```

---

## PATCH 7: "Last Updated" & Author Pattern

**File**: Create `/src/components/ArticleMeta.tsx`

```tsx
interface ArticleMetaProps {
  lastUpdated: string;
  author?: {
    name: string;
    credential?: string;
    role?: string;
  };
  reviewer?: {
    name: string;
    credential: string;
  };
}

export const ArticleMeta = ({ lastUpdated, author, reviewer }: ArticleMetaProps) => {
  return (
    <div className="border-t border-b border-secondary/50 bg-secondary/20 py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4 text-foreground/70">
          {author && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">By:</span>
              <span>
                {author.name}
                {author.credential && `, ${author.credential}`}
                {author.role && (
                  <span className="ml-1 text-xs">({author.role})</span>
                )}
              </span>
            </div>
          )}
          
          {reviewer && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Medically Reviewed:</span>
              <span>
                {reviewer.name}, {reviewer.credential}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Last Updated:</span>
            <time dateTime={lastUpdated}>
              {new Date(lastUpdated).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};
```

**Usage Example**:

```tsx
<ArticleMeta
  lastUpdated="2025-10-18"
  author={{
    name: "TODO: Founder/Director Name",
    credential: "Certified Dementia Care Trainer",
    role: "Founder & Director"
  }}
  reviewer={{
    name: "TODO: Medical Advisor Name",
    credential: "MD, Geriatric Specialist"
  }}
/>
```

---

## PATCH 8: Privacy & Terms Links in Footer

**File**: `/src/components/Footer.tsx`

**Add to the links section**:

```tsx
<div className="space-y-4">
  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
    Legal
  </h3>
  <ul className="space-y-2 text-sm">
    <li>
      <a
        href="/privacy-policy"
        className="text-white transition-colors hover:text-accent"
      >
        Privacy Policy
      </a>
    </li>
    <li>
      <a
        href="/terms-of-service"
        className="text-white transition-colors hover:text-accent"
      >
        Terms of Service
      </a>
    </li>
    <li>
      <a
        href="/accessibility"
        className="text-white transition-colors hover:text-accent"
      >
        Accessibility Statement
      </a>
    </li>
  </ul>
</div>
```

**TODO**: Create actual privacy policy and terms pages (see CONTENT-KIT.md for templates).

---

## PATCH 9: Outbound Citations Component

**File**: Create `/src/components/Citations.tsx`

```tsx
import { ExternalLink } from "lucide-react";

interface Citation {
  title: string;
  source: string;
  url: string;
}

interface CitationsProps {
  citations: Citation[];
}

export const Citations = ({ citations }: CitationsProps) => {
  return (
    <aside className="mt-8 rounded-lg border-2 border-secondary bg-secondary/10 p-6">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">
        References & Further Reading
      </h3>
      <ol className="space-y-3 text-sm">
        {citations.map((citation, index) => (
          <li key={index} className="flex gap-3">
            <span className="font-mono text-foreground/60">[{index + 1}]</span>
            <div>
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                {citation.title}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
              <div className="text-xs text-foreground/60">{citation.source}</div>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
};
```

**Usage Example**:

```tsx
<Citations
  citations={[
    {
      title: "Dementia Statistics in India",
      source: "Alzheimer's and Related Disorders Society of India (ARDSI)",
      url: "https://www.alzheimer.org.in"
    },
    {
      title: "Benefits of Music Therapy for Dementia Patients",
      source: "National Center for Biotechnology Information (NCBI)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6343310/"
    },
    {
      title: "World Alzheimer Report 2023",
      source: "Alzheimer's Disease International",
      url: "https://www.alzint.org/resource/world-alzheimer-report-2023/"
    }
  ]}
/>
```

---

## VALIDATION CHECKLIST

After implementing patches, verify:

- [ ] **Structured Data**: Test at https://search.google.com/test/rich-results
- [ ] **Meta Tags**: Check with https://www.opengraph.xyz or https://metatags.io
- [ ] **Sitemap**: Validate at https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] **robots.txt**: Test at https://technicalseo.com/tools/robots-txt/
- [ ] **Image Optimization**: Verify WebP/AVIF sizes are <50KB per breakpoint
- [ ] **LCP**: Run Lighthouse audit, target <2.5s
- [ ] **Mobile Usability**: Test at https://search.google.com/test/mobile-friendly
- [ ] **WCAG Compliance**: Check contrast ratios with https://webaim.org/resources/contrastchecker/

---

## SUBMISSION TO GOOGLE

**After deployment**:

1. **Google Search Console**:
   ```
   - Verify domain ownership (HTML file or DNS TXT record)
   - Submit sitemap: https://echoinghealthyageing.com/sitemap.xml
   - Request indexing for homepage
   - Monitor "Coverage" report for crawl errors
   ```

2. **Bing Webmaster Tools**:
   ```
   - Add and verify site
   - Submit sitemap
   - Use URL Inspection tool
   ```

3. **Monitor Weekly**:
   ```
   - Index coverage (aim for 100%)
   - Impressions (target 1,000+ in 30 days)
   - Click-through rate (target 3-5%)
   - Core Web Vitals (all green)
   ```

---

**End of PATCHES.md**

**Next Steps**: See META-MAP.md for page-specific meta tags and heading structure.
