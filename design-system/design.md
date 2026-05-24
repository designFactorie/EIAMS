# EKAM Design System

A premium, dark-mode-first design system built with Next.js, Tailwind CSS v4, and Framer Motion. Every component is hand-crafted — no external UI library. This document captures the design philosophy and technical decisions so you can replicate the aesthetic on any project.

---

## Quick Start

```bash
# Dependencies
npm install framer-motion lenis gsap clsx

# Dev dependencies
npm install -D tailwindcss@4 @tailwindcss/postcss
```

**Files to copy into your project:**

| File | Purpose |
|---|---|
| `globals.css` | Color tokens, animations, utility classes |
| `layout-example.tsx` | Font loading (Geist Sans, Geist Mono, Instrument Serif) |
| `SmoothScroll.tsx` | Lenis smooth-scroll wrapper component |
| `postcss.config.mjs` | PostCSS config for Tailwind v4 |

---

## 1. Design Philosophy

### Core Principles

1. **Dark canvas + vibrant accents** — Deep blue-black backgrounds (`#050810`) make teal/cyan accents (`#5eead4`) pop dramatically. The dark space creates a cinematic, premium feel.

2. **Generous whitespace** — Sections breathe with `140px` vertical padding. Content never feels cramped. White space *is* the design.

3. **Purposeful motion** — Every animation serves visual hierarchy. Elements fade-slide into view as you scroll. Nothing moves just to move.

4. **Glass morphism for depth** — Semi-transparent blurred surfaces create layered depth without heavy drop shadows. Feels modern and dimensional.

5. **SVG-first illustrations** — Procedural, animated SVGs instead of raster images. Resolution-independent, lightweight, and can be animated.

6. **Fluid typography** — `clamp()` values scale smoothly across all viewports. No jarring breakpoint jumps.

7. **Serif accents for editorial elegance** — Instrument Serif italic on select words creates a magazine-quality typographic contrast.

8. **Layered backgrounds** — Grain texture + grid pattern + radial glow creates atmospheric depth without any images.

### The "Feel"

The design feels like: a high-end medical journal meets a premium SaaS dashboard. It's clinical precision with warmth. The teal accent says "trust" and "innovation" simultaneously. The serif italics add soul to an otherwise technical aesthetic.

---

## 2. Color System

### Dark Mode (Default)

```
Background Layer:
  --color-bg:          #050810     Very dark blue-black (primary bg)
  --color-bg-elevated: #0a0f1c     Slightly lighter (nav, modals)
  --color-surface:     #111827     Cards, containers

Text Layer:
  --color-ink:         #f5f7fb     Primary text (off-white, not pure white)
  --color-ink-dim:     #94a3b8     Secondary text (descriptions, captions)
  --color-ink-mute:    #475569     Tertiary text (labels, disabled)

Border Layer:
  --color-border:        rgba(148, 163, 184, 0.12)    Subtle, barely visible
  --color-border-strong: rgba(148, 163, 184, 0.22)    More prominent

Accent Colors:
  --color-teal:        #5eead4     Primary accent (CTAs, highlights)
  --color-teal-bright: #2dd4bf     Teal variant (hover states)
  --color-cyan:        #67e8f9     Secondary accent (gradients)
  --color-indigo:      #818cf8     Tertiary accent (gradients)
  --color-silver:      #cbd5e1     Neutral light accent
```

### Light Mode (`.theme-light` class)

```
  --color-bg:          #fafbfd
  --color-bg-elevated: #ffffff
  --color-surface:     #f1f5f9
  --color-ink:         #0f172a
  --color-ink-dim:     #475569
  --color-ink-mute:    #94a3b8
  --color-border:      rgba(15, 23, 42, 0.07)
  --color-border-strong: rgba(15, 23, 42, 0.14)
  --color-teal:        #0d9488
  --color-cyan:        #0891b2
  --color-indigo:      #6366f1
```

### Selection Color
```css
::selection {
  background: rgba(94, 234, 212, 0.35);
  color: #fff;
}
```

### Gradient Pairs (for feature/category differentiation)

These give each section/category a unique color identity:

| Category | Gradient |
|---|---|
| Primary | `#5eead4 → #22d3ee` (teal → cyan) |
| Secondary | `#67e8f9 → #818cf8` (cyan → indigo) |
| Tertiary | `#818cf8 → #c084fc` (indigo → purple) |
| Warm 1 | `#c084fc → #f472b6` (purple → pink) |
| Warm 2 | `#f472b6 → #fb923c` (pink → orange) |
| Warm 3 | `#fb923c → #fbbf24` (orange → amber) |

---

## 3. Typography

### Font Stack

| Font | Variable | Role |
|---|---|---|
| **Geist Sans** | `--font-geist-sans` | Headlines, body, UI — clean and modern |
| **Instrument Serif** | `--font-instrument-serif` | Italic accents on key words — editorial elegance |
| **Geist Mono** | `--font-geist-mono` | Data, stats, code — technical precision |

### Loading Fonts (Next.js)

```tsx
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
```

### Sizing Scale (Fluid)

