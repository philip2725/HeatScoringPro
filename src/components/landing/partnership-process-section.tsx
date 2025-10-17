"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronDown } from "lucide-react";
import React from "react";

const stages = [
  {
    stage: "01",
    title: "Conception",
    duration: "1-2 WEEKS",
    description: "We collaborate with your key members to determine exact requirements and create a detailed implementation plan.",
  },
  {
    stage: "02",
    title: "Development",
    duration: "8-10 WEEKS",
    description: "We adjust core components, implement custom requirements, and set up your dedicated server and database for live scoring.",
  },
  {
    stage: "03",
    title: "Deployment",
    duration: "1-2 WEEKS",
    description: "We deploy your customized HeatscoringPro version to its dedicated infrastructure, confirm its status with you, and go live.",
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
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.title}>
              <motion.div
                className="w-full md:w-1/3 flex"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="w-full text-center border-transparent hover:border-primary transition-colors duration-300 bg-background/50 flex flex-col">
                  <CardHeader>
                    <div className="mx-auto text-4xl font-bold text-primary mb-2">{stage.stage}</div>
                    <CardTitle>{stage.title}</CardTitle>
                    <CardDescription>{stage.duration}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{stage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {index < stages.length - 1 && (
                <>
                  <motion.div 
                    className="hidden md:flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  >
                    <ChevronRight className="h-12 w-12 text-muted-foreground" />
                  </motion.div>
                  <motion.div 
                    className="flex md:hidden items-center justify-center py-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  >
                    <ChevronDown className="h-12 w-12 text-muted-foreground" />
                  </motion.div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};