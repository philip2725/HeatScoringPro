"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Waves, Gamepad2, Dumbbell, CheckCircle2 } from "lucide-react";

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
    icon: <Gamepad2 className="h-10 w-10 text-primary" />,
    title: "Esports Championship",
    challenge: "Managing a large online tournament with a multi-stage format: a round-robin group stage feeding into a final double-elimination bracket.",
    solutions: [
      "Effortless Event Setup and Secure Integrated Payments handle the high volume of online team registrations and buy-ins.",
      "The Dynamic Elimination Builder creates the group stage and links it to the final bracket, automatically advancing top teams based on results.",
      "Admins use the Live Scoring Engine to instantly input match results, keeping the tournament moving.",
      "Live Public Leaderboards display a dynamic, real-time bracket that can be embedded on a website or Twitch stream for players and fans.",
    ],
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: "Functional Fitness Competition",
    challenge: "Scoring multiple workouts with different metrics (time, reps, weight) and calculating a single, unified leaderboard.",
    solutions: [
      "The Scoring Configuration Tool defines unique scoring rules for each workout (e.g., For Time, AMRAP, Max Lift).",
      "A points-based ranking system is established to calculate a unified score from the diverse event results.",
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