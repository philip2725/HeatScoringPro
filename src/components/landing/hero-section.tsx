"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroVisual } from "./hero-visual";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="container grid md:grid-cols-2 gap-8 items-center py-20">
        <motion.div 
          className="relative z-10 p-4 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Stop Forcing Your Event into a Generic Tool.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We build and manage custom-tailored scoring systems that fit the unique needs of your sport. Performance, security, and precision, managed exclusively for you.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="#consultation">Schedule a Consultation</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
};