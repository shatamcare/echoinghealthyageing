# Echoing Healthy Ageing – Premium Alzheimer's Care Landing Page

A compassionate, ADA-compliant website designed for an Alzheimer's care centre that blends trust, warmth, and clinical expertise.

---

## 🎨 Design Philosophy (2025 Redesign)

This website embodies a premium, authentic healthcare brand through:

- **Colour Palette**: Deep teal & sea blue foundation, soft greens & warm neutrals, coral/peach and muted gold accents
- **Typography**: Large, highly legible fonts (≥16px base) for accessibility, bold headings with subtle motion
- **Layout**: Mobile-first with generous white space, seamless parallax hero, and clear visual hierarchy
- **Interactions**: Fade-ins, micro-animations on CTAs, and full keyboard navigation support
- **Tone**: Calm, empathetic, dignified—featuring real caregiver-patient imagery and testimonials

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18+) & npm – [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd echoinghealthyageing

# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Dual-CTA hero with caregiver photo & stats
│   ├── Services.tsx      # Six-card service grid
│   ├── Stories.tsx       # Patient testimonials & social proof
│   ├── Telehealth.tsx    # Remote care feature spotlight
│   ├── Connect.tsx       # Contact form + chatbot placeholder
│   ├── Header.tsx        # Sticky navigation + consultation CTA
│   ├── Footer.tsx        # Links, contact info, social media
│   └── ui/               # shadcn component library
├── pages/
│   └── Index.tsx         # Main landing page orchestration
├── index.css             # Tailwind + custom design system tokens
└── main.tsx              # React entry point
```

---

## 🎯 Key Features

1. **Accessible Hero Section**
   - Real caregiver-patient photography
   - Dual CTAs: "Book Consultation" & "Call Specialist"
   - Trust stats (13 years, 100% personalised care)
   - ARIA labels, keyboard navigation, alt text

2. **Services & Stories**
   - Six care programmes (memory clinics, home care, respite, coaching)
   - Three verified testimonials with star ratings
   - High-contrast cards with hover micro-interactions

3. **Telehealth Hub**
   - Secure video care features
   - HIPAA-grade messaging
   - 24/7 triage support

4. **Contact + Chatbot Placeholder**
   - Inline contact form (mailto fallback)
   - Quick-dial & email buttons
   - "Coming Soon" AI assistant card (prepared for future integration)

---

## 🛠 Tech Stack

- **Vite** – Lightning-fast dev server & build tool
- **React 18** + **TypeScript** – Component-driven UI
- **Tailwind CSS** – Utility-first styling with custom HSL design tokens
- **shadcn/ui** – Accessible, composable components
- **Framer Motion** – Subtle scroll animations & micro-interactions
- **Lucide Icons** – Consistent, accessible iconography

---

## 🌐 Deployment

### Option 1: Lovable (Recommended)
1. Open [Lovable Project](https://lovable.dev/projects/578ea6cc-aa44-4b03-9922-6f8723668d38)
2. Click **Share → Publish**
3. Optionally connect a custom domain (Project > Settings > Domains)

### Option 2: Manual Build
```sh
npm run build       # Outputs to dist/
npm run preview     # Preview production build locally
```

Deploy `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## ♿️ Accessibility Compliance

- **WCAG 2.1 Level AA** colour contrast ratios
- All interactive elements keyboard-navigable
- ARIA landmarks, labels, and live regions
- Semantic HTML5 structure
- Tested with screen readers (NVDA, VoiceOver)

---

## 📖 Design Decisions

**Why Deep Teal & Sea Blue?**  
Medical research shows blues/greens reduce anxiety and signal trust—critical for families navigating Alzheimer's care.

**Why Coral/Peach Accents?**  
Warm accents humanise the clinical palette, reinforcing empathy and connection without overwhelming users.

**Why Generous White Space?**  
Cognitive load is reduced when information breathes; essential for older adults and stressed caregivers.

**Why Real Photography?**  
Authentic caregiver-patient imagery builds immediate credibility and avoids cartoonish healthcare tropes.

---

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-idea`)
3. Commit changes with clear messages
4. Push and open a Pull Request

---

## 📄 License

© 2025 Echoing Healthy Ageing. All rights reserved.

---

## 💬 Support

- **Email**: info@echoinghealthyageing.com  
- **Phone**: +91 98678 32665 · +91 91586 56665  
- **Hours**: Mon–Fri, 9:00 AM – 6:00 PM IST

---

Built with care in Mumbai 🇮🇳
