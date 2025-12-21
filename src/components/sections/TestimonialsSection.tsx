import { TestimonialData } from "@/types/ComponentTypes";
import { CustomImage, TestimonialPersonalDataCard, TextComponent } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { ClientTestimonials, GridBlockLocations } from "@/core/constants";

export function TestimonialsSection() {
  return (

    < Section
      id="testimonials"
      withGrid
      gridBlocks={GridBlockLocations} >
      {/* Main Section Container */}
      <div
        className="max-w-8xl mx-auto py-16 lg:py-24 px-6 lg:px-8"
      >
        <div className="max-w-[664px] mx-auto text-center space-y-4 mb-16 lg:mb-24">
          <BackgroundFade>
            <TextComponent.Label.Small
              className="text-accent font-bold text-center"
              text="Testimonials"
            />
          </BackgroundFade>
          <BackgroundFade >
            <TextComponent.Headline.Medium
              className="text-center"
              text="We’ve worked with hundreds of awesome people" />
          </BackgroundFade>
        </div>
        <div className="flex flex-col gap-3 items-center lg:items-stretch">

          <div className="w-full flex flex-col lg:flex-row gap-3 lg:h-[280px] items-center lg:items-stretch">
            <TestimonialCard
              className="w-full lg:w-auto"
              data={ClientTestimonials.MacSports}
            />
            <Glow
              className="w-full lg:w-auto lg:h-[280px] flex items-center justify-center"
              glowIntensity="low"
              glowSize={100}>
              <TestimonialCard
                className="w-full lg:min-w-[500px] lg:text-[24px] h-full"
                data={ClientTestimonials.CentralReach}
                showLogo={true}
              />
            </Glow>
            <TestimonialCard
              className="w-full lg:w-auto"
              data={ClientTestimonials.Petersons}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-3 lg:min-h-[200px] items-center lg:items-stretch">
            <TestimonialCard
              className="w-full lg:w-auto"
              data={ClientTestimonials.MacSports}
            />
            <TestimonialCard
              className="w-full lg:w-auto"
              data={ClientTestimonials.Petersons}
            />
          </div>
        </div>
      </div>
    </Section >
  );
}


interface TestimonialProps {
  data: TestimonialData;
  showLogo?: boolean;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  data,
  showLogo = false,
  className,
}) => {
  // const baseClasses = "flex flex-col max-w-[440px] w-full min-h-[200px] justify-between bg-[var(--background)] border-border border-[1px] rounded-[24px]";
  return (
    <div
      className={`
        flex flex-col justify-between
        w-full max-w-[440px] lg:max-w-none
        min-h-[120px]
        bg-[var(--background)] 
        border border-border 
        rounded-3xl
        ${className}
      `}
    >
      <TextComponent.Headline.XSmall
        className={`p-[24px] ${data.company?.name === "Central Reach" ? 'font-semibold text-[22px]' : 'font-medium text-[18px]'}`}
        text={`"${data.testimonial}"`}
      />
      <div
        className="px-[16px] pb-[24px] flex justify-between items-center"
      >
        <TestimonialPersonalDataCard
          data={data}
        />
        {showLogo &&
          <CustomImage
            darkModeImage={data.company?.dark}
            lightModeImage={data.company?.light}
            height={20}
            width={100}
            className="hidden lg:block"
          />
        }
      </div>
    </div>
  );
}