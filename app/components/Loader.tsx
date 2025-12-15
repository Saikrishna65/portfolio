"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const start = Date.now();
    const totalDuration = 2000;

    const update = () => {
      const elapsed = Date.now() - start;
      if (elapsed >= totalDuration) {
        setProgress(100);
        setTimeout(() => onComplete(), 400);
        return;
      }

      setProgress((prev) => {
        let jump;
        if (prev < 30) jump = Math.floor(Math.random() * 15) + 5;
        else if (prev < 70) jump = Math.floor(Math.random() * 10) + 3;
        else if (prev < 90) jump = Math.floor(Math.random() * 5) + 1;
        else jump = 1;
        return Math.min(prev + jump, 100);
      });

      const nextDelay = Math.floor(Math.random() * 200) + 50;
      timeout = setTimeout(update, nextDelay);
    };

    update();
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 101 && (
        <>
          <motion.div
            className="fixed inset-0 flex items-center justify-center gap-2 bg-black font-[bebas] text-5xl text-white"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <span>Loading </span>
            <motion.div
              key={progress}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              {progress}%
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
