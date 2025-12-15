"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageTransition from "./PageTransition";
import Loader from "./Loader";

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
  const [showLoader, setShowLoader] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // ------------------------------
  // 🧭 First visit loader logic
  // ------------------------------
  const handleLoaderComplete = async () => {
    // 1️⃣ Loader reaches 100% → immediately start close animation
    if (transitionRef.current) {
      await transitionRef.current.closeAnimation(); // Close transition happens over loader
    }

    // 2️⃣ Once closed, hide loader and open home page
    setShowLoader(false);
    setIsFirstLoad(false);

    // 3️⃣ Instantly open the transition to reveal the page
    setTimeout(() => {
      transitionRef.current?.openAnimation();
    }, 100); // slight delay for cinematic timing
  };

  const handleNavigation = async (url: string, hash?: string) => {
    if (isTransitioning.current || !transitionRef.current) return;
    isTransitioning.current = true;

    await transitionRef.current.closeAnimation();

    if (hash) {
      window.history.pushState(null, "", `${pathname}${hash}`);
      await new Promise((res) => setTimeout(res, 100));
    } else {
      router.push(url);
    }

    transitionRef.current.openAnimation();

    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    isTransitioning.current = false;
  };

  // ------------------------------
  // 🕓 Handle route changes (open animation on nav)
  // ------------------------------
  useEffect(() => {
    if (isFirstLoad || !transitionRef.current) return;
    const animateOnRouteChange = async () => {
      await new Promise((res) => setTimeout(res, 100));
      transitionRef.current?.openAnimation();
      isTransitioning.current = false;
    };
    animateOnRouteChange();
  }, [pathname]);

  // ------------------------------
  // Render
  // ------------------------------
  return (
    <>
      <PageTransition ref={transitionRef} />

      {showLoader ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
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

                if (isSamePage) handleNavigation(url.pathname, hash);
                else handleNavigation(url.pathname);
              }
            }
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}