| Element | Size | Usage |
|---|---|---|
| Hero H1 | `clamp(44px, 7.2vw, 108px)` | Main page headline |
| Section H2 | `clamp(36px, 5.2vw, 72px)` | Section titles |
| Card H3 | `clamp(28px, 2.6vw, 36px)` | Card/feature headings |
| Body | `17px – 18px` | Paragraphs |
| Small | `14px – 15px` | UI labels, captions |
| Micro | `10px – 11px` | Eyebrow badges, tags |

### Key Typography Techniques

**Tight headline tracking:**
```css
letter-spacing: -0.035em;  /* Headlines */
letter-spacing: -0.04em;   /* Large stats/numbers */
```

**Wide uppercase label tracking:**
```css
letter-spacing: 0.16em;    /* Standard labels */
letter-spacing: 0.24em;    /* Eyebrow text */
text-transform: uppercase;
font-size: 11px;
```

**Line heights:**
```
Headlines: 0.94 – 1.0  (very tight, dramatic)
Body text: 1.55 – 1.7  (generous, readable)
```

**Serif italic accent pattern:**
```html
<h2>Shaping the <span class="serif-italic text-gradient-teal">future</span> of education</h2>
```
This is the single most distinctive typographic move — mixing geometric sans-serif with an italic serif on one keyword.

---

## 4. Visual Effects

### Glass Morphism

```css
.glass {
  background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid var(--color-border);
}
```
Use on: cards, navigation, modals, tooltips, floating elements.

### Background Grain

```css
.bg-grain {
  background-image:
    radial-gradient(circle at 20% 30%, rgba(94,234,212,0.06) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(129,140,248,0.05) 0%, transparent 45%),
    radial-gradient(circle at 50% 100%, rgba(45,212,191,0.04) 0%, transparent 50%);
}
```
Creates subtle colored ambient light across the background. Apply to the outermost container.

### Background Grid

```css
.bg-grid {
  background-image:
    linear-gradient(to right, rgba(148,163,184,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148,163,184,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.4) 60%, transparent 90%);
}
```
Faint grid that fades at the edges. Layer behind content for technical depth.

### Radial Glow

```html
<div
  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-60 pointer-events-none"
  style="background: radial-gradient(circle, rgba(94,234,212,0.18) 0%, rgba(94,234,212,0.06) 30%, transparent 60%); filter: blur(20px);"
/>
```
Place behind hero sections or key content for a warm ambient glow.

### Text Gradients

```css
/* White text with fade (dark mode) */
.text-gradient {
  background: linear-gradient(180deg, #f5f7fb 0%, #f5f7fb 55%, rgba(245,247,251,0.55) 100%);
  background-clip: text;
  color: transparent;
}

/* Teal accent gradient */
.text-gradient-teal {
  background: linear-gradient(90deg, #67e8f9 0%, #5eead4 50%, #a5b4fc 100%);
  background-clip: text;
  color: transparent;
}
```

### Glowing Button

```css
.btn-glow {
  position: relative;
  isolation: isolate;
}
.btn-glow::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(94,234,212,0.5), rgba(129,140,248,0.5));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
  filter: blur(8px);
}
.btn-glow:hover::before {
  opacity: 1;
}
```

### Hairline Dividers

```html
<div class="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
```
Gradient dividers that fade at both edges — more elegant than a solid border.

---

## 5. Animation System

### Signature Easing

```ts
const ease = [0.22, 1, 0.36, 1]; // Smooth deceleration — the signature curve
```
Use this for *all* entrance animations. It starts fast, decelerates slowly. Feels natural and polished.

### Entrance Animation (Standard)

```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
>
```

### Scroll-Triggered Reveal

```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
>
```

### Staggered Group

```tsx
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.08 }}
  >
    {item}
  </motion.div>
))}
```

### Headline Word-by-Word Reveal

```tsx
function StaggerLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
```

### Scroll-Reactive Navigation

```tsx
const { scrollY } = useScroll();
const bgOpacity = useTransform(scrollY, [0, 120], [0, 1]);
const blur = useTransform(scrollY, [0, 120], [0, 20]);

// Apply to header:
style={{
  backgroundColor: useTransform(bgOpacity, (v) => `rgba(5, 8, 16, ${v * 0.7})`),
  backdropFilter: useTransform(blur, (v) => `blur(${v}px) saturate(140%)`),
}}
```

### CSS Keyframe Animations

```css
/* Gentle floating */
@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

/* Soft pulsing */
@keyframes pulse-soft {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* Background shimmer */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Infinite marquee scroll */
@keyframes marquee-left {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}
```

### Smooth Scroll (Lenis)

```tsx
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.4,
});
```

---

## 6. Layout Conventions

### Container

```html
<div class="max-w-[1440px] mx-auto px-6 lg:px-10">
```

### Section Padding

```
Hero:     pt-[180px] pb-[160px]
Sections: py-[120px] md:py-[140px]
```

### Grid Patterns

```html
<!-- 2-column stats -->
<div class="grid grid-cols-2 gap-3 md:gap-4">

<!-- 2-column cards -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

<!-- 3-column features -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
```

### Card Padding

```
Standard cards: p-7 md:p-8
Large cards:    p-8 md:p-10
```

