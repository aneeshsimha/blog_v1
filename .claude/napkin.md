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

## Patterns That Work
- Dev server was already running on port 3000 before session started
- Use Bash with heredoc for creating new files (Write tool param is `content`, easy to get wrong)

## Patterns That Don't Work
- Write tool with `file_text` param — throws InputValidationError, use `content` instead

## Domain Notes
- Next.js 16.2.1 with Turbopack, React 19, Tailwind 4, Framer Motion
- Dark theme: zinc-950 bg, Geist Sans/Mono fonts
- Content driven by JSON files in content/experiments/ and content/writings/
- Components: hero, nav, footer, experiment-card, writing-card, fade-in, tag-filter
- User is Aneesh Simha — portfolio/blog site called "vienna"
- Turbopack root warning exists due to multiple lockfiles — non-breaking
