import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  speed?: number;
  children?: ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  speed = -0.3,
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div
      ref={ref}
      className={`relative will-change-transform ${className}`}
      style={{
        y,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
