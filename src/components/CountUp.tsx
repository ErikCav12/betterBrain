"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

export function CountUp({ value, className = "", duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const match = value.match(/^([^0-9]*?)(\d+)(.*?)$/);
    if (!match) return;

    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    // Phase 1: brief scramble (0.4s)
    const scrambleInterval = setInterval(() => {
      const random = Math.floor(Math.random() * target);
      setDisplay(`${prefix}${random}${suffix}`);
    }, 50);

    setTimeout(() => {
      clearInterval(scrambleInterval);

      // Phase 2: smooth count to target
      const proxy = { val: 0 };
      gsap.to(proxy, {
        val: target,
        duration: duration * 0.8,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () =>
          setDisplay(`${prefix}${Math.round(proxy.val)}${suffix}`),
      });
    }, 400);
  }, [value, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^0-9]*?)(\d+)(.*?)$/);
    if (!match) return;

    setDisplay(`${match[1]}0${match[3]}`);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: animate,
    });

    return () => {
      trigger.kill();
    };
  }, [value, animate]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}
