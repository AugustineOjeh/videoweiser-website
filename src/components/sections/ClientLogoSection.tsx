import { CustomImage, PrimaryButton, TextButton, TextComponent } from "../ui";
import { Glow, Section } from "../visuals";
import { ClientLogos } from "@/core/constants/ClientLogos";

export function ClientLogoSection() {
    return (

        < Section withGrid={false} className="py-[96px]">
            {/* Main Section Container */}
            <Glow glowIntensity="low" glowSize={100}>

                <div className="max-w-6xl mx-auto flex bg-[var(--background)] border-border border-[1px] rounded-[32px] px-[48px] py-[48px]">
                    {/* This container holds the Texts (on the left —or top for mobile + tablets) 
                and the video cards on the right (or below for mobile + tablets) */}
                    <div className="flex w-full gap-[80px] items-center justify-between">
                        <div className="max-w-[511px]">
                            <TextComponent.Headline.Medium
                                text="Trusted by innovative healthcare brands" />
                            <TextComponent.Body.Small className="my-6"
                                text="From explainer videos for customers to product demos for investors and everything in between, we&apos;ve worked with some of the best teams making millions of human lives better." />

                            <div className="flex gap-4 mt-4">
                                <PrimaryButton label="Contact us" href="#" />
                                <TextButton label="See our works" href="#" />
                            </div>
                        </div>
                        <div className="w-[600px] space-y-[64px]" >
                            <div className="flex w-full items-center justify-between">
                                <CustomImage
                                    lightModeImage={ClientLogos.SimplePractice.light}
                                    darkModeImage={ClientLogos.SimplePractice.dark}
                                    alt={ClientLogos.SimplePractice.alt}
                                    width={140}
                                    height={24}
                                    opacity={50}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.BeckmanCoulter.light}
                                    darkModeImage={ClientLogos.BeckmanCoulter.dark}
                                    alt={ClientLogos.BeckmanCoulter.alt}
                                    width={105}
                                    height={24}
                                    opacity={70}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.TherapyNotes.light}
                                    darkModeImage={ClientLogos.TherapyNotes.dark}
                                    alt={ClientLogos.TherapyNotes.alt}
                                    width={120}
                                    height={24}
                                    opacity={100}
                                />
                            </div>
                            <div className="flex w-full items-center justify-between">
                                <CustomImage
                                    lightModeImage={ClientLogos.Headway.light}
                                    darkModeImage={ClientLogos.Headway.dark}
                                    alt={ClientLogos.Headway.alt}
                                    width={150}
                                    height={24}
                                    opacity={80}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.ABSKids.light}
                                    darkModeImage={ClientLogos.ABSKids.dark}
                                    alt={ClientLogos.ABSKids.alt}
                                    width={100}
                                    height={24}
                                    opacity={100}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.Eleos.light}
                                    darkModeImage={ClientLogos.Eleos.dark}
                                    alt={ClientLogos.Eleos.alt}
                                    width={100}
                                    height={24}
                                    opacity={50}
                                />
                            </div>
                            <div className="flex w-full items-center justify-between">
                                <CustomImage
                                    lightModeImage={ClientLogos.Valera.light}
                                    darkModeImage={ClientLogos.Valera.dark}
                                    alt={ClientLogos.Valera.alt}
                                    width={150}
                                    height={24}
                                    opacity={80}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.BioRad.light}
                                    darkModeImage={ClientLogos.BioRad.dark}
                                    alt={ClientLogos.BioRad.alt}
                                    width={100}
                                    height={24}
                                    opacity={70}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.CentralReach.light}
                                    darkModeImage={ClientLogos.CentralReach.dark}
                                    alt={ClientLogos.CentralReach.alt}
                                    width={115}
                                    height={24}
                                    opacity={80}
                                />
                            </div>
                            <div className="flex w-full items-center justify-between">
                                <CustomImage
                                    lightModeImage={ClientLogos.ButterflyEffect.light}
                                    darkModeImage={ClientLogos.ButterflyEffect.dark}
                                    alt={ClientLogos.ButterflyEffect.alt}
                                    width={150}
                                    height={24}
                                    opacity={90}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.Bruker.light}
                                    darkModeImage={ClientLogos.Bruker.dark}
                                    alt={ClientLogos.Bruker.alt}
                                    width={100}
                                    height={24}
                                    opacity={70}
                                />
                                <CustomImage
                                    lightModeImage={ClientLogos.Talkspace.light}
                                    darkModeImage={ClientLogos.Talkspace.dark}
                                    alt={ClientLogos.Talkspace.alt}
                                    width={115}
                                    height={24}
                                    opacity={80}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </Glow>
        </Section >

    );
}

