import { TestimonialData } from "@/types/ComponentTypes";
import { CustomImage, TestimonialPersonalDataCard, Text, TextButton, TextComponent, Video } from "../ui";
import { Glow, BackgroundFade, Section } from "../visuals";
import { ClientTestimonials, GridBlockLocations } from "@/core/constants";
import { ClientLogos } from "@/core/constants/ClientLogos";

export function CaseStudySection() {
    return (

        < Section withGrid gridBlocks={GridBlockLocations} >
            {/* Main Section Container */}
            <div className="max-w-8xl py-[64px] mx-auto">

                <div className="max-w-[540px]">
                    <div className="max-w-[460px] space-y-[16px]">
                        <BackgroundFade >
                            <TextComponent.Label.Small className="text-accent font-bold"
                                text="Case studies" />
                        </BackgroundFade>
                        <BackgroundFade >
                            <TextComponent.Headline.Medium
                                text="Hundreds of brands. Same strong impact" />
                        </BackgroundFade>
                    </div>
                    <BackgroundFade >
                        <TextComponent.Body.Small className="my-6"
                            text="We help fast-growing companies get ahead in the ever-complex and compliance-dense healthcare industry." />
                    </BackgroundFade>
                </div>
                <div className="w-full flex items-stretch space-x-[16px] pt-6" >
                    <CaseStudyHighlight
                        className="rounded-tl-[32px] rounded-bl-[32px] rounded-tr-[12px] rounded-br-[12px]"
                        title="Safety and compliance-first video production"
                        subtitle="Astronomical leaps in internal processes and safety compliance through expert-crafted explainer videos."
                        testimonial={ClientTestimonials.Three60Cookware} />

                    <CaseStudyHighlight
                        className="rounded-[12px]"
                        title="Precision-crafted explainer videos"
                        subtitle="Engaging customer education videos that simplifies complex topics."
                        testimonial={ClientTestimonials.Petersons} />

                    <CaseStudyHighlight
                        className="rounded-tl-[12px] rounded-bl-[12px] rounded-tr-[32px] rounded-br-[32px]"
                        title="Confident, consistent and fast-moving branding visuals"
                        subtitle="Brand messaging that resonates with zero ambiguity, communicated through compelling video narratives."
                        testimonial={ClientTestimonials.MacSports} />
                </div>
            </div>
        </Section >

    );
}

interface CaseStudyHighlightProps {
    title: string;
    subtitle: string;
    testimonial: TestimonialData;
    className?: string;
}

export const CaseStudyHighlight: React.FC<CaseStudyHighlightProps> = ({
    title,
    subtitle,
    testimonial,
    className,
}) => {
    const baseClasses = "flex flex-col max-w-[450px] min-h-[540px] justify-between bg-[var(--background)] px-[24px] pt-[32px] pb-[24px] border-border border-[1px]";
    return (
        <div className={`${baseClasses} ${className}`}>
            <div className="space-y-[16px]">
                <Text.Headline.XSmall className="font-bold" text={title} />
                <Text.Label.Medium text={subtitle} />
                <TextButton className="text-[var(--accent)] px-0 pt-0 mb-[16px]" href={testimonial.caseStudy.url} label="Read the case study" />
            </div>
            <div className="px-[16px] py-[24px] border-border border-[1px] rounded-[16px] space-y-[32px]">
                <CustomImage
                    lightModeImage={testimonial.company?.light}
                    darkModeImage={testimonial.company?.dark}
                    alt={testimonial.company?.alt}
                    height={48}
                    width={testimonial.company?.name === "Peterson's" ? 140 : 90}
                />
                <Text.Headline.XSmall className="font-[18px]" text={`"${testimonial.testimonial}"`} />
                <TestimonialPersonalDataCard data={testimonial} />
            </div>
        </div>
    );
}