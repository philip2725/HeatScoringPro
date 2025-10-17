import { CalendarPlus, GitMerge, ListOrdered, Calculator, Settings2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const components = [
  {
    icon: <CalendarPlus className="h-8 w-8 mb-4 text-primary" />,
    title: "Event Management & Registration",
    description: "Create events, build custom registration forms, and collect entry fees with our integrated Stripe payment gateway.",
  },
  {
    icon: <GitMerge className="h-8 w-8 mb-4 text-primary" />,
    title: "The Elimination Builder",
    description: "Our unique tool to create fully customizable elimination ladders. Design any number of brackets, automate advancements, and save complex structures for reuse.",
  },
  {
    icon: <ListOrdered className="h-8 w-8 mb-4 text-primary" />,
    title: "Flexible Seeding Tool",
    description: "Generate and manage seeding lists with ease. Import your own tables via drag-and-drop and apply them across different eliminations.",
  },
  {
    icon: <Calculator className="h-8 w-8 mb-4 text-primary" />,
    title: "Custom Scoring System",
    description: "A comprehensive system adapted to your specific needs, with dedicated views for Judges, Spotters, Head Judges, and Race Directors.",
  },
  {
    icon: <Settings2 className="h-8 w-8 mb-4 text-primary" />,
    title: "Scoring Configuration Tool",
    description: "A key component that gives you the power to specifically adjust and define precisely how athlete scores are calculated.",
  },
];

export const CoreComponentsSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            A Fully Customizable Platform Foundation
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component, index) => (
            <Card key={index}>
              <CardHeader>
                {component.icon}
                <CardTitle>{component.title}</CardTitle>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};