import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners — BetterBrain",
  description:
    "Our technology partner ecosystem. Stack-agnostic, best-of-breed AI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
