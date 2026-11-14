import { CompanyOverviewSection } from "@/components/sections/company-overview-section";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustedPartnersSection } from "@/components/sections/trusted-partners-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CompanyOverviewSection />
      <CoreServicesSection />
      <TrustedPartnersSection />
    </main>
  );
}
