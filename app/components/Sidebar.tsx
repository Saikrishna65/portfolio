"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface NavLink {
  label: string;
  href: string;
}

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      sidebarRef.current,
      {
        x: "100%",
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
      },
      {
        x: "0%",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        duration: 0.8,
        ease: "power2.out",
      },
    );

    tl.fromTo(
      linksRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4",
    );

    tlRef.current = tl;
    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!tlRef.current) return;
    open ? tlRef.current.play() : tlRef.current.reverse();
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#00CAFF] focus:outline-none md:h-16 md:w-16"
      >
        <span
          className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      <div
        ref={sidebarRef}
        className="fixed inset-y-0 top-0 right-0 z-40 h-full w-full overflow-hidden bg-white md:w-[450px]"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center overflow-auto px-6">
          <ul className="space-y-6 text-center text-2xl font-semibold text-black">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  ref={(el) => {
                    linksRef.current[idx] = el;
                  }}
                  className="transition hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
