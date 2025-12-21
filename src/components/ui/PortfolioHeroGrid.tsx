// "use client"
// // components/PortfolioHeroGrid.tsx
// import React, { useEffect, useRef, useState } from 'react';
// import { VideoCard } from './VideoCard';
// import { TextComponent } from '.';

// interface VideoItem {
//   url: string;
//   aspectRatio: number;
// }

// interface PortfolioHeroGridProps {
//   videos: VideoItem[];
//   rowHeight?: number; // Fixed height for all videos
//   scrollSpeed?: number; // pixels per second
//   gap?: number; // gap between items in pixels
//   className?: string;
// }

// export const PortfolioHeroGrid: React.FC<PortfolioHeroGridProps> = ({
//   videos,
//   rowHeight = 400,
//   scrollSpeed = 30,
//   gap = 16,
//   className = '',
// }) => {
//   const row1Ref = useRef<HTMLDivElement>(null);
//   const row2Ref = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number>(0);
//   const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
//   const [hoveredRow, setHoveredRow] = useState<number | null>(null);

//   // Safety check: ensure videos array exists
//   if (!videos || videos.length === 0) {
//     return (
//       <div
//         className={`portfolio-hero-grid ${className}`}
//       >
//         <div
//           className="flex items-center justify-center h-screen">
//           <TextComponent.Body.Medium
//             className="text-large opacity-50"
//             text="No videos to display"
//           />
//         </div>
//       </div>
//     );
//   }

//   const row1Videos = videos;
//   const row2Videos = [...videos].reverse();

//   useEffect(() => {
//     const row1 = row1Ref.current;
//     const row2 = row2Ref.current;
//     if (!row1 || !row2) return;

//     let row1Position = 0;
//     let row2Position = 0;
//     let lastTimestamp = 0;

//     const scroll = (timestamp: number) => {
//       if (!lastTimestamp) lastTimestamp = timestamp;
//       const delta = timestamp - lastTimestamp;
//       lastTimestamp = timestamp;

//       const scrollDistance = (scrollSpeed * delta) / 1000;

//       // Only scroll row 1 if not hovered
//       if (hoveredRow !== 1) {
//         row1Position += scrollDistance;
//         const row1ContentWidth = row1.scrollWidth / 2;
//         if (row1Position >= row1ContentWidth) {
//           row1Position = 0;
//         }
//         row1.scrollLeft = row1Position;
//       }

//       // Only scroll row 2 if not hovered
//       if (hoveredRow !== 2) {
//         row2Position += scrollDistance;
//         const row2ContentWidth = row2.scrollWidth / 2;
//         if (row2Position >= row2ContentWidth) {
//           row2Position = 0;
//         }
//         row2.scrollLeft = row2Position;
//       }

//       animationRef.current = requestAnimationFrame(scroll);
//     };

//     animationRef.current = requestAnimationFrame(scroll);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [scrollSpeed, hoveredRow]);

//   const handleVideoHover = (videoKey: string, rowNumber: number, isEntering: boolean) => {
//     if (isEntering) {
//       setHoveredVideo(videoKey);
//       setHoveredRow(rowNumber);
//     } else {
//       setHoveredVideo(null);
//       setHoveredRow(null);
//     }
//   };

