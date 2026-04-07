"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { Button } from "@/components/ui/Button";

/*
  Stack layers ordered top (application) to bottom (compute).
  BetterBrain spans the right side as the application-layer integrator.
  Colors follow the reference: blue=app, red=data, pink=tools, orange=model, green=infra
*/

const layers = [
  {
    label: "Application Experience",
    desc: "Where AI meets users — horizontal and vertical business applications",
    color: "bg-blue-500",
    items: ["Horizontal Apps", "Vertical Apps"],
  },
  {
    label: "Data Platforms & Management",
    desc: "Ingest, clean, store, and serve data for AI workloads",
    color: "bg-red-500",
    items: ["Enterprise Data", "Ingestion", "Cleaning", "Data Lake", "Vector Store"],
  },
  {
    label: "MLOps",
    desc: "Ship, monitor, and iterate on models in production",
    color: "bg-pink-500",
    items: ["Prompt Engineering", "Deployment", "Monitoring / Observability"],
  },
  {
    label: "Fine-Tuned Models",
    desc: "Domain-specific models trained on your data for higher accuracy",
    color: "bg-amber-500",
    items: ["Domain Models", "Model Training"],
  },
  {
    label: "Foundation Models",
    desc: "Large-scale pre-trained models — closed-source, open-source, and model hubs",
    color: "bg-amber-600",
    items: ["Anthropic", "OpenAI", "Meta Llama", "Mistral", "Hugging Face"],
  },
  {
    label: "Cloud Platforms",
    desc: "Scalable cloud infrastructure for training, serving, and storage",
    color: "bg-green-600",
    items: ["AWS", "Google Cloud", "Microsoft Azure"],
  },
  {
    label: "Compute",
    desc: "GPUs, accelerators, and specialised silicon for AI workloads",
    color: "bg-green-500",
    items: ["NVIDIA", "Tenstorrent", "Groq", "SambaNova"],
  },
];

const legend = [
  { label: "Application Layer", color: "bg-blue-500" },
  { label: "Data Layer", color: "bg-red-500" },
  { label: "Tools", color: "bg-pink-500" },
  { label: "Model Layer", color: "bg-amber-500" },
  { label: "Infrastructure Layer", color: "bg-green-500" },
];

export function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeadline
            text="The Integrator"
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-xl mx-auto">
              BetterBrain delivers business outcomes on the application layer,
              with partners across the full AI stack.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack Diagram */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
              Generative AI Tech Stack
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-4">
            {/* Main stack */}
            <div className="flex flex-col gap-1">
              {layers.map((layer, i) => (
                <AnimatedSection key={layer.label} animation="fade-up" delay={i * 0.07}>
                  <div className="relative">
                    {/* Layer label */}
                    <p className={`text-xs font-bold mb-1 ${
                      layer.color === "bg-blue-500" ? "text-blue-400" :
                      layer.color === "bg-red-500" ? "text-red-400" :
                      layer.color === "bg-pink-500" ? "text-pink-400" :
                      layer.color === "bg-amber-500" ? "text-amber-400" :
                      layer.color === "bg-amber-600" ? "text-amber-400" :
                      layer.color === "bg-green-600" ? "text-green-400" :
                      "text-green-400"
                    }`}>
                      {layer.label}
                    </p>
                    {/* Layer bar */}
                    <div className="flex items-stretch rounded-sm overflow-hidden border border-white/10 bg-white/[0.03]">
                      {/* Color indicator */}
                      <div className={`w-1.5 ${layer.color} shrink-0`} />
                      {/* Content */}
                      <div className="flex-1 px-4 py-3">
                        <p className="text-[11px] text-muted mb-1.5">{layer.desc}</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                          {layer.items.map((item, j) => (
                            <span key={item} className="text-sm text-foreground/80 font-medium whitespace-nowrap">
                              {item}
                              {j < layer.items.length - 1 && (
                                <span className="text-white/10 ml-6">|</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* BetterBrain — right side spanning full height */}
            <AnimatedSection animation="slide-left" delay={0.5} className="hidden lg:block">
              <div className="h-full border-2 border-accent/40 bg-accent/5 rounded-sm flex flex-col items-center justify-center px-4 py-8 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
                  Your Partner
                </p>
                <img
                  src="/brainDark.svg"
                  alt="BetterBrain"
                  className="w-16 h-16 brightness-0 invert opacity-80 mb-4"
                />
                <h3 className="text-lg font-bold mb-2">BetterBrain</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Business outcome driven applications across the full stack
                </p>
              </div>
            </AnimatedSection>

            {/* BetterBrain — mobile (shown below stack) */}
            <AnimatedSection animation="scale" delay={0.5} className="lg:hidden">
              <div className="border-2 border-accent/40 bg-accent/5 rounded-sm p-6 text-center">
                <h3 className="text-lg font-bold">
                  <span className="text-accent">BetterBrain</span> spans every layer
                </h3>
                <p className="text-sm text-muted mt-1">
                  Business outcome driven applications across the full stack
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Legend */}
          <AnimatedSection animation="fade-up" delay={0.6}>
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border">
              {legend.map((l) => (
                <div key={l.label} className="flex items-center gap-2 text-xs text-muted">
                  <span className={`w-3 h-3 rounded-sm ${l.color}`} />
                  {l.label}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              For Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to partner with us?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              We&apos;re building an ecosystem of best-of-breed AI partners.
              If your technology complements our stack, let&apos;s talk.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Become a Partner
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Client CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The right partners for your stack
            </h2>
            <p className="text-muted text-lg mb-10">
              Stack-agnostic. No lock-in. Best solution, not the one we&apos;re locked into.
            </p>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default PartnersPage;
