"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const PageTransition = forwardRef((_, ref) => {
  const blockRefsTop = useRef<HTMLDivElement[]>([]);
  const blockRefsBottom = useRef<HTMLDivElement[]>([]);
  const blockRefsLeft = useRef<HTMLDivElement[]>([]);
  const blockRefsRight = useRef<HTMLDivElement[]>([]);

  const closeAnimation = () => {
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power4.inOut" },
        onComplete: resolve,
      });

      tl.to(blockRefsTop.current, {
        scaleY: 1,
        transformOrigin: "top",
        stagger: { each: 0.1, from: "end" },
      })
        .to(
          blockRefsBottom.current,
          {
            scaleY: 1,
            transformOrigin: "bottom",
            stagger: { each: 0.1, from: "end" },
          },
          "<"
        )
        .to(
          blockRefsLeft.current,
          {
            scaleX: 1,
            transformOrigin: "left",
            stagger: { each: 0.1, from: "end" },
          },
          "<"
        )
        .to(
          blockRefsRight.current,
          {
            scaleX: 1,
            transformOrigin: "right",
            stagger: { each: 0.1, from: "end" },
          },
          "<"
        );
    });
  };

  // --- OPEN ANIMATION ---
  const openAnimation = () => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power4.inOut" },
    });

    tl.to(blockRefsTop.current, {
      scaleY: 0,
      transformOrigin: "top",
      stagger: { each: 0.1, from: "start" },
    })
      .to(
        blockRefsBottom.current,
        {
          scaleY: 0,
          transformOrigin: "bottom",
          stagger: { each: 0.1, from: "start" },
        },
        "<"
      )
      .to(
        blockRefsLeft.current,
        {
          scaleX: 0,
          transformOrigin: "left",
          stagger: { each: 0.1, from: "start" },
        },
        "<"
      )
      .to(
        blockRefsRight.current,
        {
          scaleX: 0,
          transformOrigin: "right",
          stagger: { each: 0.1, from: "start" },
        },
        "<"
      );
  };

  useImperativeHandle(ref, () => ({
    closeAnimation,
    openAnimation,
  }));

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-9999 pointer-events-none">
      {/* top section */}
      <div
        ref={(el) => {
          blockRefsTop.current[7] = el!;
        }}
        className="absolute left-[86vw] md:left-[68vw]  w-[14vw] md:w-[6vw] bg-white h-[10vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[5] = el!;
        }}
        className="absolute left-[74vw] md:left-[62vw]  w-[12vw] md:w-[6vw] bg-white h-[20vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[3] = el!;
        }}
        className="absolute left-[62vw] md:left-[56vw]  w-[12vw] md:w-[6vw] bg-white h-[30vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[1] = el!;
        }}
        className="absolute left-[50vw] md:left-[50vw]  w-[12vw] md:w-[6vw] bg-white h-[40vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[0] = el!;
        }}
        className="absolute left-[38vw] md:left-[44vw]  w-[12vw] md:w-[6vw] bg-white h-[50vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[2] = el!;
        }}
        className="absolute left-[26vw] md:left-[38vw]  w-[12vw] md:w-[6vw] bg-white h-[40vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[4] = el!;
        }}
        className="absolute left-[14vw] md:left-[32vw]  w-[12vw] md:w-[6vw] bg-white h-[30vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[6] = el!;
        }}
        className="absolute left-0 md:left-[26vw]  w-[14vw] md:w-[6vw] bg-white h-[20vh] scale-y-0 origin-top"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[8] = el!;
        }}
        className="absolute hidden md:block left-[20vw]  w-[6vw] bg-white h-[10vh] scale-y-0 origin-top"
      ></div>

      {/* bottom section */}
      <div
        ref={(el) => {
          blockRefsBottom.current[8] = el!;
        }}
        className="absolute bottom-0 hidden md:block left-[74vw] w-[6vw] bg-white h-[10vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[6] = el!;
        }}
        className="absolute bottom-0 left-[86vw] md:left-[68vw]  w-[14vw] md:w-[6vw] bg-white h-[20vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[4] = el!;
        }}
        className="absolute bottom-0 left-[74vw] md:left-[62vw]  w-[12vw] md:w-[6vw] bg-white h-[30vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[2] = el!;
        }}
        className="absolute bottom-0 left-[62vw] md:left-[56vw]  w-[12vw] md:w-[6vw] bg-white h-[40vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[0] = el!;
        }}
        className="absolute bottom-0 left-[50vw] md:left-[50vw]  w-[12vw] md:w-[6vw] bg-white h-[50vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[1] = el!;
        }}
        className="absolute bottom-0 left-[38vw] md:left-[44vw]  w-[12vw] md:w-[6vw] bg-white h-[40vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[3] = el!;
        }}
        className="absolute bottom-0 left-[26vw] md:left-[38vw]  w-[12vw] md:w-[6vw] bg-white h-[30vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[5] = el!;
        }}
        className="absolute bottom-0 left-[14vw] md:left-[32vw]  w-[12vw] md:w-[6vw] bg-white h-[20vh] scale-y-0 origin-bottom"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[7] = el!;
        }}
        className="absolute bottom-0 left-0 md:left-[26vw]  w-[14vw] md:w-[6vw] bg-white h-[10vh] scale-y-0 origin-bottom"
      ></div>

      {/* left section */}
      <div
        ref={(el) => {
          blockRefsLeft.current[9] = el!;
        }}
        className="absolute hidden md:block top-0 w-[20vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[7] = el!;
        }}
        className="absolute hidden md:block top-[10vh] w-[26vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[5] = el!;
        }}
        className="absolute top-[20vh] w-[14vw] md:w-[32vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[3] = el!;
        }}
        className="absolute top-[30vh] w-[26vw] md:w-[38vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[1] = el!;
        }}
        className="absolute top-[40vh] w-[38vw] md:w-[44vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[0] = el!;
        }}
        className="absolute top-[50vh] w-[50vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[2] = el!;
        }}
        className="absolute top-[60vh] w-[38vw] md:w-[44vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[4] = el!;
        }}
        className="absolute top-[70vh] w-[26vw] md:w-[38vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[6] = el!;
        }}
        className="absolute top-[80vh] w-[14vw] md:w-[32vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[8] = el!;
        }}
        className="absolute top-[90vh] hidden md:block w-[26vw] h-[10vh] bg-white scale-x-0 origin-left"
      ></div>

      {/* right section */}
      <div
        ref={(el) => {
          blockRefsRight.current[8] = el!;
        }}
        className="absolute right-0 top-0 hidden md:block w-[26vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[6] = el!;
        }}
        className="absolute right-0 top-[10vh] w-[14vw] md:w-[32vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[4] = el!;
        }}
        className="absolute right-0 top-[20vh] w-[26vw] md:w-[38vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[2] = el!;
        }}
        className="absolute right-0 top-[30vh] w-[38vw] md:w-[44vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[0] = el!;
        }}
        className="absolute right-0 top-[40vh] w-[50vw] md:w-[50vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[1] = el!;
        }}
        className="absolute right-0 top-[50vh] w-[38vw] md:w-[44vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[3] = el!;
        }}
        className="absolute right-0 top-[60vh] w-[26vw] md:w-[38vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[5] = el!;
        }}
        className="absolute right-0 top-[70vh] w-[14vw] md:w-[32vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[7] = el!;
        }}
        className="absolute right-0 hidden md:block top-[80vh] w-[26vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[9] = el!;
        }}
        className="absolute right-0 hidden md:block top-[90vh] w-[20vw] h-[10vh] bg-white scale-x-0 origin-right"
      ></div>
    </div>
  );
});

export default PageTransition;
