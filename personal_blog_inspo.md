# Personal Blog Inspiration Log

A running reference of personal sites I find interesting — design breakdowns, vibe notes, and UX observations. Use this to pull inspiration when iterating on vienna.

---

## 1. manveer.xyz

**URL:** https://www.manveer.xyz
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** `#000000` background, `#FFFFFF` text. Zero accent colors (a `#005FC6` blue exists in commented-out CSS). Secondary text at `opacity: 0.25`. The restraint is intentional — the lack of color *is* the aesthetic
- **Typography:**
  - **Title:** PPPlayground Light (OTF), weight `200`, `72px` desktop / `64px` mobile
  - **Subtitle:** PPPlayground Medium (OTF), weight `400`, `32px`
  - **Body/links:** Berkeley Mono Regular (TTF), `13.3px` desktop / `12px` mobile
  - **Line-height:** `1.6` (desktop), `1.8` (mobile subtext)
- **Layout:** Flexbox column, centered. `.content` container: `max-width: 660px`, `width: 100%`, `height: 100vh` (desktop) / `auto` (mobile). `margin-top: -64px`, `padding: 4px` desktop / `0 8px` mobile
- **Spacing:** h1 `margin: 0; padding: 0`. `.translation` opacity `0.25`. `.main-subtext` margin-bottom `24px`. List items `margin-bottom: 8px`. Links `padding-bottom: 4px`
- **Signature element:** Animated orb — video (`images/orb.mp4`) on desktop, GIF (`images/orb.gif`) on mobile. Width `26%` desktop / `44%` mobile, `aspect-ratio: 1/1`, `margin-bottom: 32px`. Masked with `radial-gradient(circle, black 50%, transparent 75%)`. `pointer-events: none`
- **Responsive breakpoint:** `@media (max-width: 768px)` — switches `overflow: hidden` → `overflow: scroll`, swaps video/gif display

### Vibe & Personality
Intellectual minimalism. The site reads like a business card crossed with a philosophical statement. The name is defined in the header — "mind·brother" — which immediately signals that this person thinks carefully about identity and language. Credibility is established through name-drops (Prime Intellect, ResearchHub, Brian Armstrong, Balaji Srinivasan) rather than a portfolio of work. The overall tone is confident, understated, and slightly mysterious.

### Interactive Elements & JS Behaviors
- **Orb autoplay:** `orb.play().catch(function() {})` on load with `autoplay loop muted playsinline disablepictureinpicture disableremoteplayback` attributes
- **Visibility resume:** `document.addEventListener('visibilitychange', ...)` — resumes orb when tab regains focus
- **Link hover:** `a:hover { text-decoration: none }` — underline disappears on hover (inverse pattern)
- **Links opacity:** `.link { opacity: 0.25 }` — social links are deliberately muted
- **Media controls hidden:** `-webkit-media-controls { display: none !important }` — no video chrome visible

### UI Elements Worth Noting
- **Radial gradient mask on video** — creates a soft-edged orb effect without canvas: `mask-image: radial-gradient(circle, black 50%, transparent 75%)`
- **Opacity as hierarchy** — `0.25` for secondary text/links, no color needed
- **Video-on-desktop, GIF-on-mobile** — performance-conscious media switching
- **Berkeley Mono** — premium monospace font choice that elevates a minimal palette

### Potential Features to Steal for Vienna
- **One signature visual element** that's animated/unusual — could be an orb, a glitch effect, an ASCII animation, a looping canvas sketch
- **Radial gradient mask on media** — soft-edge masking without canvas, pure CSS
- **Name/identity framing** in the hero — defining yourself in an unexpected way rather than just a tagline
- **Opacity-based hierarchy** — using `0.25` opacity for secondary elements instead of gray
- **PPPlayground + Berkeley Mono** font pairing as a reference for warm display + technical mono

---

## 2. jakeradler.com/projects

**URL:** https://www.jakeradler.com/projects
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Monochromatic/near-monochromatic — relies on typographic hierarchy rather than color
- **Typography:** Clean, minimal sans-serif. Hierarchy through size and weight, not ornamentation
- **Layout:** Vertical project list, chronological (newest first). Simple footer nav referencing home and Twitter
- **Spacing:** Generous whitespace, deliberate breathing room between project entries
- **Effects:** None apparent — flat, static design

### Vibe & Personality
No-nonsense intellectual confidence. Projects in deep tech (antimatter, neural interfaces, nuclear) are described matter-of-factly, without marketing language. The spareness signals "I don't need to sell you on this." It reads like a technical resume that happens to live on the web.

### UX Flow
1. **Land** → name header, instantly clear this is a portfolio
2. **Scroll** → scan 4 projects listed chronologically with external links
3. **Exit** → footer links to home and social

Very fast consumption. No filtering, no tags, no categories — just a list.

### Interactive Elements
- External links to companies/projects
- Footer navigation (home, Twitter)
- No animations or hover states detected

### Structure
Multi-page site (home referenced in footer). Projects page is a simple vertical list.

### UI Elements Worth Noting
- **Zero visual chrome** — no thumbnails, no cards, no borders. Just text links with semantic hierarchy
- **Footer nav as the only navigation** — no header menu, just `[home] [twitter]` at the bottom
- **External links as the primary interaction** — the site points outward, not inward
- **Chronological ordering** without dates shown — implicit timeline through list order

