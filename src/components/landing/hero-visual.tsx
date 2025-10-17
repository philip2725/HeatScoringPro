"use client";

import { motion } from "framer-motion";

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background blur circles */}
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
        className="absolute w-32 h-32 rounded-full bg-muted-foreground/10 dark:bg-secondary/20 blur-xl"
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

      {/* Animated Leaderboard Card */}
      <div className="relative w-64 h-64 border border-primary/20 rounded-lg bg-secondary dark:bg-background/50 backdrop-blur-sm flex flex-col items-start justify-center p-6 space-y-4 overflow-hidden">
        <motion.div 
          className="h-4 bg-primary rounded-full"
          animate={{ width: ["60%", "90%", "75%", "90%", "60%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
        <motion.div 
          className="h-4 bg-muted-foreground/40 dark:bg-secondary rounded-full"
          animate={{ width: ["80%", "50%", "90%", "50%", "80%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
        <motion.div 
          className="h-4 bg-muted-foreground/40 dark:bg-secondary rounded-full"
          animate={{ width: ["50%", "70%", "60%", "70%", "50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
         <motion.div 
          className="h-4 bg-muted-foreground/40 dark:bg-secondary rounded-full"
          animate={{ width: ["70%", "60%", "80%", "60%", "70%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
      </div>
    </div>
  );
};