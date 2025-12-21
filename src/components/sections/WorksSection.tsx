import { TextComponent, PortfolioHeroGrid } from "../ui";
import { Section } from "../visuals";


export function WorksSection() {
  // Replace with response from Vimeo API
  const showcaseVideos = [
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 9 / 16 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 9 / 16 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 16 / 9 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 16 / 9 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 2 / 3 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 3 / 2 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 1 / 1 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 9 / 16 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 16 / 9 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 4 / 3 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 1 / 1 },
    { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', aspectRatio: 2 / 3 },
  ];

  return (
    <Section
      id="works"
      className="relative">
      {/* Text behind the videos */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 0 }}
      >
        <div
          className="text-center max-w-3xl px-8">
          <TextComponent.Title
            className="opacity-20 text-[128px]"
            text="Our Works" />
        </div>
      </div>
      <PortfolioHeroGrid
        videos={showcaseVideos}
        rowHeight={400}
        scrollSpeed={30}
        gap={16}
      />
    </Section>
  );
}