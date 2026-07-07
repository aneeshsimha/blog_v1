---
title: "Personal RAG"
standfirst: "A retrieval app that answers questions about my own writing — and tries to prove engineering taste in a single demo."
date: 2026-04-10
category: interface
role: "Design, code, infra"
year: "2026"
link: "https://rag.aneesh.world"
---

A search engine over everything I've ever written — essays, notes, half-drafts, the Obsidian vault — wrapped in a chat interface that knows when to shut up.

I built this for one reason. Most "AI portfolio projects" in 2026 are screenshots of someone else's framework. They prove the author can copy a tutorial. I wanted a project that proved the opposite: that I could pick a hard, narrow problem and get it 90% right end-to-end. Retrieval over a personal corpus turns out to be that problem. The dataset is small enough to fit on a laptop and weird enough that every off-the-shelf strategy quietly breaks.

The stack is deliberately boring. A Rust ingestion pipeline chunks markdown along semantic boundaries instead of fixed token windows — turns out paragraphs are smarter than counters. Embeddings go into a local vector store, and the query path runs a hybrid BM25 + dense rerank with a small cross-encoder for the final cut. The model layer is a thin wrapper that swaps between Anthropic and a local model depending on whether I'm online.

The interesting work was the eval harness. I wrote roughly two hundred question-answer pairs against my own writing, then graded retrieval recall, answer faithfulness, and "would I actually say this." The last metric is what most public RAG demos skip — and it's the one that exposes how often a model is technically correct and tonally wrong. Forcing that into the loop changed the prompts and the chunking strategy more than any model upgrade did.

What I like about it: it makes a specific claim and backs it up. You can ask it what I think about deep tech, and it will pull the right four paragraphs and synthesize them in something close to my voice. What I don't like: the cold-start latency on the local model is still embarrassing. I'm rewriting the serve layer this month.

The demo is live. The eval set is open. Both are more honest about what works than any case study would be.
