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
            The All-in-One Platform for Competitive Events: From Registration to Final Standings
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Escape the limitations of rigid software and the chaos of spreadsheets. Get a fully managed, custom-tailored platform that handles event creation, participant registration, payments, custom elimination ladders, and live scoring—all in one place.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="#consultation">Schedule a Consultation</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="h-[32rem] md:h-[44rem]"
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