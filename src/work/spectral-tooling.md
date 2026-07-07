---
title: "Spectral Tooling"
standfirst: "A small kit of CLI utilities for inspecting, comparing, and visualizing material data — built for taste, not throughput."
date: 2026-01-22
category: capital
role: "Solo build"
year: "2026"
---

Spectral Tooling is a handful of command-line utilities I use to navigate materials databases — fabric specs, finish samples, color archives, vendor catalogs — without losing my mind to badly formatted CSVs.

It started as a research aid. I was reading deep tech and fashion-tech filings and kept running into the same problem: the interesting differences between two materials are almost never in the data sheet. They're in spectra, in finish, in the way one supplier defines "matte" versus another. The existing tools either assume you're a textile chemist or assume you're shopping. Nothing sits in the middle, where a curious generalist actually lives.

So I wrote four small things that do.

`spectra-diff` takes two reflectance curves and tells you, in plain English, where they actually differ — not just the RMS error, but the wavelength bands a human eye would notice. It turns out most "identical" finishes diverge sharply around 600nm, which is exactly where reds and oranges live. Useful when a vendor swears two batches match and you suspect otherwise.

`finish-grep` is ripgrep for material descriptions. It normalizes the language across catalogs — translating "brushed," "satin," "matte," "softhand," and forty other near-synonyms into a shared taxonomy — so you can search ten vendor catalogs at once and get something coherent back.

`spec-plate` renders a small printable contact sheet: swatches, specs, and spectra side by side, in the same false-color vocabulary I use for the rest of my work. It exists because PDFs from suppliers are universally hostile to comparison.

`watch-mill` is a long-running scraper that monitors a curated list of mill and supplier pages for new releases, deduplicates them across sources, and emails me a weekly digest. It's the least interesting piece technically and the most useful in practice.

None of these are products. They're personal tools, the kind you write when the existing options insult your time. I'm putting them up because every time I show someone the workflow, they ask if it's open source. Now it is.
