"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const transitionRef = useRef<{
    closeAnimation: () => Promise<void>;
    openAnimation: () => void;
  }>(null);

  const isTransitioning = useRef(false);
  const isFirstLoad = useRef(true);

  // 🚀 Custom navigation handler (handles normal and hash links)
  const handleNavigation = async (url: string, hash?: string) => {
    if (isTransitioning.current || !transitionRef.current) return;
    isTransitioning.current = true;

    await transitionRef.current.closeAnimation();

    // Navigate (internal routing or hash jump)
    if (hash) {
      // keep same page path
      window.history.pushState(null, "", `${pathname}${hash}`);
      // wait a bit for DOM update
      await new Promise((res) => setTimeout(res, 100));
    } else {
      router.push(url);
    }

    // reveal
    transitionRef.current.openAnimation();

    // scroll to hash target if any
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    isTransitioning.current = false;
  };

  // 🕒 Handle route changes (skip on first load)
  useEffect(() => {
    const animateOnRouteChange = async () => {
      if (!transitionRef.current) return;

      await new Promise((res) => setTimeout(res, 100));

      if (isFirstLoad.current) {
        // ❌ Skip transition animation for initial page load
        isFirstLoad.current = false;
        return;
      }

      // ✅ Play reveal only for route changes
      transitionRef.current.openAnimation();
      isTransitioning.current = false;
    };

    animateOnRouteChange();
  }, [pathname]);

  return (
    <>
      <PageTransition ref={transitionRef} />

      {/* Intercept all <a> clicks (including #hash) */}
      <div
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const link = target.closest("a");

          if (link && link.href && !link.target) {
            const url = new URL(link.href);
            const current = window.location;

            const isInternal = url.origin === current.origin;

            if (isInternal) {
              e.preventDefault();

              const hash = url.hash || "";
              const isSamePage = url.pathname === current.pathname;

              // ✅ Same page with #hash (about, contact, etc.)
              if (isSamePage) {
                handleNavigation(url.pathname, hash);
              } else {
                handleNavigation(url.pathname);
              }
            }
          }
        }}
      >
        {children}
      </div>
    </>
  );
}
