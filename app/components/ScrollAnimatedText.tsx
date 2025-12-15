"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimatedTextProps {
  text: string;
  className?: string;
  triggerStart?: string;
  triggerEnd?: string;
  scrub?: boolean;
  once?: boolean;
}

const ScrollAnimatedText: React.FC<ScrollAnimatedTextProps> = ({
  text,
  className = "",
  triggerStart = "top 80%",
  triggerEnd = "top 20%",
  scrub = true,
  once = false,
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.set(letters, {
      yPercent: -100,
      opacity: 0,
    });

    gsap.to(letters, {
      yPercent: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: { each: 0.08, from: "center" },
      scrollTrigger: {
        trigger: textRef.current,
        start: triggerStart,
        end: triggerEnd,
        scrub,
        once,
      },
    });
  }, [text, triggerStart, triggerEnd, scrub, once]);

  return (
    <h1
      ref={textRef}
      className={`relative overflow-hidden inline-block font-bold uppercase ${className}`}
      style={{
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="letter inline-block will-change-transform"
          style={{
            display: "inline-block",
            verticalAlign: "top",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default ScrollAnimatedText;
