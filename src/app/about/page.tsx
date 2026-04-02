"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

const values = [
  {
    title: "Depth Over Breadth",
    description:
      "We go deep on every engagement. No cookie-cutter solutions — every implementation is designed for the specific nuances of your data, processes, and team.",
  },
  {
    title: "Production or Nothing",
    description:
      "Prototypes are easy. Production systems that deliver value day after day are hard. We don't consider an engagement successful until it's running reliably in production.",
  },
  {
    title: "Radical Transparency",
    description:
      "We'll tell you when AI isn't the right solution. We'll tell you when a simpler approach will work better. Our job is to solve your problem, not sell you technology.",
  },
];

const stats = [
  { value: "100%", label: "Projects in production or on track" },
  { value: "Days", label: "Average time to first deployment" },
  { value: "SOC 2", label: "Type 2 certified" },
  { value: "24hr", label: "Response time guarantee" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeadline
            text="We build AI that actually works"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              BetterBrain was founded on a simple premise: enterprise AI should
              be customized, contextual, and production-ready from day one. We&apos;re
              a team of AI engineers, data scientists, and product builders
              obsessed with delivering real results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Make advanced insights instantly accessible and actionable
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                Every organization sits on a goldmine of data — in documents,
                databases, communication channels, and the collective expertise
                of its people. The problem isn&apos;t lack of information; it&apos;s that
                the right information is never where you need it, when you need
                it.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                BetterBrain bridges that gap. We build customized AI solutions
                that understand your business context, connect to your data
                sources, and deliver trusted answers with full traceability — so
                your team can spend less time searching and more time deciding.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background border border-border rounded-2xl p-8 text-center"
                  >
                    <span className="text-3xl font-bold text-accent">
                      {stat.value}
                    </span>
                    <p className="text-muted text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What we believe
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection
                key={value.title}
                animation="fade-up"
                delay={i * 0.15}
              >
                <div className="bg-surface border border-border rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built by practitioners
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our team combines deep AI engineering expertise with real-world
              business experience. We&apos;ve built and deployed AI systems at scale
              across industries.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-background border border-border rounded-2xl p-8 text-center"
                >
                  <div className="w-24 h-24 bg-surface-light border border-border rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Team Member</h3>
                  <p className="text-accent text-sm">Role Title</p>
                  <p className="text-muted text-sm mt-3">
                    Background and expertise placeholder. Replace with actual
                    team member details.
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Enterprise-grade security
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Your data is your most valuable asset. We treat it that way.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "SOC 2 Type 2",
                  desc: "Independently audited security controls",
                },
                {
                  title: "Data Encryption",
                  desc: "End-to-end encryption at rest and in transit",
                },
                {
                  title: "Access Controls",
                  desc: "Role-based access with audit logging",
                },
                {
                  title: "Data Residency",
                  desc: "Your data stays in your preferred region",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border rounded-2xl p-6 text-center"
                >
                  <svg
                    className="w-8 h-8 text-accent mx-auto mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to work together?
            </h2>
            <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
              We&apos;d love to learn about your use case and show you what
              BetterBrain can do.
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-accent hover:bg-accent/80 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