### Potential Features to Steal for Vienna
- **Credentials-forward project listing** — let the work titles do the work, minimal visual chrome
- **No-thumbnail option** for experiments that are code/concept-based (vs. visual work)
- **Footer-only navigation** for minimal pages

---

## 3. nicolehsing.com

**URL:** https://nicolehsing.com
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Dark background (near-black), light text — high contrast
- **Typography:** Clean modern sans-serif for body, celestial symbols (☽ ✧ ☉) as decorative/branding elements
- **Layout:** Centered, sparse. Heavy whitespace. Single focal element with CTA
- **Signature elements:** Zodiac/moon symbols woven into the UI as both decoration and brand markers
- **Framework:** SvelteKit — suggests smooth transitions and animations

### Vibe & Personality
Sophisticated with mystical undertones. The celestial imagery signals creativity, introspection, and artistic identity. The design is poised but approachable — minimal not because of laziness but because every element is intentional. The "Enter ✧" CTA is almost ritual — you're invited in, not directed.

### UX Flow
1. **Land** → dark page, centered celestial branding, single CTA: "Enter ✧"
2. **Click** → taken to `/about` — the site reveals itself progressively
3. Encourages deliberate exploration rather than scanning

Progressive disclosure approach — the homepage is almost a loading screen/portal. Unusual and memorable.

### Interactive Elements
- SvelteKit-powered transitions (likely animated page changes)
- "Enter ✧" CTA as the only action on landing
- Probably smooth scroll/reveal animations inside

### Structure
At minimum: landing → about. Likely more pages inside.

### UI Elements Worth Noting
- **SvelteKit transitions** — framework-level page transitions (likely `fly` or `fade` Svelte transitions)
- **Celestial symbols as UI elements:** `☽` (moon), `✧` (sparkle), `☉` (sun) — used in nav, CTA, and section dividers
- **"Enter ✧" CTA** — a single interactive element on the entire landing page. The `✧` character IS the interaction affordance
- **Progressive disclosure pattern** — homepage → click → real content. Anti-pattern for SEO, great for experience
- **Dark mode as default** — no toggle, dark is the identity

### Potential Features to Steal for Vienna
- **Portal/entry landing** concept — a single full-screen moment before the site opens up
- **Symbol as brand** — picking one icon/glyph that becomes your visual signature throughout the site
- **Progressive disclosure** — hide the nav initially, reveal it after a first interaction
- **Unicode symbols as interactive elements** — `✧`, `→`, `☽` are richer than SVG icons

---

## 4. cguti.xyz

**URL:** https://cguti.xyz
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Not explicitly colorful — minimal, flat design. Custom `banner.png` logo suggests a visual identity
- **Typography:** Clean sans-serif, hierarchical headings (H1–H3). Bracketed nav links `[cguti.xyz]` `[cv]` `[books]` `[posts]` `[lists]`
- **Layout:** Simple nav bar + hub homepage. Content-forward
- **Spacing:** Generous, markdown-influenced whitespace
- **Framework:** SvelteKit

### Vibe & Personality
Intellectually curious and genuinely approachable. Carmen writes "I think a lot about..." and "Feel free to poke around" — the tone is casual and inviting without being unprofessional. This is a **personal knowledge garden** as much as a portfolio. The bracketed nav links feel slightly retro/terminal in a charming way.

### UX Flow
1. **Land** → simple nav + short bio introducing Carmen
2. **Browse** → CV, books, posts, lists — flat hierarchy, equally weighted
3. **Contact** → email front and center + social links (X, LinkedIn, GitHub, Instagram, RSS)

Hub-and-spoke model. All sections equally accessible from the top.

### Interactive Elements
- SvelteKit dynamic rendering (likely page transitions)
- RSS feed (unusual/distinctive — signals the site is actively updated)
- Email + multiple social links

### Structure
Homepage → CV / Books / Posts / Lists (+ RSS)

### UI Elements Worth Noting
- **Bracketed nav links** `[cguti.xyz] [cv] [books] [posts] [lists]` — typographic personality. We adopted this pattern for vienna's nav!
- **SvelteKit dynamic rendering** — smooth client-side navigation between pages
- **RSS feed** — XML feed signals this is a living, actively-updated site
- **Hub-and-spoke navigation** — all sections equally weighted, no hierarchy between CV/books/posts/lists
- **Custom `banner.png` logo** — visual identity without complex SVG or font-based logos
- **Markdown-influenced spacing** — the site feels like rendered markdown, generous and readable

### Potential Features to Steal for Vienna
- **Books / Currently Reading section** — easy to maintain, adds personality
- **Lists page** — curated lists of things you like (tools, music, places) are endlessly browsable
- **RSS** — add a feed for the writings section
- **Bracketed nav styling** — already stolen and implemented! `[Home] [Experiments] [Writings]...`
- **Hub-and-spoke equal weighting** — don't privilege one section over others

---

## 5. rjvir.com

**URL:** https://rjvir.com
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Neutral/monochromatic, understated. No bright accents
- **Typography:** Clean serif or sans-serif, content-first hierarchy
- **Layout:** Vertical scroll — hero → projects → press → bio → contact. No sidebar, no nav menu
- **Spacing:** Generous whitespace between clearly labeled sections
- **Effects:** None apparent — deliberately austere

