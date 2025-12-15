"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CenterRevealTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  noScroll?: boolean;
}

const CenterRevealText = ({
  text,
  className = "",
  duration = 2,
  delay = 0,
  noScroll = false,
}: CenterRevealTextProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const wordEls = containerRef.current.querySelectorAll(".reveal-word");
    if (!wordEls.length) return;

    const ctx = gsap.context(() => {
      const from = {
        clipPath: "inset(50% 0% 50% 0%)",
        scaleY: 0.85,
        opacity: 0,
        y: 4,
        transformOrigin: "50% 50%",
        force3D: true,
      };

      const to = {
        clipPath: "inset(0% 0% 0% 0%)",
        scaleY: 1,
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "expo.out",
        force3D: true,
        clearProps: "transform,clipPath,opacity",
      };

      if (noScroll) {
        gsap.fromTo(wordEls, from, to);
      } else {
        gsap.fromTo(wordEls, from, {
          ...to,
          scrollTrigger: {
            trigger: containerRef.current!,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [duration, delay, noScroll]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <span className={`inline-flex flex-wrap ${className}`}>
        {words.map((word, i) => (
          <span
            key={i}
            className="reveal-word mr-[0.25em] inline-block overflow-hidden"
            style={{
              willChange: "clip-path, transform, opacity",
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </div>
  );
};

export default CenterRevealText;
