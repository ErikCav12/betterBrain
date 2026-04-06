import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const articleData: Record<
  string,
  {
    category: string;
    title: string;
    date: string;
    readTime: string;
    content: string[];
  }
> = {
  "future-of-enterprise-ai": {
    category: "Thought Leadership",
    title: "The Future of Enterprise AI: Beyond Chatbots",
    date: "March 2026",
    readTime: "8 min read",
    content: [
      "The enterprise AI landscape is undergoing a fundamental shift. While the first wave of adoption focused on conversational interfaces — chatbots for customer service, internal Q&A bots, and simple text generation — the next wave is far more ambitious.",
      "Context-aware automation represents the next frontier. Rather than waiting for users to ask questions, the most impactful AI systems proactively surface insights, automate multi-step workflows, and adapt to the specific patterns of each organization.",
      "The key differentiator isn't the underlying model — it's the depth of integration with business processes. An AI system that understands your data, your workflows, and your team's decision-making patterns can deliver exponentially more value than a generic chatbot layered on top of your existing tools.",
      "At BetterBrain, we've seen this firsthand across dozens of deployments. The organisations getting the most value from AI aren't the ones with the most sophisticated models — they're the ones with the deepest integration between AI and their actual work.",
      "This article is a placeholder for thought leadership content. In production, this would contain the full article with rich formatting, images, and embedded media.",
    ],
  },
  "building-reliable-ai-systems": {
    category: "Technical",
    title: "How to Build Reliable Systems with Unreliable AI",
    date: "February 2026",
    readTime: "12 min read",
    content: [
      "Large language models are probabilistic by nature. They can produce inconsistent outputs, hallucinate facts, and fail in unexpected ways. Yet production AI systems need to be reliable, consistent, and trustworthy.",
      "The solution isn't to wait for perfect models — it's to build systems that are robust despite model imperfections. This requires a fundamentally different approach to system design.",
      "Key strategies include: retrieval-augmented generation to ground outputs in real data, confidence scoring to flag uncertain responses, human-in-the-loop validation for high-stakes decisions, and comprehensive evaluation pipelines to catch regressions before they reach production.",
      "Evaluation-driven development — building your test suite before your features — is the single most impactful practice for reliable AI systems. When you can measure reliability, you can systematically improve it.",
      "This article is a placeholder for technical content. In production, this would contain detailed technical guidance with code examples and architecture diagrams.",
    ],
  },
  "ai-workflow-automation-guide": {
    category: "Guide",
    title: "A Practical Guide to AI Workflow Automation",
    date: "February 2026",
    readTime: "15 min read",
    content: [
      "AI workflow automation is the application of artificial intelligence to automate, enhance, or replace manual business processes. Unlike traditional automation (RPA), AI-powered automation can handle unstructured data, make nuanced decisions, and adapt to changing conditions.",
      "The best candidates for AI automation share three characteristics: they involve repetitive cognitive work, they rely on information scattered across multiple sources, and they currently require significant manual effort to maintain quality.",
      "Implementation follows a proven pattern: identify the workflow, map the data sources, define success metrics, build iteratively with human oversight, and continuously optimise based on real-world performance.",
      "Common pitfalls include: trying to automate everything at once, underestimating data quality requirements, skipping the evaluation phase, and failing to design for human escalation paths.",
      "This article is a placeholder for guide content. In production, this would contain a comprehensive step-by-step guide with examples and templates.",
    ],
  },
  "rag-production-lessons": {
    category: "Technical",
    title: "Lessons from 50+ RAG Deployments in Production",
    date: "January 2026",
    readTime: "10 min read",
    content: [
      "Retrieval-augmented generation (RAG) has become the standard architecture for enterprise AI systems that need to reason over private data. After deploying 50+ RAG systems across industries, we've identified patterns that separate successful deployments from failed experiments.",
      "Lesson #1: Chunking strategy matters more than model choice. How you split, embed, and index your documents has a bigger impact on answer quality than which LLM you use.",
      "Lesson #2: Evaluation must be continuous. A RAG system that works today might degrade tomorrow as new documents are added or user queries evolve. Automated evaluation pipelines are essential.",
      "Lesson #3: Citation and traceability aren't optional. Enterprise users need to verify AI-generated answers. Every claim should trace back to a specific source.",
      "This article is a placeholder for technical content. In production, this would contain detailed lessons with real examples from anonymised deployments.",
    ],
  },
  "ai-readiness-assessment": {
    category: "Guide",
    title: "Is Your Organisation AI-Ready? A Framework for Assessment",
    date: "January 2026",
    readTime: "7 min read",
    content: [
      "Before investing in AI, organisations need an honest assessment of their readiness. This framework evaluates four dimensions: data maturity, process readiness, team capability, and technical infrastructure.",
      "Data maturity covers: Is your data accessible? Is it clean? Is it comprehensive? Organisations with siloed, inconsistent, or incomplete data will struggle to get value from AI regardless of how good the technology is.",
      "Process readiness asks: Are your workflows documented? Are there clear success metrics? AI automation works best when you can clearly define what 'good' looks like.",
      "Team capability assesses: Does your team understand AI's strengths and limitations? Are there champions who can drive adoption? Cultural readiness is often the biggest determinant of success.",
      "This article is a placeholder for guide content. In production, this would include a self-assessment tool and detailed recommendations for each readiness level.",
    ],
  },
  "knowledge-management-ai-era": {
    category: "Thought Leadership",
    title: "Knowledge Management in the AI Era",
    date: "December 2025",
    readTime: "9 min read",
    content: [
      "Traditional knowledge management has always been a paradox: the more knowledge you capture, the harder it becomes to find what you need. Filing systems, wikis, and search tools help — but they still require users to know what to look for.",
      "AI fundamentally changes this dynamic. Instead of passively storing information and waiting for queries, AI-powered knowledge systems actively surface relevant insights based on context — what you're working on, who you're meeting with, what decisions need to be made.",
      "This shift from 'pull' to 'push' knowledge management has profound implications for how organisations operate. When the right information finds the right person at the right time, decision quality improves, duplicated work decreases, and institutional knowledge becomes truly accessible.",
      "The organisations leading this transition are those that treat AI not as a search replacement, but as an active member of the team — one that reads everything, remembers everything, and proactively shares what's relevant.",
      "This article is a placeholder for thought leadership content. In production, this would explore the implications in depth with case studies and frameworks.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({ slug }));
}

export async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) notFound();

  return (
    <>
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up">
            <Link
              href="/insights"
              className="text-accent text-sm font-medium hover:text-accent-light transition-colors mb-6 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Industries & Insights
            </Link>
            <span className="block text-accent text-sm font-semibold tracking-wider uppercase mt-6 mb-2">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>{article.date}</span>
              <span>&middot;</span>
              <span>{article.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" delay={0.2}>
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-muted text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold mb-4">Want to learn more?</h3>
            <p className="text-muted mb-8">
              See how BetterBrain puts these ideas into practice.
            </p>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default ArticlePage;
