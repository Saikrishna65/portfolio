"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Direction = "left" | "right";

interface StageTiltRevealProps {
  text: string;
  language?: "en" | "jp";
  direction?: Direction;
  className?: string;
  duration?: number;
  delay?: number;
  lineStagger?: number;
}

export default function StageTiltReveal({
  text,
  language = "en",
  direction = "left",
  className = "",
  duration = 2,
  delay = 0,
  lineStagger = 0.15,
}: StageTiltRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const parts =
    language === "jp"
      ? text.split("") // character-based
      : text.split(" "); // word-based

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const words = Array.from(
      containerRef.current.querySelectorAll(".word"),
    ) as HTMLElement[];

    const linesMap = new Map<number, HTMLElement[]>();

    words.forEach((word) => {
      const top = Math.round(word.getBoundingClientRect().top);
      if (!linesMap.has(top)) linesMap.set(top, []);
      linesMap.get(top)!.push(word);
    });

    const lines = Array.from(linesMap.values());

    const skewValue = direction === "left" ? -10 : 10;
    const origin = direction === "left" ? "right bottom" : "left bottom";

    const ctx = gsap.context(() => {
      lines.forEach((lineWords, index) => {
        gsap.fromTo(
          lineWords,
          {
            yPercent: 120,
            skewY: skewValue,
            opacity: 0,
            transformOrigin: origin,
          },
          {
            yPercent: 0,
            skewY: 0,
            opacity: 1,
            duration,
            delay: delay + index * lineStagger,
            ease: "power4.out",
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [direction, duration, delay, lineStagger]);

  return (
    <div ref={containerRef} className="inline-block">
      {parts.map((part, index) => (
        <span
          key={index}
          className={
            language === "jp"
              ? "inline-block overflow-hidden"
              : "mr-2 inline-block overflow-hidden"
          }
        >
          <span className={`word inline-block ${className}`}>{part}</span>
        </span>
      ))}
    </div>
  );
}
