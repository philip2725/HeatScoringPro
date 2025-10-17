"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ClipboardPen, GanttChartSquare, Rocket } from "lucide-react";
import React from "react";

const stages = [
  {
    stage: "01",
    title: "Conception",
    duration: "1-2 WEEKS",
    description: "We collaborate with your key members to determine exact requirements and create a detailed implementation plan.",
    icon: <ClipboardPen className="h-8 w-8" />,
  },
  {
    stage: "02",
    title: "Development",
    duration: "8-10 WEEKS",
    description: "We adjust core components, implement custom requirements, and set up your dedicated server and database for live scoring.",
    icon: <GanttChartSquare className="h-8 w-8" />,
  },
  {
    stage: "03",
    title: "Deployment",
    duration: "1-2 WEEKS",
    description: "We deploy your customized HeatscoringPro version to its dedicated infrastructure, confirm its status with you, and go live.",
    icon: <Rocket className="h-8 w-8" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const PartnershipProcessSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary flex items-center justify-center">
      <div className="container flex flex-col items-center px-4 md:px-6">
        <motion.div 
          className="max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Bespoke Platform in 3 Transparent Stages
          </h2>
        </motion.div>
        
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              className="w-full flex"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="w-full text-center bg-background/50 flex flex-col border-t-4 border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    {stage.icon}
                  </div>
                  <div className="text-sm font-bold text-primary tracking-widest">{`STAGE ${stage.stage}`}</div>
                  <CardTitle className="text-2xl">{stage.title}</CardTitle>
                  <CardDescription>{stage.duration}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{stage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};