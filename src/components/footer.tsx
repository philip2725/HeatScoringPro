import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-16 px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">
              The All-in-One Platform for Competitive Events.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Navigate</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                <li><Link href="#process" className="text-sm text-muted-foreground hover:text-primary">Process</Link></li>
                <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HeatscoringPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};