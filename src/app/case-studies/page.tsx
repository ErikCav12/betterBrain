"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

const caseStudies = [
  {
    slug: "agency-revenue-growth",
    category: "Sales",
    title: "How a 10-person agency closed ~$1M using BetterBrain as their core asset",
    description:
      "A boutique consultancy deployed BetterBrain to automate prospect research, generate personalized outreach, and surface deal insights — resulting in dramatic revenue growth.",
    metric: "~$1M",
    metricLabel: "Revenue closed",
    tags: ["Outbound Sales", "Knowledge Retrieval", "Automations"],
  },
  {
    slug: "operations-time-savings",
    category: "Operations",
    title: "Saving 20+ hours per week for a Head of Operations",
    description:
      "An enterprise operations team used BetterBrain to automate reporting, data reconciliation, and cross-departmental Q&A — freeing up leadership time for strategic work.",
    metric: "20+",
    metricLabel: "Hours saved per week",
    tags: ["Operations", "Reporting", "Data Insights"],
  },
  {
    slug: "financial-services-compliance",
    category: "Finance",
    title: "Automating compliance review for a financial services firm",
    description:
      "A regulated financial institution leveraged BetterBrain to automate document review, flag compliance risks, and maintain audit trails across thousands of documents.",
    metric: "84%",
    metricLabel: "Faster review cycles",
    tags: ["Compliance", "Document Review", "Finance"],
  },
  {
    slug: "data-team-productivity",
    category: "Data",
    title: "10x productivity gains for a distributed data team",
    description:
      "A global data team deployed BetterBrain to unify knowledge across time zones, automate data quality checks, and accelerate insight delivery to stakeholders.",
    metric: "10x",
    metricLabel: "Productivity gain",
    tags: ["Data Teams", "Knowledge Management", "Global"],
  },
  {
    slug: "consulting-knowledge-management",
    category: "Consulting",
    title: "Transforming institutional knowledge for a management consultancy",
    description:
      "A growing consultancy used BetterBrain to capture and retrieve institutional knowledge from past engagements, proposals, and deliverables — making every consultant smarter.",
    metric: "3x",
    metricLabel: "Faster proposal turnaround",
    tags: ["Consulting", "Knowledge Unlocking", "Proposals"],
  },
  {
    slug: "product-team-automation",
    category: "Product",
    title: "Automating product analytics and user feedback synthesis",
    description:
      "A product team integrated BetterBrain to automatically analyze user feedback, surface feature requests, and generate weekly insight reports across multiple data sources.",
    metric: "60%",
    metricLabel: "Less manual analysis",
    tags: ["Product", "Analytics", "User Feedback"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeadline
            text="Real results from real teams"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              See how organizations across industries are using BetterBrain to
              transform their workflows.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <AnimatedSection
                key={study.slug}
                animation="fade-up"
                delay={i * 0.1}
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="block bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-all group h-full"
                >
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-accent-light transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-3xl font-bold text-accent">
                        {study.metric}
                      </span>
                      <p className="text-muted text-sm">{study.metricLabel}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-background border border-border rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 border border-accent/30 rounded-full px-6 py-3 mb-6">
            <span className="text-accent font-bold">100%</span>
            <span className="text-sm text-muted">
              of our implementations are in production or on track
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your use case could be next
          </h2>
          <Link
            href="/get-started"
            className="inline-block bg-accent hover:bg-accent/80 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get Started
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
