"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Calendar, ClipboardCheck, Check } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [workshopSubmitted, setWorkshopSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeadline
            text="Let's build something together"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              Two ways to get started — choose what works best for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Discovery Workshop */}
          <AnimatedSection animation="fade-up">
            <div className="bg-surface border border-accent/30 rounded-sm p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Discovery Workshop</h2>
              </div>
              <p className="text-muted mb-6">
                60 minutes with a senior AI engineer. No commitment required.
                Bring a real workflow to get the most value.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { time: "5 min", label: "Overview of your business and AI goals" },
                  { time: "30 min", label: "Workflow walkthrough — bring a real workflow" },
                  { time: "5 min", label: "Showcase of relevant BetterBrain accelerators" },
                  { time: "5 min", label: "Live prototype of a solution to your key pain point" },
                  { time: "15 min", label: "Next steps and roadmap discussion" },
                ].map((step) => (
                  <div key={step.label} className="flex items-start gap-3 text-sm">
                    <span className="text-accent font-bold text-xs w-12 shrink-0 mt-0.5">{step.time}</span>
                    <span className="text-muted">{step.label}</span>
                  </div>
                ))}
              </div>

              {workshopSubmitted ? (
                <div className="flex-1 flex items-center justify-center text-center py-8">
                  <div>
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                    <p className="text-muted">
                      We&apos;ll be in touch within 24 hours to schedule your
                      workshop.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setWorkshopSubmitted(true);
                  }}
                  className="flex-1 flex flex-col"
                >
                  <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="First name" required name="firstName" />
                      <Input label="Last name" required name="lastName" />
                    </div>
                    <Input
                      label="Work email"
                      type="email"
                      required
                      name="email"
                    />
                    <Input label="Company" required name="company" />
                  </div>
                  <Button type="submit" variant="primary" className="w-full mt-6">
                    Book Workshop
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* AI Readiness Assessment */}
          <AnimatedSection animation="fade-up" delay={0.15} id="assessment">
            <div className="bg-surface border border-border rounded-sm p-8 h-full flex flex-col items-center justify-center text-center">
              <ClipboardCheck className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-2xl font-bold mb-4">AI Readiness Assessment</h2>
              <p className="text-muted mb-8 max-w-sm">
                Take our self-serve assessment and our consultants will reach
                out with a tailored analysis of your AI readiness and
                opportunities.
              </p>
              <Button
                href="https://ai-assessment.betterbrain.ai/assessment?ref=P3B12C892-GENERAL-45BA67&type=general"
                variant="primary"
                size="lg"
                icon={<ClipboardCheck className="w-5 h-5" />}
              >
                Start Assessment
              </Button>
              <p className="text-muted/60 text-xs mt-4">Takes about 5 minutes</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
