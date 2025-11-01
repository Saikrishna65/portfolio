"use client"; // 👈 required for GSAP + useState/useEffect

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import FadeInFromBottom from "./FadeInFromBottom";

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

  // GSAP sidebar animation setup
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
      }
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
      "-=0.4"
    );

    tlRef.current = tl;
    return () => {
      tl.kill();
    };
  }, []);

  // Disable scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Play or reverse animation on open state
  useEffect(() => {
    if (!tlRef.current) return;
    open ? tlRef.current.play() : tlRef.current.reverse();
  }, [open]);

  // Close sidebar on outside click
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
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-50 w-16 h-16 bg-[#00CAFF] rounded-full flex items-center justify-center focus:outline-none"
      >
        <span
          className={`absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      <div
        ref={sidebarRef}
        className="fixed top-0 inset-y-0 right-0 z-40 w-full md:w-[450px] h-full overflow-hidden bg-white"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center px-6 overflow-auto">
          <ul className="space-y-6 text-center text-black text-2xl font-semibold">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  ref={(el) => {
                    linksRef.current[idx] = el;
                  }}
                  className="hover:text-blue-600 transition"
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
