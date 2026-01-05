import { PrimaryButton, TextButton, TextComponent, Video } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { GridBlockLocations } from "@/core/constants";

export function HeroSection() {
  return (

    < Section
      id="hero"
      withGrid
      gridBlocks={GridBlockLocations} >
      {/* Main Section Container */}
      <div
        className="max-w-7xl min-h-[70vh] flex flex-col items-center lg:items-start justify-center mx-auto lg:pb-12">
        <div
          className="flex flex-col w-full gap-[48px] lg:gap-[32px] items-center lg:items-start justify-center">
          <div className="hidden sm:flex w-full" >
            <Glow glowIntensity="low" glowSize={100} className="w-full" >
              <Video
                className="w-full max-w-[1200px]"
                url="https://vimeo.com/1151422144"
                autoplay={true}
                overlayOpacity={10}
                showControls={false}
                aspectRatio={16 / 9} />
            </Glow>

          </div>
          <div
            className="w-full max-w-[640px] lg:max-w-none text-center lg:text-left">
            <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] lg:gap-6 w-full">
              {/* Title + Buttons */}
              <div>
                <BackgroundFade>
                  <TextComponent.Headline.Large
                    className="hidden lg:block"
                    text="Videos to enrich healthcare brands and drive growth"
                  />
                  <TextComponent.Title
                    className="block lg:hidden"
                    text="Videos to enrich healthcare brands and drive growth"
                  />
                </BackgroundFade>
              </div>

              {/* Subtitle */}
              <div className="lg:max-w-[640px] lg:ml-auto">
                <BackgroundFade>
                  <TextComponent.Body.Medium
                    className="my-8 lg:mt-2"
                    text="We create engaging videos that simplify complex health concepts,
            enhance credibility, and inspire actions that leads to measurable
            growth for brands."
                  />
                </BackgroundFade>
                {/* Buttons stay BELOW subtitle on mobile/tablet */}
                <div className="hidden lg:flex mt-6 gap-4">
                  <PrimaryButton
                    label="Contact us"
                    href="#"
                  />
                  <TextButton
                    label="See our works"
                    href="/works"
                  />
                </div>
              </div>
            </div>

            {/* Mobile + Tablet buttons (original position) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:hidden">
              <PrimaryButton
                className="w-full sm:w-auto"
                label="Contact us"
                href="#"
              />
              <TextButton
                label="See our works"
                href="/works"
              />
            </div>
          </div>
        </div>
      </div>
    </Section >

  );
}

