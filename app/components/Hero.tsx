"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ResumeButtons from "./ResumeButtons";
import FadeInFromBottom from "./FadeInFromBottom";
import ParallaxSection from "./ParallaxSection";
import CenterRevealText from "./CenterRevealText";

const randomHTMLSnippets = [
  `<div class='intro-box'>
    <h2>My Creative Portfolio</h2>
    <p>Building digital experiences</p>
  </div>`,

  `<section class='info-section'>
    <h3>About My Journey</h3>
    <p>Frontend and backend engineer</p>
  </section>`,

  `<div class='project-card'>
    <h3>Campus Cravings App</h3>
    <p>College food delivery platform</p>
  </div>`,

  `<header class='main-header'>
    <ul>
      <li>Home Section</li>
      <li>Project Gallery</li>
      <li>Contact Info</li>
    </ul>
  </header>`,

  `<article class='blog-post'>
    <h4>Code Create Repeat</h4>
    <p>Every idea becomes art</p>
  </article>`,

  `<footer class='site-footer'>
    <p>© 2025 Sai Krishna Works</p>
    <p>All rights reserved</p>
  </footer>`,

  `<div class='fight-club-box'>
    <h2>First Rule of Fight Club</h2>
    <p>Never talk about Fight Club</p>
  </div>`,

  `<main class='content-area'>
    <h3>Featured Developer Work</h3>
    <div class='card'>React and Next.js Projects</div>
  </main>`,

  `<section class='skills-display'>
    <p>React Tailwind GSAP Animations</p>
    <p>Design meets performance</p>
  </section>`,

  `<div class='tagline-box'>
    <p>"Design meets clean logic"</p>
    <p>Innovate. Code. Repeat.</p>
  </div>`,
];

const getRandomSnippet = () =>
  randomHTMLSnippets[Math.floor(Math.random() * randomHTMLSnippets.length)];

const formatHTML = (html: string) => {
  return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const Hero: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const radius = 50;
  const fade = 100;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(grid, {
        "--x": `${x}px`,
        "--y": `${y}px`,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      // Hide effect when cursor leaves
      gsap.to(grid, {
        "--x": `-999px`,
        "--y": `-999px`,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black"
    >
      <div
        ref={gridRef}
        className="absolute grid grid-cols-3 md:grid-cols-5 w-full h-full pointer-events-none"
        style={{
          maskImage: `radial-gradient(
          circle ${radius + fade}px at var(--x, -999px) var(--y, -999px),
          black 0%,
          black ${radius}px,
          rgba(0,0,0,0.6) ${radius + fade * 0.3}px,
          rgba(0,0,0,0.3) ${radius + fade * 0.7}px,
          transparent ${radius + fade}px
        )`,
          WebkitMaskImage: `radial-gradient(
          circle ${radius + fade}px at var(--x, -999px) var(--y, -999px),
          black 0%,
          black ${radius}px,
          rgba(0,0,0,0.6) ${radius + fade * 0.3}px,
          rgba(0,0,0,0.3) ${radius + fade * 0.7}px,
          transparent ${radius + fade}px
        )`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          transition: "mask-image 0.3s ease-out",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="border border-[#656565] flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-hidden"
          >
            <pre
              className="text-[clamp(7px,1vw,12px)] leading-relaxed text-[#656565] font-mono whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: formatHTML(getRandomSnippet()).replace(
                  /(&lt;\/?\w+.*?&gt;)/g,
                  `<span>$1</span>`
                ),
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative w-full h-full px-4 sm:px-6 md:px-10 pt-10 md:pt-5">
        <div className="absolute z-10 text-white text-[clamp(3rem,10vw,10rem)] leading-none font-[space]">
          {/* <FadeInFromBottom delay={1}> */}
          <ParallaxSection speed={-0.1}>
            <CenterRevealText text="I AM" delay={1} />
          </ParallaxSection>

          <ParallaxSection speed={0.2}>
            <CenterRevealText text="SAI KRISHNA" delay={1} />
          </ParallaxSection>
          {/* </FadeInFromBottom> */}
        </div>

        {/* RIGHT BOTTOM TITLE */}
        <div className="absolute bottom-0 right-4 sm:right-6 md:right-10 z-10">
          {/* <FadeInFromBottom delay={1.3}> */}
          <ParallaxSection speed={-0.1}>
            {/* <h1 className="text-white text-[clamp(3rem,10vw,10rem)] leading-none font-[space]">
                FULL STACK
              </h1> */}
            <CenterRevealText
              text="FULL STACK"
              delay={1}
              className="text-white text-[clamp(3rem,10vw,10rem)] leading-none font-[space]"
            />
          </ParallaxSection>
          <ParallaxSection speed={0.1}>
            <p className="text-white text-[clamp(1rem,5vw,2rem)] leading-none font-[space] text-end">
              DEVELOPER
            </p>
            {/* <CenterRevealText
              text="DEVELOPER"
              className="text-white text-[clamp(1rem,5vw,2rem)] leading-none font-[space] text-end"
            /> */}
          </ParallaxSection>
          {/* </FadeInFromBottom> */}
        </div>

        {/* CENTER BOTTOM DESCRIPTION TEXT */}
        <div className="absolute bottom-20 md:bottom-10 w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[25vw]">
          {/* <FadeInFromBottom delay={1.5}> */}
          <ParallaxSection speed={0.15}>
            {/* <div className="text-white font-[space] text-[clamp(1rem,2vw,1.5rem)] leading-[1.2]">
              Pixel-perfect websites — flawless even on your ex’s phone.
            </div> */}
            <CenterRevealText
              delay={1}
              className="text-white font-[space] text-[clamp(1rem,2vw,1.5rem)] leading-[1.2]"
              text="Pixel-perfect websites — flawless even on your ex’s phone."
            />
          </ParallaxSection>
          {/* </FadeInFromBottom> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
