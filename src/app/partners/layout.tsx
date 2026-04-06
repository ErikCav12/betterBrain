import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners — BetterBrain",
  description:
    "The Integrator — best-of-breed partners across the full AI stack, from hardware to client solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
