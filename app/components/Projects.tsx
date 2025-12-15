"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    if (!container || !horizontal) return;

    const sections = Array.from(
      horizontal.querySelectorAll(".horizontal-item"),
    ) as HTMLElement[];
    const sectionsCount = sections.length;
    const totalScroll = horizontal.scrollWidth - window.innerWidth;

    if (totalScroll <= 0) return;

    const ctx = gsap.context(() => {
      gsap.to(horizontal, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          // snap: 1 / (sectionsCount - 1),
          invalidateOnRefresh: true,
        },
      });

      gsap.to(headingRef.current, {
        scaleX: 0,
        x: 300,
        opacity: 0,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=800",
          scrub: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const float = (el: Element) => {
      const move = () =>
        gsap.to(el, {
          y: gsap.utils.random(-12, 12),
          x: gsap.utils.random(-5, 5),
          duration: gsap.utils.random(2.5, 4),
          ease: "sine.inOut",
          overwrite: true,
          onComplete: move,
        });
      move();
    };

    gsap.utils
      .toArray<HTMLElement>(
        ".physics-float-1, .physics-float-2, .physics-float-3",
      )
      .forEach(float);

    return () =>
      gsap.killTweensOf(".physics-float-1, .physics-float-2, .physics-float-3");
  }, []);

  return (
    <section className="w-full text-white">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div ref={horizontalRef} className="horizontal-scroll flex w-max">
          <div className="horizontal-item flex h-screen w-screen shrink-0 items-center justify-center">
            <h1
              ref={headingRef}
              className="font-[bebas] text-[clamp(5rem,15vw,15rem)]"
            >
              PROJECTS
            </h1>
          </div>

          <div className="horizontal-item flex h-screen w-screen shrink-0 items-center justify-center">
            <div className="relative flex h-[90%] w-[90%] flex-col items-center justify-center">
              <div className="z-10">
                <h1 className="font-[space] text-[clamp(2rem,7vw,4rem)] font-extrabold">
                  Campus Cravings
                </h1>

                <p className="font-[] max-w-md text-[clamp(1rem,2vw,1.2rem)]">
                  CampusCravings is a modern food-delivery platform built for
                  college life — fast orders, smart delivery, and a sleek
                  interface that makes grabbing a meal feel effortless.
                </p>
              </div>
              <Image
                className="physics-float-1 absolute top-0 right-0 h-auto w-[clamp(150px,30vh,1000px)] -rotate-6 rounded-2xl will-change-transform sm:top-[clamp(2rem,10vh,10rem)] sm:right-[clamp(2rem,10vh,10rem)] md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/campus_cravings_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 absolute top-[clamp(2rem,15vh,8rem)] left-0 h-auto w-[clamp(80px,12vh,1000px)] rotate-6 rounded-2xl will-change-transform md:left-[clamp(2rem,10vh,5rem)] md:w-[clamp(100px,12vw,500px)]"
                src="/images/projects/campus_cravings_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 absolute right-[clamp(2rem,5vh,5rem)] bottom-[clamp(0.1rem,10vh,5rem)] h-auto w-[clamp(150px,30vh,1000px)] rotate-6 rounded-2xl will-change-transform md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/campus_cravings_2.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="horizontal-item flex h-screen w-screen shrink-0 items-center justify-center">
            <div className="relative flex h-[90%] w-[90%] flex-col items-center justify-center">
              <div className="z-10">
                <h1 className="font-[space] text-[clamp(2rem,7vw,4rem)] font-extrabold">
                  WorkBridge
                </h1>

                <p className="font-[] max-w-md text-[clamp(1rem,2vw,1.2rem)]">
                  WorkBridge is a modern job-finding platform built to connect
                  people with work — fast discovery, smart matching, and a
                  seamless user experience.
                </p>
              </div>
              <Image
                className="physics-float-1 absolute top-0 right-0 h-auto w-[clamp(150px,30vh,1000px)] -rotate-6 rounded-2xl will-change-transform sm:top-[clamp(2rem,10vh,10rem)] sm:right-[clamp(2rem,10vh,10rem)] md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/work_bridge_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 absolute top-[clamp(2rem,15vh,8rem)] left-0 h-auto w-[clamp(80px,12vh,1000px)] rotate-6 rounded-2xl will-change-transform md:left-[clamp(2rem,10vh,5rem)] md:w-[clamp(100px,12vw,500px)]"
                src="/images/projects/work_bridge_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 absolute right-[clamp(2rem,5vh,5rem)] bottom-[clamp(0.1rem,10vh,5rem)] h-auto w-[clamp(150px,30vh,1000px)] rotate-6 rounded-2xl will-change-transform md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/work_bridge_2.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="horizontal-item flex h-screen w-screen shrink-0 items-center justify-center">
            <div className="relative flex h-[90%] w-[90%] flex-col items-center justify-center">
              <div className="z-10">
                <h1 className="font-[space] text-[clamp(2rem,7vw,4rem)] font-extrabold">
                  Fight Club
                </h1>

                <p className="font-[] max-w-md text-[clamp(1rem,2vw,1.2rem)]">
                  Fight Club is a visually striking website inspired by the cult
                  classic — minimal design, intense aesthetics, and a user
                  experience that reflects the film’s chaos.
                </p>
              </div>
              <Image
                className="physics-float-1 absolute top-0 right-0 h-auto w-[clamp(150px,30vh,1000px)] -rotate-6 rounded-2xl will-change-transform sm:top-[clamp(2rem,10vh,10rem)] sm:right-[clamp(2rem,10vh,10rem)] md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/fight_club_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 absolute top-[clamp(2rem,15vh,8rem)] left-0 h-auto w-[clamp(80px,12vh,1000px)] rotate-6 rounded-2xl will-change-transform md:left-[clamp(2rem,10vh,5rem)] md:w-[clamp(100px,12vw,500px)]"
                src="/images/projects/fight_club_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 absolute right-[clamp(2rem,5vh,5rem)] bottom-[clamp(0.1rem,10vh,5rem)] h-auto w-[clamp(150px,30vh,1000px)] rotate-6 rounded-2xl will-change-transform md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/fight_club_2.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="horizontal-item flex h-screen w-screen shrink-0 items-center justify-center">
            <div className="relative flex h-[90%] w-[90%] flex-col items-center justify-center">
              <div className="z-10">
                <h1 className="font-[space] text-[clamp(2rem,7vw,4rem)] font-extrabold">
                  BMW
                </h1>

                <p className="font-[] max-w-md text-[clamp(1rem,2vw,1.2rem)]">
                  BMW is a premium showcase website highlighting the brand’s
                  design and performance — bold visuals, smooth interactions,
                  and an experience that reflects automotive excellence.
                </p>
              </div>
              <Image
                className="physics-float-1 absolute top-0 right-0 h-auto w-[clamp(200px,30vh,1000px)] -rotate-6 rounded-2xl will-change-transform sm:top-[clamp(2rem,10vh,10rem)] sm:right-[clamp(2rem,10vh,10rem)] md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/bmw_car_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 absolute top-[clamp(2rem,15vh,8rem)] left-0 h-auto w-[clamp(100px,12vh,1000px)] rotate-6 rounded-2xl will-change-transform md:left-[clamp(2rem,10vh,5rem)] md:w-[clamp(100px,12vw,500px)]"
                src="/images/projects/bmw_car_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 absolute right-[clamp(2rem,5vh,5rem)] bottom-[clamp(0.1rem,10vh,5rem)] h-auto w-[clamp(200px,30vh,1000px)] rotate-6 rounded-2xl will-change-transform md:w-[clamp(200px,25vw,1000px)]"
                src="/images/projects/bmw_car_2.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
