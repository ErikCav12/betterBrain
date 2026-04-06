import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — BetterBrain",
  description:
    "Real results from real teams. Every case study with a quantified outcome.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
