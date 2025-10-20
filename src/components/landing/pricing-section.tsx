"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, ShieldCheck, Check, Plus } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const components = [
  {
    title: "One-Time Setup",
    description: "Initial consultation, custom development, and deployment.",
    price: "Based on Scope",
    icon: <Rocket className="h-8 w-8 mb-4 text-primary" />,
    features: [
      "Detailed Consultation",
      "Custom Feature Development",
      "Dedicated Infrastructure Setup",
      "Go-Live Support",
    ],
  },
  {
    title: "Pay-Per-Use Revenue",
    description: "Our costs are covered by small, transparent usage fees.",
    price: "Usage-Based",
    icon: <TrendingUp className="h-8 w-8 mb-4 text-primary" />,
    features: [
      "Small Per-Event Fee for Live Data",
      "3% Per-Registration Fee",
      "Aligned Incentives",
      "Scales with Your Success",
    ],
  },
  {
    title: "Annual Operations",
    description: "Server maintenance, database integrity, and application updates.",
    price: "Recurring Fee",
    icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary" />,
    features: [
      "Server & Database Maintenance",
      "Security & Performance Updates",
      "Database Integrity Checks",
      "Priority Support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container flex flex-col items-center px-4 md:px-6">
        <motion.div 
          className="max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Complete Pricing Structure
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A transparent, all-in-one model for a long-term partnership. No hidden fees.
          </p>
        </motion.div>
        
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {components.map((component, index) => (
            <React.Fragment key={component.title}>
              <motion.div
                className="w-full md:w-1/3 flex"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="w-full h-full flex flex-col bg-secondary/50 border-transparent">
                  <CardHeader className="text-center items-center">
                    {component.icon}
                    <CardTitle>{component.title}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-4xl font-bold text-center mb-6">{component.price}</p>
                    <ul className="space-y-3 text-left flex-grow">
                      {component.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {index < components.length - 1 && (
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                >
                  <Plus className="h-10 w-10 text-muted-foreground" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" asChild>
            <Link href="#consultation">Schedule a Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};