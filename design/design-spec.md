# Design Specification — Portfolio Homepage, Yudhya Patria Wicaksono

A single-page personal portfolio. Friendly editorial tone, 2026 nature-inspired ("grounded, not decorative"), bento-panel layout on a cream canvas with organic corner blobs. Strictly green-grey palette. No orange, no blue, no purple, no photos, no gradients, no drop shadows.

---

## 1. Canvas & grid

- Desktop frame: **1440 × 1080 px** (content may extend; this is the design frame).
- Content column: **max-width 1120 px**, centered, side padding 40 px.
- Layout system: **12-column grid**, gutter 24 px.
- Vertical rhythm: section spacing **96 px**; intra-panel padding **32 px**; element gaps inside panels 12 / 16 / 24 px.
- Corner radius: panels **16 px**; small chips/badges **8 px**; hairlines 1 px.

## 2. Color tokens (light theme)

| Token | Hex | Usage |
|---|---|---|
| `paper` | `#F4F2EC` | Page background (warm cream) |
| `ink` | `#2B302B` | Primary text |
| `grey-moss` | `#6B7268` | Secondary text, labels, dates |
| `sage` | `#A9BFA9` | Primary panel fill |
| `sage-deep` | `#8AA98C` | Secondary panel fill, illustration strokes |
| `forest` | `#3F5A44` | Accent panel fill, links, logo text |
| `cream` | `#FBFAF6` | Inner cards on sage panels |
| `blob-grey` | `#C9CCC2` | Organic background blobs, 100% opacity |
| `hairline` | `#DCDFD6` | Dividers, panel outlines |

Text on `forest` fill uses `cream`. Text on `sage` fills uses `ink` (titles) and `#4A554B` (secondary — darkened grey-moss for contrast on sage). Never place grey-moss text on sage panels.

## 3. Color tokens (dark theme)

| Token | Hex | Usage |
|---|---|---|
| `night` | `#171A17` | Page background |
| `text` | `#DDE0DA` | Primary text |
| `text-muted` | `#9AA399` | Secondary text |
| `panel` | `#222722` | Panel fill |
| `panel-accent` | `#2E4233` | Accent panel fill (deep forest) |
| `sage-bright` | `#8AA98C` | Links, illustration strokes, highlights |
| `blob-dark` | `#1E221E` | Organic background blobs |
| `hairline-dark` | `#2E332E` | Dividers |

Theme toggle in nav; default follows system preference.

## 4. Typography

- **One typeface family**: a friendly humanist sans — primary: **Nunito Sans**; fallback: Source Sans 3, system-ui. No serif. No monospace anywhere on the homepage (mono allowed only inside future blog-post code blocks, using JetBrains Mono).
- **Exactly two font sizes site-wide**:
  - **Size L: 22 px / line-height 1.4** — hero greeting, section panel labels.
  - **Size S: 15 px / line-height 1.7** — everything else (body, nav, dates, descriptions, footer).
- Hierarchy comes from **weight and color only**: weight 700 for the hero greeting and panel labels, weight 600 for item titles (at Size S), weight 400 for body. Secondary info in `grey-moss`.
- Panel labels (HELLO, WRITING, …) are **uppercase, letter-spacing 0.08 em, Size S, weight 700** — these replace the marker-style font from the reference with something cleaner but still casual. Optional alternative if more personality wanted: **Caveat** (handwritten) for panel labels only, 22 px, no letter-spacing.

## 5. Background composition

- Base: `paper` fills the canvas.
- **Two organic blobs**, irregular rounded silhouettes (think smooth puddle/stone outlines, 5–7 curve points, no symmetry):
  - Top-right: ~420 × 360 px, `blob-grey`, bleeding off the top and right edges by ≥80 px.
  - Bottom-left: ~380 × 320 px, `blob-grey`, bleeding off the bottom and left edges by ≥80 px.
- **Contour lines**: 4–5 thin (1.5 px) flowing topographic lines in `sage-deep` at 35% opacity, sweeping diagonally behind the hero area from mid-left to top-right, ~600 px wide cluster. They pass *behind* panels, never over text.
- Blobs and contours are static decoration; nothing overlaps interactive content.

## 6. Page structure (top → bottom)

### 6.1 Navigation bar
- Height 72 px, transparent (sits on `paper`), content-column aligned.
- Left: wordmark **"yudhya"** — Size S, weight 700, `forest`.
- Right, single row, Size S, `grey-moss`, gap 28 px: `writing` · `building` · `github` · `linkedin` · `email` · theme-toggle icon (sun/moon, 18 px, `grey-moss`).
- Link hover: color → `forest`, no underline. External links: github → `https://github.com/yudyack`, linkedin → `https://www.linkedin.com/in/yudhyapw/`, email → `mailto:yudhyapatriaw@outlook.com`.

