"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const checklistItems = [
  "Do you manage events with unique or complex elimination brackets?",
  "Does your scoring system require specific calculations that off-the-shelf software can't handle?",
  "Are you tired of juggling multiple disconnected tools for registration, payments, and scoring?",
  "Are you frustrated with rigid software that is error-prone and never gets updated with the features you need?",
  "Do you need a scoring system that remains 100% operational, even with unreliable internet at your venue?",
  "Are you looking for a technology partner, not just a software vendor?",
];

export const IsItRightForYouSection = () => {
  return (
    <motion.section 
      className="py-12 md:py-24 lg:py-32 bg-secondary flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center text-center px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Is HeatscoringPro Right For You?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Built for Demanding Competitions
          </p>
        </div>
        <div className="w-full max-w-2xl space-y-4 text-left">
          {checklistItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="mt-8 text-lg font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          If you answered yes, we should talk.
        </motion.p>
      </div>
    </motion.section>
  );
};