### Vibe & Personality
Technical credibility with approachable confidence. Accomplishments stated plainly without hyperbole. Includes a fun project ("Hack My Facebook") alongside serious work — shows personality without sacrificing professionalism. Has Google Analytics, which signals he cares about who's visiting.

### UX Flow
1. **Land** → name + descriptor in hero
2. **Scroll** → projects (6+) → press mentions (4) → bio capsule → contact
3. **Exit** → email + social links

Implicit navigation (no menu) — vertical scrolling through categorical sections. Clean and scannable.

### Interactive Elements
- Clickable project titles and press outlets (external links)
- Email and social media links in footer
- No animations detected

### Structure
Single page with sections: hero / projects / press / bio / contact

### UI Elements Worth Noting
- **Google Analytics (UA-18115656-2)** — async loading, tracks visitor behavior
- **Single-page scroll architecture** — no router, just anchor sections (hero / projects / press / bio / contact)
- **Implicit navigation** — no visible nav menu; the page IS the navigation via scrolling
- **External links as primary CTAs** — project titles link outward, not to detail pages
- **Press logos/mentions inline** — social proof integrated into the flow, not a separate testimonials page
- **Fun project mixed with serious** — "Hack My Facebook" next to enterprise work prevents the site from feeling stiff

### Potential Features to Steal for Vienna
- **Press / Featured In section** — if you've been mentioned anywhere, display it
- **Short bio capsule** — a 2–3 line summary of yourself placed before the contact section
- **Fun project interspersed** — prevents a portfolio from feeling too corporate

---

## 6. yashgodiwala.com/About

**URL:** https://yashgodiwala.com/About
**Logged:** 2026-03-31

### Visual Design
- **Color palette:**
  - Primary background: `#f1f0ec` (warm off-white)
  - Text: `#1a1918` (near-black, warm)
  - Text overlay light: `rgba(255,255,255,0.75)`
  - Text overlay inactive: `rgba(255,255,255,0.4)`
  - Quick view overlay: `rgba(0,0,0,0.8)`
  - Icon stroke: `rgba(0,0,0,0.6)`
  - Loading spinner: `#ccc`
  - Opacity scale: `rgba(0,0,0,0.003)`, `0.04`, `0.09`, `0.2` for subtle layering
- **Typography:**
  - **Primary:** Monument Grotesk Variable (weights: 200, 240, 400, 600, 700, 800)
  - **Fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
  - **Icon font:** Icons (woff2, IconFont-Regular-0.9.3)
  - **Font sizes:** `10px`, `12px`, `14px`, `20px`, `60px`
  - **Font weights:** full 100–900 range available
- **Layout:**
  - Desktop sidebar: `15%` width, fixed position
  - Content area: `70%` width
  - Mobile: `100%` width, sidebar becomes top nav
  - Main margin: `1rem` all sides, content margin `5%`
  - 12-column responsive grid system
  - Gutter range: `0.5rem` to `10rem`
- **Effects:**
  - Arrow fade: `333ms cubic-bezier(0.4, 0, 0.22, 1)`
  - Zoom transition: `222ms cubic-bezier(0.4, 0, 0.22, 1)`
  - Loading spinner: `12s infinite ease-out`
  - Pulse fade-in: `0.5s ease-in-out`
  - Following panel: `450ms cubic-bezier(0.24, 1, 0.29, 1)`
  - Scroll transitions: `1s ease-in-out`
  - Opacity transitions: `0.8s`

### Vibe & Personality
Intellectual minimalism done with genuine craft. The warm off-white (`#f1f0ec`) versus stark white is a meaningful choice — it's warmer, more editorial, like good paper. Navigation uses `→` arrows which add directional, guiding character. First-gen immigrant narrative on the About page adds depth and values-driven positioning.

### Interactive Elements & JS Behaviors
- **Image zoom:** `-webkit-zoom-in` / `-moz-zoom-in` cursors, native browser zoom
- **Draggable elements:** with opacity feedback
- **Portfolio filter:** active/acquired/dead companies with dynamic stat calculation
- **Reading progress bar:** scroll percentage tracking via JS
- **Slideshow navigation:** SVG arrows `36px × 36px`
- **Audio player:** flex layout, `3.3rem` button height, seekable progress bar
- **Shop button:** bottom-right fixed position
- **Marquee:** bounce and scroll behaviors with transform animations
- **Scroll-monitor integration** for viewport detection
- **Navigation state:** via `rel="history"` attributes

### UI Elements Worth Noting
- **12-column grid with `0.5rem–10rem` gutter range** — very flexible spacing system
- **`cubic-bezier(0.4, 0, 0.22, 1)`** — their signature easing, used on arrows and zoom. Feels "snappy then soft"
- **`cubic-bezier(0.24, 1, 0.29, 1)`** — following panel easing, very bouncy/organic
- **Monument Grotesk Variable** at weight `240` — unusually light weight creates editorial feel
- **`rgba(0,0,0,0.003)`** — nearly invisible overlays for subtle depth on hover
- **Multiple gallery modes:** grid, columns, freeform/montessori — each with different CSS layouts
- **Audio player embedded** — treats the site like a full publication, not just a portfolio

