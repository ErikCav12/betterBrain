"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import { Layers } from "lucide-react";

const tier1Partners = [
  {
    name: "Anthropic",
    description:
      "Claude Partner Network member. We leverage Anthropic's frontier models for enterprise-grade AI applications.",
    logo: null,
  },
  {
    name: "OpenAI",
    description:
      "Backed by individuals from OpenAI. Deep expertise in GPT-family models for production deployments.",
    logo: "/openai.svg",
  },
  {
    name: "LangChain / LangGraph",
    description:
      "Building agent architectures and retrieval pipelines using LangChain's open-source orchestration framework.",
    logo: null,
  },
  {
    name: "AWS / GCP / Azure",
    description:
      "Stack-agnostic deployment across all major cloud providers. No vendor lock-in.",
    logo: null,
  },
];

const tier2Partners = [
  { name: "Tenstorrent", description: "Hardware acceleration" },
  { name: "Groq", description: "Low-latency inference" },
  { name: "ElevenLabs", description: "Voice AI for BetterVoice" },
  { name: "Hugging Face", description: "Open-source models" },
  { name: "DataRobot", description: "ML governance" },
];

export default function PartnersPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeadline
            text="Our technology partners"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
              We partner with the best in AI infrastructure, models, and cloud
              to deliver stack-agnostic solutions with no vendor lock-in.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stack-agnostic callout */}
      <section className="px-6 pb-16">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="bg-surface border border-accent/20 rounded-sm p-8 flex items-start gap-4">
            <Layers className="w-8 h-8 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Stack-agnostic by design</h3>
              <p className="text-muted leading-relaxed">
                We&apos;ve worked with a variety of different infrastructures,
                programming languages, and software tools. Our accelerators run
                on AWS, GCP, or Azure — whichever fits your existing
                infrastructure. Maximum flexibility, zero lock-in.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Tier 1 */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Strategic Partners"
              title="Tier 1 partnerships"
              subtitle="Deep integrations with the platforms that power modern AI."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tier1Partners.map((partner, i) => (
              <AnimatedSection key={partner.name} animation="fade-up" delay={i * 0.1}>
                <div className="card-flip bg-surface border border-border rounded-sm p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={32}
                        height={32}
                        className="brightness-0 invert card-flip-icon"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-surface-light border border-border rounded-sm flex items-center justify-center text-sm font-bold">
                        {partner.name[0]}
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                  </div>
                  <p className="card-flip-muted text-muted leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              label="Ecosystem"
              title="Technology ecosystem"
              subtitle="Best-of-breed tools across inference, voice, open-source, and governance."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tier2Partners.map((partner, i) => (
              <AnimatedSection key={partner.name} animation="fade-up" delay={i * 0.08}>
                <div className="card-flip bg-background border border-border rounded-sm p-6 text-center h-full">
                  <h4 className="font-bold mb-1">{partner.name}</h4>
                  <p className="card-flip-muted text-muted text-sm">
                    {partner.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
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
