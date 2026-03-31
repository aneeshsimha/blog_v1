# Ideas

A running list of features and design ideas to build into vienna. Each entry includes the concept, where it lives on the site, and rough implementation notes.

---

## 1. Load Animation

**Status:** Not started  
**Where:** Site-wide, on first page load  

### Concept
Some kind of entrance animation when the page first loads — gives the site a sense of intention and craft rather than content just snapping into existence.

### Options to explore
- **Staggered fade-in** — existing Framer Motion setup already handles per-element reveals; could add a coordinated site-wide entrance sequence (nav, hero text, CTAs each animate in at offset delays)
- **Text scramble intro** — the hero name scrambles (random characters) and resolves into the real name over ~0.8s; feels hacker-y and fun
- **Curtain/wipe** — a block of color sweeps across the screen and retreats, revealing the page underneath
- **Letter-by-letter** — name types itself in, cursor blinks, then rest of page fades in
- **Minimal flash** — just a brief full-screen logo/initial before dissolving into the page (like a film production card)

### Notes
- Should only play once per visit (sessionStorage flag) — not on every navigation
- Keep it under 1.5s total or users bail
- Framer Motion `AnimatePresence` + `useEffect` + `sessionStorage` is the stack to use
- Don't block content — animate over or alongside it, not instead of it

---

## 2. Hover Emoji Tooltips on Keywords

**Status:** Not started  
**Where:** Hero tagline, bio text, about page — anywhere there are meaningful nouns  

### Concept
Certain words in the body copy have a contextual emoji that pops up smoothly on hover — like hovering over "NYC" shows 🗽, hovering over "coffee" shows ☕, hovering over "code" shows 💻. The emoji appears above the word with a smooth spring animation, then disappears when you move off.

### Examples
| Word | Emoji |
|------|-------|
| NYC / New York | 🗽 |
| coffee | ☕ |
| code / coding | 💻 |
| writing | ✍️ |
| music | 🎵 |
| running | 🏃 |
| building | 🏗️ |
| design | 🎨 |
| AI | 🤖 |
| startup | 🚀 |

### Implementation approach
- `<Tooltip>` or custom `<HoverWord>` component that wraps a `<span>`
- On hover: Framer Motion `AnimatePresence` pops the emoji in with `scale: 0 → 1` + `y: 4px → -8px` spring
- Positioned absolutely above the word, centered
- Keep the animation springy (`type: "spring", stiffness: 400, damping: 20`) so it feels alive
- The word itself could get a subtle underline/highlight on hover to signal it's interactive

### Notes
- Don't overdo it — 4–6 words max on any given page or it feels gimmicky
- Works best in the bio/about section where copy is more personal
- Could also work in the nav ("Experiments" → 🧪, "Writings" → 📝)
- Mobile: consider showing the emoji inline or skipping the interaction entirely

---

## 3. "Things I Like" / Taste Page

**Status:** Not started
**Where:** A dedicated page (e.g. `/taste` or `/likes`) or a section on the About page

### Concept
A personal taste profile — movies, music, books, hobbies, interests. Not a formal resume section, more like a window into who you are outside of work. The kind of thing that makes a stranger feel like they already know you a little.

### Sections to populate (fill these in later)

**Movies**
- [ ] Add favorites here

**Music**
- [ ] Artists/albums/playlists here — could link to a Spotify playlist

**Books**
- [ ] Could overlap with a "currently reading" or "shelf" section

**Hobbies & Interests**
- [ ] Things you do, places you go, things you're into

**Currently**
- [ ] What you're reading / watching / building / listening to right now — the most perishable section, update often

### Design options
- **Simple list** — plain text, maybe with emoji bullets. Fast to read, easy to maintain
- **Card grid** — movie posters, album art pulled from APIs (TMDB, Spotify). More visual but more maintenance
- **"Now" page** — inspired by nownownow.com convention: a single `/now` page that's a snapshot of your current moment. Update it every few weeks
- **Inline on About** — fold a "what I'm into" subsection into the existing about page rather than a separate page
- **Bento-style** — asymmetric tiles: one big movie tile, a music strip, a books stack, a hobbies note. Visually interesting

### Notes
- This kind of page is a great conversation starter — people reach out about shared taste more than shared credentials
- Keep it honest and specific — "Coppola's films" is more interesting than "movies"
- The `/now` page convention (Derek Sivers invented it) is worth reading: https://nownownow.com/about
- cguti.xyz (in inspo log) does books + lists well — worth referencing

---

## 4. Kino Slop Matrix

**Status:** Not started
**Where:** `/taste` or `/movies` page, or a section on the About page

