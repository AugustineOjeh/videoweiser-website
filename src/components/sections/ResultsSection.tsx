import { CustomImage, TestimonialPersonalDataCard, Text, TextButton, TextComponent, Video } from "../ui";
import { BackgroundFade, Section } from "../visuals";
import { GridBlockLocations } from "@/core/constants";

export function ResultsSection() {
  return (

    < Section id="results"
      withGrid
      gridBlocks={GridBlockLocations} >
      {/* Main Section Container */}
      <div
        className="max-w-5xl mx-auto py-16 lg:py-24 px-6 lg:px-8">

        <div
          className="max-w-[440px] mx-auto lg:mx-0 text-center lg:text-left mb-12">
          <div
            className="space-y-4 mb-6">
            <BackgroundFade >
              <TextComponent.Label.Small
                className="text-accent font-bold"
                text="Results" />
            </BackgroundFade>
            <BackgroundFade >
              <TextComponent.Headline.Medium
                text="Videos are how we help billions live healthy lives" />
            </BackgroundFade>
          </div>
          <BackgroundFade >
            <TextComponent.Body.Small
              className="my-6"
              text="Our clients' reach is proof of our hard work, diligence and endless iterative commitment to growth." />
          </BackgroundFade>
        </div>
        <BackgroundFade >

          <div
            className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-4" >
            <ResultBarComponent
              className="h-[300px] lg:h-[420px] bg-[var(--background)]"
              figure="50 000+"
              title="Videos completed"
              subtitle="Clients entrust us with thousands of video projects. Grateful for every opportunity, we have never taken these responsibilities lightly —and never will."
            />
            <ResultBarComponent
              className="h-[300px] bg-background"
              figure="150+"
              title="Clients served"
              subtitle="We are the trusted video partner to clients from various sub-sectors of the healthcare industry, from fitness trainers to cancer research companies."
            />
            <ResultBarComponent
              className="h-[300px] lg:h-[570px] bg-[#6320EE] text-[#fff]"
              figure="2.16B+"
              title="Impressions reached"
              subtitle="Since our inception in 2010, our videos have reached the feeds of our clients’ target audiences 2.163B times. That’s 25% of the world’s population."
            />
          </div>
        </BackgroundFade>
      </div>
    </Section >

  );
}

interface ResultBarProps {
  figure: string;
  subtitle: string;
  title: string;
  className?: string;
}

export const ResultBarComponent: React.FC<ResultBarProps> = ({
  figure,
  subtitle,
  title,
  className,
}) => {
  const baseClasses = "flex flex-col justify-between w-full text-center lg:text-left max-w-[400px] mx-auto lg:mx-0 px-4 py-6 border-2 border-border rounded-2xl";
  return (
    <div className={`${baseClasses} ${className}`}>
      <Text.Headline.Medium text={figure} />
      <div className="space-y-[12px]">
        <Text.Headline.XSmall className="font-bold" text={title} />
        <Text.Label.Medium text={subtitle} />
      </div>
    </div>
  );
}