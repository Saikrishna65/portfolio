"use client";
import React, { useRef, useState, MouseEvent } from "react";
import { gsap } from "gsap";

interface SectionFollowerProps {
  imageUrl: string;
  children: React.ReactNode;
}

const SectionFollower: React.FC<SectionFollowerProps> = ({
  imageUrl,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLImageElement | null>(null);
  const [active, setActive] = useState<boolean>(false);

  const onEnter = () => {
    setActive(true);
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !followerRef.current) return;

    const { left, top } = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    gsap.to(followerRef.current, {
      left: offsetX,
      top: offsetY,
      duration: 0.02,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    setActive(false);
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full cursor-pointer"
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Centered content */}
      <div className="text-xl md:text-2xl font-medium z-10 text-center">
        {children}
      </div>

      {/* Hover follower image */}
      <img
        ref={followerRef}
        src={imageUrl}
        loading="lazy"
        className="absolute w-24 h-24 pointer-events-none object-cover"
        style={{
          transform: "translate(-50%, -50%) scale(0)",
          left: 0,
          top: 0,
          zIndex: 5,
          opacity: 0,
        }}
        alt=""
      />
    </div>
  );
};

export default SectionFollower;
