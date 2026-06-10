---
title: "Teaching a computer to read emotions in Indonesian tweets"
date: "2026-06-10"
summary: "My bachelor thesis: emotion classification with Word2vec and classic machine learning, before LLMs made it look easy."
draft: true
---

For my bachelor thesis at Bina Nusantara, I built a system that reads Indonesian tweets and guesses the emotion behind them. This was 2020, before large language models made this kind of problem look easy.

## Why Indonesian tweets are hard

Twitter Indonesian is barely the Indonesian you learn in school. People write in slang, abbreviate aggressively, and mix English and regional languages mid-sentence. A single feeling can be spelled five ways, none of them in a dictionary. Formal Indonesian corpora exist, but they don't help much when the data looks like that.

## The approach

The pipeline was classic for its time: Word2vec to turn words into vectors that capture meaning from context, then machine learning classifiers on top to map those vectors to emotions.

- (Add your specifics here: dataset size, which emotions, which classifier won, the accuracy you reached.)

## What it actually taught me

The model was maybe 20% of the work. The other 80% was data: collecting it, cleaning it, labeling it. Labeling was the hardest part, because deciding whether a tweet is anger or sadness is genuinely hard for humans too. The labels you train on are opinions, not facts, and the model inherits every one of them.

## And now?

Today you can do this with one prompt to an LLM. I have mixed feelings about that. I'm glad the problem got easier. But doing it the hard way taught me what the easy way hides: where the data came from, what the labels mean, and how confident the system should actually be.
