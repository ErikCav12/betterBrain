"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { Layers } from "lucide-react";

const stackLayers = [
  {
    number: 6,
    label: "Client-Facing Solutions",
    title: "Industry Verticals & Use Cases",
    description:
      "Where the value lands: healthcare, financial services, manufacturing, contact centres, government, and climate tech.",
    color: "border-l-indigo-500",
    bg: "bg-indigo-950/30",
    partners: [
      { name: "Healthcare AI" },
      { name: "Financial Services" },
      { name: "Manufacturing & Edge" },
      { name: "Contact Centres" },
      { name: "Government & Defence" },
      { name: "Climate Tech" },
    ],
  },
  {
    number: 5,
    label: "AI Application Layer",
    title: "Agentic AI, Automation & Governance",
    description:
      "Multi-agent systems, workflow automation, responsible AI frameworks, and AI governance tooling.",
    color: "border-l-blue-500",
    bg: "bg-blue-950/30",
    partners: [
      { name: "Anthropic Claude", tier: 1 },
      { name: "LangChain / LangGraph", tier: 1 },
      { name: "CrewAI", tier: 2 },
      { name: "Palantir AIP", tier: 2 },
    ],
  },
  {
    number: 4,
    label: "Voice & Multimodal AI",
    title: "Speech, Synthesis & Frontline Interfaces",
    description:
      "Voice-enabled AI agents, real-time translation, industrial voice capture, and natural language interfaces.",
    color: "border-l-teal-500",
    bg: "bg-teal-950/30",
    partners: [
      { name: "ElevenLabs", tier: 1 },
      { name: "aiOla", tier: 1 },
      { name: "Orion Labs", tier: 2 },
      { name: "PolyAI", tier: 2 },
    ],
  },
  {
    number: 3,
    label: "Models & Model Hub",
    title: "Foundation Models, Fine-Tuning & Deployment",
    description:
      "Open-source and proprietary LLMs, model sourcing, fine-tuning pipelines, and vendor-neutral deployment.",
    color: "border-l-purple-500",
    bg: "bg-purple-950/30",
    partners: [
      { name: "Hugging Face", tier: 1 },
      { name: "Anthropic", tier: 1 },
      { name: "OpenAI" },
      { name: "Meta Llama" },
      { name: "Mistral" },
    ],
  },
  {
    number: 2,
    label: "ML Platforms & Operations",
    title: "Experiment Tracking, Model Registry & Governance",
    description:
      "End-to-end ML lifecycle management, production monitoring, compliance, and enterprise AI governance.",
    color: "border-l-red-500",
    bg: "bg-red-950/30",
    partners: [
      { name: "DataRobot", tier: 1 },
      { name: "Weights & Biases", tier: 2 },
      { name: "Comet ML", tier: 2 },
      { name: "MLflow" },
    ],
  },
  {
    number: 1,
    label: "AI Hardware & Inference",
    title: "Compute, Chips & Inference Acceleration",
    description:
      "Specialised silicon for training and inference: edge devices, data centre accelerators, and LPUs.",
    color: "border-l-orange-500",
    bg: "bg-orange-950/30",
    partners: [
      { name: "Tenstorrent", tier: 1 },
      { name: "Groq", tier: 1 },
      { name: "Hailo", tier: 2 },
      { name: "SambaNova", tier: 2 },
      { name: "NVIDIA" },
      { name: "AWS Trainium" },
    ],
  },
];

export function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeadline
            text="We stitch best-of-breed AI into working solutions"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              BetterBrain sits across the entire AI stack — from hardware to
              client solutions — integrating the right partners at every layer.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack Visual */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <p className="text-center text-sm text-muted uppercase tracking-wider mb-8 font-semibold">
              AI Partner Tech Stack
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-1">
            {stackLayers.map((layer, i) => (
              <AnimatedSection
                key={layer.number}
                animation="fade-up"
                delay={i * 0.08}
              >
                <div
                  className={`${layer.bg} border-l-4 ${layer.color} rounded-sm p-6`}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                      Layer {layer.number}
                    </span>
                    <span className="text-[10px] text-muted/60">
                      {layer.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{layer.title}</h3>
                  <p className="text-sm text-muted mb-4">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.partners.map((p) => (
                      <span
                        key={p.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10"
                      >
                        {p.tier && (
                          <span
                            className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                              p.tier === 1
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            }`}
                          >
                            T{p.tier}
                          </span>
                        )}
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* BetterBrain Integrator Callout */}
            <AnimatedSection animation="scale" delay={0.5}>
              <div className="mt-1 border-2 border-green-500/40 bg-green-950/20 rounded-sm p-8 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 block mb-2">
                  Your Partner
                </span>
                <h3 className="text-xl font-bold mb-2">
                  BetterBrain — The Integrator
                </h3>
                <p className="text-sm text-green-200/70 max-w-lg mx-auto">
                  We sit across all layers, stitching together best-of-breed
                  components into working client solutions. The value is in
                  integration, vertical expertise, and making the technology
                  real.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Legend */}
          <AnimatedSection animation="fade-up" delay={0.6}>
            <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                Tier 1 — Strategic
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                Tier 2 — Ecosystem
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stack-agnostic callout */}
      <section className="py-16 px-6">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="bg-surface border border-accent/20 rounded-sm p-8 flex items-start gap-4">
            <Layers className="w-8 h-8 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">
                Stack-agnostic by design
              </h3>
              <p className="text-muted leading-relaxed">
                We&apos;ve worked across every major cloud, inference provider,
                and model family. Our accelerators run on AWS, GCP, or Azure —
                whichever fits your existing infrastructure. Maximum flexibility,
                zero lock-in.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Best-of-breed AI, tailored to your stack
            </h2>
            <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
              We bring the right partners and tools to every engagement — so you
              get the best solution, not the one we&apos;re locked into.
            </p>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default PartnersPage;
