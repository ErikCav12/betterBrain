import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries & Insights — BetterBrain",
  description:
    "Deep expertise in financial services and legal, plus cross-cutting AI thought leadership.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
