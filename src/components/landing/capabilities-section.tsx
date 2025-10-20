"use client";

import { motion } from "framer-motion";
import { LayoutGrid, ShieldCheck, Wand2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const capabilities = [
  {
    icon: <LayoutGrid className="h-8 w-8 mb-4 text-primary mx-auto" />,
    title: "Tame the Complexity",
    description:
      "Events involve juggling registrations, payments, schedules, and data. HeatscoringPro unifies these logistics into a single, intuitive dashboard, giving you a clear command center for your entire operation.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary mx-auto" />,
    title: "Built for Mission-Critical Moments",
    description:
      "From handling high-volume registrations to processing secure payments and running live scoring, every component is built for stability. Our platform is engineered for the mission-critical moments of your event, ensuring a smooth experience for you and your participants.",
  },
  {
    icon: <Wand2 className="h-8 w-8 mb-4 text-primary mx-auto" />,
    title: "A Platform That Adapts to You",
    description:
      "Your event is unique. Our platform is built to match. From custom registration forms and flexible payment options to configurable scoring and progression rules, we tailor the system to your exact requirements. Stop forcing your event into a rigid box.",
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
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{capability.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};