"use client";

import { CalendarPlus, GitMerge, ListOrdered, Calculator, Settings2, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const components = [
  {
    icon: <CalendarPlus className="h-8 w-8 mb-4 text-primary" />,
    title: "Event Management & Registration",
    description: "The starting line for every event. Create custom registration forms, manage athlete data, and securely process entry fees with our integrated payment gateway.",
  },
  {
    icon: <Users className="h-8 w-8 mb-4 text-primary" />,
    title: "Divisions & Seeding",
    description: "Effortlessly manage multiple competition categories like Men, Women, Pro, and Amateur. Our flexible seeding tool lets you generate lists, import your own, and apply them across different divisions.",
  },
  {
    icon: <GitMerge className="h-8 w-8 mb-4 text-primary" />,
    title: "The Elimination Builder",
    description: "Our cornerstone tool for any competition format. Design fully custom elimination ladders for sports or esports, automate advancements, and save complex bracket structures for reuse.",
  },
  {
    icon: <Calculator className="h-8 w-8 mb-4 text-primary" />,
    title: "Live Scoring Engine",
    description: "The nerve center of your live event. A powerful, adaptable system with dedicated views for Judges, Spotters, and Race Directors, ensuring accuracy and real-time results.",
  },
  {
    icon: <Settings2 className="h-8 w-8 mb-4 text-primary" />,
    title: "Scoring Configuration Tool",
    description: "You define the rules. This key component gives you the power to precisely configure how athlete scores are calculated, ensuring your unique sport is scored correctly.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const CoreComponentsSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The All-in-One Event Operating System
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-transparent hover:border-primary transition-colors duration-300 bg-secondary/50">
                <CardHeader>
                  {component.icon}
                  <CardTitle>{component.title}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};