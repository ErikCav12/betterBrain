"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { Layers } from "lucide-react";

const stackLayers = [
  {
    title: "Client Solutions",
    color: "from-indigo-500 to-indigo-600",
    glow: "shadow-indigo-500/20",
    partners: [
      "Healthcare AI", "Financial Services", "Manufacturing",
      "Contact Centres", "Government", "Climate Tech",
    ],
    tiered: [],
  },
  {
    title: "AI Applications",
    color: "from-blue-500 to-blue-600",
    glow: "shadow-blue-500/20",
    partners: ["CrewAI", "Palantir AIP"],
    tiered: ["Anthropic Claude", "LangChain / LangGraph"],
  },
  {
    title: "Voice & Multimodal",
    color: "from-teal-500 to-teal-600",
    glow: "shadow-teal-500/20",
    partners: ["Orion Labs", "PolyAI"],
    tiered: ["ElevenLabs", "aiOla"],
  },
  {
    title: "Foundation Models",
    color: "from-purple-500 to-purple-600",
    glow: "shadow-purple-500/20",
    partners: ["OpenAI", "Meta Llama", "Mistral"],
    tiered: ["Hugging Face", "Anthropic"],
  },
  {
    title: "ML Ops & Governance",
    color: "from-red-500 to-red-600",
    glow: "shadow-red-500/20",
    partners: ["MLflow"],
    tiered: ["DataRobot", "Weights & Biases", "Comet ML"],
  },
  {
    title: "Hardware & Inference",
    color: "from-orange-500 to-orange-600",
    glow: "shadow-orange-500/20",
    partners: ["NVIDIA", "AWS Trainium"],
    tiered: ["Tenstorrent", "Groq", "Hailo", "SambaNova"],
  },
];

export function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeadline
            text="The Integrator"
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-xl mx-auto">
              Best-of-breed partners across the full AI stack, stitched into
              working solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Vertical line connector */}
          <div className="relative">
            {/* The connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-orange-500/40 hidden md:block" />

            <div className="flex flex-col gap-1.5">
              {stackLayers.map((layer, i) => (
                <AnimatedSection
                  key={layer.title}
                  animation="slide-right"
                  delay={i * 0.1}
                >
                  <div className="relative md:pl-16 group">
                    {/* Dot on the line */}
                    <div
                      className={`absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${layer.color} shadow-lg ${layer.glow} hidden md:block ring-4 ring-background`}
                    />

                    <div className="bg-surface/50 hover:bg-surface border border-border/50 hover:border-border rounded-sm p-5 transition-all duration-300">
                      <h3
                        className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${layer.color} bg-clip-text text-transparent mb-3`}
                      >
                        {layer.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {layer.tiered.map((name) => (
                          <span
                            key={name}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${layer.color} text-white shadow-md ${layer.glow}`}
                          >
                            {name}
                          </span>
                        ))}
                        {layer.partners.map((name) => (
                          <span
                            key={name}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-muted hover:text-foreground hover:border-white/20 transition-colors"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* BetterBrain callout */}
            <AnimatedSection animation="scale" delay={0.7}>
              <div className="relative md:pl-16 mt-1.5">
                <div className="absolute left-3 top-4 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-green-500 shadow-lg shadow-accent/30 hidden md:block ring-4 ring-background" />
                <div className="border-2 border-accent/40 bg-accent/5 rounded-sm p-6 text-center">
                  <h3 className="text-lg font-bold">
                    <span className="text-accent">BetterBrain</span> spans every
                    layer
                  </h3>
                  <p className="text-sm text-muted mt-1">
                    Integration, vertical expertise, and making the technology
                    real.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stack-agnostic */}
      <section className="py-12 px-6">
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Layers className="w-7 h-7 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold mb-1">Stack-agnostic</h3>
              <p className="text-muted text-sm">
                AWS, GCP, or Azure. No lock-in. We fit your infrastructure.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The right partners for your stack
            </h2>
            <p className="text-muted text-lg mb-10">
              Best solution, not the one we&apos;re locked into.
            </p>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default PartnersPage;
