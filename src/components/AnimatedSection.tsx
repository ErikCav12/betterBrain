"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  stagger?: number;
}

export function AnimatedSection({
  children,
  className = "",
  id,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animations: Record<string, gsap.TweenVars> = {
      "fade-up": { y: 60, opacity: 0 },
      "fade-in": { opacity: 0 },
      "slide-left": { x: -80, opacity: 0 },
      "slide-right": { x: 80, opacity: 0 },
      scale: { scale: 0.9, opacity: 0 },
    };

    gsap.set(el, animations[animation]);

    gsap.to(el, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, delay]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
