"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of support do you offer after the platform is live?",
    answer:
      "We view our relationship as a long-term partnership. Your annual operations fee includes priority support for any technical issues, as well as ongoing server maintenance, security updates, and performance monitoring to ensure your platform runs smoothly.",
  },
  {
    question: "How is our event and user data protected?",
    answer:
      "Data security is a top priority. Your platform is deployed on dedicated, secure infrastructure. We follow industry best practices for data encryption, both in transit and at rest. We are committed to ensuring the privacy and integrity of your and your participants' data.",
  },
  {
    question: "What if we need a new feature developed in the future?",
    answer:
      "Our platform is built to be modular and extensible. If you require a new feature that isn't part of the core offering, we can scope it as a separate development project. We're always happy to discuss how we can evolve the platform to meet your changing needs.",
  },
  {
    question: "Do you provide training for our team and event staff?",
    answer:
      "Yes. As part of the deployment process, we provide comprehensive training sessions for your key administrators and event staff to ensure they are confident in using the platform. We also provide clear documentation for reference.",
  },
  {
    question: "Can the platform handle large, multi-day events with thousands of participants?",
    answer:
      "Absolutely. The platform was born from the demands of professional tours and is architected to scale. The dedicated infrastructure we set up for you is designed to handle high-volume registrations, payments, and the real-time demands of live scoring for large-scale events.",
  },
];

export const FaqSection = () => {
  return (
    <motion.section
      id="faq"
      className="py-12 md:py-24 lg:py-32 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center text-center px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-full max-w-3xl text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};