### 6.2 Hero — horizontal, panel "HELLO"
A full-width sage panel (`sage`, radius 16) spanning 12 columns, height ~360 px, padding 48 px. Two columns inside:

- **Left (7 of 12 columns)**:
  - Label `HELLO` (per §4 label style, color `#4A554B`).
  - Greeting, Size L weight 700, `ink`: **"Hi, welcome — I'm Yudhya."**
  - Body, Size S weight 400, `ink`, max-width 52 ch, two paragraphs:
    1. "I've spent four years building back-end and infrastructure systems across fintech, telecom, and IoT — and I write about making those systems legible and efficient."
    2. "Engineer first, with business training that helps me translate technical problems into plain terms."
  - *(Copy is placeholder-final: user will refine wording later, keep lengths similar.)*
- **Right (5 of 12 columns)**: organic illustration on the panel — concentric topographic contour rings (4 rings, `forest` strokes 1.5 px at 60/45/30/20% opacity) around a single 6 px `forest` dot, plus two overlapping leaf-shaped fills in `sage-deep` at 40% opacity tucked behind. No frame around the illustration; it floats on the sage.

### 6.3 Section — WRITING (panel grid)
- Label row: `WRITING` label style, `grey-moss`, margin-bottom 16 px.
- **Three cream cards** (`cream`, radius 16, 1 px `hairline` border, padding 32 px) in a row, 4 columns each:
  1. Title (Size S, weight 600, `ink`): "What 'observable' actually means" — date line (Size S, `grey-moss`): "May 2026" — one-sentence summary (Size S, `grey-moss`): "Observability is a property, not a product category."
  2. "The hidden cost of over-instrumenting" — "May 2026" — "The efficiency case for measuring less, better."
  3. "Where distributed tracing breaks" — "Jun 2026" — "Real failure modes, and what to do about them."
- Card hover: border → `forest` at 40%, background unchanged. Whole card is the link.
- A fourth, ghost element after the cards: text link "all writing →", Size S, `forest`.

### 6.4 Section — BUILDING + NOW (split row)
Two panels side by side, gap 24 px:

- **BUILDING (7 columns, `sage-deep` fill)**, padding 32 px:
  - Label `BUILDING` (`cream`, label style).
  - Item title: "glider.id" (Size S, weight 600, `ink`).
  - Role chip: small `forest` chip, radius 8, text `cream`, Size S: "freelance back-end developer".
  - One description line (Size S, `#2F3A30`): "Backend for a client's business-development management system, built in Java." *(placeholder-final)*
- **NOW (5 columns, `forest` fill)**, padding 32 px — a small "currently" panel:
  - Label `NOW` (`cream` at 70%, label style).
  - Body (Size S, `cream`): "Completing a Master of Management at Universitas Prasetiya Mulya. Open to software engineering roles." 

### 6.5 Footer
- Height 88 px, hairline top border, content-column aligned.
- Left (Size S, `grey-moss`): "© 2026 Yudhya Patria Wicaksono".
- Right, same row style as nav links: `github` · `linkedin` · `email`.

## 7. Motion (restrained)

- On load: panels fade-and-rise 12 px, 500 ms ease-out, staggered 80 ms top-to-bottom. Once only; no looping animation anywhere.
- Hover transitions: 200 ms ease on color/border.
- Respect `prefers-reduced-motion`: disable all of the above.

## 8. Responsive behavior

- ≤ 900 px: hero columns stack (text above illustration, illustration shrinks 60%); WRITING cards become a vertical list; BUILDING/NOW stack full-width.
- ≤ 600 px: nav collapses to wordmark + theme toggle + "menu" (links move to footer); side padding 20 px; blobs scale down 50% and stay behind content.
- Two font sizes rule holds at all breakpoints (sizes may scale down to 20/14 px on mobile).

## 9. Accessibility

- All text pairs must meet WCAG AA: `ink` on `sage` = ~7:1 ✓; `cream` on `forest` = ~8:1 ✓; `grey-moss` on `paper` = ~4.6:1 ✓. Never `grey-moss` on `sage`.
- Focus states: 2 px `forest` outline, 2 px offset, on all interactive elements.
- Theme toggle has `aria-label`; decorative blobs/contours are `aria-hidden`.

## 10. Out of scope for this page

Blog post template, stats/insight page, gallery, music, status page — all deliberately deferred. The page must not fake activity (no fabricated metrics or logos).
