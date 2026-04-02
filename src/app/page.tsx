"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ConsultationModal } from "@/components/ConsultationModal";
import { useState } from "react";
import Link from "next/link";

const capabilities = [
  {
    title: "Knowledge Unlocking",
    description:
      "Cross-organizational insight gathering from unstructured data — PDFs, spreadsheets, meeting notes, and more.",
    icon: "🔓",
  },
  {
    title: "Smart Automations",
    description:
      "Custom-built automations aligned to your specific business processes, not generic workflows.",
    icon: "⚡",
  },
  {
    title: "Data Insights",
    description:
      "Automated analysis across structured and unstructured data sources, delivering actionable intelligence.",
    icon: "📊",
  },
  {
    title: "Intuitive UX",
    description:
      "Easy-to-use standalone interface or seamless integration into your existing tools and frontends.",
    icon: "✨",
  },
  {
    title: "Accurate AI Answers",
    description:
      "Advanced retrieval with citation tracing, bad-answer detection, and human validation loops.",
    icon: "🎯",
  },
  {
    title: "Quick Implementation",
    description:
      "Operational within days, not months. Expert-built integrations tailored to your stack.",
    icon: "🚀",
  },
];

const integrations = [
  "Google Drive",
  "Slack",
  "Notion",
  "Salesforce",
  "Excel",
  "Affinity",
  "PDF",
  "Databases",
];

const testimonials = [
  {
    quote:
      "BetterBrain helped us close ~$1M in revenue in just a few months. It's our core asset now.",
    author: "Head of Growth",
    company: "10-person agency",
  },
  {
    quote:
      "We save 20+ hours per week. Our sales performance has been boosted dramatically — it's a game-changer.",
    author: "Head of Operations",
    company: "Enterprise client",
  },
  {
    quote:
      "The speed of implementation was remarkable. We were operational within days, not the months we expected.",
    author: "VP of Data",
    company: "Financial services firm",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
        <div className="relative max-w-5xl mx-auto text-center">
          <AnimatedSection animation="fade-in" delay={0}>
            <span className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2 text-sm text-muted mb-8">
              Introducing BetterBrain
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </AnimatedSection>

          <AnimatedHeadline
            text="Intelligent workflow automation that understands your business"
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
          />

          <AnimatedSection animation="fade-up" delay={0.6}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Our customized, secure, and context-aware AI solutions make{" "}
              <strong className="text-foreground">advanced insights</strong> from
              across your business instantly{" "}
              <strong className="text-foreground">accessible</strong> and{" "}
              <strong className="text-foreground">actionable</strong>.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/solutions"
                className="border border-border hover:border-accent/50 text-foreground px-8 py-3.5 rounded-lg font-medium transition-all hover:bg-surface text-center"
              >
                Learn More
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-accent hover:bg-accent/80 text-white px-8 py-3.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Get Started
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Six core capabilities designed to transform how your team accesses
              and acts on information.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <AnimatedSection
                key={cap.title}
                animation="fade-up"
                delay={i * 0.1}
              >
                <div className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-all group h-full">
                  <span className="text-3xl mb-4 block">{cap.icon}</span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent-light transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Connects to your stack
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              One-click integrations with the tools your team already uses.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="bg-background border border-border rounded-xl px-6 py-4 text-sm font-medium hover:border-accent/30 transition-all"
                >
                  {name}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by teams that move fast
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection
                key={i}
                animation="fade-up"
                delay={i * 0.15}
              >
                <div className="bg-surface border border-border rounded-2xl p-8 h-full flex flex-col">
                  <p className="text-lg leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-muted text-sm">{t.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance badge */}
      <section className="py-16 px-6 bg-surface">
        <AnimatedSection className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 border border-border rounded-full px-6 py-3">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm font-medium">SOC 2 Type 2 Certified</span>
          </div>
          <p className="text-muted text-sm mt-4 max-w-lg mx-auto">
            Enterprise-grade security across availability, processing integrity,
            confidentiality, and privacy.
          </p>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A million use cases.
            </h2>
            <p className="text-2xl md:text-3xl text-muted mb-10">
              Ask us about yours.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-accent hover:bg-accent/80 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get Started
            </button>
          </AnimatedSection>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
