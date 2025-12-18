import { PrimaryButton, TextButton, TextComponent } from "../ui";
import ContentContainer from "../visuals/ContentContainer";
import GlowCard from "../visuals/GlowCard";
import Section from "../visuals/Section";
import { GridBlockLocations } from "@/core/constants";

export function HeroSection() {
    return (

        < Section withGrid gridBlocks={GridBlockLocations} >
            {/* Main Section Container */}
            <div className="max-w-7xl mx-auto">
                {/* This container holds the Texts (on the left —or top for mobile + tablets) 
                and the video cards on the right (or below for mobile + tablets) */}
                <div className="flex gap-[100px]">
                    <ContentContainer>
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
                    <div className="w-[900px]">
                        <GlowCard > </GlowCard>
                    </div>
                </div>
            </div>
        </Section >

    );
}

