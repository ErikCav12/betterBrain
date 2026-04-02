"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <AnimatedHeadline
              text="Let's build something together"
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
            />
            <AnimatedSection animation="fade-up" delay={0.4}>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Tell us about your use case and we&apos;ll show you how BetterBrain
                can transform your workflows. Most teams are operational within
                days.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold mb-2">What to expect</h3>
                  <ul className="space-y-3 text-muted">
                    {[
                      "A response within 24 hours",
                      "A discovery call to understand your needs",
                      "A tailored demo with your data (if applicable)",
                      "A clear proposal with timeline and pricing",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 shrink-0"
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6">
                  <p className="text-sm text-muted">
                    <strong className="text-foreground">
                      Not ready for a call?
                    </strong>{" "}
                    Check out our{" "}
                    <a
                      href="/case-studies"
                      className="text-accent hover:text-accent-light"
                    >
                      case studies
                    </a>{" "}
                    and{" "}
                    <a
                      href="/insights"
                      className="text-accent hover:text-accent-light"
                    >
                      insights
                    </a>{" "}
                    to learn more about what we do.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={0.2}>
            {submitted ? (
              <div className="bg-surface border border-border rounded-2xl p-12 text-center flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-accent"
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
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-muted text-lg">
                  We&apos;ll be in touch within 24 hours to schedule a discovery
                  call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-surface border border-border rounded-2xl p-8 space-y-5"
              >
                <h3 className="text-xl font-bold mb-2">
                  Request a Consultation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">
                      First name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">
                      Last name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    Work email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    Job title
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    Tell us about your use case
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/80 text-white py-3.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
                >
                  Submit
                </button>

                <p className="text-xs text-muted text-center">
                  By submitting, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-accent hover:text-accent-light"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
