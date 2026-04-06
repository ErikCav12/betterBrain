"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Search,
  FileText,
  Bot,
  Mic,
  MessageSquare,
  BarChart3,
  Check,
  Clock,
  Settings,
  Users,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

/* ─── Data ─── */

interface Accelerator {
  id: string;
  name: string;
  label: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

const accelerators: Accelerator[] = [
  {
    id: "bettersearch",
    name: "BetterSearch",
    label: "Enterprise Knowledge Retrieval",
    icon: Search,
    description:
      "Find the right answer across millions of documents in seconds. BetterSearch connects to your existing data sources and delivers precise, cited answers.",
    features: [
      "Cross-source search",
      "Citation tracing",
      "Real-time learning",
      "Natural language queries",
    ],
  },
  {
    id: "betterdocs",
    name: "BetterDocs",
    label: "Document Intelligence",
    icon: FileText,
    description:
      "Automated document processing that handles contracts, invoices, compliance docs, and more. BetterDocs extracts, classifies, and structures data from any document type.",
    features: [
      "Contract review & analysis",
      "OCR & data extraction",
      "Compliance automation",
      "Entity recognition",
    ],
  },
  {
    id: "betteragent",
    name: "BetterAgent",
    label: "Custom AI Agents",
    icon: Bot,
    description:
      "Context-aware agents that understand your business processes. BetterAgent automates support, research, and operations with agents that learn and adapt.",
    features: [
      "Multi-step workflow automation",
      "Context-aware reasoning",
      "Human-in-the-loop escalation",
      "$200B agentic AI opportunity",
    ],
  },
  {
    id: "bettervoice",
    name: "BetterVoice",
    label: "Voice Agent Automation",
    icon: Mic,
    description:
      "AI-powered voice for inbound and outbound calls. BetterVoice handles call centre operations and captures frontline knowledge automatically.",
    features: [
      "Inbound/outbound call AI",
      "Voice-to-text capture",
      "Sentiment analysis",
      "Powered by ElevenLabs",
    ],
  },
  {
    id: "betterchat",
    name: "BetterChat",
    label: "Conversational AI & Chatbots",
    icon: MessageSquare,
    description:
      "Natural language interfaces for customers and internal teams. BetterChat delivers contextual, accurate responses grounded in your data.",
    features: [
      "Customer-facing chatbots",
      "Internal knowledge Q&A",
      "Multi-channel deployment",
      "Continuous learning",
    ],
  },
  {
    id: "betterinsight",
    name: "BetterInsight",
    label: "Predictive Analytics & Forecasting",
    icon: BarChart3,
    description:
      "Turn historical data into forward-looking intelligence. BetterInsight surfaces trends, detects anomalies, and powers data-driven decisions.",
    features: [
      "Trend detection",
      "Anomaly flagging",
      "Forecasting models",
      "Natural language reporting",
    ],
  },
];

interface EngagementStage {
  number: string;
  title: string;
  timeline: string;
  description: string;
  icon: LucideIcon;
}

const engagementStages: EngagementStage[] = [
  {
    number: "01",
    title: "AI Audit & Roadmap",
    timeline: "1-2 weeks",
    description:
      "Low-risk entry point. We map your data landscape, identify high-value opportunities, and deliver a prioritised roadmap with working prototypes.",
    icon: Clock,
  },
  {
    number: "02",
    title: "Build & Deploy",
    timeline: "4-8 weeks",
    description:
      "Production-ready system built on BetterBrain's proprietary accelerators. Iterative development with continuous feedback loops.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Managed AI Ops",
    timeline: "Ongoing",
    description:
      "Monitoring, retraining, optimisation, and governance. Monthly reporting and a named point of contact.",
    icon: Users,
  },
];

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: "AI/ML Infrastructure",
    description: "Scalable model serving and orchestration",
  },
  {
    title: "RAG Pipelines",
    description: "Retrieval-augmented generation at scale",
  },
  {
    title: "Document Processing",
    description: "Extraction, classification, and structuring",
  },
  {
    title: "Data Structuring",
    description: "Unstructured to structured data pipelines",
  },
  {
    title: "Custom Search Systems",
    description: "Semantic and hybrid search engines",
  },
  {
    title: "Workflow Automation",
    description: "Multi-step process orchestration",
  },
  {
    title: "Entity Recognition",
    description: "Named entity extraction and linking",
  },
  {
    title: "Semantic Analysis",
    description: "Meaning-aware text understanding",
  },
];

/* ─── Page ─── */

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeadline
            text="Six accelerators. Proven across dozens of deployments."
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
              White-label AI products backed by proprietary infrastructure —
              tested across businesses, ready to deploy in weeks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Accelerators Detail */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {accelerators.map((acc, i) => {
            const Icon = acc.icon;
            const isEven = i % 2 === 0;

            return (
              <AnimatedSection
                key={acc.id}
                id={acc.id}
                animation={isEven ? "slide-right" : "slide-left"}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text side */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                      {acc.label}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                      {acc.name}
                    </h3>
                    <p className="text-muted text-lg leading-relaxed mb-6">
                      {acc.description}
                    </p>
                    <ul className="space-y-3">
                      {acc.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-muted"
                        >
                          <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image placeholder */}
                  <div
                    className={`bg-surface border border-border rounded-sm aspect-[4/3] flex items-center justify-center ${
                      isEven ? "" : "lg:order-1"
                    }`}
                  >
                    <Icon className="w-20 h-20 text-accent opacity-30" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Engagement Ladder */}
      <section id="engagement" className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="How We Work"
              title="A clear path from audit to production"
              centered
            />
          </AnimatedSection>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-14 left-[16.67%] right-[16.67%] h-px bg-border" />

            {engagementStages.map((stage, i) => {
              const StageIcon = stage.icon;
              return (
                <AnimatedSection
                  key={stage.number}
                  animation="fade-up"
                  delay={i * 0.15}
                >
                  <div className="relative text-center">
                    {/* Numbered circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {stage.number}
                    </div>

                    {/* Timeline badge */}
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent-light bg-accent/10 px-3 py-1 rounded-sm mb-4">
                      {stage.timeline}
                    </span>

                    <div className="flex items-center justify-center gap-2 mb-3">
                      <StageIcon className="w-5 h-5 text-accent" />
                      <h3 className="text-xl font-bold">{stage.title}</h3>
                    </div>

                    <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                      {stage.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="The IP Behind the Accelerators"
              title="Deep technical capabilities"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} animation="fade-up" delay={i * 0.05}>
                <div className="card-flip bg-surface border border-border rounded-sm p-5">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">
                    {cap.title}
                  </h4>
                  <p className="text-muted text-xs leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to see what BetterBrain can do for you?
            </h2>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
