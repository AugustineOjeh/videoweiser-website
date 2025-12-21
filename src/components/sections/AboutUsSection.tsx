
import { PrimaryButton, TextComponent, Video } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { GridBlockLocations, VideoweiserProjects } from "@/core/constants";

export function AboutUsSection() {
  return (

    < Section withGrid gridBlocks={GridBlockLocations} >
      {/* Main Section Container */}
      <div
        className="max-w-8xl items-center space-y-[16px] py-[88px] mx-auto"
      >
        <div
          className="w-full flex justify-between items-end space-x-[90px]"
        >
          <div className="max-w-[510px] space-y-[32px]">
            <div className="space-y-[16px]">
              <BackgroundFade >
                <TextComponent.Label.Small
                  className="text-accent font-bold"
                  text="About us"
                />
              </BackgroundFade>
              <BackgroundFade >
                <TextComponent.Headline.Medium
                  text="One decade. One team. Zero creative boundaries" />
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
              className="py-3"
              label="Join our team"
            />
          </div>
          <Glow glowIntensity="low" glowSize={100}>
            <div>
              <Video
                url={VideoweiserProjects.Siemens.url}
                isClickable={true}
                // autoplay={true}
                width={720}
              />
            </div>
          </Glow>
        </div>
        <div className="flex space-x-[16px]">
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
