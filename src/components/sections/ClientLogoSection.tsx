import { CustomImage, PrimaryButton, TextButton, TextComponent } from "../ui";
import { Glow, Section } from "../visuals";
import { ClientLogos } from "@/core/constants/ClientLogos";

export function ClientLogoSection() {
  const logoRows = [
    [
      { ...ClientLogos.SimplePractice, width: 140, opacity: 50 },
      { ...ClientLogos.BeckmanCoulter, width: 110, opacity: 70 },
      { ...ClientLogos.TherapyNotes, width: 120, opacity: 100 },
    ],
    [
      { ...ClientLogos.Headway, width: 150, opacity: 80 },
      { ...ClientLogos.ABSKids, width: 100, opacity: 100 },
      { ...ClientLogos.Eleos, width: 100, opacity: 50 },
    ],
    [
      { ...ClientLogos.Valera, width: 150, opacity: 80 },
      { ...ClientLogos.BioRad, width: 95, opacity: 70 },
      { ...ClientLogos.CentralReach, width: 115, opacity: 80 },
    ],
    [
      { ...ClientLogos.ButterflyEffect, width: 150, opacity: 90 },
      { ...ClientLogos.Bruker, width: 95, opacity: 70 },
      { ...ClientLogos.Talkspace, width: 115, opacity: 80 },
    ],
  ];

  // Flatten for grid display
  const allLogos = logoRows.flat();

  return (
    < Section
      id="clients"
      withGrid={false}
      className="py-[64px] lg:py-[96px]">
      {/* Main Section Container */}
      <Glow
        glowIntensity="low"
        glowSize={100}>

        <div
          className="max-w-6xl mx-auto flex bg-[var(--background)] border border-border rounded-[24px] md:rounded-[32px] px-[24px]  md:px-[48px] py-[48px]"
        >
          <div
            className="flex flex-col lg:flex-row w-full gap-[48px] md:gap-[96px] items-start md:items-center justify-between">
            <div
              className="max-w-[420px] text-center lg:text-left"
            >
              <TextComponent.Headline.Medium
                text="Trusted by innovative healthcare brands" />
              <TextComponent.Body.Small className="my-6"
                text="From explainer videos for customers to product demos for investors and everything in between, we&apos;ve worked with some of the best teams making millions of human lives better." />

              <div
                className="flex flex-col md:flex-row gap-4 mt-6 items-stretch md:items-center justify-center lg:justify-start">
                <PrimaryButton
                  className="w-full md:w-auto"
                  label="Contact us"
                  href="#"
                />
                <TextButton
                  label="See our works"
                  href="/works"
                />
              </div>
            </div>
            {/* Logo Grid */}
            <div className="w-full flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 items-center justify-center max-w-2xl mx-auto">
                {allLogos.map((logo, index) => (
                  <div key={`${logo.alt}-${index}`} className="mx-auto">
                    <CustomImage
                      key={`${logo.alt}-${index}`}
                      lightModeImage={logo.light}
                      darkModeImage={logo.dark}
                      alt={logo.alt}
                      width={logo.width}
                      height={24}
                      opacity={logo.opacity}
                      className="w-full max-w-[170px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Glow>
    </Section >

  );
}

