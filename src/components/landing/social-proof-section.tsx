"use client";

import { motion } from "framer-motion";

export const SocialProofSection = () => {
  return (
    <motion.section 
      className="py-12 md:py-24 lg:py-32 flex items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center text-center px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Leaders in Professional Sports
          </h2>
        </div>
        <div className="flex justify-center items-center space-x-8">
          <div className="border rounded-lg px-6 py-3 font-bold text-muted-foreground text-lg bg-secondary/50">
            PWA
          </div>
          {/* Add more logos here */}
        </div>
        <div className="mt-12 max-w-3xl">
          <blockquote className="text-center text-xl italic font-medium text-foreground">
            <p>"HeatscoringPro has transformed how we run our events. The custom system is flawless and the support is second to none."</p>
          </blockquote>
          <cite className="mt-4 block text-center text-muted-foreground">
            — Race Director, Professional Sports Association
          </cite>
        </div>
      </div>
    </motion.section>
  );
};