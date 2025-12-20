"use client"
// components/PortfolioHeroGrid.tsx
import React, { useEffect, useRef, useState } from 'react';
import { VideoCard } from './VideoCard';
import { TextComponent } from '.';

interface VideoItem {
  url: string;
  aspectRatio: number;
}

interface PortfolioHeroGridProps {
  videos: VideoItem[];
  rowHeight?: number; // Fixed height for all videos
  scrollSpeed?: number; // pixels per second
  gap?: number; // gap between items in pixels
  className?: string;
}

export const PortfolioHeroGrid: React.FC<PortfolioHeroGridProps> = ({
  videos,
  rowHeight = 400,
  scrollSpeed = 30,
  gap = 16,
  className = '',
}) => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  // Safety check: ensure videos array exists
  if (!videos || videos.length === 0) {
    return (
      <div
        className={`portfolio-hero-grid ${className}`}
      >
        <div
          className="flex items-center justify-center h-screen">
          <TextComponent.Body.Medium
            className="text-large opacity-50"
            text="No videos to display"
          />
        </div>
      </div>
    );
  }

  const row1Videos = videos;
  const row2Videos = [...videos].reverse();

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    let row1Position = 0;
    let row2Position = 0;
    let lastTimestamp = 0;

    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const scrollDistance = (scrollSpeed * delta) / 1000;

      // Only scroll row 1 if not hovered
      if (hoveredRow !== 1) {
        row1Position += scrollDistance;
        const row1ContentWidth = row1.scrollWidth / 2;
        if (row1Position >= row1ContentWidth) {
          row1Position = 0;
        }
        row1.scrollLeft = row1Position;
      }

      // Only scroll row 2 if not hovered
      if (hoveredRow !== 2) {
        row2Position += scrollDistance;
        const row2ContentWidth = row2.scrollWidth / 2;
        if (row2Position >= row2ContentWidth) {
          row2Position = 0;
        }
        row2.scrollLeft = row2Position;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollSpeed, hoveredRow]);

  const handleVideoHover = (videoKey: string, rowNumber: number, isEntering: boolean) => {
    if (isEntering) {
      setHoveredVideo(videoKey);
      setHoveredRow(rowNumber);
    } else {
      setHoveredVideo(null);
      setHoveredRow(null);
    }
  };

  const renderRow = (rowVideos: VideoItem[], rowNumber: number, ref: React.RefObject<HTMLDivElement | null>) => (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{ width: '100%' }}
    >
      <div
        className="flex"
        style={{
          gap: `${gap}px`,
          minWidth: 'fit-content',
        }}
      >
        {/* Render row twice for infinite scroll */}
        {[...Array(2)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {rowVideos.map((video, videoIndex) => {
              const videoKey = `row${rowNumber}-${setIndex}-${videoIndex}`;
              const isHovered = hoveredVideo === videoKey;
              return (
                <div
                  key={videoKey}
                  onMouseEnter={() => handleVideoHover(videoKey, rowNumber, true)}
                  onMouseLeave={() => handleVideoHover(videoKey, rowNumber, false)}
                >
                  <VideoCard
                    url={video.url}
                    aspectRatio={video.aspectRatio}
                    height={rowHeight}
                    autoplay={isHovered}
                    isClickable={isHovered}
                    loop
                    showControls={isHovered}
                    overlayOpacity={isHovered ? 0 : 30}
                    borderRadius={24}
                  />
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`portfolio-hero-grid ${className}`}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: `${gap}px`,
        }}
      >
        {renderRow(row1Videos, 1, row1Ref)}
        {renderRow(row2Videos, 2, row2Ref)}
      </div>
    </div>
  );
};