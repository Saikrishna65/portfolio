"use client";

import React, { useEffect, useRef } from "react";
import ScrollAnimatedText from "./ScrollAnimatedText";
import FadeInFromBottom from "./FadeInFromBottom";
import { usePortfolio } from "../context/PortfolioContext";
import { content } from "../data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { div } from "motion/react-client";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const pinEndRef = useRef<HTMLDivElement>(null);
  const { mode, language, setMode } = usePortfolio();
  const data = content.about[mode][language];

  useEffect(() => {
    if (!sectionRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        endTrigger: pinEndRef.current,

        start: "top 85%",
        end: "bottom bottom",

        pin: pinRef.current,
        pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      <div className="relative z-10 flex w-full justify-center">
        <div ref={pinRef}>
          <button
            onClick={() =>
              setMode(mode === "professional" ? "fun" : "professional")
            }
            className="w-80 cursor-pointer rounded-2xl bg-[#00CAFF] px-6 py-3 font-[outfit] text-lg font-bold tracking-wide whitespace-nowrap transition hover:scale-105 md:w-90 md:text-xl"
          >
            {mode === "professional" ? data.toggleFun : data.toggleProfessional}
          </button>
        </div>
      </div>

      <div
        ref={pinEndRef}
        className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:mt-6 md:gap-10"
      >
        <div className="text-center font-[space] text-[clamp(1.8rem,4vw,6rem)] font-bold text-white">
          <ScrollAnimatedText
            text={data.heading}
            triggerStart="top 80%"
            triggerEnd="top 30%"
          />
        </div>
        <FadeInFromBottom delay={0.3}>
          <div className="w-full px-3 text-center font-[space] text-[clamp(1rem,2.5vw,5rem)] leading-[1.3] text-white italic md:px-30">
            <h2>{data.description}</h2>
          </div>
        </FadeInFromBottom>

        <div className="mt-10 mb-40 flex w-[90%] flex-col items-center justify-center gap-6 md:mt-15 md:w-3/4 md:flex-row md:gap-10 2xl:w-2/4">
          <div className="flex h-26 w-full flex-col justify-center rounded-2xl border-[1.5px] border-[#00CAFF] bg-[#111111] px-6 md:h-40 md:flex-1 md:space-y-1 md:px-10">
            <h3 className="font-space text-lg text-gray-300 lg:text-xl">
              {data.skillsHeading}
            </h3>
            <h1 className="font-outfit text-xl text-white lg:text-2xl">
              {data.skills}
            </h1>
          </div>

          <div className="flex h-26 w-full flex-col justify-center rounded-2xl border-[1.5px] border-[#00CAFF] bg-[#111111] px-6 md:h-40 md:flex-1 md:space-y-1 md:px-10">
            <div className="font-space text-lg text-gray-300 lg:text-xl">
              {data.languagesHeading}
            </div>
            <div
              className={`font-outfit text-white ${
                language === "jp"
                  ? "text-base md:text-lg lg:text-xl"
                  : "text-xl lg:text-2xl"
              }`}
            >
              {data.languages}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
