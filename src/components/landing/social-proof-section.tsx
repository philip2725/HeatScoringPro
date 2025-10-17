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
            Forged on the Water, Engineered for Any Arena
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            HeatscoringPro wasn't born in a boardroom. It was conceived in the judges' tower at the European Freestyle Pro Tour (EFPT). As a race director and judge, we experienced firsthand the chaos of unreliable software, the stress of manual scoring, and the limitations of systems that weren't built for the dynamic needs of our sport. We needed a rock-solid, flexible, and intuitive system that could perform flawlessly, even with unstable internet on a remote beach.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            In solving those complex problems, we realized the core challenges are universal. Every event organizer, regardless of the sport, struggles with registration, payments, complex rules, and the need for mission-critical reliability. We built HeatscoringPro's core to be a flexible, modular system precisely for this reason. The result is a platform with the resilience to handle a professional tour and the flexibility to be tailored to the unique demands of your sport.
          </p>
          <cite className="block text-center text-foreground font-medium not-italic">
            — The Founders, EFPT Race Directors & Developers
          </cite>
        </div>
      </div>
    </motion.section>
  );
};