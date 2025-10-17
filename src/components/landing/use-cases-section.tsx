"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Waves, Swords, Dumbbell, CheckCircle2 } from "lucide-react";

const useCases = [
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: "Professional Surfing Tour",
    challenge: "Managing complex heat progressions and subjective judging from remote locations with unstable internet.",
    solutions: [
      "Custom elimination builder for man-on-man heats.",
      "Offline-capable scoring engine for judges.",
      "Live leaderboards that sync instantly when connected.",
    ],
  },
  {
    icon: <Swords className="h-10 w-10 text-primary" />,
    title: "National Martial Arts Championship",
    challenge: "Handling thousands of competitors across dozens of age, weight, and skill divisions with complex double-elimination brackets.",
    solutions: [
      "Powerful division management for clear segmentation.",
      "Advanced seeding to ensure fair initial matchups.",
      "Dynamic bracket builder for custom elimination flows.",
    ],
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: "Functional Fitness Competition",
    challenge: "Scoring multiple workouts with different metrics (time, reps, weight) and calculating a single, unified leaderboard.",
    solutions: [
      "Flexible scoring configuration for custom formulas.",
      "Live scoring engine for instant updates after each event.",
      "Real-time public leaderboards for athletes and spectators.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const UseCasesSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container flex flex-col items-center px-4 md:px-6">
        <motion.div
          className="max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Solutions in Action: Tailored for Any Competition
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            From the waves to the mat, see how our platform adapts to the unique demands of different sports.
          </p>
        </motion.div>

        <div className="w-full max-w-6xl grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="w-full flex"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="w-full flex flex-col bg-secondary/50 border-transparent hover:border-primary transition-colors duration-300">
                <CardHeader className="items-center text-center">
                  {useCase.icon}
                  <CardTitle className="mt-4">{useCase.title}</CardTitle>
                  <CardDescription className="px-4">{useCase.challenge}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-center">
                  <ul className="space-y-3 text-left">
                    {useCase.solutions.map((solution) => (
                      <li key={solution} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{solution}</span>
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