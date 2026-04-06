---
date: 2026-04-06
topic: prelaunch-polish
---

# Pre-Launch Polish

## What We're Building

Six refinements to the BetterBrain website before go-live this week. Three are visual/compositional (full-bleed hero, visual anchor, card reduction) and three are operational (responsive QA, named exports, SEO metadata).

## Why This Approach

The frontend skill audit surfaced real contradictions — the most impactful are hero composition and card overuse. Copy trim was deprioritised by the user. Railway deployment will happen separately. This is a focused polish pass, not a structural rework.

## Visual Thesis
Dark, confident, specialist. The energy of a premium consultancy that moves at startup speed. Purple accent on near-black — restrained but unmistakable.

## Content Plan
Hero (promise + brand), Support (differentiators + lifecycle), Detail (accelerators + proof), Final CTA (convert).

## Interaction Thesis
1. Word-by-word headline entrance in hero (GSAP stagger)
2. Scroll-triggered section reveals with fade/slide (GSAP ScrollTrigger)
3. Card color-flip on hover (CSS transition — purple bg floods in)

## Key Decisions

- **Full-bleed hero**: Remove max-width constraint on homepage hero. Edge-to-edge gradient, inner text column stays constrained. Apply same pattern to other page heroes.
- **Visual anchor**: Add the brain logo (brainDark.svg) as a large, subtle visual element in the hero — glowing/faded behind the text. No stock photos, no generated images. The brand icon IS the visual anchor.
- **Card reduction**: Convert differentiators (3 cards → 3 columns with dividers), capabilities grid (8 cards → clean list/grid without card chrome). Keep cards ONLY for: accelerators (they're the interaction), testimonials (quotes need containment), partner cards, case study cards.
- **Named exports**: Swap `export default function` to `export function` + separate default export on all page and component files.
- **Responsive QA**: Test at 375px, 768px, 1280px+. Fix layout breaks.
- **SEO metadata**: Unique title + description for every page.

## Open Questions

None — scope is locked.

## Next Steps

→ Plan and implement
