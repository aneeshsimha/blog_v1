---
title: "Becoming an AI engineer without LARPing"
standfirst: "A field note on building taste, systems, and proof-of-work — and why most portfolios prove neither."
date: 2026-05-14
category: interface
featured: true
---

Most "AI engineer" portfolios prove nothing about engineering or AI. A README full of model names is not proof; a notebook that calls an SDK is not proof. The proof is in the system that does something useful on the machine of a person who doesn't care how it was built.

There's a costume version of this job and a real version. The costume is easy: a Twitter bio, a few benchmark plots, an opinion about the latest paper. The real version is closer to plumbing than to research. You write a thing, you watch it fail on inputs you didn't imagine, you fix the prompt, the schema, the retry, the cache, the eval. You ship. You watch the latency tail. You ship again.

## What I actually look for

When I review someone's work I try to skip the talk and find one trace of taste. Did they bother to fix the obvious failure mode? Did they write a tiny eval, or did they ship vibes? Did the cost of the system go down between v1 and v3, or did they just keep adding tokens until the demo looked good?

> Taste in AI engineering is the willingness to delete the cleverest part of your prompt because it didn't move the eval.

The other tell is whether the system has *a job*. Not a "use case" — a job. A real user, on a real Tuesday, getting something done that would otherwise take them forty minutes. If you can describe that user in one sentence and they aren't you, the project will teach you more than a year of papers.

## A small contract

I try to hold myself to this: I don't get to call something AI engineering until somebody who isn't me has used it on purpose, twice. Until then it's a prototype, and prototypes are honest as long as you call them that.

Everything else is costume.
