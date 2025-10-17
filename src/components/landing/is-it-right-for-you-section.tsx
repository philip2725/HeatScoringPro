import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  "Do you manage events with unique or complex elimination brackets?",
  "Does your scoring system require specific calculations that generic tools can't handle?",
  "Do you need a secure, high-performance system for live scoring scenarios?",
  "Are you looking for a technology partner to manage the technical complexities so you can focus on the event?",
];

export const IsItRightForYouSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Is HeatscoringPro Right For You?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Built for Demanding Competitions
          </p>
        </div>
        <div className="mx-auto max-w-2xl space-y-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg font-medium">
          If you answered yes, we should talk.
        </p>
      </div>
    </section>
  );
};