### Potential Features to Steal for Vienna
- **Warm off-white background** — `#f1f0ec` is almost exactly our `#f8f5f0`
- **Snappy easing:** `cubic-bezier(0.4, 0, 0.22, 1)` for interactive elements
- **Reading progress bar** for long writing pieces (already implemented!)
- **→ arrow navigation styling** — directional arrows as a typographic detail
- **Image freeform/montessori gallery** for the experiments section
- **Nearly-invisible opacity overlays** (`rgba 0.003–0.04`) for subtle hover depth

---

## 7. sdan.io

**URL:** https://sdan.io
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Theme-aware — light mode (white/off-white bg, dark text) and dark mode (dark bg, light text). Sepia-toned hero imagery (`herojourneysepia.jpeg`) as a signature accent
- **Typography:** System UI fonts (`system-ui, Segoe UI, Roboto, Helvetica`) — performance-first, no custom fonts. Clean and readable
- **Layout:** Card-based sections for writing, projects, photos. Hero with profile image
- **Effects:** Theme switcher (localStorage), video autoplay on project cards (MP4 + GIFs), Next.js image optimization

### Vibe & Personality
Hacker-researcher-founder hybrid. Technical but warm. The writing section covers AI/AGI with philosophical angles, the projects section is massive (100+ items) but not overwhelming because each entry is small and punchy. Project descriptions are irreverent: "Subway surfers on VSCode", "Scroll Wikipedia like TikTok". Balances ambition with accessibility.

### UX Flow
1. **Land** → hero with bio, sepia image sets a warm tone
2. **Scan** → writing highlights (5 posts), projects grid, photo gallery
3. **Explore** → click into individual projects (each has its own page with media gallery)
4. **Search** → blog has a query-based search function

Clear top-to-bottom narrative. No sidebar. Writing and projects co-equal.

### Interactive Elements & Technical Details
- **Theme system:** `data-theme` attribute on DOM, persisted in `localStorage`. Light/dark toggle
- **Font stack:** `system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` + `"Apple Color Emoji", "Segoe UI Emoji"` — performance-first, zero custom fonts
- **Font sizes:** `24px` headings, `14px` secondary text. Weights `400` and `500`
- **Border styling:** `1px solid rgba(255,255,255,0.3)` dark mode / `rgba(0,0,0,0.3)` light mode
- **Layout:** Flexbox-based, full viewport (`100vh`) sections, centered alignment
- **Framework:** Next.js with CSS Modules
- **Schema markup:** JSON-LD for Organization, WebSite, Person, CollectionPage, ProfilePage
- **Autoplay MP4 and GIF demos** on project cards
- **Blog search** (`?query=` param) — full-text search across writing
- **Photography gallery** embedded inline

### UI Elements Worth Noting
- **`data-theme` attribute pattern** — theme on a DOM attribute rather than class (like our `.dark`). Works well with CSS attribute selectors
- **100+ projects without clutter** — extreme density through small, punchy card entries. No thumbnails needed
- **System font stack** — deliberate choice: zero font loading = instant text render
- **JSON-LD schema markup** — SEO/structured data for Person, Organization — good practice
- **`rgba` border colors** that adapt to theme — single border definition works in both modes
- **Sepia hero image** (`herojourneysepia.jpeg`) — warm photo treatment that matches any color scheme
- **Blog search with `?query=`** — rare for personal sites, signals serious content volume
- **Analytics with view counts** — tracks readership per post

### Potential Features to Steal for Vienna
- **Autoplay demos** in experiment cards (GIF or MP4) instead of static thumbnails
- **Sepia or warm-toned hero imagery** as a distinctive color accent
- **Blog/experiment search** — simple query filter if content grows
- **Timeline view** for experiments — show the evolution of work over years
- **`rgba` adaptive borders** — single border color that works in both themes via opacity
- **JSON-LD structured data** — good SEO practice for personal portfolio

---

## 8. naklecha.com/hello

**URL:** https://naklecha.com/hello
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Theme-switching — light (`#fff` bg, `#222` text) and dark (`#1e1e1e` bg, `#dadada` text). Very clean neutral schemes
- **Typography:** Minimal — likely system fonts based on the Obsidian Publish platform
- **Layout:** Knowledge-base / digital garden style (Obsidian Publish)
- **Effects:** CSS rotate animation (possibly for loading states). `padding: 20px` spacing throughout

### Vibe & Personality
Conversational and open. "Chat with me!" as the page title is an invitation, not a portfolio pitch. Built on Obsidian Publish signals that the creator thinks in interconnected notes — a digital garden rather than a curated portfolio. Feels like you're browsing someone's actual thoughts rather than their professional facade.

### UX Flow
- Built on Obsidian Publish — graph-like navigation where pages link to each other
- Entry point: the `/hello` page as a welcoming intro
- Likely has many interconnected notes/pages discoverable by following links

Non-linear UX — you follow links of interest rather than a prescribed path.

### Interactive Elements
- Theme switcher (localStorage persisted)
- CSS rotate animation
- Obsidian-style backlinks and page graph

### Structure
Obsidian Publish site — wiki/graph structure. "Chat with me!" as entry. Unknown depth.

### UI Elements Worth Noting
- **Theme switching:** Light (`#fff` bg, `#222` text) and dark (`#1e1e1e` bg, `#dadada` text), persisted in `localStorage`
- **CSS rotate animation** — possibly for loading states or visual accent
- **`padding: 20px` spacing throughout** — consistent, unfussy
- **Obsidian graph view** — visual representation of page connections, explorable
- **Backlinks** — automatic reverse links at the bottom of each note
- **Wiki-style `[[internal links]]`** — standard Obsidian pattern, creates a web of content
- **"/hello" as entry page** — warm framing, not `/about` or `/home`

