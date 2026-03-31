# Portfolio Website — Plan

## What This Is
A personal portfolio site for Aneesh Simha. It's a hub for online presence, showcasing experiments (code, images, videos, AI art, side projects) and writings (linking out to Substack). Built to be fast, responsive, and easy to update without touching code.

## Tech Stack
- **Next.js 16** (App Router, static generation)
- **Tailwind CSS** (dark theme, modern/bold aesthetic)
- **Framer Motion** (subtle animations — fade-in on scroll, hover effects)
- **Vercel** (deployment, image optimization)

## Pages
| Page | Path | What It Shows |
|------|------|---------------|
| Home | `/` | Hero (name, tagline, social links, CTAs), featured experiments & writings |
| Experiments | `/experiments` | Filterable grid of all experiments, tag filtering |
| Experiment Detail | `/experiments/[slug]` | Full detail for one experiment (images, description, tags) |
| Writings | `/writings` | List of writing cards that link out to Substack etc. |
| About | `/about` | Bio, resume download, social links |
| Contact | `/contact` | Email link, social links |

## How to Add Content

### Add a new experiment
Create a JSON file in `content/experiments/`:
```json
{
  "title": "My New Project",
  "slug": "my-new-project",
  "description": "What this project is about",
  "date": "2026-03-30",
  "tags": ["code", "ai"],
  "type": "code",
  "featured": true,
  "link": "https://github.com/...",
  "images": ["/images/experiments/my-image.jpg"],
  "thumbnail": "/images/experiments/my-image.jpg"
}
```
- `type` can be: `"images"`, `"code"`, `"video"`, `"writing"`, `"other"`
- `featured: true` shows it on the home page
- `link` is external URL (opens in new tab). Set to `null` to use the built-in detail page instead
- Images go in `public/images/experiments/`

### Add a new writing
Create a JSON file in `content/writings/`:
```json
{
  "title": "My Post Title",
  "slug": "my-post",
  "description": "Short description of the post",
  "date": "2026-03-30",
  "tags": ["personal"],
  "link": "https://aneeshsimha.substack.com/p/my-post",
  "featured": true
}
```
- `featured: true` shows it on the home page
- `link` is where the reader goes (Substack, Medium, etc.)

### Update bio, socials, or email
Edit `content/site.json`:
```json
{
  "name": "Aneesh Simha",
  "tagline": "Your tagline here",
  "bio": "Your bio here",
  "email": "hello@aneesh.dev",
  "resumeUrl": "/resume.pdf",
  "socials": [
    { "platform": "GitHub", "icon": "github", "url": "https://github.com/aneeshsimha" },
    { "platform": "LinkedIn", "icon": "linkedin", "url": "https://linkedin.com/in/aneeshsimha" },
    { "platform": "X", "icon": "x", "url": "https://x.com/aneeshsimha" },
    { "platform": "Substack", "icon": "substack", "url": "https://aneeshsimha.substack.com" }
  ]
}
```
- Available icons: `github`, `linkedin`, `x`, `substack`
- Add your resume as `public/resume.pdf`

### Add experiment images
Drop images into `public/images/experiments/` and reference them in the JSON as `/images/experiments/filename.jpg`.

## Deployment
Push to GitHub → auto-deploys on Vercel. Custom domain can be configured in Vercel dashboard.

## Design
- Dark zinc-950 background
- White text, zinc-400 secondary text
- Geist Sans (headings/body) + Geist Mono (labels/tags/dates)
- Subtle Framer Motion animations (fade-in on scroll, staggered entrance)
- Responsive: mobile hamburger nav, fluid grid

## Future Ideas (not in MVP)
- [ ] Fun/interactive elements (3D, particles, scroll-driven animations)
- [ ] RSS feed sync from Substack (auto-import posts)
- [ ] Full blog posts on-site (MDX) instead of just linking out
- [ ] Image lightbox/gallery view for experiment detail pages
- [ ] Contact form (email via Resend or similar)
- [ ] OG image generation for social sharing
- [ ] Analytics (Vercel Web Analytics)
- [ ] CMS integration (Sanity/Contentful) for non-technical editing
- [ ] Color palette customization (once you pick references)

## Project Structure
```
vienna/
├── app/
│   ├── layout.tsx              # Root layout, nav, footer, fonts
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── experiments/page.tsx    # Experiments grid with tag filter
│   ├── experiments/[slug]/page.tsx  # Experiment detail
│   └── writings/page.tsx       # Writings list
├── components/
│   ├── nav.tsx                 # Responsive nav (client component)
│   ├── footer.tsx
│   ├── hero.tsx                # Animated hero (client component)
│   ├── social-links.tsx        # Reusable social icons
│   ├── experiment-card.tsx
│   ├── experiments-list.tsx    # Client wrapper for tag filtering
│   ├── writing-card.tsx
│   ├── tag-filter.tsx          # Client component for filtering
│   └── fade-in.tsx             # Framer Motion scroll animation
├── content/                    # ← ALL CONTENT LIVES HERE
│   ├── site.json               # Name, bio, socials, email
│   ├── experiments/*.json      # One file per experiment
│   └── writings/*.json         # One file per writing
├── lib/
│   ├── content.ts              # Reads JSON files at build time
│   └── types.ts                # TypeScript types
├── public/
│   ├── images/experiments/     # Experiment images
│   └── resume.pdf              # Your resume
└── package.json
```

## Commands
- `npm run dev` — local dev server at localhost:3000
- `npm run build` — production build
- `npm run start` — serve production build locally
