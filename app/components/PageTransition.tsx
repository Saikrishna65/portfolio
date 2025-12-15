"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
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
          "<",
        )
        .to(
          blockRefsLeft.current,
          {
            scaleX: 1,
            transformOrigin: "left",
            stagger: { each: 0.1, from: "end" },
          },
          "<",
        )
        .to(
          blockRefsRight.current,
          {
            scaleX: 1,
            transformOrigin: "right",
            stagger: { each: 0.1, from: "end" },
          },
          "<",
        );
    });
  };

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
        "<",
      )
      .to(
        blockRefsLeft.current,
        {
          scaleX: 0,
          transformOrigin: "left",
          stagger: { each: 0.1, from: "start" },
        },
        "<",
      )
      .to(
        blockRefsRight.current,
        {
          scaleX: 0,
          transformOrigin: "right",
          stagger: { each: 0.1, from: "start" },
        },
        "<",
      );
  };

  useImperativeHandle(ref, () => ({
    closeAnimation,
    openAnimation,
  }));

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-9999 h-screen w-full">
      {/* top section */}
      <div
        ref={(el) => {
          blockRefsTop.current[7] = el!;
        }}
        className="absolute left-[86vw] h-[10vh] w-[14vw] origin-top scale-y-0 bg-white md:left-[68vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[5] = el!;
        }}
        className="absolute left-[74vw] h-[20vh] w-[12vw] origin-top scale-y-0 bg-white md:left-[62vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[3] = el!;
        }}
        className="absolute left-[62vw] h-[30vh] w-[12vw] origin-top scale-y-0 bg-white md:left-[56vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[1] = el!;
        }}
        className="absolute left-[50vw] h-[40vh] w-[12vw] origin-top scale-y-0 bg-white md:left-[50vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[0] = el!;
        }}
        className="absolute left-[38vw] h-[50vh] w-[12vw] origin-top scale-y-0 bg-white md:left-[44vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[2] = el!;
        }}
        className="absolute left-[26vw] h-[40vh] w-[12vw] origin-top scale-y-0 bg-white md:left-[38vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[4] = el!;
        }}
        className="absolute left-[14vw] h-[30vh] w-[12vw] origin-top scale-y-0 bg-white md:left-[32vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[6] = el!;
        }}
        className="absolute left-0 h-[20vh] w-[14vw] origin-top scale-y-0 bg-white md:left-[26vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsTop.current[8] = el!;
        }}
        className="absolute left-[20vw] hidden h-[10vh] w-[6vw] origin-top scale-y-0 bg-white md:block"
      ></div>

      {/* bottom section */}
      <div
        ref={(el) => {
          blockRefsBottom.current[8] = el!;
        }}
        className="absolute bottom-0 left-[74vw] hidden h-[10vh] w-[6vw] origin-bottom scale-y-0 bg-white md:block"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[6] = el!;
        }}
        className="absolute bottom-0 left-[86vw] h-[20vh] w-[14vw] origin-bottom scale-y-0 bg-white md:left-[68vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[4] = el!;
        }}
        className="absolute bottom-0 left-[74vw] h-[30vh] w-[12vw] origin-bottom scale-y-0 bg-white md:left-[62vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[2] = el!;
        }}
        className="absolute bottom-0 left-[62vw] h-[40vh] w-[12vw] origin-bottom scale-y-0 bg-white md:left-[56vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[0] = el!;
        }}
        className="absolute bottom-0 left-[50vw] h-[50vh] w-[12vw] origin-bottom scale-y-0 bg-white md:left-[50vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[1] = el!;
        }}
        className="absolute bottom-0 left-[38vw] h-[40vh] w-[12vw] origin-bottom scale-y-0 bg-white md:left-[44vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[3] = el!;
        }}
        className="absolute bottom-0 left-[26vw] h-[30vh] w-[12vw] origin-bottom scale-y-0 bg-white md:left-[38vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[5] = el!;
        }}
        className="absolute bottom-0 left-[14vw] h-[20vh] w-[12vw] origin-bottom scale-y-0 bg-white md:left-[32vw] md:w-[6vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsBottom.current[7] = el!;
        }}
        className="absolute bottom-0 left-0 h-[10vh] w-[14vw] origin-bottom scale-y-0 bg-white md:left-[26vw] md:w-[6vw]"
      ></div>

      {/* left section */}
      <div
        ref={(el) => {
          blockRefsLeft.current[9] = el!;
        }}
        className="absolute top-0 hidden h-[10vh] w-[20vw] origin-left scale-x-0 bg-white md:block"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[7] = el!;
        }}
        className="absolute top-[10vh] hidden h-[10vh] w-[26vw] origin-left scale-x-0 bg-white md:block"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[5] = el!;
        }}
        className="absolute top-[20vh] h-[10vh] w-[14vw] origin-left scale-x-0 bg-white md:w-[32vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[3] = el!;
        }}
        className="absolute top-[30vh] h-[10vh] w-[26vw] origin-left scale-x-0 bg-white md:w-[38vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[1] = el!;
        }}
        className="absolute top-[40vh] h-[10vh] w-[38vw] origin-left scale-x-0 bg-white md:w-[44vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[0] = el!;
        }}
        className="absolute top-[50vh] h-[10vh] w-[50vw] origin-left scale-x-0 bg-white"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[2] = el!;
        }}
        className="absolute top-[60vh] h-[10vh] w-[38vw] origin-left scale-x-0 bg-white md:w-[44vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[4] = el!;
        }}
        className="absolute top-[70vh] h-[10vh] w-[26vw] origin-left scale-x-0 bg-white md:w-[38vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[6] = el!;
        }}
        className="absolute top-[80vh] h-[10vh] w-[14vw] origin-left scale-x-0 bg-white md:w-[32vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsLeft.current[8] = el!;
        }}
        className="absolute top-[90vh] hidden h-[10vh] w-[26vw] origin-left scale-x-0 bg-white md:block"
      ></div>

      {/* right section */}
      <div
        ref={(el) => {
          blockRefsRight.current[8] = el!;
        }}
        className="absolute top-0 right-0 hidden h-[10vh] w-[26vw] origin-right scale-x-0 bg-white md:block"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[6] = el!;
        }}
        className="absolute top-[10vh] right-0 h-[10vh] w-[14vw] origin-right scale-x-0 bg-white md:w-[32vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[4] = el!;
        }}
        className="absolute top-[20vh] right-0 h-[10vh] w-[26vw] origin-right scale-x-0 bg-white md:w-[38vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[2] = el!;
        }}
        className="absolute top-[30vh] right-0 h-[10vh] w-[38vw] origin-right scale-x-0 bg-white md:w-[44vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[0] = el!;
        }}
        className="absolute top-[40vh] right-0 h-[10vh] w-[50vw] origin-right scale-x-0 bg-white md:w-[50vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[1] = el!;
        }}
        className="absolute top-[50vh] right-0 h-[10vh] w-[38vw] origin-right scale-x-0 bg-white md:w-[44vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[3] = el!;
        }}
        className="absolute top-[60vh] right-0 h-[10vh] w-[26vw] origin-right scale-x-0 bg-white md:w-[38vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[5] = el!;
        }}
        className="absolute top-[70vh] right-0 h-[10vh] w-[14vw] origin-right scale-x-0 bg-white md:w-[32vw]"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[7] = el!;
        }}
        className="absolute top-[80vh] right-0 hidden h-[10vh] w-[26vw] origin-right scale-x-0 bg-white md:block"
      ></div>
      <div
        ref={(el) => {
          blockRefsRight.current[9] = el!;
        }}
        className="absolute top-[90vh] right-0 hidden h-[10vh] w-[20vw] origin-right scale-x-0 bg-white md:block"
      ></div>
    </div>
  );
});

export default PageTransition;
