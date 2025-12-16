"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ParallaxSection from "./ParallaxSection";
import StageTiltReveal from "./StageTiltReveal";

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
      className="relative h-[60vh] w-full overflow-hidden bg-black sm:h-screen"
    >
      <div
        ref={gridRef}
        className="pointer-events-none absolute grid h-full w-full grid-cols-3 md:grid-cols-5"
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
            className="flex items-center justify-center overflow-hidden border border-[#656565] p-2 sm:p-3 md:p-4"
          >
            <pre
              className="font-mono text-[clamp(7px,1vw,12px)] leading-relaxed whitespace-pre-wrap text-[#656565]"
              dangerouslySetInnerHTML={{
                __html: formatHTML(getRandomSnippet()).replace(
                  /(&lt;\/?\w+.*?&gt;)/g,
                  `<span>$1</span>`,
                ),
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative h-full w-full p-4 px-4 sm:px-6 md:p-5 md:px-10">
        <div className="absolute z-10 font-[space] text-[clamp(2rem,10vw,10rem)] leading-none text-white">
          {/* <FadeInFromBottom delay={1}> */}
          <ParallaxSection speed={-0.1}>
            <StageTiltReveal text="I AM" direction="right" delay={1} />
          </ParallaxSection>

          <ParallaxSection speed={0.2}>
            <StageTiltReveal text="SAI KRISHNA" direction="left" delay={1} />
          </ParallaxSection>
          {/* </FadeInFromBottom> */}
        </div>

        {/* RIGHT BOTTOM TITLE */}
        <div className="absolute right-4 bottom-0 z-10 sm:right-6 md:right-10">
          {/* <FadeInFromBottom delay={1.3}> */}
          <ParallaxSection speed={-0.1}>
            {/* <h1 className="text-white text-[clamp(3rem,10vw,10rem)] leading-none font-[space]">
                FULL STACK
              </h1> */}
            <StageTiltReveal
              text="FULL STACK"
              delay={1}
              direction="right"
              className="font-[space] text-[clamp(2rem,10vw,10rem)] leading-none text-white"
            />
          </ParallaxSection>
          <ParallaxSection speed={0.1}>
            <p className="pr-2 text-end font-[space] text-[clamp(1rem,4vw,2rem)] leading-none text-white md:pr-6">
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
        <div className="absolute hidden w-[80vw] sm:bottom-10 sm:block sm:w-[30vw] lg:w-[25vw]">
          {/* <FadeInFromBottom delay={1.5}> */}
          <ParallaxSection speed={0.15}>
            {/* <div className="text-white font-[space] text-[clamp(1rem,2vw,1.5rem)] leading-[1.2]">
              Pixel-perfect websites — flawless even on your ex’s phone.
            </div> */}
            <StageTiltReveal
              delay={1}
              direction="right"
              className="font-[space] text-[clamp(1rem,2vw,1.5rem)] leading-[1.2] text-white"
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
