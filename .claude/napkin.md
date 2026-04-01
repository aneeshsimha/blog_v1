# Napkin

## Corrections
| Date | Source | What Went Wrong | What To Do Instead |
|------|--------|----------------|-------------------|
| 2026-03-31 | self | Used `file_text` param on Write tool — doesn't exist | Write tool uses `content` param, not `file_text` |

## User Preferences
- Wants the blog to feel fun and have personality — not bland/minimal
- Will populate real content later; placeholder/fun content is fine for now
- Prefers short, direct responses — no fluff
- Cares about colors and vibe, not just content
- Prefers warm, approachable vibes over cold/techy aesthetics
- Warm cream light mode (#f8f5f0), warm dark mode (#1a1714), terracotta/amber accents

## Patterns That Work
- Dev server was already running on port 3000 before session started
- Use Bash with heredoc for creating new files (Write tool param is `content`, easy to get wrong)

## Patterns That Don't Work
- Write tool with `file_text` param — throws InputValidationError, use `content` instead

## Domain Notes
- Astro 5.7.5 with React islands, Framer Motion 12, Tailwind CSS 4.1
- Warm cream/dark palette — terracotta accent (light), amber accent (dark)
- Geist Sans/Mono fonts, content driven by JSON files in data/experiments/ and data/writings/
- Components: Hero.tsx, Nav.astro, Footer.astro, CursorField.tsx, EmojiTooltip.tsx, StaggeredGroup.tsx, FadeInView.tsx
- 5 fun UI elements added: bracketed nav, progress bar, emoji tooltips, staggered scroll animations, cursor-reactive particles
- User is Aneesh Simha — portfolio/blog site called "vienna"
- Migrated from Next.js to Astro 5 with islands architecture
