"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const progressObj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      },
    });

    tl.to(progressObj, {
      value: 100,
      duration: 3,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(progressObj.value));
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen bg-black text-white"
    >
      <div className="text-4xl font-bold tracking-wider">
        Loading... {progress}%
      </div>

      <div className="w-64 mt-6 bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="bg-white h-2 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loading;
