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
      "The Scoring Configuration Tool is set for a 10-point scale, automatically calculating heat totals from the top two waves.",
      "Judges use the Live Scoring Engine on tablets with full offline capability, ensuring scores are captured even with spotty beach wifi.",
      "The Dynamic Elimination Builder maps out the entire competition, from qualifying rounds to finals, automating athlete progression.",
      "Live Public Leaderboards provide instant, broadcast-ready results for fans and commentators worldwide.",
    ],
  },
  {
    icon: <Swords className="h-10 w-10 text-primary" />,
    title: "National Martial Arts Championship",
    challenge: "Handling thousands of competitors across dozens of age, weight, and skill divisions with complex double-elimination brackets.",
    solutions: [
      "Participant & Division Management allows organizers to create hundreds of specific divisions for seamless online registration.",
      "Advanced Seeding tools place ranked competitors appropriately to ensure fair matchups in massive brackets.",
      "The Dynamic Elimination Builder generates and manages complex double-elimination brackets, automatically moving winners and losers.",
      "Mat-side officials update results in real-time, keeping the event flowing and brackets accurate.",
    ],
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: "Functional Fitness Competition",
    challenge: "Scoring multiple workouts with different metrics (time, reps, weight) and calculating a single, unified leaderboard.",
    solutions: [
      "The Scoring Configuration Tool is used to define custom scoring rules for each unique workout (e.g., For Time, AMRAP, Max Lift).",
      "A points-based ranking system is established to calculate a unified score from diverse event results.",
      "The Live Scoring Engine allows volunteers to input scores as they happen, instantly recalculating the overall leaderboard.",
      "Live Public Leaderboards engage athletes and spectators by displaying real-time standings on venue screens and mobile devices.",
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