import { fetchVimeoVideos } from "@/lib/FetchVimeoVideos";
import { TextComponent, PortfolioHeroGrid } from "../ui";
import { Section } from "../visuals";

export async function WorksSection() {
  const videos = await fetchVimeoVideos();

  return (
    <Section id="works">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end mb-4 max-w-7xl mx-auto">
        <div className="lg:w-3/5 lg:mb-0 w-full md:max-w-[340px] lg:max-w-[560px]">
          <TextComponent.Headline.Large
            text="All Our Works, Showcased in One Place"
          />
        </div>
        {/* Right: Subtitle */}
        <div className="lg:w-2/5 w-full md:max-w-[320px] text-left lg:text-right py-4">
          <TextComponent.Body.Medium
            text="Browse through our portfolio of videos designed to elevate brands and engage audiences."
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <PortfolioHeroGrid videos={videos} />
      </div>
    </Section>
  );
}