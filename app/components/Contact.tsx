"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CenterRevealText from "./CenterRevealText";
import { CheckCheck, Copy, Copyright } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [secondLayer, setSecondLayer] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const email = "sai.mangina789@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useLayoutEffect(() => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const sRect = centerRef.current.getBoundingClientRect();
    const currentX = sRect.left + sRect.width / 2;
    const centerX = containerRect.left + containerRect.width / 2;
    const moveX = centerX - currentX;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top +=10",
          once: true,
        },
      });

      tl.to([leftRef.current, rightRef.current], {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      })
        .to(centerRef.current, {
          x: moveX,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(centerRef.current, {
          scale: 9,
          fontSize: "500rem",
          rotate: -50,
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => setSecondLayer(true),
        })
        .add(() => {
          setSecondLayer(true);
        }, 3.6)

        .to(centerRef.current, {
          scale: 0.05,
          fontSize: "1rem",
          autoAlpha: 0,
          ease: "power2.in",
        });
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      const timeString = `${hours}:${minutes} ${ampm} IST (GMT+5:30)`;
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div
          ref={leftRef}
          className="font-[bebas] text-[clamp(4rem,15vw,15rem)] text-white"
        >
          LET’
        </div>

        <div
          ref={centerRef}
          className="mask-text mr-10 origin-center font-[bebas] text-[clamp(4rem,15vw,15rem)] text-white will-change-transform"
        >
          S
        </div>

        <div
          ref={rightRef}
          className="font-[bebas] text-[clamp(4rem,15vw,15rem)] text-white"
        >
          CONNECT
        </div>
      </div>
      {secondLayer && (
        <div className="absolute top-0 z-10 h-full w-full bg-white px-5 py-[clamp(1rem,3vw,3rem)] md:px-10">
          <div className="h-[50%] w-full md:flex">
            <div className="md:w-[50%]">
              <CenterRevealText
                text="Slide into my inbox. It’s well-designed."
                className="font-[impact] text-[clamp(2rem,6vh,8rem)] leading-[1.1] font-semibold tracking-wide [word-spacing:0.3rem] lg:text-[clamp(3rem,6vw,5rem)]"
              />
              <CenterRevealText
                text="Working hard, wherever Wi-Fi takes me."
                className="font-[space] text-[clamp(1rem,2vh,2rem)] font-semibold md:text-[clamp(0.5rem,3vw,1.5rem)]"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-[clamp(1rem,7vh,10rem)] md:w-[50%]">
              <div className="flex w-fit items-center gap-2 select-none">
                <CenterRevealText
                  text={email}
                  className="rounded-lg bg-gray-100 px-4 py-2 font-[mons] text-[clamp(0.8rem,3vw,1rem)] text-gray-800"
                />

                <button
                  onClick={handleCopy}
                  className="cursor-pointer rounded-lg bg-gray-100 p-2 transition"
                >
                  {copied ? (
                    <CheckCheck className="h-5 w-5 text-black" />
                  ) : (
                    <Copy className="text-bkack h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="mt-4 flex gap-1">
                <CenterRevealText
                  text="Local time"
                  className="font-[mons] text-[clamp(0.9rem,2vw,1rem)]"
                />

                <CenterRevealText
                  text={time}
                  className="font-[mons] text-[clamp(0.9rem,2vw,1rem)]"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 h-[30%] w-full md:h-[50%]">
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-10">
                <a href="https://www.linkedin.com/in/saikrishnamangina/">
                  <CenterRevealText
                    text="LinkedIn"
                    className="font-[mons] text-[clamp(0.9rem,2vw,1.5rem)]"
                  />
                </a>
                <a href="https://github.com/Saikrishna65">
                  <CenterRevealText
                    text="GitHub"
                    className="font-[mons] text-[clamp(0.9rem,2vw,1.5rem)]"
                  />
                </a>
              </div>
              <div className="absolute bottom-1 flex items-center gap-2 sm:bottom-5">
                <Copyright className="h-4 w-4 md:h-6 md:w-6" />
                <CenterRevealText
                  text="2025 Sai Krishna. All rights reserved… probably."
                  className="font-[mons] text-[clamp(0.5rem,3vw,1rem)]"
                  noScroll
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
