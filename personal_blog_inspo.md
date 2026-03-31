# Personal Blog Inspiration Log

A running reference of personal sites I find interesting — design breakdowns, vibe notes, and UX observations. Use this to pull inspiration when iterating on vienna.

---

## 1. manveer.xyz

**URL:** https://www.manveer.xyz  
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** Near-pure white background, black text. Zero accent colors. The restraint is intentional — the lack of color *is* the aesthetic.
- **Typography:** Simple sans-serif stack, left-aligned. No decorative or display fonts. Body copy does all the heavy lifting.
- **Layout:** Single column, generous whitespace. No grid, no sidebar, no cards. Just text breathing on a page.
- **Spacing:** Very open — sections separated by large vertical gaps, content never feels crowded.
- **Signature element:** An animated orb GIF (`images/orb.gif`) sits near the top as the only visual decoration. It loops and auto-plays, resuming on tab visibility change. The orb is mysterious and slightly alien — it creates a strong first impression against the otherwise sparse layout.

### Vibe & Personality
Intellectual minimalism. The site reads like a business card crossed with a philosophical statement. The name is defined in the header — "mind·brother" — which immediately signals that this person thinks carefully about identity and language. Credibility is established through name-drops (Prime Intellect, ResearchHub, Brian Armstrong, Balaji Srinivasan) rather than a portfolio of work. It says: *the work speaks for itself, I don't need to show you slides.* The overall tone is confident, understated, and slightly mysterious.

### UX Flow
1. **Land** → immediately see the animated orb and the name definition — you're oriented fast
2. **Scroll** → short professional description, no nav needed
3. **Exit** → social links at the bottom, single clear CTA to connect

No navigation. No pages. No filtering. The entire site is consumed in under 60 seconds. The UX philosophy is: give the reader everything they need and nothing they don't.

### Interactive Elements
- Animated orb GIF (auto-plays, resumes on tab focus via JS)
- Social links (footer)
- Nothing else — deliberately static

### Structure
Single page. No subpages, no blog, no writing section. Just: *who I am, what I've done, how to reach me.*

### What's Distinctive
- The orb — one unusual visual element in a sea of nothing makes it incredibly memorable
- Name definition as the hero — poetic and unusual framing for a portfolio
- The extreme minimalism feels earned, not lazy — it's a statement
- No navigation is bold: trusts that a single scroll is enough

### Potential Features to Steal for Vienna
- **One signature visual element** that's animated/unusual — could be an orb, a glitch effect, an ASCII animation, a looping canvas sketch
- **Name/identity framing** in the hero — defining yourself in an unexpected way rather than just a tagline
- **Extreme restraint as a style** — if we go the opposite direction (fun/colorful) this is a useful contrast reference
- **Single-page feel for certain sections** — the about page could take notes from this flow

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

### What's Distinctive
- The content itself (antimatter, nuclear reactors) does the visual work — the design steps back
- Extreme simplicity as a statement of confidence
- No portfolio thumbnails — trusts the project names to carry weight

### Potential Features to Steal for Vienna
- **Credentials-forward project listing** — let the work titles do the work, minimal visual chrome
- **No-thumbnail option** for experiments that are code/concept-based (vs. visual work)

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

### What's Distinctive
- **Portal-style landing** — one action, no nav, no options, just "Enter"
- Celestial symbols as a unique personal brand element
- Dark minimal but with warmth from the mystical angle

### Potential Features to Steal for Vienna
- **Portal/entry landing** concept — a single full-screen moment before the site opens up
- **Symbol as brand** — picking one icon/glyph that becomes your visual signature throughout the site
- **Progressive disclosure** — hide the nav initially, reveal it after a first interaction

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

### What's Distinctive
- **Bracketed nav links** — typographic personality that feels intentional and slightly nerdy
- **Books + Lists sections** — positions the site as a knowledge/curation space, not just a portfolio
- **RSS feed** — signals this is a living site, not a static card

### Potential Features to Steal for Vienna
- **Books / Currently Reading section** — easy to maintain, adds personality
- **Lists page** — curated lists of things you like (tools, music, places) are endlessly browsable
- **RSS** — add a feed for the writings section
- **Bracketed or typographic nav styling** — small details that add character

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

