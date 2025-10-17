import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { CoreComponentsSection } from "@/components/landing/core-components-section";
import { UseCasesSection } from "@/components/landing/use-cases-section";
import { PartnershipProcessSection } from "@/components/landing/partnership-process-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { IsItRightForYouSection } from "@/components/landing/is-it-right-for-you-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { CtaSection } from "@/components/landing/cta-section";
import { HeroVisual } from "@/components/landing/hero-visual";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <CoreComponentsSection />
        <UseCasesSection />
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