//   const renderRow = (rowVideos: VideoItem[], rowNumber: number, ref: React.RefObject<HTMLDivElement | null>) => (
//     <div
//       ref={ref}
//       className="overflow-hidden"
//       style={{ width: '100%' }}
//     >
//       <div
//         className="flex"
//         style={{
//           gap: `${gap}px`,
//           minWidth: 'fit-content',
//         }}
//       >
//         {/* Render row twice for infinite scroll */}
//         {[...Array(2)].map((_, setIndex) => (
//           <React.Fragment key={setIndex}>
//             {rowVideos.map((video, videoIndex) => {
//               const videoKey = `row${rowNumber}-${setIndex}-${videoIndex}`;
//               const isHovered = hoveredVideo === videoKey;
//               return (
//                 <div
//                   key={videoKey}
//                   onMouseEnter={() => handleVideoHover(videoKey, rowNumber, true)}
//                   onMouseLeave={() => handleVideoHover(videoKey, rowNumber, false)}
//                 >
//                   <VideoCard
//                     url={video.url}
//                     aspectRatio={video.aspectRatio}
//                     height={rowHeight}
//                     autoplay={isHovered}
//                     isClickable={isHovered}
//                     loop
//                     showControls={isHovered}
//                     overlayOpacity={isHovered ? 0 : 30}
//                     borderRadius={24}
//                   />
//                 </div>
//               );
//             })}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className={`portfolio-hero-grid ${className}`}>
//       <div
//         style={{
//           width: '100%',
//           height: '100vh',
//           position: 'relative',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           gap: `${gap}px`,
//         }}
//       >
//         {renderRow(row1Videos, 1, row1Ref)}
//         {renderRow(row2Videos, 2, row2Ref)}
//       </div>
//     </div>
//   );
// };
"use client";
import React, { useEffect, useRef, useState } from "react";
import { VideoCard } from "./VideoCard";
import { TextComponent, PrimaryButton } from "."; // Assuming PrimaryButton is in your ui folder

interface VideoItem {
  url: string;
  aspectRatio: number;
}

interface PortfolioHeroGridProps {
  videos: VideoItem[];
  rowHeight?: number;
  scrollSpeed?: number;
  gap?: number;
  className?: string;
}

export const PortfolioHeroGrid: React.FC<PortfolioHeroGridProps> = ({
  videos,
  rowHeight = 400,
  scrollSpeed = 30,
  gap = 16,
  className = "",
}) => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop Scroll Animation Logic
  useEffect(() => {
    if (isMobile) return;
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

      if (hoveredRow !== 1) {
        row1Position += scrollDistance;
        if (row1Position >= row1.scrollWidth / 2) row1Position = 0;
        row1.scrollLeft = row1Position;
      }
      if (hoveredRow !== 2) {
        row2Position += scrollDistance;
        if (row2Position >= row2.scrollWidth / 2) row2Position = 0;
        row2.scrollLeft = row2Position;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };
    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [scrollSpeed, hoveredRow, isMobile]);

  // --- MOBILE RENDER (Vertical Grid) ---
  if (isMobile) {
    const displayedVideos = videos.slice(0, visibleCount);
    const hasMore = visibleCount < videos.length;

    return (
      <div className={`flex flex-col items-center justify-center gap-8 w-full px-2 py-10 ${className}`}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 w-full gap-6"
        >
          {displayedVideos.map((video, idx) => (
            <div key={idx} className="w-full">
              <VideoCard
                url={video.url}
                aspectRatio={video.aspectRatio}
                width={320}
                autoplay={false}
                isClickable={true}
                showControls={true}
                borderRadius={24}
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-4">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-8 py-4 bg-white/5 border border-border rounded-full hover:bg-white/10 transition-all"
            >
              <TextComponent.Label.Small text="Load More Works" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // --- DESKTOP RENDER (Infinite Rows) ---
  const renderRow = (rowVideos: VideoItem[], rowNumber: number, ref: React.RefObject<HTMLDivElement | null>) => (
    <div ref={ref} className="overflow-hidden w-full">
      <div className="flex" style={{ gap: `${gap}px`, minWidth: "fit-content" }}>
        {[...Array(2)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {rowVideos.map((video, videoIndex) => {
              const videoKey = `row${rowNumber}-${setIndex}-${videoIndex}`;
              return (
                <div
                  key={videoKey}
                  onMouseEnter={() => { setHoveredVideo(videoKey); setHoveredRow(rowNumber); }}
                  onMouseLeave={() => { setHoveredVideo(null); setHoveredRow(null); }}
                >
                  <VideoCard
                    url={video.url}
                    aspectRatio={video.aspectRatio}
                    height={rowHeight}
                    autoplay={hoveredVideo === videoKey}
                    isClickable={hoveredVideo === videoKey}
                    overlayOpacity={hoveredVideo === videoKey ? 0 : 30}
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
    <div className={`portfolio-hero-grid flex flex-col justify-center h-screen gap-[16px] ${className}`}>
      {renderRow(videos, 1, row1Ref)}
      {renderRow([...videos].reverse(), 2, row2Ref)}
    </div>
  );
};