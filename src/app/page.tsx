"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Search,
  FileText,
  Bot,
  Mic,
  MessageSquare,
  BarChart3,
  Zap,
  Layers,
  ArrowRight,
  Cpu,
  Calendar,
  ClipboardCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const differentiators = [
  {
    icon: Cpu,
    title: "Proprietary IP",
    description:
      "Pre-built accelerators backed by years of R&D. This is why we deliver in weeks while others take months.",
  },
  {
    icon: Layers,
    title: "Stack-Agnostic",
    description:
      "Works across AWS, GCP, Azure. No vendor lock-in. Maximum flexibility for your infrastructure.",
  },
  {
    icon: Zap,
    title: "Full-Stack Delivery",
    description:
      "From the data layer to the application layer and everything between. Infrastructure to UI.",
  },
];

const lifecycleSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your data, workflows, and business goals.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Map AI opportunities to measurable outcomes.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop with proprietary accelerators and proven patterns.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Ship to production with monitoring and guardrails.",
  },
  {
    number: "05",
    title: "Adopt",
    description: "Drive user adoption with training and change management.",
  },
  {
    number: "06",
    title: "Optimise",
    description: "Continuously improve with feedback loops and analytics.",
  },
];

const accelerators = [
  {
    icon: Search,
    name: "BetterSearch",
    subtitle: "Enterprise knowledge retrieval",
    description:
      "Find the right answer across millions of documents in seconds.",
    features: [
      "Semantic search across all data sources",
      "Citation tracing and source verification",
      "Role-based access controls",
    ],
  },
  {
    icon: FileText,
    name: "BetterDocs",
    subtitle: "Document intelligence",
    description:
      "Contract review, invoice processing, compliance automation.",
    features: [
      "Automated document classification",
      "Key clause and field extraction",
      "Compliance and audit workflows",
    ],
  },
  {
    icon: Bot,
    name: "BetterAgent",
    subtitle: "Custom AI agents",
    description:
      "Context-aware agents for support, research, and operations.",
    features: [
      "Multi-step reasoning and tool use",
      "Human-in-the-loop escalation",
      "Integration with internal systems",
    ],
  },
  {
    icon: Mic,
    name: "BetterVoice",
    subtitle: "Voice agent automation",
    description: "Inbound/outbound call centre AI, voice capture.",
    features: [
      "Real-time transcription and intent detection",
      "Automated call routing and triage",
      "Post-call summaries and action items",
    ],
  },
  {
    icon: MessageSquare,
    name: "BetterChat",
    subtitle: "Conversational AI & chatbots",
    description:
      "Natural language interfaces for customers and teams.",
    features: [
      "Omnichannel deployment (web, Slack, Teams)",
      "Context-aware multi-turn conversations",
      "Handoff to human agents when needed",
    ],
  },
  {
    icon: BarChart3,
    name: "BetterInsight",
    subtitle: "Predictive analytics",
    description:
      "Forecasting, trend detection, and data-driven decisions.",
    features: [
      "Time-series forecasting and anomaly detection",
      "Natural language querying over dashboards",
      "Automated reporting and alerts",
    ],
  },
];

const marketStats = [
  {
    stat: "91%",
    description: "of mid-market companies have adopted AI",
    source: "RSM 2025",
  },
  {
    stat: "53%",
    description: "feel only 'somewhat prepared' to implement",
    source: "RSM 2025",
  },
  {
    stat: "76%",
    description: "prefer to buy AI rather than build it",
    source: "RSM 2025",
  },
  {
    stat: "67%",
    description: "stuck in pilot purgatory",
    source: "Industry surveys",
  },
];

const proofMetrics = [
  { value: "15hrs", label: "saved/employee/week" },
  { value: "90%", label: "reduction in data requests" },
  { value: "3x", label: "faster project completion" },
];

