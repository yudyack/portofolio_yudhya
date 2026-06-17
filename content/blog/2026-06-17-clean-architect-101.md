---
title: "Relearning Clean Architecture"
date: "2026-06-17"
summary: "I'm actually reading Clean Architecture: A Craftsman Guide to Software Structure And Design"
draft: true
---


It's been years after I graduate and I haven't actually read the book of Clean Code even though I'm always hear about it and learn from another source. But now I'm interested more in architecture so I read Clean Architecture. It's different but same writer. Lot of things that I read are actually I already know from experience in work and never realized that lot of them are from this. 

Robert C. Martin state that the goal of clean architecture is to make the code easier to maintain, so in the end will reduce cost.

What are things are I'm already know for example? Robert shows in the book there 4 base layer that its boundaries need to be aware of.

![The Clean Architecture concentric layers diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

*Diagram by Robert C. Martin, from [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) on the Clean Coder Blog.*

The main rule is always refer to inside, never outside. The most center layer is the Entities aka Data Structure (at least what I'm understand of). Maybe Data structure is different from Entities but how we do work on data in database and even now we have ORM that helping to make accessing data to be high level, is the thing that makes me think how similar that Entities with persistence. If I think further about this, there is DTO that actually different. How we define this? If DTO wasn't entities, then is it still not entities if it stored in persistence. Then what is entities? It is said that entities hold the core rule of business. What type of rules that it holds?

Well lot of questioning, maybe I still need to learn more from this book. 