import {
  AboutUsSection,
  CaseStudySection,
  ClientLogoSection,
  FAQSection,
  HeroSection,
  ResultsSection,
  TestimonialsSection
} from "@/components/sections";

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
