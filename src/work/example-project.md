---
title: "Document Pipeline"
descriptor: "A distributed system for processing and routing documents across three services."
date: 2026-03-01
---

## Storm

The existing pipeline dropped documents silently when any downstream service was slow. No one knew until customers reported missing files 48 hours later.

<figure>
  <img src="/images/placeholder.svg" alt="Original pipeline architecture showing fire-and-forget routing" loading="lazy">
  <figcaption>Original routing layer — fire-and-forget pattern with no acknowledgment flow</figcaption>
</figure>

## Investigation

Traced the failure to a fire-and-forget pattern in the routing layer. The system assumed sub-200ms responses from every service. When that assumption broke, messages were silently discarded.

<figure>
  <img src="/images/placeholder.svg" alt="Latency distribution showing tail beyond 200ms" loading="lazy">
  <figcaption>Latency distribution across downstream services — p99 regularly exceeded the implicit 200ms assumption</figcaption>
</figure>

## Craft

Replaced the fire-and-forget calls with an acknowledgment-based flow. Added a dead letter queue for failed deliveries. Built a reconciliation job that runs every hour and surfaces discrepancies.

<figure>
  <img src="/images/placeholder.svg" alt="New pipeline with ack-based flow and dead letter queue" loading="lazy">
  <figcaption>Revised architecture — explicit acknowledgment, dead letter queue, hourly reconciliation</figcaption>
</figure>

## Emergence

Zero silent drops in the six months since deployment. Mean time to detect failures went from 48 hours to under 5 minutes.
