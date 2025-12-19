import { PrimaryButton, TextButton, TextComponent, Video } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { GridBlockLocations, VideoweiserProjects } from "@/core/constants";

export function HeroSection() {
    return (

        < Section withGrid gridBlocks={GridBlockLocations} >
            {/* Main Section Container */}
            <div className="max-w-8xl mx-auto">
                {/* This container holds the Texts (on the left —or top for mobile + tablets) 
                and the video cards on the right (or below for mobile + tablets) */}
                <div className="flex gap-[88px] items-center">
                    <div className="max-w-[640px]">
                        <BackgroundFade >
                            <TextComponent.Title className=""
                                text="Videos to enrich healthcare brands and drive growth" />
                        </BackgroundFade>
                        <BackgroundFade >
                            <TextComponent.Body.Large className="my-12"
                                text="We create engaging videos that simplify complex health concepts,
                        enhance credibility, and inspire actions that leads to measurable
                        growth for brands." />
                        </BackgroundFade>

                        <div className="flex gap-4">
                            <PrimaryButton label="Contact us" href="#" />
                            <TextButton label="See our works" href="#" />
                        </div>
                    </div>
                    <div className="w-[900px] flex space-x-[8px]" >
                        <div className="space-y-[8px] mt-16">
                            <Video
                                url={VideoweiserProjects.MadFit.url}
                                autoplay
                                showControls={false}
                                height={360}
                                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                                } />
                            <Video
                                url={VideoweiserProjects.MadFit.url}
                                autoplay
                                showControls={false}
                                height={360}
                                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                                } />
                        </div>
                        <div className="space-y-[8px]">
                            <Video
                                url={VideoweiserProjects.MadFit.url}
                                autoplay
                                showControls={false}
                                height={360}
                                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                                } />
                            {/* Apply the Glow Effect to this card */}
                            <Glow glowIntensity="low" glowSize={150} >
                                <Video
                                    url={VideoweiserProjects.MadFit.url}
                                    autoplay
                                    showControls={false}
                                    height={360}
                                    aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                                    } />
                            </Glow>
                        </div>
                        <div className="space-y-[8px] mt-32">
                            <Video
                                url={VideoweiserProjects.MadFit.url}
                                autoplay
                                showControls={false}
                                height={360}
                                aspectRatio={VideoweiserProjects.MadFit.aspectRatio
                                } />
                            <Video
                                url={VideoweiserProjects.MadFit.url}
                                autoplay
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

