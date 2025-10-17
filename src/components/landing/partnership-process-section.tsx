"use client";

import { motion } from "framer-motion";

const stages = [
  {
    title: "Conception",
    duration: "STAGE 1 (1-2 WEEKS)",
    description: "We collaborate with your key members to determine exact requirements and create a detailed implementation plan.",
  },
  {
    title: "Development",
    duration: "STAGE 2 (8-10 WEEKS)",
    description: "We adjust core components, implement custom requirements, and set up your dedicated server and database for live scoring.",
  },
  {
    title: "Deployment",
    duration: "STAGE 3 (1-2 WEEKS)",
    description: "We deploy your customized HeatscoringPro version to its dedicated infrastructure, confirm its status with you, and go live.",
  },
];

export const PartnershipProcessSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary flex items-center">
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
        <div className="relative max-w-3xl w-full">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
          <div className="space-y-12">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute left-4 top-1 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-secondary"></div>
                <div className="pl-12 md:pl-0 md:w-1/2 md:text-right md:pr-8">
                  {index % 2 !== 0 && <div className="hidden md:block">&nbsp;</div>}
                  <div className="text-sm font-semibold text-primary">{stage.duration}</div>
                  <h3 className="text-2xl font-bold mt-1">{stage.title}</h3>
                  <p className="mt-2 text-muted-foreground">{stage.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-8">
                  {index % 2 === 0 && (
                    <>
                      <div className="text-sm font-semibold text-primary">{stage.duration}</div>
                      <h3 className="text-2xl font-bold mt-1">{stage.title}</h3>
                      <p className="mt-2 text-muted-foreground">{stage.description}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};