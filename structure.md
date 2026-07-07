# Blog v1.5 — Structure & Reference

This is the living reference for the blog's design, content, and technical decisions. Sourced from the PRD ("Dawn After a Night Storm") and adapted for 11ty.

---

## Design Philosophy

> Standing on a terrace at dawn after a night storm. The air is electric and clean. The stone underfoot is dark and wet, catching the first gold light unevenly. Behind you, the space is deep and still. In front of you, the sky is doing something extraordinary — warm gold breaking through dark atmospheric layers. Everything is textured. Nothing is flat. Nothing is dead. Everything breathes.

**Every decision checks against this image.**

---

## Litmus Tests

| Test | Question | If it fails |
|------|----------|-------------|
| Design | Does this feel like something a king built, or something someone built to impress a king? | Cut it |
| Copy | Does this read like someone who's alive, or someone who wants a job? | Rewrite it |
| Motion | Is this moving at the speed of breath, or the speed of a notification? | Slow it down |

---

## Color System

| Token | Hex | Role |
|-------|-----|------|
| `--color-base` | `#141210` | Deep warm black — foundation, not emptiness |
| `--color-mid` | `#1c1a17` | Secondary surfaces, cards |
| `--color-ocean` | `#0e1520` | Coolest depth layer |
| `--color-gold` | `#d4922a` | **The light source.** Never flat — always glow, edge, warmth |
| `--color-earth` | `#8b4a2a` | Burnt umber — between dark and gold |
| `--color-rust` | `#c0622a` | Accent — tags, callouts, section borders |
| `--color-cream` | `#f0ead6` | Body text, headings |
| `--color-navy` | `#1e2a3a` | Code blocks, structural borders |

**The gold rule:** Gold is never a flat color block. It illuminates from within — a glow, a warm edge. Elements near a gold origin feel warmer. Elements farther away are cooler.

**Avoid entirely:** Neons, pastels, pure `#ffffff`, cool blues, flat greys.

---

## Typography

| Role | Font | Notes |
|------|------|-------|
| Display / H1 | DM Serif Display | Letterpress quality — carved, warm, not laser-clean |
| Headings H2–H4 | DM Serif Display (lighter) | Authority at smaller sizes |
| Body | Inter | `line-height: 1.75`, `max-width: 65ch` |
| Code | JetBrains Mono | Navy background block |

**Text ratio:** ~30% text, ~70% visual/spatial. Enforce in every template.

---

## Texture & Depth (3 planes)

| Plane | What | Implementation |
|-------|------|----------------|
| Deep | Slow gradient wash | CSS radial-gradient, 45s+ cool drift + 65s warm drift |
| Mid | Film grain overlay | SVG `feTurbulence`, 4% opacity, static |
| Surface | Breathing gold glow | Radial gradient, 10s breathe cycle, off-axis |

Everything has grain. Background, hover states, cards, photos, code blocks.

---

## Motion Rules

- Everything ≥400ms, breath-speed or slower
- Page entrance: fade + slight upward drift, staggered
- Hover: bloom slowly, gold illumination from within
- Scroll reveals: allowed, reward curiosity

**Prohibited:** Parallax, typewriter text, floating particles, cursor effects, anything < 400ms

---

## Navigation

`Work` · `Writing` · `About` · `Contact`

Max 4 items. Minimal. Active page gets gold text-shadow glow.

---

## Page Structures

### Home (`/`)
- Full viewport, no scroll needed on load
- Name (display serif, large) + one positioning statement (≤12 words, declarative)
- Ambient background carries the visual weight
- **No:** subheadline, animated text, taglines, testimonials, headshot

### Work (`/work/`)
- Grid: thumbnail + title + one-line descriptor
- Thumbnails have grain overlay
- Hover: gold bloom

### Individual Project (`/work/[slug]/`)
Four mandatory sections:

| Section | Content | Format |
|---------|---------|--------|
| **Storm** | What was broken, stuck, or wrong | 1–3 sentences. Optional screenshot. Honest. |
| **Investigation** | How you went deep | Annotated visual, diagram, system map preferred over prose |
| **Craft** | The making — decisions, iterations | Before/after, sketches, iterations. Show the hand. |
| **Emergence** | What came out | Metrics or clear before/after. Factual. |

**Rules:**
- Every section needs at least one visual artifact
- Captions on all visuals: short, precise, factual
- No "I loved working on this" or "challenging but rewarding"

### Writing (`/writing/`)
- Post list: title, date, read time. No excerpts unless ≤20 words.
- No author bio per post
- No comments
- RSS enabled at `/feed.xml`

### About (`/about/`)
- Environmental photo (you in context, not headshot)
- ≤150 words, first person, declarative
- Structure: what you do now → how you think → what you care about
- Optional interest list (≤6 items, no explanations)
- **No:** third-person, timeline, career narrative, "passionate", "journey", resume voice

### Contact (`/contact/`)
- One framing line (austere, no exclamation marks)
- Email (plaintext or mailto)
- Max 2 external links
- **No:** form, "let's grab coffee"

---

## Copy Voice

**Voice:** First person. Declarative. Warm but precise.

**Structure:** Short sentences. Subject-verb-object dominant.

**The dinner party test:** How you'd introduce yourself to someone interesting in Lisbon. Not how you'd update your LinkedIn.

**Write this:**
- "I built this." "This was broken. I fixed it." "The system needed X. I made Y."
- Factual, almost terse descriptions
- Let whitespace and glow carry the emotional register

