---
title: "On Systems That Hold"
date: 2026-04-01
description: "What makes a system resilient isn't redundancy. It's honesty about failure modes."
---

The first system I built that mattered was a pipeline that moved documents between three services. It failed on the second day. Not because the code was wrong — because I hadn't thought about what happens when the network is slow.

## The pattern

Every system has a shape. The shape isn't the architecture diagram. It's the set of assumptions baked into the code that nobody wrote down.

When those assumptions hold, the system works. When they don't, you get 3am pages.

```javascript
// The assumption: this resolves in < 200ms
const result = await fetchDocument(id);
// Reality: sometimes it doesn't
```

## What I learned

The fix wasn't a timeout. The fix was making the assumption explicit, then designing for when it breaks.

Systems that hold aren't the ones that never fail. They're the ones that fail honestly.
