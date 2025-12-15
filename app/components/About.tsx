"use client";

import React from "react";
import ScrollAnimatedText from "./ScrollAnimatedText";
import FadeInFromBottom from "./FadeInFromBottom";

const About = () => {
  return (
    <div className="bg-gren-300 bg-gren-300 mt-16 flex w-full flex-col items-center justify-center gap-3 md:gap-10">
      <div className="text-center font-[space] text-[clamp(1.8rem,4vw,6rem)] font-bold text-white">
        <ScrollAnimatedText
          text="ABOUT ME"
          triggerStart="top 60%"
          triggerEnd="top 20%"
        />
      </div>
      <FadeInFromBottom delay={0.3}>
        <div className="w-full px-3 text-center font-[space] text-[clamp(1rem,2.5vw,5rem)] leading-[1.3] text-white italic md:px-30">
          <h2>
            I’m a full-stack developer who likes building things that feel
            smooth, look simple, and work properly{" "}
            <span className="text-gray-400 opacity-60">
              (after multiple tries)
            </span>
            .
          </h2>
          <h2>
            Currently obsessed with animations, performance, and making the web
            less boring.
          </h2>
        </div>
      </FadeInFromBottom>
    </div>
  );
};

export default About;
