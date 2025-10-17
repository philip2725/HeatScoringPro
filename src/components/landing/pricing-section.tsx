"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, ShieldCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const plans = [
  {
    title: "One-Time Setup",
    description: "For initial consultation, custom development, and deployment.",
    price: "Based on Scope",
    icon: <Rocket className="h-8 w-8 mb-4 text-primary" />,
    features: [
      "Detailed Consultation",
      "Custom Feature Development",
      "Dedicated Infrastructure Setup",
      "Go-Live Support",
    ],
    highlighted: false,
  },
  {
    title: "Pay-Per-Use Revenue",
    description: "We succeed when you do. Our costs are covered by small usage fees.",
    price: "Usage-Based",
    icon: <TrendingUp className="h-8 w-8 mb-4 text-primary" />,
    features: [
      "Small Per-Event Fee for Live Data",
      "3% Per-Registration Fee",
      "Aligned Incentives",
      "Scales with Your Success",
    ],
    highlighted: true,
  },
  {
    title: "Annual Operations",
    description: "Covers server maintenance, database integrity, and application updates.",
    price: "Recurring Fee",
    icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary" />,
    features: [
      "Server & Database Maintenance",
      "Security & Performance Updates",
      "Database Integrity Checks",
      "Priority Support",
    ],
    highlighted: false,
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
            A Transparent & Fair Pricing Model
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Predictable Costs for a Long-Term Partnership
          </p>
        </motion.div>
        <div className="grid w-full max-w-5xl gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.title}
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(plan.highlighted && "md:-translate-y-4")}
            >
              <Card className={cn(
                "h-full flex flex-col border-transparent transition-colors duration-300 bg-secondary/50",
                plan.highlighted ? "border-primary ring-2 ring-primary" : "hover:border-primary"
              )}>
                {plan.highlighted && (
                  <div className="bg-primary text-primary-foreground text-sm font-bold py-1 text-center">
                    Recommended
                  </div>
                )}
                <CardHeader className="text-center items-center">
                  {plan.icon}
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-4xl font-bold text-center mb-6">{plan.price}</p>
                  <ul className="space-y-3 text-left flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};