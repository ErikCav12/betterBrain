---
date: 2026-04-06
topic: website-redesign
---

# BetterBrain Website Redesign

## What We're Building

A full repositioning of the BetterBrain website from generalist AI service provider to specialist mid-market AI partner. The site shifts from "here are 11 things we can do" to "here are 4 battle-tested accelerators with clear outcomes and a low-risk entry point."

Every page answers: What outcome do you get? How fast?

## Why This Approach

The brief provides clear strategic direction: lead with outcomes, productise into 4 accelerators, target mid-market (50–500 employees, $10M–$100M revenue), and differentiate on proprietary IP + speed + full-stack delivery. The reference IX site provides design patterns (sharp corners, Space Grotesk, color-flip cards, progressive disclosure forms) that reinforce the premium specialist positioning.

## Key Decisions

### Navigation
```
Home | Solutions | Industries & Insights | Case Studies | Partners | About | Contact
```

### Products → "Accelerators"
White-label, pre-built, tested across multiple businesses. Spin up in weeks.

| Accelerator | What it does |
|-------------|-------------|
| **BetterSearch** | Enterprise knowledge retrieval |
| **BetterDocs** | Document intelligence (contracts, invoices, compliance) |
| **BetterAgent** | Custom AI agents (support, research, ops) |
| **BetterVoice** | Voice agent automation (call centre, voice capture) |
| **BetterChat** | Conversational AI & chatbots |
| **BetterInsight** | Predictive analytics & forecasting |

No pricing on the website. Value-led messaging only — pricing discussed in conversation.

### Dual CTA (on every page)
- **Primary**: "Book a Discovery Workshop" — high-touch, direct engagement
- **Secondary**: "Take the AI Readiness Assessment" — self-serve, consultants follow up

### Homepage Lifecycle Section
Visual journey: Discovery → Strategy → Build → Deploy → Adopt → Optimise
Shows BetterBrain stays through full journey, not just the build phase.

### Engagement Ladder (Solutions page)
1. **AI Audit & Roadmap** (1–2 weeks) — low-risk entry
2. **Build & Deploy** (4–8 weeks) — production system on BetterBrain IP
3. **Managed AI Ops** (ongoing) — monitoring, retraining, governance

No pricing shown — timelines only.

### Industries & Insights (merged page, independent content)
Industry verticals (Financial Services, Legal/Professional Services) sit at the top of the page. Thought leadership content (whitepapers, articles) sits below — vertical-agnostic, covering cross-cutting topics like RAG in production, agentic AI, AI readiness, etc. Industries and insights share a page but insights are NOT subordinate to verticals.

### Contact (separate page)
Dedicated /contact page with Discovery Workshop booking + AI Readiness Assessment form.

### Three Differentiators (used consistently)
1. **Proprietary IP** — Pre-built accelerators, years of R&D
2. **Stack-agnostic** — AWS, GCP, Azure. No vendor lock-in.
3. **Full-stack delivery** — Infrastructure to UI

### Design System Changes
- **Font**: Space Grotesk (geometric, modern)
- **Accent**: Purple (#7C3AED) — kept from current site
- **Background**: Dark (#0f0a1a) — kept
- **Border radius**: Sharp corners (0 or minimal)
- **Card hover**: Color-flip (purple bg + white text)
- **Icons**: Lucide React
- **UI primitives**: Hand-rolled Button, Input, Textarea, SectionHeading, DualCTA (shadcn/ui skipped — incompatible with Tailwind v4)
- **Logo**: Real brainDark.svg asset
- **Partner logos**: Real SVGs (OpenAI, Snowflake, etc.)

### Market Stats to Feature
| Stat | Use |
|------|-----|
| 91% adopted AI | Hero / "Why now" |
| 53% feel unprepared | The problem |
| 76% prefer to buy | Why outsource |
| 67% stuck in pilot purgatory | Problem statement |
| $200B agentic AI opportunity | BetterAgent page |

### Messaging Shift
- **From**: "We build custom RAG pipelines"
- **To**: "Production AI in weeks. Our clients see 50% faster processing and $200K+ in annual savings."

### What NOT to do
- Don't lead with technology names in headlines
- Don't list 11 services as equal-weight in primary nav
- Don't publish case studies without quantified outcomes
- Don't hide the proprietary IP advantage
- Don't position as cheapest — position as fastest-to-value

## Open Questions

- Exact copy for hero headline (brief suggests speed + outcomes)
- Photography/imagery direction (abstract data visuals vs product screenshots)

## Next Steps

→ Full rebuild of all pages with new structure, messaging, and design system
