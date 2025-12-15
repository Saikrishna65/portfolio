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
      horizontal.querySelectorAll(".horizontal-item")
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
        ".physics-float-1, .physics-float-2, .physics-float-3"
      )
      .forEach(float);

    return () =>
      gsap.killTweensOf(".physics-float-1, .physics-float-2, .physics-float-3");
  }, []);

  return (
    <section className="w-full text-white">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div ref={horizontalRef} className="horizontal-scroll flex w-max">
          <div className="horizontal-item w-screen h-screen flex items-center justify-center shrink-0">
            <h1
              ref={headingRef}
              className="text-[clamp(5rem,15vw,15rem)] font-[bebas]"
            >
              PROJECTS
            </h1>
          </div>

          <div className="horizontal-item w-screen h-screen flex items-center justify-center shrink-0">
            <div className="relative w-[90%] h-[90%] items-center justify-center flex flex-col">
              <div className="z-10">
                <h1 className="text-[clamp(2rem,7vw,4rem)] font-extrabold font-[space]">
                  Campus Cravings
                </h1>

                <p className="max-w-md text-[clamp(1rem,2vw,1.2rem)] font-[]">
                  CampusCravings is a modern food-delivery platform built for
                  college life — fast orders, smart delivery, and a sleek
                  interface that makes grabbing a meal feel effortless.
                </p>
              </div>
              <Image
                className="physics-float-1 will-change-transform
                absolute right-0 top-0 
                md:right-10 md:top-20 
                w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96 
                h-auto 
                rounded-2xl 
                -rotate-6
                "
                src="/images/projects/campus_cravings_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 will-change-transform absolute left-0 top-30 md:left-10 md:top-30 w-28 sm:w-30 md:w-32 lg:w-40 xl:w-50
    h-auto rounded-2xl rotate-6"
                src="/images/projects/campus_cravings_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 will-change-transform absolute bottom-30 right-10 md:right-50 md:bottom-0 w-62 sm:w-62 md:w-72 lg:w-80 xl:w-80 
    h-auto rounded-2xl rotate-6"
                src="/images/projects/campus_cravings_2.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="horizontal-item w-screen h-screen flex items-center justify-center shrink-0">
            <div className="relative w-[90%] h-[90%] items-center justify-center flex flex-col">
              <div className="z-10">
                <h1 className="text-[clamp(2rem,7vw,4rem)] font-extrabold font-[space]">
                  WorkBridge
                </h1>

                <p className="max-w-md text-[clamp(1rem,2vw,1.2rem)] font-[]">
                  WorkBridge is a modern job-finding platform built to connect
                  people with work — fast discovery, smart matching, and a
                  seamless user experience.
                </p>
              </div>
              <Image
                className="physics-float-1 will-change-transform
                absolute right-0 top-0 
                md:right-10 md:top-20 
                w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96 
                h-auto 
                rounded-2xl 
                -rotate-6
                "
                src="/images/projects/work_bridge_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 will-change-transform absolute left-0 top-30 md:left-10 md:top-30 w-28 sm:w-30 md:w-32 lg:w-40 xl:w-50
    h-auto rounded-2xl rotate-6"
                src="/images/projects/work_bridge_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 will-change-transform absolute bottom-30 right-10 md:right-50 md:bottom-0 w-62 sm:w-62 md:w-72 lg:w-80 xl:w-80 
    h-auto rounded-2xl rotate-6"
                src="/images/projects/work_bridge_2.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="horizontal-item w-screen h-screen flex items-center justify-center shrink-0">
            <div className="relative w-[90%] h-[90%] items-center justify-center flex flex-col">
              <div className="z-10">
                <h1 className="text-[clamp(2rem,7vw,4rem)] font-extrabold font-[space]">
                  Fight Club
                </h1>

                <p className="max-w-md text-[clamp(1rem,2vw,1.2rem)] font-[]">
                  Fight Club is a visually striking website inspired by the cult
                  classic — minimal design, intense aesthetics, and a user
                  experience that reflects the film’s chaos.
                </p>
              </div>
              <Image
                className="physics-float-1 will-change-transform
                absolute right-0 top-0 
                md:right-10 md:top-20 
                w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96 
                h-auto 
                rounded-2xl 
                -rotate-6
                "
                src="/images/projects/fight_club_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 will-change-transform absolute left-0 top-30 md:left-10 md:top-30 w-28 sm:w-30 md:w-32 lg:w-40 xl:w-50
    h-auto rounded-2xl rotate-6"
                src="/images/projects/fight_club_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 will-change-transform absolute bottom-30 right-10 md:right-50 md:bottom-0 w-62 sm:w-62 md:w-72 lg:w-80 xl:w-80 
    h-auto rounded-2xl rotate-6"
                src="/images/projects/fight_club_2.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="horizontal-item w-screen h-screen flex items-center justify-center shrink-0">
            <div className="relative w-[90%] h-[90%] items-center justify-center flex flex-col">
              <div className="z-10">
                <h1 className="text-[clamp(2rem,7vw,4rem)] font-extrabold font-[space]">
                  BMW
                </h1>

                <p className="max-w-md text-[clamp(1rem,2vw,1.2rem)] font-[]">
                  BMW is a premium showcase website highlighting the brand’s
                  design and performance — bold visuals, smooth interactions,
                  and an experience that reflects automotive excellence.
                </p>
              </div>
              <Image
                className="physics-float-1 will-change-transform
                absolute right-0 top-0 
                md:right-10 md:top-20 
                w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96 
                h-auto 
                rounded-2xl 
                -rotate-6
                "
                src="/images/projects/bmw_car_hero.png"
                alt="Campus Cravings"
                width={500}
                height={500}
              />
              <Image
                className="physics-float-2 will-change-transform absolute left-0 top-30 md:left-10 md:top-30 w-28 sm:w-30 md:w-32 lg:w-40 xl:w-50
    h-auto rounded-2xl rotate-6"
                src="/images/projects/bmw_car_1.png"
                alt="Campus Cravings"
                height={500}
                width={500}
              />
              <Image
                className="physics-float-3 will-change-transform absolute bottom-30 right-10 md:right-50 md:bottom-0 w-62 sm:w-62 md:w-72 lg:w-80 xl:w-80 
    h-auto rounded-2xl rotate-6"
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
