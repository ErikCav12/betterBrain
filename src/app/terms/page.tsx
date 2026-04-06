import { AnimatedSection } from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — BetterBrain",
  description: "Terms governing use of the BetterBrain website and services.",
};

const sections = [
  {
    title: "Acceptance of terms",
    content:
      "By accessing or using the BetterBrain website and services, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.",
  },
  {
    title: "Services",
    content:
      "BetterBrain provides AI-powered data connectivity, workflow automation, and consulting services. Access to certain features may require a separate agreement or subscription.",
  },
  {
    title: "User responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials, ensuring the accuracy of information you provide, and complying with applicable laws when using our services. You agree not to misuse our services or attempt to access them through unauthorised means.",
  },
  {
    title: "Intellectual property",
    content:
      "All content, software, and materials on the BetterBrain website are owned by or licensed to Covalent Connect, Inc. You may not reproduce, distribute, or create derivative works without prior written consent. Your data remains yours — we claim no ownership over data you process through our platform.",
  },
  {
    title: "Limitation of liability",
    content:
      "BetterBrain provides services on an 'as-is' basis. To the maximum extent permitted by law, we disclaim all warranties and shall not be liable for indirect, incidental, or consequential damages arising from your use of our services.",
  },
  {
    title: "Data and privacy",
    content:
      "Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and processing of data as described therein.",
  },
  {
    title: "Termination",
    content:
      "We may suspend or terminate access to our services at any time for violation of these terms or for any other reason at our discretion, with reasonable notice where possible.",
  },
  {
    title: "Governing law",
    content:
      "These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.",
  },
  {
    title: "Changes to terms",
    content:
      "We may update these terms from time to time. Material changes will be communicated via email or a notice on our website. Continued use after changes constitutes acceptance.",
  },
  {
    title: "Contact",
    content:
      "For questions about these terms, contact us at team@betterbrain.ai.",
  },
];

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Terms of Use</h1>
          <p className="text-muted text-sm mb-12">Effective: April 2026</p>
        </AnimatedSection>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} animation="fade-up" delay={i * 0.05}>
              <h2 className="text-lg font-bold mb-2">{section.title}</h2>
              <p className="text-muted leading-relaxed">{section.content}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted text-sm">
              &copy; {new Date().getFullYear()} Covalent Connect, Inc. (BetterBrain). All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
