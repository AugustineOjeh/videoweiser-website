import { PrimaryButton, TextButton, TextComponent, Video } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { GridBlockLocations, VideoweiserProjects } from "@/core/constants";

export function HeroSection() {
  return (

    < Section
      id="hero"
      withGrid
      gridBlocks={GridBlockLocations} >
      {/* Main Section Container */}
      <div
        className="max-w-8xl mx-auto">
        <div
          className="flex flex-col lg:flex-row gap-[48px] lg:gap-[88px] items-center">
          <div
            className="max-w-[640px] text-center lg:text-left">
            <BackgroundFade >
              <TextComponent.Title
                text="Videos to enrich healthcare brands and drive growth" />
            </BackgroundFade>
            <BackgroundFade >
              <TextComponent.Body.Large className="my-8 lg:my-12"
                text="We create engaging videos that simplify complex health concepts,
                        enhance credibility, and inspire actions that leads to measurable
                        growth for brands." />
            </BackgroundFade>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <PrimaryButton
                className="w-full sm:w-auto"
                label="Contact us"
                href="#" />
              <TextButton
                label="See our works"
                href="/works" />
            </div>
          </div>
          <div className="hidden sm:flex w-full lg:w-[900px] space-x-[24px] lg:space-x-[8px] justify-center" >
            <div className="space-y-[24px] lg:space-y-[8px] lg:mt-16">
              <Video
                url={VideoweiserProjects.MadFit.url}
                autoplay={false}
                showControls={false}
                height={360}
                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                } />
              <Video
                url={VideoweiserProjects.MadFit.url}
                autoplay={false}
                showControls={false}
                height={360}
                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                } />
            </div>
            <div className="space-y-[24px] lg:space-y-[8px]">
              <Video
                url={VideoweiserProjects.MadFit.url}
                autoplay={false}
                showControls={false}
                height={360}
                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                } />
              {/* Apply the Glow Effect to this card */}
              <Glow glowIntensity="low" glowSize={150} >
                <Video
                  url={VideoweiserProjects.MadFit.url}
                  autoplay={false}
                  showControls={false}
                  height={360}
                  aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                  } />
              </Glow>
            </div>
            <div className="space-y-[24px] lg:space-y-[8px] lg:mt-32">
              <Video
                url={VideoweiserProjects.MadFit.url}
                autoplay={false}
                showControls={false}
                height={360}
                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                } />
              <Video
                url={VideoweiserProjects.MadFit.url}
                autoplay={false}
                showControls={false}
                height={360}
                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                } />
            </div>

          </div>
        </div>
      </div>
    </Section >

  );
}