### What's Distinctive
- **Press mentions as a section** — social proof through journalism, not testimonials
- **Fun project alongside serious work** — personality punctures credential-heaviness
- **Bio capsule** — compressed, pithy self-description tucked between projects and contact

### Potential Features to Steal for Vienna
- **Press / Featured In section** — if you've been mentioned anywhere, display it
- **Short bio capsule** — a 2–3 line summary of yourself placed before the contact section

---

## 6. yashgodiwala.com/About

**URL:** https://yashgodiwala.com/About
**Logged:** 2026-03-31

### Visual Design
- **Color palette:** `#f1f0ec` warm off-white background, black text. Subtle and warm — not stark white, not dark. Uses `rgba` opacity variants for secondary text
- **Typography:** Monument Grotesk Variable as primary typeface (weights n2–n10, including italics). System font fallbacks. Very typographically considered
- **Layout:** Fixed left sidebar (15% width) for desktop nav, 100% width on mobile. Content area ~70% width. Grid-based spacing system
- **Spacing:** Consistent `1rem` margins, grid-gutter utilities. Very deliberate
- **Effects:** Fade transitions (333ms cubic-bezier) on interactive elements. Image zoom (cursor: zoom-in). Draggable elements with opacity feedback

### Vibe & Personality
Intellectual minimalism done with genuine craft. The warm off-white versus stark white is a meaningful choice — it's warmer, more editorial, like good paper. The site feels like a well-designed magazine or a thoughtful book. Navigation uses `→` arrows which add directional, guiding character. First-gen immigrant narrative on the About page adds depth and values-driven positioning — rare and memorable.

### UX Flow
1. **Land** → hero with linked imagery
2. **Navigate** via fixed left sidebar: About / Work / Writing / Investments
3. **About page** → biographical content, philosophy, interests, contact openness
4. Reading progress bar on long-form content

Left-sidebar navigation is unusual for personal sites — desktop-first thinking. Mobile gets a top nav instead.

### Interactive Elements
- Image zoom (click to enlarge)
- Draggable elements with visual feedback
- Portfolio filter (active/acquired/dead companies with dynamic stat calculation)
- Reading progress bar (scroll indicator for long articles)
- Smooth fade transitions between pages (333ms cubic-bezier)
- Multiple image gallery modes: grid, columns, freeform/montessori

### Structure
About / Work / Writing (Notes) / Portfolio (Investments) / Photos

### What's Distinctive
- **Monument Grotesk Variable** — premium type choice that elevates the entire design
- **Warm off-white** background — breaks from the zinc/white binary most sites choose
- **Reading progress bar** — commits to long-form writing being a first-class experience
- **First-gen narrative** in the About page — authentic identity positioning
- **Investment portfolio with status filters** — adds a sophisticated financial/VC dimension

### Potential Features to Steal for Vienna
- **Warm off-white background** — `#f1f0ec` or similar as an alternative to stark white/dark
- **Monument Grotesk** or similarly strong variable font as a headline choice
- **Reading progress bar** for long writing pieces
- **→ arrow navigation styling** — directional arrows as a typographic detail
- **Image freeform/montessori gallery** for the experiments section

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

### Interactive Elements
- Light/dark theme toggle (persisted in localStorage)
- Autoplay MP4 and GIF demos on project cards
- Blog search (`?query=` param)
- Scroll-triggered reveals (likely)
- Photography gallery embedded inline

### Structure
Home (bio + highlights) / Blog (writing) / Projects (100+ with individual pages) / Gallery (photos)

### What's Distinctive
- **100+ projects** all displayed without clutter — extreme density done right
- **Autoplay video/GIF demos** embedded directly in project cards
- **Sepia hero image** as a warm, distinctive color choice against a neutral palette
- **Decade-spanning timeline** from 2015 hardware → 2026 AI
- **Blog search** — rare for a personal site, signals prolific writing output

### Potential Features to Steal for Vienna
- **Autoplay demos** in experiment cards (GIF or MP4) instead of static thumbnails
- **Sepia or warm-toned hero imagery** as a distinctive color accent
- **Blog/experiment search** — simple query filter if content grows
- **Timeline view** for experiments — show the evolution of work over years

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