const testimonials = [
  {
    quote:
      "I run an outbound agency that sends hundreds of thousands of emails a month, and the core asset of the agency, the single thing that has allowed us to close >$600k in top line revenue in the last 6 months is instant access to great data and BetterBrain.",
    name: "Jordan Crawford",
    title: "CEO",
    company: "Blueprint",
    initials: "JC",
  },
  {
    quote:
      "The real problem is all the information that's locked up in people's brains... BetterBrain is able to significantly reduce the time it takes to answer ad hoc data requests.",
    name: "Harshita Girase",
    title: "Analytics Engineer",
    company: "Sigma Computing",
    initials: "HG",
  },
  {
    quote:
      "To efficiently service all of our clients with a small team, we need to store, manage, and analyze a range of data... BetterBrain saves us 20+ hours a week.",
    name: "Benjamin Kinsella",
    title: "Product & GM",
    company: "Tribe AI",
    initials: "BK",
  },
  {
    quote:
      "Our stakeholders are asking a lot of questions that we on the data team don't have the bandwidth to answer... BetterBrain's product can help us learn our company's hidden tribal knowledge.",
    name: "Sanjay Thapa",
    title: "Salesforce Administrator",
    company: "Endeavor",
    initials: "ST",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />

        {/* Visual anchor — brain logo */}
        <img
          src="/brainDark.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] lg:w-[500px] opacity-[0.06] pointer-events-none select-none"
          style={{ filter: "drop-shadow(0 0 80px rgba(124, 58, 237, 0.3))" }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <AnimatedHeadline
            text="Production AI in weeks, not months"
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
            tag="h1"
          />

          <AnimatedSection animation="fade-up" delay={0.6}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Proprietary accelerators. Proven across dozens of deployments.
              Stack-agnostic. No vendor lock-in.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
              >
                Book a Discovery Workshop
              </Button>
              <Button
                href="/contact#assessment"
                variant="secondary"
                size="lg"
                icon={<ClipboardCheck className="w-5 h-5" />}
              >
                AI Readiness Assessment
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Three Differentiators ────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Why BetterBrain"
              title="Three reasons we deliver faster"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} animation="fade-up" delay={i * 0.1}>
                <div className={`py-2 px-8 h-full ${i > 0 ? "md:border-l md:border-border" : ""}`}>
                  <d.icon className="w-8 h-8 text-accent mb-5" />
                  <h3 className="text-xl font-bold mb-3">{d.title}</h3>
                  <p className="text-muted leading-relaxed">{d.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Lifecycle Journey ────────────────────────────────── */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="End-to-End"
              title="From discovery to adoption"
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-0">
              {lifecycleSteps.map((step, i) => (
                <div key={step.title} className="flex items-start">
                  <div className="flex flex-col items-center text-center w-40 shrink-0">
                    <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-bold text-sm mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>

                  {i < lifecycleSteps.length - 1 && (
                    <div className="hidden lg:flex items-center pt-5 px-1">
                      <div className="w-8 h-px bg-accent/30" />
                      <ArrowRight className="w-4 h-4 text-accent/50 shrink-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Accelerators ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Our Accelerators"
              title="Battle-tested AI products, ready to deploy"
              subtitle="White-label accelerators tested across dozens of businesses. Spin up in weeks, not months."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accelerators.map((a, i) => (
              <AnimatedSection key={a.name} animation="fade-up" delay={i * 0.1}>
                <div className="card-flip bg-surface border border-border rounded-sm p-8 h-full flex flex-col">
                  <a.icon className="card-flip-icon w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-1">{a.name}</h3>
                  <p className="card-flip-muted text-muted text-sm mb-3">
                    {a.subtitle}
                  </p>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {a.description}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {a.features.map((f) => (
                      <li
                        key={f}
                        className="card-flip-muted flex items-start gap-2 text-muted text-sm"
                      >
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Market Stats ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Why Now"
              title="The AI gap is your opportunity"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((s, i) => (
              <AnimatedSection key={s.stat} animation="fade-up" delay={i * 0.1}>
                <div className={`py-2 px-8 text-center ${i > 0 ? "lg:border-l lg:border-border" : ""}`}>
                  <p className="text-5xl font-bold text-accent mb-3">
                    {s.stat}
                  </p>
                  <p className="text-muted leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <p className="text-muted/60 text-xs uppercase tracking-wider">
                    Source: {s.source}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Social Proof ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Proven Results"
              title="Our customers love BetterBrain"
            />
          </AnimatedSection>

          {/* Metrics row */}
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {proofMetrics.map((m) => (
                <div
                  key={m.value}
                  className="bg-surface border border-border rounded-sm p-8 text-center"
                >
                  <p className="text-4xl font-bold text-accent mb-2">
                    {m.value}
                  </p>
                  <p className="text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} animation="fade-up" delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-sm p-8 h-full flex flex-col">
                  <p className="text-foreground/90 leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-sm font-bold shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-muted text-sm">
                        {t.title} @ {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Credentials */}
          <AnimatedSection animation="fade-in" delay={0.3}>
            <div className="text-center space-y-3">
              <p className="text-muted text-sm">
                Team from{" "}
                <span className="text-foreground/80 font-medium">
                  Carnegie Mellon, Stanford, Berkeley, Y Combinator, MITRE, PwC,
                  CapSen Robotics
                </span>
              </p>
              <p className="text-muted text-sm">
                Backed by individuals from{" "}
                <span className="text-foreground/80 font-medium">
                  OpenAI, Samsung Next, Hustle Fund, Snowflake
                </span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 7. Dual CTA ─────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A million use cases.
            </h2>
            <p className="text-2xl md:text-3xl text-muted mb-10">
              Ask us about yours.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default Home;
