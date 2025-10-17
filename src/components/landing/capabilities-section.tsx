"use client";

import { motion } from "framer-motion";
import { LayoutGrid, ShieldCheck, Wand2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const capabilities = [
  {
    icon: <LayoutGrid className="h-8 w-8 mb-4 text-primary" />,
    title: "Tame the Complexity",
    description:
      "Events involve juggling registrations, payments, schedules, and data. HeatscoringPro unifies these logistics into a single, intuitive dashboard, giving you a clear command center for your entire operation.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary" />,
    title: "Ensure Flawless Execution",
    description:
      "The biggest fear is a system failure during a live event. Our rock-solid, offline-capable Live Scoring Engine ensures continuous operation, so you can capture scores and update standings with confidence, even with unreliable internet.",
  },
  {
    icon: <Wand2 className="h-8 w-8 mb-4 text-primary" />,
    title: "Adapt to Your Unique Rules",
    description:
      "No two competitions are the same. Our Dynamic Elimination Builder and Scoring Configuration Tool provide a flexible foundation that adapts to your unique format, scoring nuances, and progression rules.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const CapabilitiesSection = () => {
  return (
    <motion.section
      className="py-12 md:py-24 lg:py-32 bg-secondary flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Gain Total Control of Your Competition
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Whether you're launching your first event or scaling a professional
            tour, success requires mastering the details. Here’s how we provide
            the clarity and power you need.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 w-full max-w-5xl">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-transparent hover:border-primary transition-colors duration-300 bg-background/50">
                <CardHeader>
                  {capability.icon}
                  <CardTitle>{capability.title}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};