---
title: "FALSE COLOR"
standfirst: "The personal magazine you're reading — a hand-built editorial system for writing in public without rehearsing."
date: 2026-03-01
category: material
role: "Editor, designer, engineer"
year: "2026"
---

FALSE COLOR is this site. A personal magazine, built from scratch, where I publish writing about software, taste, and the material future.

I made it because every portfolio template I tried — Astro starters, Ghost themes, the obligatory Notion site — flattened the things I actually care about into the same five rectangles. I wanted something that looked like a publication, not a CV with a blog attached. So I built one.

The design vocabulary borrows from scientific photography. False-color imaging is what you use when the thing you're looking at is invisible to the eye — infrared, ultraviolet, radio. You assign a color to a wavelength and suddenly you can read it. That felt like the right metaphor for writing about things that don't show up in normal feeds: long-term taste, materials, the parts of engineering that don't fit on Twitter. Each category — Interface, Material, Capital, Signal, Specimen, Field note — gets a color from the spectrum, and that color carries through every list, marker, and accent in the system.

The build is 11ty with Nunjucks templates, a hand-rolled CSS design system using custom properties for the spectral tokens, and a small canvas plate on the cover that renders a procedural false-color field in response to the cursor. No framework, no hydration cost, no JavaScript on most pages. The whole thing weighs less than a single hero image on a typical agency site.

The interesting constraints were typographic. Three families — Syne for display, Newsreader for body, Space Mono for metadata — and a strict editorial grid. Italics render in infrared on purpose; they're the only place hot color enters body copy, which forces me to mean it when I emphasize something. Dark mode is a real palette, not an inverted one, with its own contrast tuning.

Building your own publishing surface is unfashionable. Everyone says you should be writing on the platforms where the readers are. I find that the opposite is true for the writing I want to keep — the further from the algorithm, the longer the half-life. This is where the durable stuff lives.
