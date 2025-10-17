"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// TODO: Replace these placeholder paths with your actual image files
const images = [
  {
    src: "/pexels-alexandre-saraiva-carniato-583650-2103783.jpg",
    alt: "Athlete preparing for an event",
    className: "col-span-2 row-span-2", // Main image
  },
  {
    src: "/pexels-alexandre-saraiva-carniato-583650-2103783.jpg",
    alt: "Athlete preparing for an event",
    className: "row-span-1",
  },
  {
    src: "/pexels-alexandre-saraiva-carniato-583650-2103783.jpg",
    alt: "Athlete preparing for an event",
    className: "row-span-1",
  },
  {
    src: "/pexels-alexandre-saraiva-carniato-583650-2103783.jpg",
    alt: "Athlete preparing for an event",
    className: "col-span-2 row-span-1",
  },
];

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

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

      {/* Asymmetric Image Grid */}
      <div className="relative w-full max-w-5xl h-full grid grid-cols-3 grid-rows-3 gap-4">
        {images.map((image, i) => (
          <motion.div
            key={i} // Using index as key since src is repeated
            className={cn(
              "relative overflow-hidden rounded-lg",
              image.className
            )}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              style={{ objectFit: "cover" }}
              className="pointer-events-none"
              priority={i < 2}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};