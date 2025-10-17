"use client";

import { motion } from "framer-motion";

export const ProblemSolutionSection = () => {
  return (
    <motion.section 
      className="py-12 md:py-24 lg:py-32 bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stop Fighting Your Software. Start Running Your Event.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            You've moved past spreadsheets, but your event software still dictates your rules. You're stuck with a 'one-size-fits-none' solution that forces awkward workarounds, is prone to critical errors and crashes during live events, and never evolves to meet your actual needs.
          </p>
          <p className="mt-4 text-muted-foreground md:text-xl">
            HeatscoringPro is different. We offer a fully managed platform, custom-tailored by a dedicated technology partner. We build for mission-critical reliability, adapt to your exact rules, and continuously evolve the platform with you. You get a system that works for you, not against you.
          </p>
        </div>
      </div>
    </motion.section>
  );
};