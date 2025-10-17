import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  ProblemSolutionSection,
  CoreComponentsSection,
  PartnershipProcessSection,
  PricingSection,
  IsItRightForYouSection,
  SocialProofSection,
  CtaSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSolutionSection />
        <CoreComponentsSection />
        <PartnershipProcessSection />
        <PricingSection />
        <IsItRightForYouSection />
        <SocialProofSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}