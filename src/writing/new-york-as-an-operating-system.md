---
title: "New York as an operating system"
standfirst: "Scheduling, latency, and throughput in a city that never quite blocks."
date: 2026-03-27
category: field
---

I keep catching myself describing New York in systems terms. The subway is a scheduler with a relaxed SLA. A dinner reservation is a mutex. A walk from the West Village to the Lower East Side is a request that fans out across half a dozen services — bodega, ATM, friend's stoop, second friend's text — and you're lucky if any of them respond on the first try.

It's not just a metaphor. It's the actual reason the city feels different from a smaller one. Most places are single-threaded. You do one thing, then the next thing. New York is preemptive: any plan can be interrupted by a better one, and the cost of switching contexts is built into the price of living here.

## Latency vs. throughput

The thing nobody warns you about is the tradeoff. New York is a high-throughput city with terrible latency. You can get an enormous amount done in a week, but any individual errand will take three times longer than it should. The grocery store is twenty minutes away because the grocery store is *always* twenty minutes away, no matter where you live.

People who optimize for latency get bitter. People who optimize for throughput get tired. The ones who last figure out which queue they're actually in.

> A city, like a system, is honest about exactly one thing: the bottleneck.

## What it teaches

What I've learned, mostly, is to stop fighting the scheduler. If a thing is going to take an hour, it's going to take an hour. The right move is to batch — to put three errands in the same hour, to do the loud work in loud places and the quiet work at 6 a.m., to treat the subway as compute time and not as wasted time.

The city is not trying to make you efficient. It's trying to make you *capable*. Those are different metrics. They run on different schedulers. Most people learn the difference around year three.

I'm still learning.
