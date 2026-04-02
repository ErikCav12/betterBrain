"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

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
      "Practical strategies for building production AI systems that deliver consistent, trustworthy results — even when the underlying models aren't perfect.",
    date: "February 2026",
    readTime: "12 min read",
  },
  {
    slug: "ai-workflow-automation-guide",
    category: "Guide",
    title: "A Practical Guide to AI Workflow Automation",
    description:
      "Everything you need to know about identifying, scoping, and implementing AI-powered workflow automation in your organization.",
    date: "February 2026",
    readTime: "15 min read",
  },
  {
    slug: "rag-production-lessons",
    category: "Technical",
    title: "Lessons from 50+ RAG Deployments in Production",
    description:
      "What we've learned from deploying retrieval-augmented generation at scale across industries — the patterns that work and the pitfalls to avoid.",
    date: "January 2026",
    readTime: "10 min read",
  },
  {
    slug: "ai-readiness-assessment",
    category: "Guide",
    title: "Is Your Organization AI-Ready? A Framework for Assessment",
    description:
      "A structured framework for evaluating your organization's readiness to adopt AI — covering data, processes, people, and technology.",
    date: "January 2026",
    readTime: "7 min read",
  },
  {
    slug: "knowledge-management-ai-era",
    category: "Thought Leadership",
    title: "Knowledge Management in the AI Era",
    description:
      "How AI is transforming knowledge management from a passive repository into an active intelligence layer that surfaces insights proactively.",
    date: "December 2025",
    readTime: "9 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeadline
            text="Insights and thought leadership"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              Perspectives on AI, automation, and the future of enterprise
              intelligence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Featured article */}
          <AnimatedSection animation="fade-up" className="mb-12">
            <Link
              href={`/insights/${articles[0].slug}`}
              className="block bg-surface border border-border rounded-2xl p-10 md:p-14 hover:border-accent/30 transition-all group"
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                {articles[0].category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 group-hover:text-accent-light transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-3xl mb-6">
                {articles[0].description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted">
                <span>{articles[0].date}</span>
                <span>&middot;</span>
                <span>{articles[0].readTime}</span>
              </div>
            </Link>
          </AnimatedSection>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <AnimatedSection
                key={article.slug}
                animation="fade-up"
                delay={i * 0.1}
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="block bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-all group h-full"
                >
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-accent-light transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted">
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

      <section className="py-24 px-6 bg-surface">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay informed
          </h2>
          <p className="text-muted text-lg mb-8">
            Get the latest insights on AI and workflow automation delivered to
            your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-accent/25 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </AnimatedSection>
      </section>
    </>
  );
}
