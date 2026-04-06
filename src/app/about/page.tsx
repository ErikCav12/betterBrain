"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Layers, Zap, Shield, Lock, Eye, Check, Users } from "lucide-react";

const stats = [
  { value: "100%", label: "Projects in production or on track" },
  { value: "Weeks", label: "Average time to first deployment" },
  { value: "SOC 2", label: "Type 2 certified" },
  { value: "24hr", label: "Response time guarantee" },
];

const differentiators = [
  {
    icon: Cpu,
    title: "Proprietary IP",
    description:
      "Years of R&D baked into pre-built accelerators. You get production AI in weeks because we've already solved the hard infrastructure problems.",
  },
  {
    icon: Layers,
    title: "Stack-agnostic",
    description:
      "We work with your existing tools and platforms. No vendor lock-in, no rip-and-replace — just AI that fits into what you already have.",
  },
  {
    icon: Zap,
    title: "Full-stack delivery",
    description:
      "From strategy through deployment and ongoing support. One team, one engagement, one accountable partner for the entire lifecycle.",
  },
];

const teamMembers = [
  { name: "Team Member", role: "Role Title", bio: "Background in AI/ML research and enterprise software delivery." },
  { name: "Team Member", role: "Role Title", bio: "Experience building and scaling AI products from zero to millions of users." },
  { name: "Team Member", role: "Role Title", bio: "Deep expertise in data infrastructure, MLOps, and production systems." },
];

const securityCards = [
  { icon: Shield, title: "SOC 2 Type 2", description: "Independently audited controls for security, availability, and confidentiality." },
  { icon: Lock, title: "Data Encryption", description: "End-to-end encryption at rest and in transit across every engagement." },
  { icon: Eye, title: "Access Controls", description: "Role-based permissions and audit logging for every system we build." },
  { icon: Check, title: "AI Governance", description: "Bias testing, model monitoring, and explainability baked into every deployment." },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-16 max-w-5xl mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <AnimatedHeadline
            text="We build AI that ships"
            tag="h1"
            className="text-4xl md:text-6xl font-bold tracking-tight"
          />
        </AnimatedSection>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="fade-up">
              <SectionHeading label="Our Mission" title="" centered={false} />
              <p className="text-lg text-muted mt-4 leading-relaxed">
                BetterBrain was founded on a simple premise: mid-market companies
                deserve the same AI capabilities as the Fortune 500 — without the
                Fortune 500 price tag or timeline.
              </p>
              <p className="text-lg text-muted mt-6 leading-relaxed">
                We&apos;ve built proprietary AI infrastructure — years of R&amp;D baked
                into every engagement. Pre-built accelerators for search, documents,
                agents, voice, chat, and analytics mean we deliver production AI in
                weeks, not months.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card-flip rounded-sm border border-border p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-sm text-muted mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Three Differentiators */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <SectionHeading
              label="Why BetterBrain"
              title="What makes us different"
              centered
            />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={i * 150}>
                <div className="card-flip rounded-sm border border-border p-8">
                  <div className="card-flip-icon w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <SectionHeading
              label="The Team"
              title="Built by practitioners"
              subtitle="Our team brings deep technical expertise from Carnegie Mellon, Stanford, Berkeley, and years of shipping AI systems at scale."
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                <div className="card-flip-muted rounded-sm border border-border p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-accent-light mt-1">{member.role}</p>
                  <p className="text-sm text-muted mt-3">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={500}>
            <p className="text-center text-muted mt-12 text-lg">
              Backed by individuals from{" "}
              <span className="text-foreground font-medium">OpenAI</span>,{" "}
              <span className="text-foreground font-medium">Samsung Next</span>,{" "}
              <span className="text-foreground font-medium">Hustle Fund</span>, and{" "}
              <span className="text-foreground font-medium">Snowflake</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Security */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <SectionHeading
              label="Security"
              title="Enterprise-grade security"
              subtitle="Your data and your customers' data are treated with the highest standard of care at every layer."
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {securityCards.map((card, i) => (
              <AnimatedSection key={card.title} animation="fade-up" delay={i * 100}>
                <div className="card-flip rounded-sm border border-border p-6">
                  <div className="card-flip-icon w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                    <card.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in" delay={500}>
            <p className="text-center text-muted mt-12 text-lg">
              <span className="text-accent font-semibold">78%</span> of enterprises
              prioritise ethical AI when selecting consultants.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to work together?
            </h2>
            <DualCTA />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
