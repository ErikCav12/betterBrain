import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudyData: Record<
  string,
  {
    category: string;
    title: string;
    metric: string;
    metricLabel: string;
    problem: string;
    solution: string;
    results: string[];
    tags: string[];
  }
> = {
  "agency-revenue-growth": {
    category: "Sales",
    title: "How a 10-person agency closed >$600K in 6 months",
    metric: ">$600K",
    metricLabel: "Revenue closed in 6 months",
    problem:
      "A boutique outbound agency was spending hours on manual prospect research for every campaign. Data access was the bottleneck — the team couldn't differentiate at scale without better intelligence.",
    solution:
      "BetterBrain was deployed as the agency's core data asset. It connected to all existing data sources, enabled instant natural language querying, and automated prospect research that previously took hours per batch.",
    results: [
      ">$600K in top-line revenue closed in 6 months",
      "Prospect research reduced from hours to minutes",
      "BetterBrain became the agency's self-described 'core asset'",
      "Hundreds of thousands of personalised emails powered by better data access",
    ],
    tags: ["Outbound Sales", "Data Access", "Revenue Growth"],
  },
  "operations-time-savings": {
    category: "Operations",
    title: "Saving 20+ hours per week for an enterprise ops team",
    metric: "20+",
    metricLabel: "Hours saved per week",
    problem:
      "An enterprise operations team spent the majority of their week on manual reporting, data reconciliation across multiple systems, and answering repetitive cross-departmental questions.",
    solution:
      "BetterBrain automated daily and weekly reporting, connected disparate data sources for real-time reconciliation, and provided a self-serve Q&A interface for the broader organisation.",
    results: [
      "20+ hours per week freed up for strategic work",
      "Reporting turnaround reduced from days to minutes",
      "Cross-departmental queries handled autonomously",
      "Dramatic improvement in team productivity",
    ],
    tags: ["Operations", "Reporting", "Productivity"],
  },
  "financial-services-compliance": {
    category: "Finance",
    title: "90% reduction in time spent on data requests",
    metric: "90%",
    metricLabel: "Reduction in data request time",
    problem:
      "A financial services data team was overwhelmed by ad hoc data requests from stakeholders. Most of the team's time went to answering questions rather than building data products.",
    solution:
      "BetterBrain provided a natural language interface to the company's data, enabling stakeholders to self-serve answers. The platform learned from each interaction, improving accuracy over time.",
    results: [
      "90% reduction in time spent on ad hoc data requests",
      "Stakeholders able to self-serve common queries",
      "Data team refocused on high-value analytics",
      "Platform accuracy improved continuously with usage",
    ],
    tags: ["Financial Services", "Data Teams", "Self-Serve"],
  },
  "data-team-productivity": {
    category: "Data",
    title: "3x faster project completion for a distributed data team",
    metric: "3x",
    metricLabel: "Faster project completion",
    problem:
      "A global data team spread across time zones struggled with knowledge silos, duplicated work, and slow insight delivery to business stakeholders who needed answers fast.",
    solution:
      "BetterBrain unified the team's knowledge base, automated data quality checks, and provided a natural language interface for stakeholders to self-serve common data requests.",
    results: [
      "3x improvement in project completion speed",
      "Eliminated knowledge silos across time zones",
      "Self-serve data access reduced ad-hoc requests by 70%",
      "Data quality issues caught significantly faster",
    ],
    tags: ["Data Teams", "Knowledge Management", "Global"],
  },
  "consulting-knowledge-management": {
    category: "Consulting",
    title: "15 hours saved per employee, every week",
    metric: "15hrs",
    metricLabel: "Saved per employee per week",
    problem:
      "A growing consultancy's institutional knowledge was trapped in past proposals, deliverables, and the heads of senior partners. New consultants spent weeks getting up to speed on each engagement.",
    solution:
      "BetterBrain ingested the firm's entire history of proposals, deliverables, and engagement notes, making institutional knowledge instantly searchable and reusable across the organisation.",
    results: [
      "15 hours saved per employee per week",
      "New consultant onboarding reduced from weeks to days",
      "Proposal quality and consistency improved across the firm",
      "Senior partner time freed from repetitive knowledge transfer",
    ],
    tags: ["Consulting", "Knowledge Unlocking", "Onboarding"],
  },
  "product-team-automation": {
    category: "Product",
    title: "Unlocking hidden tribal knowledge at scale",
    metric: "∞",
    metricLabel: "Tribal knowledge preserved",
    problem:
      "Stakeholders were asking questions the data team didn't have the bandwidth to answer. Critical business knowledge existed only in people's heads, inaccessible to the rest of the organisation.",
    solution:
      "BetterBrain captured undocumented expertise, learned from the company's hidden tribal knowledge, and made every employee smarter by surfacing institutional intelligence in real time.",
    results: [
      "Undocumented expertise captured and made searchable",
      "Stakeholder questions answered without data team involvement",
      "Throughput significantly increased across the organisation",
      "No other tool in the market could learn hidden tribal knowledge",
    ],
    tags: ["Product", "Tribal Knowledge", "Scalability"],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyData[slug];

  if (!study) notFound();

  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <Link
              href="/case-studies"
              className="text-accent text-sm font-medium hover:text-accent-light transition-colors mb-6 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            <span className="block text-accent text-sm font-semibold tracking-wider uppercase mt-6 mb-2">
              {study.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-surface border border-border rounded-sm px-4 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Metric */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale">
            <div className="bg-surface border border-accent/20 rounded-sm p-12 text-center">
              <span className="text-6xl md:text-8xl font-bold text-accent">
                {study.metric}
              </span>
              <p className="text-muted text-lg mt-2">{study.metricLabel}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-muted text-lg leading-relaxed">
              {study.problem}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-muted text-lg leading-relaxed">
              {study.solution}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-bold mb-6">The Number</h2>
            <ul className="space-y-4">
              {study.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span className="text-lg text-muted">{result}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for similar results?
            </h2>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
