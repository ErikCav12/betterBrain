import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BetterBrain",
  description:
    "We build AI that ships. Proprietary accelerators, stack-agnostic, full-stack delivery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
