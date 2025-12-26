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
    <main className="max-w-8xl">
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
