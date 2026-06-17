---
title: "Where distributed tracing breaks (and what to do)"
date: "2026-06-03"
summary: "Real failure modes of tracing in practice: broken context, sampling lies, and the spans nobody reads."
draft: true
---

> **DRAFT SKELETON**: fill with failure modes you've actually hit. Principle-level and anonymized; the lessons are yours, the code isn't.

## The promise vs. the practice

Tracing looks great in demos. In real systems it degrades quietly, and you usually find out during an incident, which is the worst possible time.

## Failure mode 1: context that doesn't propagate

Traces die at boundaries: queues, cron jobs, thread pools, that one legacy service nobody wants to touch.

- (Your story: where the trace went dark, and how you noticed.)

## Failure mode 2: sampling that lies

Head sampling decides what to keep before it knows what matters, so it drops exactly the requests you care about.

- (What sampling strategy you landed on and why.)

## Failure mode 3: spans nobody reads

Some teams instrument because they have questions. Others instrument because the tutorial said to. The second kind produces spans nobody ever queries.

## What to do

- (Your practical checklist.)
