"use client";
import React, { useState } from "react";
import { VideoCard } from "./VideoCard";
import { TextComponent } from ".";

interface VideoItem {
  url: string;
  aspectRatio?: number;
}

interface PortfolioHeroGridProps {
  videos: VideoItem[];
  className?: string;
}

export const PortfolioHeroGrid: React.FC<PortfolioHeroGridProps> = ({
  videos,
  className = "",
}) => {
  const [visibleCount, setVisibleCount] = useState(6); // initial visible videos

  const displayedVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <div className={`flex flex-col items-center justify-center w-full gap-8 ${className}`}>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-[1400px]">
        {displayedVideos.map((video, idx) => (
          <VideoCard
            key={idx}
            url={video.url}
            aspectRatio={video.aspectRatio ?? (16 / 9)}
            autoplay={false}
            isClickable={true}
            showControls={true}
            borderRadius={24}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-4">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="px-8 py-4 bg-grid-block-15 border border-border rounded-full transition-all"
          >
            <TextComponent.Label.Small text="Load More" />
          </button>
        </div>
      )}
    </div>
  );
};
