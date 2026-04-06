import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BetterBrain",
  description:
    "Book a Discovery Workshop or take an AI Readiness Assessment.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
