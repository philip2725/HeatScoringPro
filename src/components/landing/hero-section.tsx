import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Placeholder for background video */}
      <div className="relative z-10 p-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Stop Forcing Your Event into a Generic Tool.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          We build and manage custom-tailored scoring systems that fit the unique needs of your sport. Performance, security, and precision, managed exclusively for you.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#consultation">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};