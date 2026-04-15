"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePortfolio } from "../context/PortfolioContext";

export default function CursorSystem() {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const { mode } = usePortfolio();

  useEffect(() => {
    if (mode !== "fun" || window.innerWidth < 768) {
      gsap.set(textRef.current, { opacity: 0 });
      return;
    }

    gsap.set(textRef.current, { opacity: 1 });

    // 🎯 cursor follow
    const move = (e: MouseEvent) => {
      gsap.to(textRef.current, {
        x: e.clientX + 12,
        y: e.clientY + 12,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mode]);

  // 🔥 TEXT CHANGE LISTENER (smooth animation)
  useEffect(() => {
    const handleTextChange = (e: any) => {
      if (!textRef.current) return;

      const newText = e.detail;

      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          textRef.current!.textContent = newText;

          gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.15,
          });
        },
      });
    };

    window.addEventListener("cursorTextChange", handleTextChange);

    return () => {
      window.removeEventListener("cursorTextChange", handleTextChange);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] font-[impact] text-lg tracking-wide text-white mix-blend-difference"
    >
      Contact Me
    </span>
  );
}
