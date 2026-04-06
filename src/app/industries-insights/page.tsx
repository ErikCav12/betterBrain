"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Landmark,
  Scale,
  TrendingUp,
  FileText,
  Shield,
  Search,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    name: "Financial Services",
    icon: Landmark,
    target: "Regional banks, credit unions, insurance brokers, fintechs (50-500 employees)",
    stat: "80%+ of banks already use AI tools",
    useCases: [
      { icon: Shield, label: "Fraud detection & risk assessment" },
      { icon: FileText, label: "Compliance monitoring & reporting" },
      { icon: Search, label: "RAG for regulatory documents" },
      { icon: TrendingUp, label: "Predictive analytics for portfolio management" },
    ],
  },
  {
    name: "Legal & Professional Services",
    icon: Scale,
    target: "Law firms, corporate legal departments, compliance-heavy services (50-500 employees)",
    stat: "Contract review is the highest-ROI AI use case across all industries",
    useCases: [
      { icon: FileText, label: "Contract review & analysis" },
      { icon: Search, label: "Case law RAG & legal research" },
      { icon: Shield, label: "Entity recognition & classification" },
      { icon: TrendingUp, label: "Document processing & OCR" },
    ],
  },
];

const articles = [
  {
    slug: "future-of-enterprise-ai",
    category: "Thought Leadership",
    title: "The Future of Enterprise AI: Beyond Chatbots",
    description:
      "Why the next wave of enterprise AI isn't about chatbots — it's about deeply contextual automation that understands your business processes.",
    date: "March 2026",
    readTime: "8 min read",
  },
  {
    slug: "building-reliable-ai-systems",
    category: "Technical",
    title: "How to Build Reliable Systems with Unreliable AI",
    description:
      "Practical strategies for building production AI systems that deliver consistent, trustworthy results.",
    date: "February 2026",
    readTime: "12 min read",
  },
  {
    slug: "ai-workflow-automation-guide",
    category: "Guide",
    title: "A Practical Guide to AI Workflow Automation",
    description:
      "Everything you need to know about identifying, scoping, and implementing AI-powered workflow automation.",
    date: "February 2026",
    readTime: "15 min read",
  },
  {
    slug: "rag-production-lessons",
    category: "Technical",
    title: "Lessons from 50+ RAG Deployments in Production",
    description:
      "What we've learned from deploying retrieval-augmented generation at scale — patterns that work and pitfalls to avoid.",
    date: "January 2026",
    readTime: "10 min read",
  },
  {
    slug: "ai-readiness-assessment",
    category: "Guide",
    title: "Is Your Organisation AI-Ready? A Framework for Assessment",
    description:
      "A structured framework for evaluating your organisation's readiness to adopt AI — covering data, processes, people, and technology.",
    date: "January 2026",
    readTime: "7 min read",
  },
  {
    slug: "knowledge-management-ai-era",
    category: "Thought Leadership",
    title: "Knowledge Management in the AI Era",
    description:
      "How AI is transforming knowledge management from a passive repository into an active intelligence layer.",
    date: "December 2025",
    readTime: "9 min read",
  },
];

export default function IndustriesInsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeadline
            text="Industries we serve and ideas we share"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
              Deep expertise in high-value verticals, backed by cross-cutting
              thought leadership on AI strategy and implementation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Industry Expertise"
              title="Verticals we know deeply"
              subtitle="Technology, finance, ecommerce, healthcare, legal, manufacturing, and logistics."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, i) => (
              <AnimatedSection
                key={industry.name}
                animation="fade-up"
                delay={i * 0.15}
              >
                <div className="bg-surface border border-border rounded-sm p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <industry.icon className="w-7 h-7 text-accent" />
                    <h3 className="text-2xl font-bold">{industry.name}</h3>
                  </div>
                  <p className="text-muted text-sm mb-2">{industry.target}</p>
                  <div className="inline-block bg-accent/10 border border-accent/20 rounded-sm px-3 py-1 mb-6">
                    <span className="text-accent text-sm font-medium">
                      {industry.stat}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.useCases.map((uc) => (
                      <div
                        key={uc.label}
                        className="flex items-start gap-2 text-sm"
                      >
                        <uc.icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted">{uc.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Insights"
              title="Thought leadership"
              subtitle="Perspectives on AI strategy, implementation, and the future of enterprise intelligence."
            />
          </AnimatedSection>

          {/* Featured */}
          <AnimatedSection animation="fade-up" className="mb-8">
            <Link
              href={`/industries-insights/${articles[0].slug}`}
              className="block card-flip bg-background border border-border rounded-sm p-10 md:p-14 group"
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                {articles[0].category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                {articles[0].title}
              </h3>
              <p className="card-flip-muted text-muted text-lg leading-relaxed max-w-3xl mb-6">
                {articles[0].description}
              </p>
              <div className="flex items-center gap-4 text-sm card-flip-muted text-muted">
                <span>{articles[0].date}</span>
                <span>&middot;</span>
                <span>{articles[0].readTime}</span>
              </div>
            </Link>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <AnimatedSection
                key={article.slug}
                animation="fade-up"
                delay={i * 0.1}
              >
                <Link
                  href={`/industries-insights/${article.slug}`}
                  className="block card-flip bg-background border border-border rounded-sm p-8 h-full"
                >
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="card-flip-muted text-muted leading-relaxed mb-6">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm card-flip-muted text-muted">
                    <span>{article.date}</span>
                    <span>&middot;</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay informed</h2>
          <p className="text-muted text-lg mb-8">
            Get the latest insights on AI strategy and implementation.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-surface border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See how AI applies to your industry
            </h2>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
