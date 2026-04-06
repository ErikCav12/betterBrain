import { AnimatedSection } from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — BetterBrain",
  description: "How BetterBrain (Covalent Connect, Inc.) collects, processes, and protects your data.",
};

const sections = [
  {
    title: "Who we are",
    content:
      "BetterBrain is operated by Covalent Connect, Inc. We provide AI-powered data connectivity and workflow automation solutions. This policy describes how we collect, use, and protect your information when you visit our website or use our services.",
  },
  {
    title: "What we collect",
    content:
      "We collect information you provide directly (name, email, company, job title) and information collected automatically (IP address, browser type, device information, usage analytics). If you use our platform, we may also process business data you connect to our services.",
  },
  {
    title: "How we use your data",
    content:
      "We process your information to: provide and improve our services, communicate with you about your account or enquiries, analyse usage patterns, prevent fraud, and comply with legal obligations. We rely on your consent, contractual necessity, or legitimate interest as the legal basis for processing.",
  },
  {
    title: "AI services",
    content:
      "Our platform uses third-party AI providers including AWS AI services, OpenAI, and Anthropic to power AI features. Data processed through these services is handled in accordance with our data processing agreements and their respective privacy policies.",
  },
  {
    title: "Data sharing",
    content:
      "We share data with cloud service providers, payment processors, and analytics services necessary to operate our platform. We do not sell your personal information. Data may be transferred internationally, including to the United States and Norway.",
  },
  {
    title: "Your rights",
    content:
      "Depending on your location, you may have the right to access, correct, delete, or port your personal data. You can withdraw consent at any time and opt out of marketing communications. We support rights under GDPR, UK GDPR, CCPA/CPRA, and Canadian privacy law.",
  },
  {
    title: "Security",
    content:
      "We implement industry-standard security measures to protect your data, including encryption at rest and in transit, role-based access controls, and regular security audits. We are SOC 2 Type 2 certified.",
  },
  {
    title: "Contact",
    content:
      "For privacy enquiries, contact us at team@betterbrain.ai. Our Data Protection Officer can be reached at abhishek@betterbrain.ai.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted text-sm mb-12">Last updated: November 25, 2024</p>
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
