"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1502680390409-69ae837cd993?q=80&w=2070&auto=format&fit=crop",
    alt: "Surfer riding a wave",
    rotation: -8,
    x: -100,
    y: -50,
  },
  {
    src: "https://images.unsplash.com/photo-1549637643-45c35a36b394?q=80&w=1932&auto=format&fit=crop",
    alt: "Snowboarder in mid-air",
    rotation: 5,
    x: 100,
    y: -80,
  },
  {
    src: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2070&auto=format&fit=crop",
    alt: "Runners at the start of a race",
    rotation: 10,
    x: -50,
    y: 80,
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    alt: "Crowd at a sports event",
    rotation: -3,
    x: 80,
    y: 50,
  },
];

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
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

      {/* Image Collage */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {images.map((image, i) => (
          <motion.div
            key={image.src}
            className="absolute w-40 h-56 md:w-48 md:h-64 rounded-lg overflow-hidden shadow-2xl border-4 border-background"
            style={{
              rotate: image.rotation,
              translateX: image.x,
              translateY: image.y,
              zIndex: i,
            }}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.05, zIndex: 10, rotate: image.rotation > 0 ? image.rotation + 2 : image.rotation - 2 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              style={{ objectFit: 'cover' }}
              className="pointer-events-none"
              priority={i < 2}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};