"use client";

import Link from "next/link";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Check } from "lucide-react";

const caseStudies = [
  {
    slug: "agency-revenue-growth",
    category: "Sales",
    title: "How a 10-person agency closed >$600K in 6 months",
    description:
      "A boutique agency was drowning in manual prospect research. BetterBrain automated data access and differentiation, becoming the core asset of their sales operation.",
    metric: ">$600K",
    metricLabel: "Revenue closed in 6 months",
  },
  {
    slug: "operations-time-savings",
    category: "Operations",
    title: "Saving 20+ hours per week for an enterprise ops team",
    description:
      "Manual reporting and cross-departmental Q&A consumed leadership bandwidth. Automated workflows freed the team for strategic work.",
    metric: "20+",
    metricLabel: "Hours saved per week",
  },
  {
    slug: "financial-services-compliance",
    category: "Finance",
    title: "90% reduction in time spent on data requests",
    description:
      "A financial services team spent most of their time answering ad hoc data requests. AI-powered retrieval made answers instant and self-serve.",
    metric: "90%",
    metricLabel: "Reduction in data request time",
  },
  {
    slug: "data-team-productivity",
    category: "Data",
    title: "3x faster project completion for a distributed data team",
    description:
      "Knowledge silos and duplicated work across time zones. Unified knowledge layer accelerated insight delivery to stakeholders.",
    metric: "3x",
    metricLabel: "Faster project completion",
  },
  {
    slug: "consulting-knowledge-management",
    category: "Consulting",
    title: "15 hours saved per employee, every week",
    description:
      "Institutional knowledge trapped in past deliverables and senior partners' heads. AI captured and surfaced hidden expertise organisation-wide.",
    metric: "15hrs",
    metricLabel: "Saved per employee per week",
  },
  {
    slug: "product-team-automation",
    category: "Product",
    title: "Unlocking hidden tribal knowledge at scale",
    description:
      "Stakeholders asking questions the data team couldn't answer fast enough. AI learned the company's undocumented expertise and made every employee smarter.",
    metric: "\u221E",
    metricLabel: "Tribal knowledge preserved",
  },
];

export function CaseStudiesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <AnimatedHeadline
            text="Real results from real teams"
            tag="h1"
            className="text-4xl md:text-6xl font-bold tracking-tight"
          />
          <p className="text-lg md:text-xl text-muted mt-6 max-w-2xl">
            Every engagement follows Problem &rarr; Solution &rarr; Number. No case
            study without a quantified outcome.
          </p>
        </AnimatedSection>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <AnimatedSection key={study.slug} animation="fade-up" delay={i * 100}>
                <Link href={`/case-studies/${study.slug}`} className="block h-full">
                  <div className="card-flip rounded-sm border border-border p-8 h-full flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold mt-3 mb-4">{study.title}</h3>
                    <p className="text-muted leading-relaxed flex-1">
                      {study.description}
                    </p>
                    <div className="mt-8 pt-6 border-t border-border flex items-end justify-between">
                      <div>
                        <p className="text-4xl font-bold text-accent">
                          {study.metric}
                        </p>
                        <p className="text-sm text-muted mt-1">
                          {study.metricLabel}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Production Stat Callout */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection animation="scale">
            <div className="rounded-sm border border-accent/20 bg-accent/5 p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Check className="w-6 h-6 text-accent" />
                <span className="text-2xl md:text-3xl font-bold">100%</span>
              </div>
              <p className="text-lg text-muted">
                of our implementations are in production or on track.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <SectionHeading
              label="Get Started"
              title="See what AI can do for your team"
              centered
            />
            <div className="mt-8">
              <DualCTA />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

export default CaseStudiesPage;