### Concept
An interactive grid of movies — on hover, a movie poster floats up (pulled from TMDB) with a smooth spring animation. The grid itself is dense and browsable, like a taste map. "Kino" = cinema you respect. "Slop" = guilty pleasures. The matrix could sort or label along these axes.

### Visual idea
- A dense word/title grid — movie titles as text, tightly packed, no thumbnails by default
- Hover any title → poster card pops up above/beside it with a spring animation
- Poster card could show: poster image, year, a one-line personal take (optional)
- Could also do a 2-axis layout: **kino ←→ slop** on x-axis, **rewatchable ←→ one-and-done** on y-axis — movies plotted as dots or titles on a scatter chart

### Alternative layouts
- **Scatter plot** — movies as labeled dots on a kino/slop vs. rewatchable/forget-it grid. Hover for poster
- **Masonry poster wall** — grid of actual posters (no text), hover shows title + your take
- **Tier list** — S/A/B/C/D rows, each title hoverable for poster
- **Spinning wheel** — random movie picker that lands on one of your picks

### Implementation approach
- **TMDB API** (`api.themoviedb.org`) — free, no auth for read-only. Search by title → get `poster_path` → `https://image.tmdb.org/t/p/w500/{poster_path}`
- Poster data fetched at build time (SSG) and baked in as JSON — no client API calls
- Hover state: Framer Motion `AnimatePresence` + `scale: 0.8 → 1` + `y: 10 → 0` spring
- Poster floats above the hovered word, positioned with `absolute` + some JS to keep it in viewport bounds

### Notes
- TMDB API key is free — just need to register at themoviedb.org
- Fetch posters at build time into a local JSON file so the page is fast and doesn't depend on TMDB at runtime
- The "kino slop" framing is funny and personal — immediately signals taste and self-awareness
- Could do the same treatment for music (album art) and books (cover art via OpenLibrary API)

---

## 5. Visitor Counter

**Status:** Not started
**Where:** Footer, or a subtle line on the home hero — e.g. "you're visitor #1,337"

### Concept
A live counter showing total site visitors. Displayed somewhere low-key — not a badge, just a quiet stat woven into the footer or hero copy. Feels personal and transparent, like an old-school web counter but done with restraint.

### Display ideas
- Footer: `1,337 visitors` in small mono text alongside copyright
- Hero: `"you're visitor #1,337"` as a subtle line under the tagline
- About page: tucked into a "stats" row with other fun numbers

### Implementation approach
- **Upstash Redis** (via Vercel Marketplace) — increment a key on every page visit, read the value to display
- Server-side: a Next.js Server Component or Route Handler reads + increments the counter on each load
- No client-side JS needed — fully server-rendered
- Upstash free tier is generous, easily handles a personal blog's traffic

### Notes
- Needs Upstash Redis — add via `vercel integration add upstash` (Vercel Marketplace)
- Should debounce repeat visits from the same session (sessionStorage flag) so refreshing doesn't inflate the count
- Could also just use Vercel Analytics in the dashboard (private, no public counter) if a visible number feels gimmicky
- The "you're visitor #X" framing is more personal than a raw number

---

## 6. /breathe — Breathing Page

**Status:** Not started
**Where:** `/breathe` — standalone page, linkable, shareable

### Concept
A dedicated page that guides you through a breathing exercise. No text clutter, no nav, no distractions — just a single full-screen animation that expands and contracts and tells you when to inhale, hold, exhale. The kind of page you bookmark and open when you're overwhelmed.

### The animation
This is the whole product. It must be **buttery smooth at 60fps minimum, targeting 120fps on ProMotion displays.**

- A shape (circle, orb, soft blob) that slowly expands during inhale and contracts during exhale
- The expansion/contraction should feel *organic* — not linear, not even standard ease-in-out. Use a custom cubic-bezier or spring that mimics the feeling of a real breath
- Subtle glow or blur that pulses with the shape — breathing light, not breathing geometry
- Optional: soft color shift during the cycle (cool blue on inhale → warm amber on exhale)
- Text fades in/out at the right moment: "breathe in" → "hold" → "breathe out" → "hold" — minimal, centered, disappears after a few cycles if you want no text mode

### Animation tech — must use CSS + `requestAnimationFrame`, NOT JS timers
- **DO NOT use `setInterval` or `setTimeout`** for the animation loop — they drop frames and feel janky
- Use `requestAnimationFrame` for the timing loop
- CSS custom properties (`--scale`, `--opacity`) updated each frame via JS for smooth interpolation
- Or: pure CSS `@keyframes` with `animation-timing-function: cubic-bezier(...)` — browser compositor handles this at native FPS, no JS frame budget hit
- Framer Motion `animate` with `type: "tween"` and a custom `ease` array is fine too — it uses `requestAnimationFrame` internally

