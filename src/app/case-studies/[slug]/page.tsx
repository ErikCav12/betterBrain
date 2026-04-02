import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudyData: Record<
  string,
  {
    category: string;
    title: string;
    metric: string;
    metricLabel: string;
    challenge: string;
    solution: string;
    results: string[];
    tags: string[];
  }
> = {
  "agency-revenue-growth": {
    category: "Sales",
    title: "How a 10-person agency closed ~$1M using BetterBrain",
    metric: "~$1M",
    metricLabel: "Revenue closed in months",
    challenge:
      "A boutique agency struggled with manual prospect research, inconsistent outreach, and siloed deal intelligence. Their small team couldn't scale their sales process without significant headcount.",
    solution:
      "BetterBrain was deployed to automate prospect research, generate personalized outreach at scale, and surface deal insights from CRM data, emails, and meeting notes. The platform became the central intelligence layer for their entire sales operation.",
    results: [
      "~$1M in new revenue closed within months of deployment",
      "Sales cycle shortened by 40%",
      "Prospect research time reduced from hours to minutes",
      "BetterBrain became the team's self-described 'core asset'",
    ],
    tags: ["Outbound Sales", "Knowledge Retrieval", "Automations"],
  },
  "operations-time-savings": {
    category: "Operations",
    title: "Saving 20+ hours per week for a Head of Operations",
    metric: "20+",
    metricLabel: "Hours saved per week",
    challenge:
      "An enterprise operations team spent the majority of their time on manual reporting, data reconciliation across multiple systems, and answering repetitive cross-departmental questions.",
    solution:
      "BetterBrain automated daily and weekly reporting, connected disparate data sources for real-time reconciliation, and provided a self-serve Q&A interface for the broader organization.",
    results: [
      "20+ hours per week freed up for strategic work",
      "Reporting turnaround reduced from days to minutes",
      "Cross-departmental queries handled autonomously",
      "Dramatic improvement in sales team performance",
    ],
    tags: ["Operations", "Reporting", "Data Insights"],
  },
  "financial-services-compliance": {
    category: "Finance",
    title: "Automating compliance review for a financial services firm",
    metric: "84%",
    metricLabel: "Faster review cycles",
    challenge:
      "A regulated financial institution needed to review thousands of documents for compliance, maintain audit trails, and ensure nothing slipped through the cracks — all while keeping pace with regulatory changes.",
    solution:
      "BetterBrain was configured to ingest regulatory documents alongside internal policies, flag compliance risks automatically, and maintain comprehensive audit trails with full source traceability.",
    results: [
      "84% faster compliance review cycles",
      "Zero missed compliance flags since deployment",
      "Full audit trail with source citations",
      "Regulatory updates automatically incorporated",
    ],
    tags: ["Compliance", "Document Review", "Finance"],
  },
  "data-team-productivity": {
    category: "Data",
    title: "10x productivity gains for a distributed data team",
    metric: "10x",
    metricLabel: "Productivity gain",
    challenge:
      "A global data team spread across time zones struggled with knowledge silos, duplicated work, and slow insight delivery to business stakeholders who needed answers fast.",
    solution:
      "BetterBrain unified the team's knowledge base, automated data quality checks, and provided a natural language interface for stakeholders to self-serve common data requests.",
    results: [
      "10x improvement in insight delivery speed",
      "Eliminated knowledge silos across time zones",
      "Self-serve data access reduced ad-hoc requests by 70%",
      "Data quality issues caught 5x faster",
    ],
    tags: ["Data Teams", "Knowledge Management", "Global"],
  },
  "consulting-knowledge-management": {
    category: "Consulting",
    title: "Transforming institutional knowledge for a management consultancy",
    metric: "3x",
    metricLabel: "Faster proposal turnaround",
    challenge:
      "A growing consultancy's institutional knowledge was trapped in past proposals, deliverables, and the heads of senior partners. New consultants spent weeks getting up to speed on each engagement.",
    solution:
      "BetterBrain ingested the firm's entire history of proposals, deliverables, and engagement notes, making institutional knowledge instantly searchable and reusable across the organization.",
    results: [
      "3x faster proposal turnaround time",
      "New consultant onboarding reduced from weeks to days",
      "Proposal win rate improved significantly",
      "Senior partner time freed from repetitive knowledge transfer",
    ],
    tags: ["Consulting", "Knowledge Unlocking", "Proposals"],
  },
  "product-team-automation": {
    category: "Product",
    title: "Automating product analytics and user feedback synthesis",
    metric: "60%",
    metricLabel: "Less manual analysis",
    challenge:
      "A product team was drowning in user feedback from multiple channels — support tickets, NPS surveys, app reviews, and sales call notes. Synthesizing this into actionable product decisions was a full-time job.",
    solution:
      "BetterBrain connected to all feedback channels, automatically categorized and prioritized feature requests, and generated weekly insight reports that product leadership could act on immediately.",
    results: [
      "60% reduction in manual analysis time",
      "Feedback-to-insight cycle reduced from weeks to hours",
      "Feature prioritization backed by comprehensive data",
      "Weekly automated reports replaced manual quarterly reviews",
    ],
    tags: ["Product", "Analytics", "User Feedback"],
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Case Studies
            </Link>
            <span className="block text-accent text-sm font-semibold tracking-wider uppercase mt-6 mb-2">
              {study.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-surface border border-border rounded-full px-4 py-1.5"
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
            <div className="bg-surface border border-accent/20 rounded-2xl p-12 text-center">
              <span className="text-6xl md:text-8xl font-bold text-accent">
                {study.metric}
              </span>
              <p className="text-muted text-lg mt-2">{study.metricLabel}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted text-lg leading-relaxed">
              {study.challenge}
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
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <ul className="space-y-4">
              {study.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-1 shrink-0"
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
                  <span className="text-lg text-muted">{result}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for similar results?
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
