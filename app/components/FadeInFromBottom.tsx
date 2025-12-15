"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInFromBottomProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  triggerOnce?: boolean;
}

const FadeInFromBottom: React.FC<FadeInFromBottomProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  triggerOnce = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: triggerOnce
              ? "play none none none"
              : "play reverse play reverse",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, duration, y, triggerOnce]);

  return <div ref={ref}>{children}</div>;
};

export default FadeInFromBottom;