**Never write:**
- "passionate about" / "love collaborating" / "let's build something together"
- Long philosophy paragraphs
- Corporate passive voice

---

## Technical Stack

| Component | Choice |
|-----------|--------|
| SSG | 11ty v3 + TypeScript config |
| Templates | Nunjucks (.njk) |
| Styling | Vanilla CSS with `@layer` cascade |
| Fonts | Self-hosted via `@fontsource` (no CDN) |
| RSS | `@11ty/eleventy-plugin-rss` |
| Deploy | Cloudflare Pages |
| Domain | aneesh.world |

---

## File Map

```
src/
├── _data/site.json              # Name, bio, tagline, links
├── _includes/
│   ├── base.njk                 # Master layout (ambient, nav, meta, footer)
│   ├── post.njk                 # Blog post layout
│   ├── project.njk              # Project case study layout
│   └── partials/
│       ├── ambient.njk          # 5-layer ambient background
│       ├── nav.njk              # 4-link navigation
│       └── footer.njk           # Minimal footer
├── css/style.css                # Full design system (~800 lines)
├── images/                      # Project artifacts, about photo
├── writing/
│   ├── writing.json             # Directory data (layout, tags, permalink)
│   └── *.md                     # Blog posts
├── work/
│   ├── work.json                # Directory data (layout, tags, permalink)
│   └── *.md                     # Project case studies
├── index.njk                    # Homepage
├── about.njk                    # About page
├── contact.njk                  # Contact page
├── writing.njk                  # Post listing
├── projects.njk                 # Work/project listing
└── 404.njk                      # Not found
```

---

## Out of Scope (v1.5)

- Dark/light mode toggle
- Search functionality
- Newsletter integration
- Analytics beyond platform built-in
- Comments
- Syntax highlighting (plain code blocks for now)

---

## Resolved Decisions

- **Stack:** 11ty, not Astro. No framework migration.
- **Domain:** aneesh.world (canonical)
- **Deploy:** Cloudflare Pages
- **Nakshatra references:** Guide the aesthetic behind the scenes, don't surface visibly.

---

## Open Questions

> These need answers before the site ships.

1. **Positioning statement** — Needs to be chosen (see brainstorm below)
2. **About page copy** — Needs to be chosen (see drafts below)
3. **About photo** — Environmental photo needed. What does "in context" look like for you?
4. **Real projects** — What 2–3 projects should be the first case studies? Each needs visual artifacts.
5. **Writing topics** — Any posts ready to go?
6. **Hero visual** — Is the atmospheric background enough, or do you want a specific visual?
7. **Project thumbnails** — Need real artifact images. Screenshots, diagrams, photos of process?

---

## Brainstorm: Positioning Statement

**Constraints:** ≤12 words, declarative (subject-verb-object), passes the dinner party test, no pitch language.

**Current:** "I build software that thinks about systems." (8 words)

### Option A — Systems-forward
> I build systems that explain themselves.

7 words. Implies observability, clarity, self-documenting architecture. The "explain themselves" carries weight — it hints at your care for how things communicate their state.

### Option B — Language + systems intersection
> I make software where language meets infrastructure.

7 words. Pulls from the bio ("systems, language, and what they do to each other"). Unusual pairing. Someone at a dinner party would ask "what does that mean?" — which is the point.

### Option C — Process-focused
> I trace the shape of broken systems and rebuild them.

10 words. More narrative. Connects to the Storm → Emergence project structure. "Trace the shape" has texture. But might read as a pitch.

### Option D — Terse, factual
> Software engineer. Systems and language.

5 words. The most austere option. Lets the site's atmosphere do the talking. Would pair well with a hero visual artifact.

### Option E — Verb-first
> Building the infrastructure underneath language.

5 words. Active. Specific. "Underneath" gives it depth — literal and metaphorical.

### Option F — What-you-do, nothing more
> I build the systems underneath.

5 words. Deliberately incomplete — "underneath what?" The ambiguity is intentional. It reads like someone who doesn't need to explain.

---

## Drafts: About Page Copy

**Constraints:** ≤150 words, first person, declarative, structure: do → think → care. Dinner party voice.

### Draft 1 — Clean and direct (~75 words)

> I build software. Right now that means systems that process language — compilers, pipelines, the infrastructure that makes text do things.
>
> I think about failure modes. Not because I'm pessimistic — because systems that know how they break are systems that hold. Layers, interfaces, the contracts between them.
>
> I care about clarity. Code that explains itself. Writing that says one thing and means it. Systems that tell you what's wrong before you have to ask.
>
> distributed systems · compilers · NLP · type theory

### Draft 2 — Warmer, more texture (~90 words)

> I write software and occasionally sentences. The software is mostly infrastructure — things that move text between systems, things that parse it, things that decide what it means.
>
> I think in failure modes and edge cases. If a system can't explain what went wrong, it's not done yet. The interesting problems are always at the boundaries — between languages, between services, between what a system promises and what it actually does.
>
> I care about things that hold up under pressure.
>
> distributed systems · compilers · NLP · type theory

### Draft 3 — Shortest, most austere (~55 words)

> I build infrastructure for language processing. Compilers, pipelines, the systems underneath.
>
> I think about what breaks. Good systems fail honestly — they tell you where and why. I design for that.
>
> I care about precision. In code, in prose, in how things explain themselves.
>
> distributed systems · compilers · NLP · type theory