### Potential Features to Steal for Vienna
- **"Hello" or conversational framing** for the about page instead of a formal bio
- **Non-linear exploration** — linking between writings, experiments, and about page organically
- **Digital garden philosophy** — writing doesn't have to be polished posts, can be notes and thoughts
- **Backlinks pattern** — show related experiments/writings at the bottom of each page

---

## 9. gd3.kr

**URL:** https://gd3.kr
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Dual theme (light/dark). Light: white bg, dark text. Dark: dark bg, light text. Subtle link hover states (5% opacity overlays)
- **Typography:** Helvetica/sans-serif, 14px base. Variable weights (400–700). Responsive title scaling (1.0 → 0.7 on mobile)
- **Layout:** Centered column, max-width 1030px. Fixed header with dynamic height calculation
- **Effects:** Button shadows on hover (0px 4px 10px, 22.6% opacity), 200ms ease-in-out transitions. Rounded buttons (20px radius)

### Vibe & Personality
Intellectual minimalism with philosophical undertones. Opens with the epigraph "judge not, that ye be not judged" — immediately sets a contemplative, introspective tone. Greets with "Hello friend!" — warm despite the spareness. A tension between austere visuals and personable language that feels intentional.

### UX Flow
1. **Land** → fixed sticky header, philosophical epigraph
2. **Navigate** via hamburger menu on mobile, likely inline nav on desktop
3. Smooth scroll behavior throughout (anchor-based navigation)
4. Minimal content — possibly a landing page or intentionally sparse

### Interactive Elements & Technical Details
- **Typography:** Helvetica/sans-serif, `14px` base, weights `400–700`. Title scaling: `1.0` → `0.7` on mobile
- **Layout:** Centered column, `max-width: 1030px`. Fixed header with dynamic height calculation
- **Button shadows:** `0px 4px 10px` at `22.6%` opacity on hover. `border-radius: 20px`. Transitions `200ms ease-in-out`
- **Link hovers:** 5% opacity overlay on hover state
- **Smooth scrolling** with custom easing (cubic-bezier)
- **Drawer navigation** (hamburger) with backdrop overlay on mobile
- **All button clicks and page views event-tracked** (analytics integration)
- **Image carousel:** 24 sequential WebP images (`img2.webp` through `img25.webp`)
- **Social links:** Twitter, GitHub, resume. Email: `aaryag@berkeley.edu`

### UI Elements Worth Noting
- **Button shadow on hover** — `0px 4px 10px, 22.6% opacity` creates a subtle elevation effect. The `22.6%` opacity is very specific/intentional
- **`border-radius: 20px`** on buttons — pill-shaped, softer than our `rounded-full`
- **5% opacity overlay on link hover** — nearly invisible but adds tactile feedback
- **Dynamic header height** — calculated rather than fixed, adapts to content
- **24-image WebP carousel** — heavy visual content, all optimized format
- **`200ms ease-in-out`** — their standard transition timing
- **Language selector in nav** — international audience consideration

### Potential Features to Steal for Vienna
- **Opening quote or epigraph** — a single line that sets the philosophical tone of the whole site
- **Smooth scroll with custom easing** — underrated detail that makes navigation feel premium
- **`22.6%` opacity button shadows** — very subtle elevation on hover
- **"Hello friend" or first-person warmth** as a greeting pattern

---

## 10. jared.fr

**URL:** https://jared.fr
**Logged:** 2026-03-31

