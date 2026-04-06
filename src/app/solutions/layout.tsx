import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — BetterBrain",
  description:
    "Six battle-tested AI accelerators: BetterSearch, BetterDocs, BetterAgent, BetterVoice, BetterChat, BetterInsight.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
