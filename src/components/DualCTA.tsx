import { Button } from "@/components/ui/Button";
import { Calendar, ClipboardCheck } from "lucide-react";

interface DualCTAProps {
  className?: string;
}

export function DualCTA({ className = "" }: DualCTAProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}
    >
      <Button
        href="/contact"
        variant="primary"
        size="lg"
        icon={<Calendar className="w-5 h-5" />}
      >
        Book a Discovery Workshop
      </Button>
      <Button
        href="/contact#assessment"
        variant="secondary"
        size="lg"
        icon={<ClipboardCheck className="w-5 h-5" />}
      >
        AI Readiness Assessment
      </Button>
    </div>
  );
}
