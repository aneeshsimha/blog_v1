---
title: "The personal RAG app as resume artifact"
standfirst: "Why a retrieval app that actually works says more than a CV ever could."
date: 2026-05-02
category: interface
---

A resume is a claim. A working app is a receipt. If you're trying to get hired to build with language models in 2026, the cheapest receipt you can produce is a personal RAG that does one specific thing well — and the most common mistake is to build one that does five things badly.

The personal corpus is the unfair advantage. Your notes, your bookmarks, your code, the long email thread where you actually thought something through — none of it is in the pretraining distribution, and none of it can be faked by a stranger trying to clone your project page. Index it, build a thin retrieval layer over it, wrap it in an interface that *you* would actually open on a Sunday, and you've already done more than most candidates.

## The trap

The trap is building "a chatbot for your second brain." That framing is the kiss of death. Nobody, including you, wants to chat with their notes. People want answers, summaries, and the occasional reminder that they had a better idea about this six months ago.

So pick a verb. *Find* the three notes I wrote about X. *Draft* a reply in the voice of my last twenty replies. *Surface* the open loop I've been avoiding. The verb is the product.

## What it proves

A small RAG app, built carefully, shows the reader: you can ingest messy data, you can write an eval that isn't "looks fine," you can reason about chunking and recall, you can ship a UI a human will tolerate, and you can keep latency and cost in your head while you do it.

It also shows something subtler — that you were willing to use your own work on yourself. In a market full of demos built for screenshots, an app you actually open is a strong signal.

Ship the smallest version. Use it for a month. Then talk about it.