### Navigation Height

```
Height: h-[72px]
```

---

## 7. Component Patterns

### Eyebrow Badge

```html
<div class="flex items-center gap-3">
  <span class="relative flex h-1.5 w-1.5">
    <span class="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
    <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
  </span>
  <span class="text-[11px] tracking-[0.24em] uppercase text-ink-dim font-medium">
    Label Text
  </span>
</div>
```

### Primary Button

```html
<button class="btn-glow px-6 h-12 rounded-full bg-ink text-bg text-[14.5px] font-medium tracking-wide hover:bg-teal transition-colors duration-300">
  Apply Now
</button>
```

### Secondary Button

```html
<button class="px-6 h-12 rounded-full border border-border-strong text-[14.5px] font-medium text-ink hover:border-teal/40 transition-colors duration-300">
  Learn More
</button>
```

### Section Title Pattern

```html
<div class="text-center max-w-[640px] mx-auto mb-16">
  <p class="text-[10px] tracking-[0.24em] uppercase text-teal font-medium mb-5">Section Label</p>
  <h2 class="font-display text-[clamp(36px,5.2vw,72px)] leading-[0.96] tracking-[-0.035em] font-medium text-gradient">
    Section <span class="serif-italic text-gradient-teal">headline</span>
  </h2>
  <p class="mt-6 text-[17px] leading-[1.6] text-ink-dim max-w-[48ch] mx-auto">
    Description text goes here.
  </p>
</div>
```

### Glass Card

```html
<div class="glass rounded-2xl p-7 md:p-8">
  <h3 class="text-[20px] font-medium tracking-tight mb-3">Card Title</h3>
  <p class="text-[15px] leading-[1.6] text-ink-dim">Card description.</p>
</div>
```

### Stat Block

```html
<div class="glass rounded-xl p-6">
  <div class="font-display text-[clamp(36px,4vw,56px)] tracking-[-0.04em] font-bold text-gradient">
    98<span class="text-teal">%</span>
  </div>
  <p class="text-[13px] tracking-[0.16em] uppercase text-ink-dim mt-2">Success Rate</p>
</div>
```

### Marquee (Infinite Scroll)

```html
<div class="marquee">
  <div class="marquee-track marquee-track-left" style="--marquee-duration: 80s;">
    <!-- Duplicate items 2x for seamless loop -->
    <div class="glass rounded-2xl p-6 w-[340px] shrink-0">...</div>
    <div class="glass rounded-2xl p-6 w-[340px] shrink-0">...</div>
    <!-- ... repeat all items once more ... -->
  </div>
</div>
```

---

## 8. Responsive Strategy

**Approach:** Mobile-first with Tailwind breakpoints.

| Breakpoint | Width | Typical Changes |
|---|---|---|
| Base | 0px+ | Single column, smaller type, reduced padding |
| `md:` | 768px+ | 2-column grids, larger headings |
| `lg:` | 1024px+ | 3-column grids, full-size hero, all effects |

**Key responsive patterns:**
- `clamp()` for typography (no breakpoint needed)
- `hidden md:flex` for show/hide
- `flex-col md:flex-row` for stack → row
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for progressive grids
- `px-6 lg:px-10` for horizontal breathing room

---

## 9. Accessibility

- ARIA attributes on interactive elements (`aria-expanded`, `aria-label`, `role="button"`)
- `focus-visible` styles for keyboard navigation
- Color contrast maintained (teal on dark passes WCAG AA for large text)
- Semantic HTML structure (`section`, `nav`, `h1`-`h3`, `main`)
- Reduced motion: consider adding `@media (prefers-reduced-motion)` to disable animations

---

## 10. Performance Tips

- `will-change: transform` on animated elements
- `transform3d` to trigger GPU compositing
- `viewport={{ once: true }}` on scroll animations (animate once, not every scroll)
- Lenis smooth-scroll with `requestAnimationFrame` loop
- SVGs inline in components, not as external files (no extra network requests)
- Next.js font optimization with `next/font/google`

---

## Adapting for Other Projects

### To change the accent color

Replace all occurrences of `teal` values:
- `#5eead4` (primary teal) → your accent
- `#2dd4bf` (teal bright) → your accent darker shade
- `#67e8f9` (cyan) → your accent secondary
- `rgba(94, 234, 212, ...)` → your accent in rgba

### To switch to light-mode-first

1. Swap the default color values in `@theme` with the `.theme-light` values
2. Rename `.theme-light` to `.theme-dark`
3. Adjust glass morphism opacity (higher for light backgrounds)

### To use different fonts

Replace Geist Sans with any geometric sans-serif (Inter, Satoshi, Plus Jakarta Sans). Replace Instrument Serif with any editorial serif (Playfair Display, Cormorant Garamond). The contrast between a clean sans + italic serif is what creates the effect.

### Minimum viable aesthetic

If you only copy three things:
1. The color tokens (dark bg + teal accent)
2. The serif italic accent on headings (`serif-italic text-gradient-teal`)
3. The entrance animation easing `[0.22, 1, 0.36, 1]`

These three alone will carry 70% of the design's character.