### What's Distinctive
- **Obsidian Publish as the platform** — immediately signals a "thinking in public" philosophy
- **"/hello" as entry page** — warm, personal, anti-portfolio framing
- **Non-linear navigation** — you explore rather than browse a nav menu

### Potential Features to Steal for Vienna
- **"Hello" or conversational framing** for the about page instead of a formal bio
- **Non-linear exploration** — linking between writings, experiments, and about page organically
- **Digital garden philosophy** — writing doesn't have to be polished posts, can be notes and thoughts

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

### Interactive Elements
- Smooth scrolling with custom easing (cubic-bezier)
- Button hover states with shadow elevation
- Link underline animations
- Drawer navigation (hamburger) with backdrop overlay
- All button clicks and page views event-tracked (analytics integration)

### Structure
Uncertain from fetch — appears minimal. References "Bombadil" (possibly a project or related site). Sticky header with main links, CTAs, and language selection.

### What's Distinctive
- **Biblical epigraph as opening** — deeply personal and unusual choice for a personal site
- **"Hello friend!"** greeting — small but human detail
- **Full event tracking** on all interactions — the creator cares about analytics
- **Language selection** in nav — international audience consideration

### Potential Features to Steal for Vienna
- **Opening quote or epigraph** — a single line that sets the philosophical tone of the whole site
- **Smooth scroll with custom easing** — underrated detail that makes navigation feel premium
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
- **Color palette:** Pure black background, white text. Single high-contrast accent color for interactive elements. Gradient overlays (black at 70% opacity) fade top and bottom — creates a cinematic, immersive feel
- **Typography:** Adobe TypeKit fonts. Uppercase headings, varying sizes (xl → 2.625rem), normal font-weight — bold without being heavy. Very intentional typographic restraint
- **Layout:** Responsive grid, max-width 1440px. Mobile-first with distinct breakpoints. `50dvh` sections on mobile — content fills the viewport, forcing immersion
- **Spacing:** Generous (8–12 unit padding). Consistent vertical rhythm
- **Effects:** Top/bottom gradient fade overlays for scroll transitions. Hover underlines with variable thickness (1px mobile, 2px desktop, 2–4px offset). CSS spin animation for loading states

### Vibe & Personality
Aggressively competitive. The tagline is "Always laugh at the competition." This is a dark, high-conviction, intensity-forward brand — not a portfolio, not a knowledge garden, a *manifesto*. The uppercase type, pure black, and blunt copy all reinforce: *no softness here*. It reads like something between a sports performance brand and a war room. The vibe is not about being liked — it's about being remembered.

### UX Flow
1. **Land** → full-bleed dark experience, tagline hits immediately
2. **Scroll** → two featured posts: "War Path" and "Live To Compete"
3. **Read** → individual post pages at `/posts/[slug]`
4. Fixed gradient fades top/bottom on mobile create an immersive reading tunnel
5. Loading spinner on data fetch — signals dynamic content

Navigation is anchored/persistent header. Mobile scrolls within the viewport (gradient-masked), desktop is more static.

### Interactive Elements
- Hover underlines (variable thickness + offset by breakpoint)
- Gradient fade scroll mask (top + bottom of viewport)
- Loading spinner during data fetch
- CSS smooth transitions on all interactive elements
- 404 page with return-home CTA

### Structure
Homepage (featured posts) → individual post pages (`/posts/[slug]`). Tight, focused — not a sprawling site.

### What's Distinctive
- **Gradient viewport mask** — content scrolls underneath while the edges fade to black. Cinematic and unusual
- **Competitive manifesto tone** — the *writing* is the brand, not the design chrome
- **"Always laugh at the competition"** — a tagline that's a position, not a description
- **Uppercase type + pure black** — confidence through visual restraint and aggression simultaneously
- **Dynamic viewport units (`dvh`)** — modern, responsive-first thinking

### Potential Features to Steal for Vienna
- **Viewport fade mask** — gradient top/bottom on a scrollable writing section creates a premium reading experience with minimal code
- **Manifesto-style tagline** — replacing a descriptive tagline ("builder, writer...") with a *positional* statement
- **Uppercase section headers** — adds punch to section labels without needing a different font
- **Full-bleed dark hero** — pure black (not zinc-950) with white text for maximum contrast on the hero section

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

