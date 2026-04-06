import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — BetterBrain",
  description:
    "Thought leadership on AI strategy, implementation, and the future of enterprise intelligence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
