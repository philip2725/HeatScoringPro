"use client";

import { motion } from "framer-motion";

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-primary/10 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-secondary/20 blur-xl"
        animate={{
          scale: [1, 0.8, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative w-64 h-64 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="w-full h-full border border-primary/30 rounded-md flex items-center justify-center">
            <span className="text-primary/80 font-mono text-xl">HeatscoringPro</span>
        </div>
      </div>
    </div>
  );
};