"use client";
import React, { useEffect } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import gsap from "gsap";
import { Smile } from "lucide-react";
import { div } from "motion/react-client";

const modeLabels = {
  en: {
    fun: "Fun Mode",
    professional: "Professional Mode",
  },
  jp: {
    fun: "たのしいモード",
    professional: "プロモード",
  },
};

export default function ToggleButtons() {
  const emojiRef = React.useRef<HTMLDivElement>(null);
  const { mode, setMode, language, setLanguage } = usePortfolio();

  const handleHover = () => {
    if (!emojiRef.current) return;

    gsap.fromTo(
      emojiRef.current,
      { y: 0, scale: 1 },
      {
        y: -4,
        scale: 1.1,
        duration: 0.25,
        ease: "back.out(2)",
        yoyo: true,
        repeat: 1,
      },
    );
  };

  return (
    <div className="flex items-center gap-2 text-sm text-white sm:flex-row sm:items-center sm:gap-4">
      <button
        onMouseEnter={handleHover}
        className="h-9 w-26 cursor-pointer rounded-md border-[1.4px] px-3 font-[outfit] text-xs transition md:h-10 md:w-auto md:text-sm 2xl:h-16 2xl:rounded-xl 2xl:border-[1.5px] 2xl:px-5 2xl:text-3xl"
        onClick={() =>
          setMode(mode === "professional" ? "fun" : "professional")
        }
      >
        <span className="inline-flex items-center gap-1">
          {mode === "professional"
            ? modeLabels[language].fun
            : modeLabels[language].professional}

          {mode === "professional" && (
            <div ref={emojiRef}>
              <Smile size={18} className="text-[#00CAFF]" />
            </div>
          )}
        </span>
      </button>

      <button
        className="h-9 w-16 cursor-pointer rounded-md border-[1.4px] px-3 font-[outfit] text-xs transition md:h-10 md:w-auto md:text-sm 2xl:h-16 2xl:rounded-xl 2xl:border-[1.5px] 2xl:px-5 2xl:text-3xl"
        onClick={() => setLanguage(language === "en" ? "jp" : "en")}
      >
        {language === "en" ? "日本語" : "English"}
      </button>
    </div>
  );
}
