"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ResumeButtons from "./ResumeButtons";
import FadeInFromBottom from "./FadeInFromBottom";
import ParallaxSection from "./ParallaxSection";

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
    <div className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-black">
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
            className="border border-[#656565] flex items-center justify-center p-4 overflow-hidden"
          >
            <pre
              className="text-xs leading-relaxed text-[#656565] font-mono whitespace-pre-wrap"
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

      <div className="relative w-full h-[50vh] md:h-full px-5 md:px-10 pt-5">
        <div className="absolute z-10">
          <FadeInFromBottom>
            <ParallaxSection speed={-0.1}>
              <h1 className="text-white text-5xl md:text-9xl font-[space]">
                I AM
              </h1>
            </ParallaxSection>
            <ParallaxSection speed={0.2}>
              <h1 className="text-white text-5xl md:text-9xl font-[space]">
                SAI KRISHNA
              </h1>
            </ParallaxSection>
          </FadeInFromBottom>
        </div>

        <div className="absolute bottom-0 right-5 md:right-10 z-10">
          <FadeInFromBottom delay={0.4}>
            <ParallaxSection speed={-0.1}>
              <h1 className="text-white text-5xl md:text-9xl font-[space]">
                FULL STACK
              </h1>
              <p className="text-white text-2xl font-[space] text-end">
                DEVELOPER
              </p>
            </ParallaxSection>
          </FadeInFromBottom>
        </div>

        <div className="absolute bottom-10 w-[25vw]">
          <FadeInFromBottom delay={0.7}>
            <div className="text-white py-2 px-5 font-[space]">
              I DESIGN AND DEVELOP WEBSITES FOR PEOPLE AND HELP BRING THEIR
              IDEAS TO LIFE.
            </div>
            <div>
              <ResumeButtons />
            </div>
          </FadeInFromBottom>
        </div>
      </div>
    </div>
  );
};

export default Hero;
