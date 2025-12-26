
import { PrimaryButton, TextComponent, Video } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { GridBlockLocations, VideoweiserProjects } from "@/core/constants";

export function AboutUsSection() {
  return (

    < Section id="about"
      withGrid
      gridBlocks={GridBlockLocations} >
      {/* Main Section Container */}
      <div
        className="max-w-7xl mx-auto py-16 lg:py-24 px-4 lg:px-4"
      >
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 lg:gap-20 mb-4"
        >
          <div className="w-full lg:max-w-[510px] text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <BackgroundFade >
                <TextComponent.Label.Small
                  className="text-accent font-bold"
                  text="About us"
                />
              </BackgroundFade>
              <BackgroundFade >

                <TextComponent.Headline.Medium
                  text={"One decade. One team. Zero creative boundaries"} />

              </BackgroundFade>
            </div>
            <BackgroundFade >
              <TextComponent.Body.Small
                text="At Videoweiser, our mission is to create stories that help humans live better, healthier lives. Our team have worked relentlessly on this mission and we embody it as our sincere contribution to making the world a better place."
              />
            </BackgroundFade>
            <BackgroundFade >
              <TextComponent.Label.Medium
                text="Our approach to storytelling through videos, as well as our culture, over 10+ years has created an alignment of values between us —as a team— and our clients."
              />
            </BackgroundFade>
            <PrimaryButton
              className="w-full md:w-auto py-3"
              label="Join our team"
            />
          </div>
          <Glow
            className="hidden md:flex"
            glowIntensity="low"
            glowSize={100}>
            <Video
              url={VideoweiserProjects.Siemens.url}
              isClickable={true}
              width={700}
              aspectRatio={16 / 9}
            />
          </Glow>
          <Glow
            className="flex md:hidden"
            glowIntensity="low"
            glowSize={100}>
            <Video
              url={VideoweiserProjects.Siemens.url}
              isClickable={true}
              width={360}
              aspectRatio={16 / 9}
            />
          </Glow>
        </div>
        <div className="hidden lg:flex space-x-[16px]">
          <Video
            url={VideoweiserProjects.Coviant.url}
            height={240}
            isClickable={true}
            className="self-end"
          />
          <Video
            url={VideoweiserProjects.NextGenOffice.url}
            aspectRatio={3 / 2}
            isClickable={true}
            // autoplay={true}
            height={360}
          />
          <Video
            url={VideoweiserProjects.NextGenAmbientAssist.url}
            height={200}
            isClickable={true}
            // autoplay={true}
            className="self-start"
          />
        </div>
      </div>
    </Section >
  );
}
