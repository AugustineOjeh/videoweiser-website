"use client";
import { TestimonialData } from "@/types/ComponentTypes";
import { CustomImage, TestimonialPersonalDataCard, Text, TextButton, TextComponent, Video } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { ClientTestimonials, GridBlockLocations } from "@/core/constants";
import { useTheme } from "@/core/contexts/ThemeContext";

export function CaseStudySection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  return (
    < Section id="case-studies"
      withGrid
      gridBlocks={GridBlockLocations} >
      {/* Main Section Container */}
      <div className="max-w-7xl mx-auto py-16 lg:py-24 px-2 lg:px-4">

        <div className="max-w-[540px] mx-auto lg:mx-0 text-center lg:text-left mb-12">
          <div className="space-y-[16px]">
            <BackgroundFade >
              <TextComponent.Label.Small className="text-accent font-bold"
                text="Case studies" />
            </BackgroundFade>
            <BackgroundFade >
              <TextComponent.Headline.Medium
                className="whitespace-pre-line"
                text={"Hundreds of brands. \nSame strong impact"} />
            </BackgroundFade>
          </div>
          <BackgroundFade >
            <TextComponent.Body.Small className="my-6"
              text="We help fast-growing companies get ahead in the ever-complex and compliance-dense healthcare industry." />
          </BackgroundFade>
        </div>
        <Glow className="w-full" glowIntensity="low" glowSize={70}>
          <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-2" >
            <CaseStudyHighlight
              isDark={isDark}
              className="rounded-3xl lg:rounded-tl-[32px] lg:rounded-bl-[32px] lg:rounded-tr-[12px] lg:rounded-br-[12px]"
              title="Safety and compliance-first video production"
              subtitle="Astronomical leaps in internal processes and safety compliance achieved through expert-crafted explainer videos."
              testimonial={ClientTestimonials.Three60Cookware} />

            <CaseStudyHighlight
              isDark={isDark}
              className="rounded-3xl lg:rounded-[12px]"
              title="Precision-crafted, audience-centric explainer videos"
              subtitle="Complex topics simplified through videos reported greater customer education, higher engagement and more conversion."
              testimonial={ClientTestimonials.Petersons} />

            <CaseStudyHighlight
              isDark={isDark}
              className="rounded-3xl lg:rounded-tl-[12px] lg:rounded-bl-[12px] lg:rounded-tr-[32px] lg:rounded-br-[32px]"
              title="Confident, consistent and fast-moving branding visuals"
              subtitle="Brand messaging with zero ambiguity, resonates strongly with audiences, and communicated through compelling video narratives."
              testimonial={ClientTestimonials.MacSports} />
          </div>
        </Glow>
      </div>
    </Section >

  );
}

interface CaseStudyHighlightProps {
  title: string;
  subtitle: string;
  testimonial: TestimonialData;
  isDark: boolean;
  className?: string;
}

export const CaseStudyHighlight: React.FC<CaseStudyHighlightProps> = ({
  title,
  subtitle,
  testimonial,
  isDark,
  className,
}) => {
  const baseClasses = " flex flex-col justify-between w-full max-w-[600px] mx-auto lg:max-w-none lg:mx-0 min-h-[520px] bg-[var(--background)] px-6 pt-8 pb-6 border border-border";
  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="space-y-[16px]">
        <Text.Headline.XSmall className="font-bold" text={title} />
        <Text.Label.Medium text={subtitle} />
        <TextButton className="text-[var(--accent)] px-0 pt-0 mb-[16px]" href={testimonial.caseStudy.url} label="Read the case study" />
      </div>
      <div className="px-[16px] py-[24px] border-border border-[1px] rounded-[16px] space-y-[32px]">
        <CustomImage
          alt={testimonial.company?.alt}
          className={`${testimonial.company?.name === "Peterson's" && isDark ? 'grayscale invert' : ''} : ''}`}
          lightModeImage={testimonial.company?.light}
          darkModeImage={testimonial.company?.dark}
          height={48}
          isGrayScale={false}
          width={testimonial.company?.name === "Peterson's" ? 150 : 90}
        />
        <Text.Headline.XSmall className="text-[18px]" text={`"${testimonial.testimonial}"`} />
        <TestimonialPersonalDataCard data={testimonial} />
      </div>
    </div>
  );
}