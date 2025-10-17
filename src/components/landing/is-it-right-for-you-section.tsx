"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const checklistItems = [
  "Do you manage events with unique or complex elimination brackets?",
  "Does your scoring system require specific calculations that off-the-shelf software can't handle?",
  "Are you tired of juggling multiple disconnected tools for registration, payments, and scoring?",
  "Are you frustrated with rigid software that is error-prone and never gets updated with the features you need?",
  "Do you need a scoring system that remains 100% operational, even with unreliable internet at your venue?",
  "Are you looking for a technology partner, not just a software vendor?",
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
};

export const IsItRightForYouSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [direction, setDirection] = useState(0);

  const isFinished = activeIndex >= checklistItems.length;

  const handleResponse = (isYes: boolean) => {
    if (isFinished) return;

    setDirection(isYes ? 1 : -1);
    if (isYes) {
      setYesCount((prev) => prev + 1);
    }
    setActiveIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setActiveIndex(0);
    setYesCount(0);
    setDirection(0);
  };

  return (
    <motion.section
      className="py-12 md:py-24 lg:py-32 bg-secondary flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center text-center px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stop Fighting Your Software. Start Running Your Event.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            You've moved past spreadsheets, but your event software still dictates your rules. You're stuck with a 'one-size-fits-none' solution that forces awkward workarounds, is prone to critical errors during live events, and never evolves to meet your actual needs.
          </p>
          <p className="mt-4 text-muted-foreground md:text-xl">
            HeatscoringPro is different. We're a technology partner, not just a vendor. Answer the questions below to see if our approach is the right fit for you.
          </p>
        </div>

        <div className="w-full max-w-lg h-72 flex flex-col items-center justify-center">
          <div className="w-full h-48 relative flex items-center justify-center mb-6">
            <AnimatePresence initial={false} custom={direction}>
              {!isFinished ? (
                <motion.div
                  key={activeIndex}
                  className="absolute w-full h-full"
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x > 100) {
                      handleResponse(true);
                    } else if (offset.x < -100) {
                      handleResponse(false);
                    }
                  }}
                >
                  <Card className="w-full h-full flex items-center justify-center p-6 shadow-xl cursor-grab active:cursor-grabbing">
                    <CardContent className="p-0">
                      <p className="text-xl font-medium">
                        {checklistItems[activeIndex]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {yesCount >= 3
                      ? "It looks like a perfect match!"
                      : "We might be able to help."}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
                    You identified {yesCount}{" "}
                    {yesCount === 1 ? "challenge" : "challenges"} that
                    HeatscoringPro is built to solve.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="#consultation">Let's Talk</Link>
                  </Button>
                  <Button variant="link" onClick={handleReset} className="mt-2">
                    Start Over
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!isFinished && (
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-card hover:bg-destructive/10 border-2 border-destructive/20 hover:border-destructive"
                onClick={() => handleResponse(false)}
              >
                <XCircle className="h-6 w-6 mr-2 text-destructive" />
                No
              </Button>
              <Button
                size="lg"
                className="border-2 border-primary/20 hover:border-primary"
                onClick={() => handleResponse(true)}
              >
                <CheckCircle2 className="h-6 w-6 mr-2" />
                Yes, this is me
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};