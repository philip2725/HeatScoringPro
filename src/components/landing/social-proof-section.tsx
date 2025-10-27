"use client";

import { motion } from "framer-motion";

export const SocialProofSection = () => {
  return (
    <motion.section
      className="py-12 md:py-24 lg:py-32 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center text-center px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Born from Professional Windsurfing, Engineered for Any Arena
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            HeatScoringPro wasn't born in a boardroom. It was conceived from
            direct experience in the judges' tower at international windsurf competitions. 
            With one of our founders serving as a race director and
            judge, he saw a clear opportunity to build something better. He
            envisioned a more robust, flexible, and intuitive platform—one that
            could handle the unique pressures of a professional tour, from
            complex scoring to unstable internet on a remote beach.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            In solving those complex problems, we realised the core challenges
            are universal. Every event organiser, regardless of the sport, needs
            seamless registration, reliable payments, and mission-critical
            stability. We built HeatscoringPro's core to be a flexible, modular
            system precisely for this reason. The result is a platform with the
            resilience to handle a professional tour and the flexibility to be
            tailored to the unique demands of your sport.
          </p>
          <cite className="block text-center text-foreground font-medium not-italic">
            — The Founders
          </cite>
        </div>
      </div>
    </motion.section>
  );
};