### Breathing pattern options (make it configurable)
| Pattern | Inhale | Hold | Exhale | Hold | Use |
|---------|--------|------|--------|------|-----|
| Box breathing | 4s | 4s | 4s | 4s | Focus/calm |
| 4-7-8 | 4s | 7s | 8s | 0s | Sleep/anxiety |
| Physiological sigh | 2s+1s | 0s | 8s | 0s | Fastest stress relief |
| Default | 4s | 0s | 6s | 0s | Simple, easy |

### Visual options to explore
- **Expanding circle** — simplest, most legible, easiest to make smooth
- **Soft blob** — CSS `border-radius` morphing between values, feels organic
- **Radial gradient pulse** — no shape, just light expanding from center
- **Particle field** — particles slowly drift outward on inhale, pull inward on exhale (p5.js or canvas)
- **Wave** — a sine wave that slows and deepens on exhale

### Page design
- Full-screen, dark background (near-black or deep midnight blue)
- No nav, no footer — just the animation and maybe a tiny `← back` link
- Haptic feedback on mobile (if the Vibration API is available) for the transition moments
- A subtle session counter: "3rd breath" in tiny mono text, fades after 5 breaths

### Notes
- This is a shareable utility page — worth having a clean URL: `yoursite.com/breathe`
- Can link to it from the about page or footer as an easter egg
- Look at oak.is/thinking/breathe for reference — clean execution
- The 120fps smoothness is non-negotiable. Test on an iPhone ProMotion display

---

## 7. Lotus Generator

**Status:** Not started
**Where:** `/lotus` or `/generate` — standalone interactive page, also potentially an experiment entry

### Concept
A generative art tool where the user draws their own lotus by manipulating sliders. Real-time — every slider move instantly redraws the lotus on a canvas. The output should feel meditative and beautiful. Users can tweak until it feels *theirs*, then save/share it.

### Sliders to control
| Parameter | What it does | Range |
|-----------|-------------|-------|
| **Petals** | Number of petals around the center | 4 → 24 |
| **Layers** | How many rings of petals | 1 → 5 |
| **Petal length** | How far petals extend from center | short → long |
| **Petal width** | How fat/thin each petal is | needle → wide |
| **Petal curve** | How curved/pointed the petal tip is | pointed → round |
| **Spread** | How open/closed the lotus is (bloom angle) | closed bud → fully open |
| **Rotation offset** | Rotational stagger between petal layers | 0° → 45° |
| **Center size** | Size of the central seed pod | tiny → large |
| **Color** | Petal color or gradient (hue slider + saturation) | full spectrum |
| **Background** | Canvas background color or gradient | dark / light / custom |
| **Symmetry noise** | Tiny random variation per petal — makes it feel organic vs. mechanical | 0 → subtle |

### Animation options
- **Slow bloom** — lotus gradually opens on page load, then holds at the user's settings
- **Breathing** — petals gently pulse in/out like the `/breathe` page
- **Rotation** — lotus slowly rotates (controllable speed slider)
- **Wind** — each petal sways slightly with a sine wave offset (Perlin noise per petal)

### Tech approach
- **p5.js** or raw **Canvas 2D API** — p5.js is easier for parametric petal drawing with `beginShape()` / `curveVertex()`
- Draw each petal as a bezier curve — 2 control points define the petal shape, all derived from the slider values
- Redraw on every slider change (`input` event, not `change`) for instant feedback
- `requestAnimationFrame` loop for animated options
- **Export button** — `canvas.toDataURL('image/png')` → download link. Users keep their lotus

### Petal math (rough)
```
for each layer:
  for each petal in layer:
    angle = (2π / petalCount) * i + rotationOffset * layer
    draw bezier from center outward:
      startPoint = center
      controlPoint1 = center + (petalWidth/2 at angle-offset)
      controlPoint2 = tip - (petalCurve)
      endPoint = center + petalLength at angle
```

### Page design
- Dark background by default — lotus colors pop more
- Sliders in a collapsible panel on the right (desktop) or bottom drawer (mobile)
- Canvas fills most of the viewport
- "Download" button — saves as PNG
- "Randomize" button — generates a random beautiful lotus instantly
- Optional: "Share" — encodes slider values in URL params so you can share your exact lotus

### Notes
- The URL-encoded share link is a great feature: `/lotus?petals=8&layers=3&hue=280&spread=0.7` etc.
- Randomize should be opinionated — not fully random, but random within aesthetically pleasing ranges
- Could seed a "lotus of the day" — same seed for everyone on a given date (use the date as the random seed)
- This overlaps well with the experiments section — a showcase lotus with a "try it yourself" link

---

*Add new ideas below.*
