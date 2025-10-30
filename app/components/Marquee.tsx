"use client";
import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";

interface Phrase {
  text: string;
  icon?: React.ReactElement<{ className?: string }>;
}

interface MarqueeProps {
  phrases?: (Phrase | string)[];
  direction?: "Left" | "Right";
  containerClass?: string;
  textClass?: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  phrases = [],
  direction = "Left",
  containerClass = "",
  textClass = "",
  speed = 100,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2;
      setDuration(trackWidth / speed);
    }
  }, [phrases, speed]);

  return (
    <div
      className={clsx(
        "relative flex w-[105%] -left-2 overflow-hidden select-none",
        containerClass
      )}
      aria-hidden="true"
      role="presentation"
    >
      <div
        ref={trackRef}
        className={clsx(
          "marquee-track flex items-center whitespace-nowrap",
          direction === "Right" && "[animation-direction:reverse]"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...Array(2)].map((_, idx) =>
          phrases.map((item, i) => {
            const isString = typeof item === "string";
            return (
              <React.Fragment key={`${idx}-${i}`}>
                <div
                  className={clsx(
                    "uppercase font-bold flex items-center justify-center leading-none",
                    textClass
                  )}
                >
                  {isString ? item : item.text}
                </div>
                {!isString && item.icon && (
                  <span className="flex items-center">
                    {React.cloneElement(item.icon, {
                      className: "w-14 h-14 md:w-16 md:h-16",
                    })}
                  </span>
                )}
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Marquee;
