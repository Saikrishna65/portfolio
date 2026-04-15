"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePortfolio } from "../context/PortfolioContext";

const navLinks = {
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  jp: [
    { label: "ホーム", href: "#home" },
    { label: "自己紹介", href: "#about" },
    { label: "プロジェクト", href: "#projects" },
    { label: "連絡先", href: "#contact" },
  ],
};

const Sidebar = () => {
  const { language } = usePortfolio();
  const [open, setOpen] = React.useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const fillsRef = useRef<HTMLDivElement[]>([]);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    // fade in sidebar
    tl.current.fromTo(
      sidebarRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
    );

    // bars fill
    tl.current.fromTo(
      fillsRef.current,
      { height: "0%" },
      {
        height: "100%",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.03,
      },
      0,
    );

    // links fade in and up
    tl.current.fromTo(
      linksRef.current,
      { opacity: 0, y: 5 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
      },
    );
  }, []);

  useEffect(() => {
    if (open) {
      tl.current?.play();
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      tl.current?.reverse();
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#00CAFF] transition-all duration-300 md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-18 2xl:w-18"
      >
        <span
          className={`absolute h-0.5 w-5 bg-black transition-all duration-300 md:w-7 ${open ? "rotate-45" : "sm:-translate-y-1.9 -translate-y-1.5"}`}
        />
        <span
          className={`absolute h-0.5 w-5 bg-black transition-all duration-300 md:w-7 ${open ? "-rotate-45" : "sm:translate-y-1.9 translate-y-1.5"}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
      )}

      <div
        ref={sidebarRef}
        className={`absolute -top-4 -right-4 z-40 h-screen w-screen overflow-hidden opacity-0 sm:w-[110%] ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="relative h-[10%] w-full">
            <div className="h-full w-full" />
            <div
              ref={(el) => {
                if (el) fillsRef.current[i] = el;
              }}
              className="absolute top-0 left-0 w-full bg-white"
              style={{ height: "0%" }}
            />
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8">
          {navLinks[language].map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              onClick={() => setOpen(false)}
              className="nav-item font-[bebas] text-3xl tracking-wide text-black transition hover:tracking-wider hover:opacity-60 sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
