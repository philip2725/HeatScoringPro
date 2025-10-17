import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">HeatscoringPro</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="#consultation">Schedule a Consultation</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};