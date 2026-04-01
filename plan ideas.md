# Letterboxd Integration — `/media` Page

## Context
Add a new `/media` page that pulls live data from the Letterboxd RSS feed (`asimha`) and displays:
- Last 3 five-star ratings
- Last 5 movies rated (any rating)

First step toward a broader "what I'm consuming" section (Spotify next).

## Implementation

### 1. RSS Fetcher Utility
**New file:** `src/lib/letterboxd.ts`

- Fetch `https://letterboxd.com/asimha/rss/` server-side in Astro frontmatter
- Parse XML with `fast-xml-parser` (lightweight, no transitive deps)
- Extract per item: title, year, star rating (`letterboxd:memberRating`), poster image (from `<description>` HTML `<img>` tag), Letterboxd link, watched date
- Two exported functions:
  - `getRecentRatings(count)` — last N rated movies
  - `getTopRated(minRating, count)` — last N movies at or above a rating threshold (5 = five stars)
- Graceful error handling — returns empty arrays on fetch failure

### 2. New `/media` Page
**New file:** `src/pages/media.astro`

- Uses `Base` layout
- Fetches data in Astro frontmatter (server-side, zero client exposure)
- Two sections:
  - **"Five-Star Films"** — 3 cards: poster, title, year, link
  - **"Recently Watched"** — 5 cards: poster, title, year, star rating, link
- Reuses `FadeInView` + `StaggeredGroup` for animations
- Matches existing card/hover styling (warm palette, dark mode)

### 3. Nav Update
**Modify:** `src/components/Nav.astro` + `src/components/NavMobile.tsx`
- Add "Media" link

### 4. Dependency
- `npm install fast-xml-parser`

## Files Summary

| Action | File |
|--------|------|
| Create | `src/lib/letterboxd.ts` |
| Create | `src/pages/media.astro` |
| Modify | `src/components/Nav.astro` |
| Modify | `src/components/NavMobile.tsx` |

## Verification
1. `npm run dev` → navigate to `/media`
2. Five-star section shows up to 3 movies with posters
3. Recently watched shows up to 5 movies with ratings
4. Dark mode works
5. Mobile responsive
6. Nav links work on desktop + mobile
