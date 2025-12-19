
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ClientLogoSection } from "@/components/sections/ClientLogoSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResultsSection } from "@/components/sections/ResultsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogoSection />
      <CaseStudySection />
      <ResultsSection />
      <AboutUsSection />
    </main>
  );
}
