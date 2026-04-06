"use client";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Calendar, ClipboardCheck, Check } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [workshopSubmitted, setWorkshopSubmitted] = useState(false);
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

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
                A focused session with our AI experts to map your data
                landscape, identify high-value automation opportunities, and
                define a clear path forward.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "60-minute deep dive with a senior AI engineer",
                  "Walk away with a prioritised list of AI opportunities",
                  "No commitment required",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted">{item}</span>
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
            <div className="bg-surface border border-border rounded-sm p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">AI Readiness Assessment</h2>
              </div>
              <p className="text-muted mb-6">
                Tell us about your use case and our consultants will reach out
                with a tailored assessment of your AI readiness and
                opportunities.
              </p>

              {assessmentSubmitted ? (
                <div className="flex-1 flex items-center justify-center text-center py-8">
                  <div>
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Assessment received!</h3>
                    <p className="text-muted">
                      Our team will review and reach out within 48 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAssessmentSubmitted(true);
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
                    <Input label="Job title" name="jobTitle" />
                    <Textarea
                      label="Tell us about your use case"
                      name="useCase"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full mt-6"
                  >
                    Submit Assessment
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
