"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3";
}

export function AnimatedHeadline({
  text,
  className = "",
  tag: Tag = "h1",
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");
    gsap.set(words, { y: 80, opacity: 0 });
    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.2)",
      delay: 0.2,
    });
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </Tag>
  );
}
