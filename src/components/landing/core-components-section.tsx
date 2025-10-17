"use client";

import {
  CalendarPlus,
  GitMerge,
  Calculator,
  Settings2,
  Users,
  CreditCard,
  ListOrdered,
  BarChart,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const components = [
  {
    icon: <CalendarPlus className="h-8 w-8 mb-4 text-primary" />,
    title: "Effortless Event Setup",
    description:
      "Launch a dedicated event page in minutes. Create custom registration forms to collect exactly the data you need and manage all participant information from a central dashboard.",
  },
  {
    icon: <CreditCard className="h-8 w-8 mb-4 text-primary" />,
    title: "Secure Integrated Payments",
    description:
      "Process entry fees securely with our built-in payment gateway. Offer a seamless checkout experience for participants and track your event revenue with ease.",
  },
  {
    icon: <Users className="h-8 w-8 mb-4 text-primary" />,
    title: "Participant & Division Management",
    description:
      "Organize your event with precision. Create unlimited divisions based on age, gender, or skill level, allowing for targeted registration and clear segmentation of your competition.",
  },
  {
    icon: <ListOrdered className="h-8 w-8 mb-4 text-primary" />,
    title: "Advanced Seeding",
    description:
      "Ensure fair competition from the start. Generate seeding lists based on rankings, import your own data, or manually adjust placements to set up your elimination brackets perfectly.",
  },
  {
    icon: <GitMerge className="h-8 w-8 mb-4 text-primary" />,
    title: "Dynamic Elimination Builder",
    description:
      "Design your ideal competition flow. Start with standard templates like single or double elimination, or use our drag-and-drop builder to create a fully custom bracket. Configure complex advancements to move competitors between different elimination stages automatically.",
  },
  {
    icon: <Settings2 className="h-8 w-8 mb-4 text-primary" />,
    title: "Scoring Configuration Tool",
    description:
      "You define the rules. This key component gives you the power to precisely configure how competitor scores are calculated, ensuring your unique sport is scored correctly.",
  },
  {
    icon: <Calculator className="h-8 w-8 mb-4 text-primary" />,
    title: "Live Scoring Engine",
    description:
      "The rock-solid nerve center of your live event. Built on a robust, scalable architecture, it performs flawlessly under pressure and features full offline capability. Judges can score without interruption, and all data syncs automatically the moment a connection is restored.",
  },
  {
    icon: <BarChart className="h-8 w-8 mb-4 text-primary" />,
    title: "Live Public Leaderboards",
    description:
      "Engage your audience and competitors. Display auto-updating, real-time leaderboards on any device—from mobile phones to large screens at your event venue.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const CoreComponentsSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 flex items-center">
      <div className="container flex flex-col items-center px-4 md:px-6">
        <motion.div
          className="max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The All-in-One Event Operating System
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {components.map((component, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-transparent hover:border-primary transition-colors duration-300 bg-secondary/50">
                <CardHeader>
                  {component.icon}
                  <CardTitle>{component.title}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};