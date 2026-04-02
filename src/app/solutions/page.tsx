"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ConsultationModal } from "@/components/ConsultationModal";
import { useState } from "react";

const solutions = [
  {
    id: "knowledge",
    title: "Knowledge Unlocking",
    subtitle: "Your entire organization's knowledge, instantly accessible",
    description:
      "BetterBrain connects to your documents, databases, and communication channels to create a unified knowledge layer. Ask questions in natural language and get precise answers with citations traced back to original sources.",
    features: [
      "Cross-departmental knowledge retrieval",
      "Source citation and traceability",
      "Works with PDFs, spreadsheets, meeting notes, and more",
      "Continuous learning from new documents",
    ],
  },
  {
    id: "automations",
    title: "Smart Automations",
    subtitle: "Workflows that work the same way you do",
    description:
      "Custom-built automations that mirror your team's actual processes — not generic templates. From data extraction to report generation, BetterBrain automates the repetitive work so your team can focus on high-value decisions.",
    features: [
      "Process-specific automation design",
      "Multi-step workflow orchestration",
      "Human-in-the-loop validation",
      "Seamless handoffs between AI and team members",
    ],
  },
  {
    id: "insights",
    title: "Data Insights",
    subtitle: "From raw data to clear decisions",
    description:
      "Automated analysis across both structured and unstructured data sources. BetterBrain surfaces trends, anomalies, and actionable intelligence that would take your team days to compile manually.",
    features: [
      "Cross-source data analysis",
      "Trend detection and anomaly flagging",
      "Natural language querying",
      "Automated reporting and dashboards",
    ],
  },
  {
    id: "ux",
    title: "Intuitive UX",
    subtitle: "Powerful AI, simple interface",
    description:
      "A clean, intuitive interface that anyone on your team can use — no training required. Or embed BetterBrain directly into your existing tools via our API and integrations.",
    features: [
      "Standalone web application",
      "API for custom integrations",
      "Embed into existing frontends",
      "Responsive design for any device",
    ],
  },
  {
    id: "accuracy",
    title: "Accurate AI Answers",
    subtitle: "Trust every answer",
    description:
      "BetterBrain uses advanced retrieval-augmented generation with built-in guardrails. Every answer is grounded in your data, with citations you can verify and confidence scores you can trust.",
    features: [
      "Advanced RAG with source grounding",
      "Bad-answer detection and filtering",
      "Confidence scoring",
      "Human validation loops for critical decisions",
    ],
  },
  {
    id: "implementation",
    title: "Quick Implementation",
    subtitle: "Operational in days, not months",
    description:
      "Our expert team handles everything — from data ingestion to deployment. Most clients are fully operational within days, with dedicated support throughout the process and beyond.",
    features: [
      "Dedicated implementation team",
      "Pre-built connectors for popular tools",
      "Iterative deployment with real-time feedback",
      "Ongoing optimization and support",
    ],
  },
];

const methodology = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your data landscape, identify high-value automation opportunities, and define success metrics.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Custom solution architecture tailored to your workflows, data sources, and team structure.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Rapid development with continuous feedback loops. You see progress from day one.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Smooth rollout with comprehensive testing, training, and monitoring in place.",
  },
  {
    step: "05",
    title: "Evolve",
    description:
      "Continuous optimization based on usage patterns, new data sources, and evolving business needs.",
  },
];

export default function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeadline
            text="Solutions built for how you actually work"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              Six core capabilities that transform how your team accesses,
              analyzes, and acts on information.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((solution, i) => (
            <AnimatedSection
              key={solution.id}
              id={solution.id}
              animation={i % 2 === 0 ? "slide-right" : "slide-left"}
              className="scroll-mt-24"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {solution.title}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    {solution.subtitle}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-muted"
                      >
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-surface border border-border rounded-2xl aspect-[4/3] flex items-center justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <span className="text-6xl">{["🔓", "⚡", "📊", "✨", "🎯", "🚀"][i]}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our methodology
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A proven process that gets you from zero to production, fast.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {methodology.map((step, i) => (
              <AnimatedSection key={step.step} animation="fade-up" delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-accent text-4xl font-bold">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to see what BetterBrain can do?
            </h2>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-accent hover:bg-accent/80 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Request a Consultation
            </button>
          </AnimatedSection>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
