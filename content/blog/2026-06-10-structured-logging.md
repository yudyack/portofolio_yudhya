---
title: "Structured logging: how I actually think about it"
date: "2026-06-10"
summary: "Signal vs. noise, cost vs. value: a working mental model for logs that earn their keep."
draft: false
---

> **DRAFT SKELETON**: this outline is a starting point. The substance has to come from you: real incidents, real trade-offs, real numbers (anonymized).

## The problem

Most logging advice is either "log more" or "log less." Neither helps you decide anything. What you actually need is a way to judge, line by line, whether a log earns its cost.

## Signal vs. noise

My test is simple: what question would this log line answer at 3am? If I can't name the question, it's noise.

- (Your real example here: a log line that saved an incident, and one that cost money for years.)

## Cost vs. value

Logs have a unit price. You pay in ingestion, storage, query time, and attention. The last one is the expensive one.

- (Your numbers here; even rough, anonymized ones make this post.)

## What I actually do

Structure from day one. Fields, not sentences.

- (Your conventions: levels, cardinality rules, when to sample.)

## What I'd push back on

- (A popular practice you disagree with, and why.)
