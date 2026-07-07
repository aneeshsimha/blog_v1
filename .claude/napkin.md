# Napkin

## Corrections
| Date | Source | What Went Wrong | What To Do Instead |
|------|--------|----------------|-------------------|
| 2026-07-06 | build | Nunjucks `slice` filter is a Jinja2-style N-way partition, NOT JS Array.slice | Use `loop.index <= N` guards (see index.njk) |
| 2026-07-06 | build | `toLocaleDateString` without `timeZone:"UTC"` renders frontmatter dates off-by-one on local (non-UTC) machines | Date filters in eleventy.config.js pass `timeZone:"UTC"` |
| 2026-07-06 | ship | Direct push to `main` is blocked by a repo rule | All changes to main go through a PR (`gh pr create` + `gh pr merge`) |

## User Preferences
- Site domain: aneesh.world (Cloudflare Pages, auto-deploys from `main` in ~1–2 min)
- Current design direction: **"Night Study"** (July 2026) — nocturnal indigo field notebook. Systems-minded-aesthete brief; sebs.computer as inspo for compactness + fun. Supersedes both the gold/"dawn storm" direction and the FALSE COLOR spectral-magazine intermediate.
- Wants "cool and vibey," atmospheric — NOT austere minimalism. Personality > polish.
- Site is branded as the person ("Aneesh Simha"), not a publication.

## Patterns That Work
- 11ty v3, plain-JS `eleventy.config.js` (not TS), Nunjucks, single vanilla `src/css/site.css`
- Fonts: Fraunces (display+body, 300 wt) + Space Mono (all meta/eyebrows/nav) via @fontsource passthrough
- Theme: dark default (`#0d0d18` bg, `#4B3F8F`/`#8d7ce6` indigo accent), light paper mode; dual-declaration pattern (`[data-theme]` wins, `prefers-color-scheme` fallback); localStorage key `theme`
- Atmosphere: body::before dual radial glow, body::after feTurbulence grain, heat.js cursor bloom, .cursor blink — all behind prefers-reduced-motion guards
- Fun layer (fun.js): relative dates on home (timeAgo filter, "today" < 1d), `<details class="more">` expandable about, randomized "currently:" line, NYC clock in eyebrow
- Subagent-driven development with a binding "design contract" file (exact tokens/classes/copy) keeps parallel task agents consistent

## Patterns That Don't Work
- Committing build artifacts: `dist/`, `.astro/`, `.superpowers/` session state are tracked in git from early commits — should be gitignored + removed someday

## Domain Notes
- Content: 5 posts in src/writing/, 3 projects in src/work/; categories in src/_data/categories.json render as plain mono labels (no per-category colors)
- `structure.md` and `.superpowers/brainstorm/` describe SUPERSEDED designs — do not use as design references
- `src/work/false-color.md` still describes the old FALSE COLOR design as if it were live — needs a rewrite as a retrospective
- `/contact/` reachable via footer link; nav is writing/projects/about
