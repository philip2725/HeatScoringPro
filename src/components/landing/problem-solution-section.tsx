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
            Your Sport is Unique. Your Software Should Be, Too.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Generic event tools fail to understand your sport's complex eliminations and specific scoring rules. You're left wrestling with inefficient, error-prone spreadsheets.
          </p>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We follow a per-client philosophy. We adapt our robust core components to your exact requirements, delivering a dedicated and secure solution that empowers you to run your event, your way.
          </p>
        </div>
      </div>
    </motion.section>
  );
};