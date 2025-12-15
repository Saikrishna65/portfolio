"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div } from "motion/react-client";
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
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div
          ref={leftRef}
          className="text-white text-[clamp(4rem,15vw,15rem)] font-[bebas]"
        >
          LET’
        </div>

        <div
          ref={centerRef}
          className="mask-text text-white text-[clamp(4rem,15vw,15rem)]
             font-[bebas] mr-10
             origin-center will-change-transform"
        >
          S
        </div>

        <div
          ref={rightRef}
          className="text-white text-[clamp(4rem,15vw,15rem)] font-[bebas]"
        >
          CONNECT
        </div>
      </div>
      {secondLayer && (
        <div className="absolute top-0 z-10 bg-white w-full h-full px-5 md:px-10 py-10">
          <div className="w-full h-[50%] md:flex">
            <div className="md:w-[50%]">
              <CenterRevealText
                text="Slide into my inbox. It’s well-designed."
                className="text-[clamp(3rem,6vw,8rem)] leading-[1.1] font-semibold tracking-wide [word-spacing:0.3rem] font-[impact]"
              />
              <CenterRevealText
                text="Working hard, wherever Wi-Fi takes me."
                className="text-[clamp(1.2rem,2vw,2rem)] font-[space] font-semibold"
              />
            </div>
            <div className="md:w-[50%] pt-15 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 w-fit select-none">
                <CenterRevealText
                  text={email}
                  className="text-gray-800 bg-gray-100 rounded-lg px-4 py-2 font-[mons]"
                />

                <button
                  onClick={handleCopy}
                  className="rounded-lg p-2 cursor-pointer bg-gray-100 transition"
                >
                  {copied ? (
                    <CheckCheck className="w-5 h-5 text-black" />
                  ) : (
                    <Copy className="w-5 h-5 text-bkack" />
                  )}
                </button>
              </div>
              <div className="flex gap-3 mt-4">
                <CenterRevealText
                  text="Local time"
                  className="text-[clamp(1rem,2vw,1rem)] font-[mons]"
                />

                <CenterRevealText
                  text={time}
                  className="text-[clamp(1rem,2vw,1rem)] font-[mons]"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-[50%] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-10">
              <a href="https://www.linkedin.com/in/saikrishnamangina/">
                <CenterRevealText
                  text="LinkedIn"
                  className="text-[clamp(1rem,2vw,1.5rem)] font-[mons]"
                />
              </a>
              <a href="https://github.com/Saikrishna65">
                <CenterRevealText
                  text="GitHub"
                  className="text-[clamp(1rem,2vw,1.5rem)] font-[mons]"
                />
              </a>
            </div>
            <div className="absolute bottom-0 flex gap-2 items-center">
              <Copyright className="w-4 h-4 md:w-6 md:h-6" />
              <CenterRevealText
                text="2025 Sai Krishna. All rights reserved… probably."
                className="text-[clamp(0.8rem,2vw,1rem)] font-[mons]"
                noScroll
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
