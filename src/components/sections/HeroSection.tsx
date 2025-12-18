import { PrimaryButton, TextButton, TextComponent, Video } from "../ui";
import ContentContainer from "../visuals/ContentContainer";
import Section from "../visuals/Section";
import { GridBlockLocations, VideoweiserProjects } from "@/core/constants";

export function HeroSection() {
    return (

        < Section withGrid gridBlocks={GridBlockLocations} >
            {/* Main Section Container */}
            <div className="max-w-7xl mx-auto">
                {/* This container holds the Texts (on the left —or top for mobile + tablets) 
                and the video cards on the right (or below for mobile + tablets) */}
                <div className="flex gap-[100px]">
                    <ContentContainer className="max-w-[640px]">
                        <TextComponent.Title className="my-12"
                            text="Videos to enrich healthcare brands and drive growth" />
                        <TextComponent.Body.Large className="my-12"
                            text="We create engaging videos that simplify complex health concepts,
                        enhance credibility, and inspire actions that leads to measurable
                        growth for brands." />

                        <div className="flex gap-4">
                            <PrimaryButton label="Contact us" href="#" />
                            <TextButton label="See our works" href="#" />

                        </div>
                    </ContentContainer>
                    <div className="w-[900px] flex-col gap-[12px]">
                        <Video
                            url={VideoweiserProjects.MadFit.url}
                            autoplay
                            showControls={false}
                            width={240}
                            aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                            } />
                        <Video
                            url={VideoweiserProjects.MadFit.url}
                            autoplay
                            showControls={false}
                            width={240}
                            aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                            } />
                    </div>
                </div>
            </div>
        </Section >

    );
}

