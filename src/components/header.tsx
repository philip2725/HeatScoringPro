"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const Header = () => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          onClick={() => setIsSheetOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">HeatscoringPro</span>
        </Link>
        
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>
        )}

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="#consultation">Schedule a Consultation</Link>
          </Button>
          <ThemeToggle />
          {isMobile && (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 pt-10">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};