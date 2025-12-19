
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ClientLogoSection } from "@/components/sections/ClientLogoSection";
import { HeroSection } from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogoSection />
      <CaseStudySection />
    </main>
  );
}