### What's Distinctive
- **Section-specific accent colors** — each nav section has its own color identity (yellow for reference, orange for examples, taupe for tutorials)
- **Accessibility-first sticky panel** — accessibility settings always available but non-intrusive
- **Philosophy embedded in UI** — "p5.js will not add any new features except those that increase access" — values visible in the product, not just a manifesto page
- **Community hero rotation** — 6 rotating images of real users, creates belonging

### Potential Features to Steal for Vienna
- **Section accent colors** — each section of vienna (experiments, writings, about) could have its own subtle accent color instead of one uniform theme
- **p5.js canvas sketches** as interactive hero backgrounds — generative art that responds to cursor movement is a huge vibe upgrade
- **Community/colophon section** — a small "made with" or "built using" note that shows craft

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

### What's Distinctive
- **Hero as metaphor** — the noisy/resolving background *is* the article's theme (AI denoising). Meta-design done right
- **Textile-pattern section dividers** — custom PNG borders that match the subject matter
- **Table of contents with poetic section titles** — functional navigation that reads like a poem
- **Date format `02026-02-07`** — the `0` prefix (Long Now Foundation format) signals long-horizon thinking
- **Full-width craftspeople poster as final image** — ends on human dignity, not a CTA

### Potential Features to Steal for Vienna
- **Article cover animation** — a looping subtle animation for each writing piece's hero image
- **Poetic section headers** in long-form writing — don't label sections "Part 1", make them earned titles
- **Textile/thematic dividers** between sections — could use a generative SVG pattern or simple rule styled to the post's theme
- **Table of contents** for longer writing pieces — improves navigation and signals serious work
- **Long Now date format** — small distinctive choice that signals you think on long timescales

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

### What's Distinctive
- **Bundle size breakdown** — shows "24.50 KB total" with per-module breakdown (Timer 5.60 KB, Animation +5.20 KB...). Transparency about performance
- **Code-as-content** — every demo shows the implementation. The docs teach by showing
- **Version selector** — v4.0.0, 3.2.2, 2.1.0 — signals maturity and backward compat

### Potential Features to Steal for Vienna
- **Anime.js itself** — use it for the hover emoji tooltips (idea #2), load animations (idea #1), and card interactions. Lighter than Framer Motion for simple sequences
- **Staggered entrance animations** — anime.js stagger is beautiful for grid cards loading in
- **Scroll-triggered animations** on the experiments/writings grid

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

### Potential Features to Steal for Vienna
- **Physics hero** — name/tagline letters as rigid bodies that tumble into place on load
- **Interactive card physics** — experiments page where cards can be nudged/dragged
- **Particle field** — background dots that scatter from the cursor using matter-js constraints
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

### What's Distinctive
- **Massive scrollable project gallery** — social proof through inspiration. 100+ thumbnails, all linked, all different
- **"Submit Project" CTA** — community contributions as the homepage's value proposition
- **Direct GitHub link** — no friction to the source
- **Merch store** — enough community to sell t-shirts

### Potential Features to Steal for Vienna
- **Three.js WebGL background** — a subtle 3D particle field or geometry in the hero is achievable and distinctive
- **Project showcase gallery** — if experiments grow enough, a masonry thumbnail wall like this would be impressive
- **Noise/perlin field** — three.js + noise can create a beautiful animated background for the hero that's subtle and alive

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

### What's Distinctive
The feature itself: letting a reader request an AI-generated summary of your page/article, choosing which model they want. It's a clever UX for long-form content — lowers the barrier to entry for someone who wants the gist before committing to reading. The warm off-white + clean black icons is a very refined visual choice.

### Potential Features to Steal for Vienna
- **"Ask AI" button on writing pieces** — a subtle CTA that lets a reader get a summary or ask questions about the article
- **Warm off-white palette** — this screenshot is another vote for `#f1f0ec` as a background option
- **AI model icon row** — if building any AI feature, this clean horizontal icon selector pattern is sharp

---

*Add new entries below as you find more sites.*
