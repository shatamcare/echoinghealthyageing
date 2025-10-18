# SPA Migration Plan — Indexability Solutions

**Project**: Echoing Healthy Ageing  
**Date**: October 18, 2025  
**Problem**: Single Page Application (SPA) limits search engine indexing  
**Solution**: Choose Option A (SSR) or Option B (Prerendering)

---

## PROBLEM STATEMENT

### Current Architecture Issues

**Stack**: Vite + React 18 + Client-Side Routing

**SEO Challenges**:
1. **Single URL**: All content lives at `echoinghealthyageing.com/` (no `/services`, `/about`, etc.)
2. **Hash Routing**: If using hash-based (#services, #about), Google treats these as same page
3. **JavaScript Required**: Content only renders after JS executes (slow for bots)
4. **No Pre-Rendered HTML**: Crawlers see empty `<div id="root"></div>`
5. **Poor Core Web Vitals**: Large initial JS bundle (473KB) delays FCP/LCP

**Impact**:
- Only homepage gets indexed properly
- Sections (#services, #stories) not treated as separate pages
- Missing out on long-tail keyword opportunities
- Lower crawl efficiency

---

## MIGRATION OPTIONS COMPARISON

| Factor | Option A: Next.js (SSR) | Option B: Prerendering (react-snap) | Current SPA |
|--------|-------------------------|-------------------------------------|-------------|
| **SEO Benefit** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐ Very Good | ⭐⭐ Poor |
| **Performance (LCP)** | ⭐⭐⭐⭐⭐ <1.5s | ⭐⭐⭐⭐ <2.0s | ⭐⭐ >3.2s |
| **Development Effort** | 🔨🔨🔨🔨 High | 🔨🔨 Medium | ✅ Done |
| **Time to Implement** | 16-24 hours | 4-6 hours | 0 hours |
| **Learning Curve** | Steep (new framework) | Moderate (config only) | None |
| **Long-Term Scalability** | Excellent | Good | Limited |
| **Dynamic Content** | Excellent | Limited | Good |
| **Hosting Cost** | Higher (Vercel/Node) | Low (static host) | Low (static host) |
| **Recommended For** | Growth-focused, blog-heavy | Quick fix, limited pages | Status quo (not recommended) |

**Recommendation**: **Option B (Prerendering)** for quick wins, **Option A (SSR)** for long-term.

---

## OPTION A: Server-Side Rendering with Next.js

### Overview

Next.js generates HTML on the server for each request, ensuring crawlers see fully-rendered content immediately.

### Benefits

✅ **SEO**:
- Each page has unique URL (`/services`, `/about`, etc.)
- Pre-rendered HTML sent to bots (instant indexing)
- Automatic sitemap generation
- Built-in metadata API

✅ **Performance**:
- Server-side rendering → faster LCP
- Automatic code splitting per route
- Image optimization built-in
- Streaming for faster TTFB

✅ **Developer Experience**:
- File-based routing (automatic route creation)
- API routes (for contact forms, etc.)
- TypeScript support
- Hot module replacement

### Migration Steps (16-24 hours)

#### Phase 1: Setup (2 hours)

```bash
# 1. Create new Next.js project alongside current Vite app
npx create-next-app@latest echoinghealthyageing-nextjs --typescript --tailwind --app

cd echoinghealthyageing-nextjs

# 2. Install additional dependencies
npm install framer-motion lucide-react
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog # ...other shadcn deps

# 3. Copy src/index.css to app/globals.css

# 4. Copy tailwind.config.ts (update paths for Next.js)
```

#### Phase 2: File Structure Migration (4 hours)

**Next.js App Router Structure**:

```
app/
├── layout.tsx           # Root layout (Header, Footer)
├── page.tsx             # Homepage (Hero, Services, Stories)
├── services/
│   └── page.tsx         # Services page
├── about/
│   └── page.tsx         # About page
├── stories/
│   └── page.tsx         # Testimonials page
├── telehealth/
│   └── page.tsx         # Telehealth page
├── contact/
│   └── page.tsx         # Contact page
├── resources/
│   └── page.tsx         # Resources hub
│   ├── [slug]/
│   │   └── page.tsx     # Dynamic blog posts
└── api/
    └── contact/
        └── route.ts     # Contact form API
components/
├── Header.tsx           # Moved from src/components
├── Footer.tsx
├── Hero.tsx
├── Services.tsx
# ... all other components
lib/
└── utils.ts
public/
└── Images/              # Static assets
```

#### Phase 3: Component Migration (6 hours)

**Convert each page**:

**Example: `app/page.tsx` (Homepage)**

```tsx
import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Stories } from '@/components/Stories';
import { Telehealth } from '@/components/Telehealth';
import { Connect } from '@/components/Connect';

export const metadata: Metadata = {
  title: 'Dementia Care Mumbai | Memory Café & Caregiver Support | Echoing Healthy Ageing',
  description: 'Expert dementia care in Mumbai since 2012. Memory Café sessions, caregiver support groups, home therapy, and training programs. Book consultation: +91-98678-32665.',
  canonical: 'https://echoinghealthyageing.com/',
  openGraph: {
    title: 'Dementia Care & Caregiver Support in Mumbai',
    description: 'Professional dementia care services: Memory Café sessions, home therapy, caregiver training.',
    url: 'https://echoinghealthyageing.com/',
    siteName: 'Echoing Healthy Ageing',
    images: [
      {
        url: 'https://echoinghealthyageing.com/Images/care.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stories />
      <Telehealth />
      <Connect />
    </>
  );
}
```

**Example: `app/services/page.tsx`**

```tsx
import { Metadata } from 'next';
import { Services } from '@/components/Services';

export const metadata: Metadata = {
  title: 'Dementia Care Services in Mumbai | Memory Café, Therapy & Training | EHA',
  description: 'Comprehensive dementia services: Memory Café sessions, home therapy (music, art, movement), caregiver training, support groups. Serving Mumbai families since 2012.',
  canonical: 'https://echoinghealthyageing.com/services',
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      {/* Add expanded content here */}
    </main>
  );
}
```

#### Phase 4: Routing Updates (2 hours)

**Convert navigation links**:

**Before (Vite/React Router)**:
```tsx
<a href="#services">Services</a>
```

**After (Next.js Link)**:
```tsx
import Link from 'next/link';

<Link href="/services">Services</Link>
```

**Update Header.tsx**:
```tsx
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Stories', href: '/stories' },
  { name: 'Telehealth', href: '/telehealth' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

// In JSX:
{navigation.map((item) => (
  <Link key={item.name} href={item.href}>
    {item.name}
  </Link>
))}
```

#### Phase 5: Image Optimization (2 hours)

**Convert `<img>` to Next.js `<Image>`**:

**Before**:
```tsx
<img src="/Images/care.jpg" alt="..." />
```

**After**:
```tsx
import Image from 'next/image';

<Image
  src="/Images/care.jpg"
  alt="Experienced caregiver supporting elderly woman"
  width={1920}
  height={1080}
  priority // For LCP image
  placeholder="blur"
  blurDataURL="data:image/..." // Auto-generated
/>
```

**Benefit**: Automatic WebP/AVIF conversion, responsive srcsets, lazy loading.

#### Phase 6: API Routes (2 hours)

**Create contact form API**:

**File**: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  // Validate inputs
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Send email (use Resend, SendGrid, or NodeMailer)
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'noreply@echoinghealthyageing.com',
  //   to: 'contact@echoinghealthyageing.com',
  //   subject: `New Contact: ${name}`,
  //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
  // });

  // For now, log to console (replace with real email service)
  console.log('Contact form submission:', { name, email, phone, message });

  return NextResponse.json({ success: true });
}
```

**Update Connect.tsx to use API**:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  } else {
    alert('Error sending message. Please try again.');
  }
};
```

#### Phase 7: Deployment (2 hours)

**Option 1: Vercel (Recommended)**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy from project root
cd echoinghealthyageing-nextjs
vercel

# 3. Follow prompts:
# - Link to existing project or create new
# - Connect GitHub repo (for auto-deploy on push)
# - Set custom domain: echoinghealthyageing.com

# 4. Environment variables (if needed)
# Add in Vercel dashboard: Settings → Environment Variables
```

**Option 2: Self-Hosted (Node.js)**

```bash
# 1. Build production app
npm run build

# 2. Start server
npm run start

# 3. Deploy to your server (DigitalOcean, AWS, etc.)
# Use PM2 for process management:
npm i -g pm2
pm2 start npm --name "eha-website" -- start
pm2 save
pm2 startup
```

---

### Post-Migration Checklist

- [ ] All pages accessible at clean URLs (/services, /about, etc.)
- [ ] Metadata unique per page
- [ ] JSON-LD schema on every page
- [ ] Sitemap auto-generated (Next.js plugin)
- [ ] Images optimized (WebP/AVIF)
- [ ] Internal links use `<Link>`
- [ ] API routes functional (contact form)
- [ ] Lighthouse score >90
- [ ] Submit new sitemap to GSC

---

### Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Breaking Changes** | High | Test thoroughly on staging first |
| **Learning Curve** | Medium | Follow Next.js docs, use AI assistant |
| **Deployment Complexity** | Medium | Use Vercel (zero config) |
| **Lost Traffic During Migration** | Low | Deploy on subdomain first, then switch DNS |

**Estimated Downtime**: 0 hours (deploy to new domain, test, switch DNS)

---

## OPTION B: Prerendering with react-snap (RECOMMENDED FOR QUICK WIN)

### Overview

Prerendering crawls your SPA after build, saves static HTML for each route, serves to bots. JavaScript still loads for interactivity.

### Benefits

✅ **SEO**:
- Pre-rendered HTML for all routes
- Crawlers see content immediately
- No server required (static hosting)

✅ **Performance**:
- Faster FCP/LCP (HTML renders before JS)
- Progressive enhancement (works without JS)

✅ **Low Effort**:
- No code rewrite needed
- Just configuration
- Works with existing Vite setup

### Limitations

⚠️ **Not Ideal For**:
- Frequently changing content (need to rebuild to update)
- Dynamic routes (blog posts with IDs)
- User-specific content

**Verdict**: Perfect for EHA (mostly static content, infrequent updates).

---

### Implementation Steps (4-6 hours)

#### Step 1: Install react-snap (15 minutes)

```bash
cd /workspaces/echoinghealthyageing

npm install --save-dev react-snap
```

#### Step 2: Update package.json (5 minutes)

**Add to `package.json`**:

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "source": "dist",
    "minifyHtml": {
      "collapseWhitespace": true,
      "removeComments": true
    },
    "puppeteerArgs": [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
    "crawl": true,
    "include": [
      "/",
      "/services",
      "/about",
      "/stories",
      "/telehealth",
      "/contact",
      "/resources"
    ],
    "skipThirdPartyRequests": true
  }
}
```

#### Step 3: Create Routes (2 hours)

**Currently**: All content on single page with anchor links (#services, #about)

**Need**: Actual routes for each section

**Install React Router** (if not already):

```bash
npm install react-router-dom
```

**Update `src/main.tsx`**:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')!
);
```

**Create `src/App.tsx` with routes**:

```tsx
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Page components
import { HomePage } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { AboutPage } from './pages/About';
import { StoriesPage } from './pages/Stories';
import { TelehealthPage } from './pages/Telehealth';
import { ContactPage } from './pages/Contact';
import { ResourcesPage } from './pages/Resources';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/telehealth" element={<TelehealthPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

**Create page files**:

**`src/pages/Home.tsx`**:
```tsx
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Stories } from '@/components/Stories';
import { Telehealth } from '@/components/Telehealth';
import { Connect } from '@/components/Connect';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stories />
      <Telehealth />
      <Connect />
    </>
  );
};
```

**`src/pages/Services.tsx`**:
```tsx
import { Services } from '@/components/Services';

export const ServicesPage = () => {
  return <Services />;
};
```

Repeat for other pages...

#### Step 4: Update Navigation Links (1 hour)

**Update `src/components/Header.tsx`**:

```tsx
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Stories', href: '/stories' },
  { name: 'Telehealth', href: '/telehealth' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

// In JSX:
{navigation.map((item) => (
  <Link key={item.name} to={item.href}>
    {item.name}
  </Link>
))}
```

#### Step 5: Add Helmet for Meta Tags (1 hour)

```bash
npm install react-helmet-async
```

**Wrap App in HelmetProvider** (`src/main.tsx`):

```tsx
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')!
);
```

**Add Helmet to each page**:

```tsx
import { Helmet } from 'react-helmet-async';

export const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Dementia Care Services in Mumbai | Memory Café, Therapy & Training | EHA</title>
        <meta name="description" content="Comprehensive dementia services: Memory Café sessions, home therapy (music, art, movement), caregiver training, support groups." />
        <link rel="canonical" href="https://echoinghealthyageing.com/services" />
      </Helmet>
      <Services />
    </>
  );
};
```

#### Step 6: Configure Vite for SPA Routing (15 minutes)

**Update `vite.config.ts`**:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          framer: ['framer-motion'],
        },
      },
    },
  },
});
```

**Add `_redirects` file for hosting** (Netlify/Vercel):

**File**: `public/_redirects`

```
/* /index.html 200
```

This ensures `/services` serves `index.html` (React Router handles routing).

#### Step 7: Build & Test (30 minutes)

```bash
# 1. Build with react-snap
npm run build

# 2. Check dist/ folder
ls -la dist/

# Should see:
# dist/
# ├── index.html (homepage pre-rendered)
# ├── services/
# │   └── index.html (services page pre-rendered)
# ├── about/
# │   └── index.html
# etc.

# 3. Test locally
npx serve dist

# 4. Open browser, view page source:
# Should see full HTML (not empty <div id="root">)
```

#### Step 8: Deploy (1 hour)

**Option 1: Netlify (Easiest)**

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Deploy
netlify deploy --prod

# 3. Set custom domain in Netlify dashboard
# 4. Add _redirects file handled automatically
```

**Option 2: GitHub Pages**

```bash
# 1. Add to package.json:
"homepage": "https://echoinghealthyageing.com",

# 2. Install gh-pages
npm i -D gh-pages

# 3. Add script:
"deploy": "npm run build && gh-pages -d dist"

# 4. Deploy
npm run deploy

# 5. Configure custom domain in GitHub repo settings
```

---

### Validation Checklist

After prerendering:

- [ ] View page source on each URL → See full HTML (not empty)
- [ ] Google Search Console → Submit sitemap, request indexing
- [ ] Check meta tags in source (title, description unique per page)
- [ ] Test with JavaScript disabled → Content still visible
- [ ] Lighthouse audit → LCP <2.5s, FCP <1.8s
- [ ] Mobile-friendly test → Pass

---

### Comparison: Before vs After Prerendering

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **HTML Size (homepage)** | 2.5KB | 45KB | +18x (full content) |
| **Indexable Pages** | 1 | 7+ | +600% |
| **FCP** | 2.8s | 1.6s | -43% |
| **LCP** | 3.4s | 2.2s | -35% |
| **Crawl Budget Used** | High | Low | Better |

---

## OPTION C: Hybrid Approach (If Budget Allows)

**Phase 1 (Week 1)**: Implement react-snap prerendering (quick win)  
**Phase 2 (Month 2-3)**: Migrate to Next.js for scalability

**Why**:
- Get SEO benefits immediately with prerendering
- Learn Next.js without deadline pressure
- Migrate when ready for blog/dynamic content

---

## DECISION MATRIX

**Choose Next.js If**:
- ✅ Planning to add blog (frequent content updates)
- ✅ Need dynamic features (user accounts, dashboards)
- ✅ Want best possible performance
- ✅ Have 16-24 hours for migration
- ✅ Comfortable with learning new framework

**Choose Prerendering If**:
- ✅ Need quick SEO fix (4-6 hours)
- ✅ Content mostly static (updates monthly, not daily)
- ✅ Want to keep current Vite setup
- ✅ Limited dev resources
- ✅ Budget constraints (free static hosting)

**Current Recommendation**: **Start with Prerendering (Option B)**, migrate to Next.js in 3-6 months if needed.

---

## TIMELINE COMPARISON

### Next.js Migration

| Week | Tasks | Hours |
|------|-------|-------|
| 1 | Setup, component migration | 8 |
| 2 | Routing, images, API routes | 8 |
| 3 | Testing, deployment, DNS | 4 |
| **Total** | | **20 hours** |

### Prerendering Implementation

| Week | Tasks | Hours |
|------|-------|-------|
| 1 | Install, routing, Helmet, build, deploy | 6 |
| **Total** | | **6 hours** |

---

**End of MIGRATION-PLAN.md**

**Next**: See CONTENT-KIT.md for FAQ schemas, blog templates, and resource outlines.