*(Same analysis as gd3.kr above — both URLs resolved to the same site: Jared Madfes' portfolio)*

---

## 11. hy3na.com

**URL:** https://hy3na.com
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** `#000` primary background. Gradient overlays: `from-[#000]` to transparent (top/bottom fade). Primary accent via CSS variable (theme-defined)
- **Typography:**
  - **Font:** Adobe TypeKit (`https://use.typekit.net/udu1jyc.css`), class `font-heading`
  - **Weight:** `400` (normal) — bold without being heavy
  - **Line-height:** `1em` — very tight, compact
  - **Transform:** Uppercase throughout
  - **Responsive sizes:** `text-xl` (mobile) → `text-[2rem]` (tablet `md:`) → `text-[2.625rem]` (large `lg:`)
- **Layout:**
  - Container max-width: `1440px`
  - Nav height: `h-[90px]` mobile / `h-[120px]` desktop
  - Section heights: `h-[50dvh]` — content fills half-viewport, forcing immersion
  - Max content width: `50vw` (responsive) / `700px` (3xl screens)
- **Spacing:**
  - Horizontal: `px-4` mobile / `px-5` desktop
  - Vertical: `py-8` / `py-12`
  - Margins: `mb-4`, `mb-8`, `mt-6`, `mb-12`, `pb-8`
- **Effects:**
  - Gradient fades: `bg-gradient-to-b from-[#000]` top/bottom viewport masks
  - Loading: `animate-spin rounded-full` spinner
  - Hover underlines: `decoration-1` (mobile) / `decoration-[2px]` (desktop)
  - Underline offsets: `underline-offset-2` (mobile) / `underline-offset-4` (desktop)
  - Hover on article cards: `hover:[&_article]:border-primary`
- **Z-index layering:** Nav `z-10`, overlay `z-[9]`, skip link `z-[2000]`

### Vibe & Personality
Aggressively competitive. The tagline is "Always laugh at the competition." This is a dark, high-conviction, intensity-forward brand — not a portfolio, not a knowledge garden, a *manifesto*. The uppercase type, pure black, and blunt copy all reinforce: *no softness here*. The vibe is not about being liked — it's about being remembered.

### Interactive Elements & UI Details
- **Skip link (a11y):** Fixed positioning with `focus-visible` states — `z-[2000]`
- **Hover underlines:** Variable thickness (`decoration-1` → `decoration-[2px]`) and offset (`underline-offset-2` → `underline-offset-4`) by breakpoint
- **Gradient viewport mask:** `bg-gradient-to-b from-[#000]` at top and `to-[#000]` at bottom — content scrolls underneath while edges fade to black
- **Article card hover:** `hover:[&_article]:border-primary` — nested selector hover pattern
- **Loading spinner:** `animate-spin rounded-full` during data fetch
- **`50dvh` sections:** Modern dynamic viewport units for immersive content blocks
- **`1em` line-height on headings** — unusually tight, creates visual density

### UI Elements Worth Noting
- **Gradient fade mask** is just two positioned divs with `bg-gradient-to-b` — incredibly simple CSS for a cinematic effect
- **TypeKit font loading** via external CSS — no self-hosting
- **Responsive underline thickness** — `decoration-1` → `decoration-[2px]` is a subtle but polished detail
- **`dvh` units** — modern viewport handling for mobile browsers with dynamic toolbars
- **z-index architecture:** 3 layers (content → overlay → skip link) is well-structured

### Potential Features to Steal for Vienna
- **Viewport fade mask** — gradient top/bottom on a scrollable writing section creates a premium reading experience with minimal code (already implemented in vienna as `body::before/::after`!)
- **Responsive underline thickness** — vary `text-decoration-thickness` and `underline-offset` by breakpoint
- **`50dvh` section heights** — half-viewport blocks for immersive content pacing
- **`1em` line-height** on display text for visual density
- **TypeKit integration** pattern — reference for premium font loading

---

---

## 12. p5js.org

**URL:** https://p5js.org
**Logged:** 2026-03-31
**Type:** Creative coding library — inspiration for interactive/visual features

### Visual Design
- **Color palette:** Multi-accent system via CSS variables — magenta `#f1678e`, yellow `#dfed33`, orange `#f56a3a`, green `#47b28f`, blue `#dbe3f5`. Different sections get different accent colors. Vibrant and intentional, not random
- **Typography:** "National Park" (sans-serif body) + "Courier" (monospace for code). The pairing is warm and educational — not corporate, not cold
- **Layout:** Responsive grid with 20–80px gutters. H2 scales to 3.5rem on large screens. Sections feel generous
- **Effects:** CSS spin animation (respects `prefers-reduced-motion`). Rotating community hero images (random selection on load). Sticky settings/accessibility panel that auto-hides after 2s

### Vibe & Personality
Inclusive, educational, and joyful. The mission statement — "a friendly tool for learning to code and make art" — reads through the entire design. The community hero rotates between 6 images of diverse p5.js users globally. This isn't a cold developer tool site; it's a creative commons. The multi-color accent system feels like a crayon box.

### UX Flow
1. **Land** → hero with rotating community images, "Start Coding" CTA
2. **Explore** → Reference / Tutorials / Examples / Community / About
3. **Contribute** → donation button, community links (GitHub, Discord, YouTube, Forum)

### UI Elements Worth Noting
- **Multi-accent CSS variable system:** magenta `#f1678e`, yellow `#dfed33`, orange `#f56a3a`, green `#47b28f`, blue `#dbe3f5` — assigned per-section
- **"National Park" font** (sans-serif body) + **"Courier"** (monospace code) — warm, educational pairing
- **H2 scales to `3.5rem`** on large screens — generous, confident sizing
- **Grid gutters: `20–80px`** — responsive spacing system
- **CSS spin with `prefers-reduced-motion` respect** — accessibility-first animation
- **Rotating community hero** — random selection from 6 images on each load
- **Sticky settings panel** — auto-hides after `2s`, always accessible
- **Section-specific accent colors** — each nav section has its own color identity
- **Philosophy embedded in UI** — values visible in product design, not just a manifesto

### Potential Features to Steal for Vienna
- **Section accent colors** — each section of vienna (experiments, writings, about) could have its own subtle accent color instead of one uniform theme
- **p5.js canvas sketches** as interactive hero backgrounds — generative art that responds to cursor movement
- **`prefers-reduced-motion` respect** — should add this to our animations
- **Community/colophon section** — a small "made with" or "built using" note
- **Random hero image rotation** — show different content each visit

---

## 13. altermag.com — "Kanchipuram Saris and Thinking Machines"

**URL:** https://altermag.com/articles/kanchipuram-saris-and-thinking-machines
**Logged:** 2026-03-31
**Type:** Editorial/magazine — inspiration for writing design and long-form article layout

### Visual Design
- **Color palette:** Muted purples and deep teals as primaries, white/gray for high-contrast body text. "Noisy" layered hero with text fragments and ASCII sketches that resolve into coherent visuals — mirrors the article's AI denoising metaphor
- **Typography:** "Flecha" as display/headline font (custom serif). Generous sizing and line-height throughout. Body text in clean sans-serif. Subheadings are poetic: "The Ghost in the Jacquard", "Brewing the Blue" — literary rather than functional
- **Layout:** Centered modular grid, substantial whitespace, images integrated into text flow (not floating separately). Decorative PNG borders between major sections — textile-pattern dividers that reinforce the article's subject
- **Effects:** Opening rotating animation of a female figure in a saree (`lady-rotating-anim-2.webp`). Purposeful motion, not decorative noise

### Vibe & Editorial Tone
Intellectually sophisticated but emotionally grounded. Opens with personal memoir (the author's wedding sari), then expands to systemic cultural analysis. Balances academic rigor with accessible storytelling. The design treats Indian artisanal traditions as protagonists of future innovation — not relics. Cultural depth without condescension. Reading it feels like a very good magazine.

### UX Flow
1. **Land** → animated hero (rotating figure, noisy textured background)
2. **Enter** → table of contents (6 Roman-numeral sections, hyperlinked)
3. **Read** → text and images interleaved, decorative textile borders between sections
4. **Subscribe** → mid-article CTA ("For the intellectually restless") — non-aggressive placement
5. **Exit** → full-width craftspeople poster as final image

### UI Elements Worth Noting
- **"Flecha" display/headline serif font** — custom, editorial, warm. Body text in clean sans-serif
- **Rotating hero animation** — `.webp` animated image (`lady-rotating-anim-2.webp`), purposeful motion
- **Noisy textured hero background** — layered text fragments + ASCII sketches that resolve. Mirrors the article's AI denoising metaphor — meta-design
- **Textile-pattern PNG dividers** between sections — custom borders that match the article's subject
- **Table of contents** with Roman numerals (I–VI), hyperlinked. Section titles are poetic: "The Ghost in the Jacquard", "Brewing the Blue"
- **Date format `02026-02-07`** — Long Now Foundation `0`-prefix. Signals long-horizon thinking
- **Mid-article subscribe CTA** — "For the intellectually restless" — placed non-aggressively between sections
- **Full-width craftspeople poster as final image** — ends on human dignity, not a CTA
- **Images integrated into text flow** — not floating, not in separate galleries. Inline with the prose
- **Centered modular grid** with substantial whitespace

### Potential Features to Steal for Vienna
- **Article cover animation** — a looping subtle animation for each writing piece's hero image
- **Poetic section headers** in long-form writing — don't label sections "Part 1", make them earned titles
- **Textile/thematic dividers** between sections — could use a generative SVG pattern
- **Table of contents** for longer writing pieces — improves navigation and signals serious work
- **Long Now date format** — small distinctive choice
- **Mid-article CTA** with personality ("For the intellectually restless") — could add to writings

---

## 14. animejs.com

**URL:** https://animejs.com
**Logged:** 2026-03-31
**Type:** Animation library — inspiration for interaction patterns and motion design

### Visual Design
- **Color palette:** Minimalist, dark/light contrast. Clean, no heavy accents — the animated examples provide all the visual color
- **Typography:** Clean modern sans-serif, optimized for code readability. Syntax-highlighted code blocks throughout
- **Layout:** Card-based grid with generous whitespace. Hero dominates viewport with "All-in-one animation engine" as focal point. Feature cards horizontal below
- **Effects:** The site *is* the demo — live animated examples run inline, showing rotation, staggering, SVG morphing, scroll-triggered reveals, draggable interactions

### Vibe & Personality
Professional sophistication with approachability. Confident without being aggressive. "Break free from browser limitations" — liberation framing. The code-as-content strategy (show real implementation code alongside the live demo) is educational and builds trust simultaneously.

### UI Elements Worth Noting
- **Live inline demos** — animated examples run directly in the page, not in iframes or videos
- **Code-alongside-demo pattern** — every animation shows its source code. Educational trust-building
- **Bundle size breakdown:** "24.50 KB total" with per-module sizes (Timer 5.60 KB, Animation +5.20 KB, etc.)
- **Card-based feature grid** — horizontal cards below the hero, each with a live mini-demo
- **Rotation demo, stagger demo, SVG morph demo, scroll-trigger demo, draggable demo** — all inline
- **Version selector** (v4.0.0, 3.2.2, 2.1.0) — signals maturity
- **"Break free from browser limitations"** — liberation framing, not technical framing

### Potential Features to Steal for Vienna
- **Anime.js itself** — lighter than Framer Motion for simple sequences (but we're already committed to FM)
- **Staggered entrance animations** — already implemented via StaggeredGroup.tsx!
- **Scroll-triggered animations** — already implemented via FadeInView.tsx!
- **Code-alongside-demo pattern** — could show source code for experiments inline
- **Bundle size transparency** — fun to show vienna's JS bundle size somewhere

---

## 15. matter-js (github.com/liabru/matter-js)

**URL:** https://github.com/liabru/matter-js
**Logged:** 2026-03-31
**Type:** Physics engine library — inspiration for interactive/physics-based UI features

### What it is
A 2D rigid body physics engine for the browser. Objects have mass, gravity, collision, friction, springs. You can build things that fall, bounce, stack, and tumble — all in a `<canvas>` element.

### Why it's in this log
Physics as a UI pattern is deeply fun. Imagine:
- Hero section where letters/words fall and stack under gravity when the page loads
- Experiment cards that you can drag and they collide with each other
- A "throw your name" animation where the letters scatter when you click the hero
- A background where particles bounce off the cursor

### Standout features (from the README)
- Rigid bodies, compound bodies, composite bodies
- Collision detection + events
- Constraints (springs, hinges)
- 40+ interactive demos
- Used by Google and game studios in production

### UI Elements Worth Noting
- **Canvas-based rendering** — all physics rendered to `<canvas>`, same pattern as our CursorField.tsx
- **Mouse/touch constraint** — drag objects with pointer input, physics engine handles the response
- **Gravity as a design tool** — objects fall, stack, tumble. Turns a static page into a playground
- **Collision events** — detect when objects hit each other, trigger visual/audio feedback
- **Constraints (springs, hinges)** — objects connected by invisible springs create organic, bouncy motion
- **Composite bodies** — group multiple shapes into one object (e.g., a letter made of circles)

### Potential Features to Steal for Vienna
- **Physics hero** — name/tagline letters as rigid bodies that tumble into place on load
- **Interactive card physics** — experiments page where cards can be nudged/dragged
- **Cursor-reactive particles** — already implemented in CursorField.tsx! (simpler than matter-js, but same concept)
- **Falling letters easter egg** — clicking somewhere triggers a physics drop of characters

---

## 16. threejs.org

**URL:** https://threejs.org
**Logged:** 2026-03-31
**Type:** 3D WebGL library — inspiration for ambitious visual features

### Visual Design
- **Color palette:** Dark/black background, white/light gray text. All visual interest comes from the project gallery thumbnails — 100+ colorful 3D projects create a patchwork of color on a neutral background
- **Typography:** Clean modern sans-serif, monospace for version numbers (`[r183]`). Developer-functional
- **Layout:** Vertical card-based sections by category. Two-column+ flexible grid for project showcase. Generous whitespace between sections

### Vibe & Personality
Technical minimalism with creative maximalism. The site itself is understated — but the gallery of 100+ real-world projects (NASA, Gucci, Netflix, Krunker.io, Crossy Road) does all the talking. It says: *this tool made all of that*. The community-first architecture (Discord, Forum, StackOverflow, project submissions) signals a mature, welcoming ecosystem.

### UI Elements Worth Noting
- **100+ project thumbnail gallery** — masonry/grid layout, each linked to the live project. The gallery IS the homepage content
- **Dark background, colorful thumbnails** — neutral frame lets the projects provide all color. Same approach as a museum wall
- **Category-based vertical sections** — grouped by type, two-column+ flexible grid per category
- **Monospace version numbers** `[r183]` — developer-functional aesthetic
- **"Submit Project" CTA** — community contributions drive homepage content
- **Direct GitHub link** — no friction to source code
- **Clean sans-serif + monospace pairing** — functional hierarchy

### Potential Features to Steal for Vienna
- **Three.js WebGL background** — a subtle 3D particle field or geometry in the hero is achievable and distinctive
- **Project showcase gallery** — if experiments grow enough, a masonry thumbnail wall like this would be impressive
- **Noise/perlin field** — three.js + noise can create a beautiful animated background for the hero
- **Neutral frame + colorful content** — let the experiment thumbnails/demos provide the color, keep the chrome neutral

---

## 17. Lucis — "Request an AI Summary" UI

**Source:** Screenshot shared directly
**Logged:** 2026-03-31
**Type:** UI pattern — AI model selector

### What it shows
A clean UI panel from a product called Lucis. The panel says "Request an AI summary of Lucis" and shows 5 AI model logos in a row: OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini), Perplexity, and one more. Footer: "© Lucis 2025. All rights reserved."

### Visual Design
- **Background:** Warm off-white (`#f1f0ec`-ish) — matches the yashgodiwala.com palette
- **Typography:** Clean, light-weight serif or sans-serif. Generous size
- **Icons:** AI model logos as clean black SVGs, equal size, evenly spaced in a horizontal row
- **Layout:** Centered card, minimal chrome. No borders, no shadows — just content on a warm field

### UI Elements Worth Noting
- **AI model selector row** — 5 logos (OpenAI, Anthropic, Google, Perplexity, +1) as clean black SVGs, equal size, evenly spaced horizontally
- **Warm off-white background** (`#f1f0ec`-ish) — matches yashgodiwala.com and our vienna palette
- **Centered card with zero chrome** — no borders, no shadows, no rounded corners. Just content on a warm field
- **Clean black SVG icons** — all AI model logos rendered as monochrome, unified visual language
- **Light-weight typography** — generous sizing, serif or thin sans-serif
- **"Request an AI summary"** — the feature itself is the UI innovation. Lowers barrier to long-form content

### Potential Features to Steal for Vienna
- **"Ask AI" button on writing pieces** — a subtle CTA that lets a reader get a summary or ask questions about the article
- **Warm off-white palette** — another vote for `#f1f0ec` as a background option (already implemented at `#f8f5f0`!)
- **AI model icon row** — clean horizontal icon selector pattern
- **Zero-chrome card** — no borders/shadows, just content floating on background

---

*Add new entries below as you find more sites.*
