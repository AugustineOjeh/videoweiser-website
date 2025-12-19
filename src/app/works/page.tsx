
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ClientLogoSection } from "@/components/sections/ClientLogoSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogoSection />
      <CaseStudySection />
      <ResultsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
