"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const PricingSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
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
        <div className="grid w-full max-w-5xl gap-8 md:grid-cols-3">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="h-full border-transparent hover:border-primary transition-colors duration-300 bg-secondary/50">
              <CardHeader>
                <CardTitle>One-Time Setup Fee</CardTitle>
                <CardDescription>Fixed fee for initial consultation, custom development, and deployment.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">€5,000</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="h-full border-transparent hover:border-primary transition-colors duration-300 bg-secondary/50">
              <CardHeader>
                <CardTitle>Annual Operations Fee</CardTitle>
                <CardDescription>Covers server maintenance, database integrity, and application updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">A recurring fee to keep your system running flawlessly.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Card className="h-full border-transparent hover:border-primary transition-colors duration-300 bg-secondary/50">
              <CardHeader>
                <CardTitle>Pay-Per-Use Revenue</CardTitle>
                <CardDescription>We succeed when you do. Our costs are covered by small usage fees.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Small per-event fee for live data.</li>
                  <li>3% per-registration fee (paid by participants).</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};