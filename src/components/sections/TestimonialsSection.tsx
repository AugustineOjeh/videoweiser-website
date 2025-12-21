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
        className="max-w-8xl flex flex-col items-center w-full justify-center space-y-[96px] py-[88px] mx-auto"
      >
        <div className="max-w-[664px] space-y-[16px] justify-center">
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
        <div className="flex flex-col space-y-[12px] items-center justify-center">

          <div className="flex space-x-[12px] h-[260px] items-stretch">
            <TestimonialCard
              data={ClientTestimonials.MacSports}
            />
            <Glow className="h-[260px] flex" glowIntensity="low" glowSize={100}>
              <TestimonialCard
                className="min-w-[500px] text-[24px] h-full"
                data={ClientTestimonials.CentralReach}
                showLogo={true}
              />
            </Glow>
            <TestimonialCard
              data={ClientTestimonials.Petersons}
            />
          </div>
          <div className="flex space-x-[12px] h-[240px] items-stretch">
            <TestimonialCard
              data={ClientTestimonials.MacSports}
            />
            <TestimonialCard
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
  const baseClasses = "flex flex-col max-w-[440px] w-full min-h-[200px] justify-between bg-[var(--background)] border-border border-[1px] rounded-[24px]";
  return (
    <div
      className={`${baseClasses} ${className}`}
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
          />
        }
      </div>
    </div>
  );
}