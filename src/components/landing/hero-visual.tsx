"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
      {/* Background blur circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-2xl"
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
        className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-muted-foreground/10 dark:bg-secondary/20 blur-xl"
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

      {/* Single Image Display */}
      <motion.div
        className="relative w-full h-full max-w-4xl rounded-lg overflow-hidden shadow-lg border-2 border-background/50"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.03, zIndex: 10 }}
      >
        <Image
          src="/pexels-alexandre-saraiva-carniato-583650-2103783.jpg"
          alt="Athlete preparing for an event"
          fill={true}
          style={{ objectFit: "cover" }}
          className="pointer-events-none"
          priority
          sizes="(max-width: 768px) 80vw, 50vw"
        />
      </motion.div>
    </div>
  );
};