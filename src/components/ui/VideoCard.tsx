"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';

interface VideoCardProps {
  url: string;
  aspectRatio?: number;
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  loop?: boolean;
  showControls?: boolean;
  isClickable?: boolean;
  borderRadius?: number;
  className?: string;
  overlayOpacity?: number;
  lazyLoad?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  url,
  aspectRatio = 16 / 9,
  width,
  height,
  autoplay = false,
  loop = true,
  isClickable = false,
  showControls = false,
  borderRadius = 24,
  className = '',
  overlayOpacity = 50,
  lazyLoad = true,
}) => {
  const [isInView, setIsInView] = useState(!lazyLoad); // Load immediately if lazy loading is disabled
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazyLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Once loaded, we can stop observing
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [lazyLoad]);
  // Parse video URL and generate embed URL
  const embedUrl = useMemo(() => {
    // YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) {

      const videoId = youtubeMatch[1];
      const params = [
        autoplay ? 'autoplay=1' : '',
        autoplay ? 'mute=1' : '', // YouTube requires mute for autoplay
        showControls ? 'controls=1' : 'controls=0',
        loop ? 'loop=1' : '',
        loop ? `playlist=${videoId}` : '', // Required for loop to work
        'rel=0', // Don't show related videos
        'modestbranding=1', // Minimal YouTube branding
        'showinfo=0', // Hide video info
        'disablekb=1', // Disable keyboard controls
      ].filter(Boolean).join('&');

      return `https://www.youtube.com/embed/${videoId}?${params}`;
    }

    // YouTube Shorts - Special handling
    const shortsRegex = /youtube\.com\/shorts\/([^"&?\/\s]+)/;
    const shortsMatch = url.match(shortsRegex);
    if (shortsMatch) {
      const videoId = shortsMatch[1];
      const params = [
        autoplay ? 'autoplay=1' : '',
        autoplay ? 'mute=1' : '',
        showControls ? 'controls=1' : 'controls=0',
        loop ? 'loop=1' : '',
        loop ? `playlist=${videoId}` : '',
        'rel=0',
        'modestbranding=1',
        'showinfo=0',
        'disablekb=1',
      ].filter(Boolean).join('&');

      return `https://www.youtube.com/embed/${videoId}?${params}`;
    }

    // Vimeo
    const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/;
    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch) {
      const videoId = vimeoMatch[1];
      const params = [
        autoplay ? 'autoplay=1' : '',
        autoplay ? 'muted=1' : '',
        showControls ? 'controls=1' : 'controls=0',
        loop ? 'loop=1' : '',
        'background=0',
        'title=0', // Hide title
        'byline=0', // Hide author
        'portrait=0', // Hide author portrait
      ].filter(Boolean).join('&');

      return `https://player.vimeo.com/video/${videoId}?${params}`;
    }

    // Direct embed URL
    return url;
  }, [url, autoplay]);

  // Calculate dimensions
  const dimensions = useMemo(() => {
    const parseValue = (value: string | number | undefined): string | undefined => {
      if (value === undefined) return undefined;
      if (typeof value === 'number') return `${value}px`;
      return value;
    };

    const parsedWidth = parseValue(width);
    const parsedHeight = parseValue(height);

    // Both provided - ignore aspect ratio
    if (parsedWidth && parsedHeight) {
      return { width: parsedWidth, height: parsedHeight };
    }

    // Only width provided - calculate height
    if (parsedWidth && !parsedHeight) {
      const widthNum = typeof width === 'number' ? width : parseFloat(parsedWidth);
      const calculatedHeight = widthNum / aspectRatio;
      return { width: parsedWidth, height: `${calculatedHeight}px` };
    }

    // Only height provided - calculate width
    if (parsedHeight && !parsedWidth) {
      const heightNum = typeof height === 'number' ? height : parseFloat(parsedHeight);
      const calculatedWidth = heightNum * aspectRatio;
      return { width: `${calculatedWidth}px`, height: parsedHeight };
    }

    // Neither provided - use 100% width with aspect ratio
    return { width: '100%', paddingBottom: `${(1 / aspectRatio) * 100}%` };
  }, [width, height, aspectRatio]);

  return (
    <div
      className={`video-card ${className}`}
      style={{
        width: '100%',
        height: dimensions.height,
        maxWidth: '100%',
        borderRadius: `${borderRadius}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {dimensions.paddingBottom ? (
        // Aspect ratio mode
        <div style={{ paddingBottom: dimensions.paddingBottom, position: 'relative' }}>
          <iframe
            src={embedUrl}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Video"
          />

          <div
            className='hover:opacity-[.9] transition-0.5s'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`,
              width: '100%',
              height: '100%',
              pointerEvents: isClickable ? 'none' : 'auto',
              cursor: 'default',
            }}
          />

        </div>
      ) : (
        // Fixed dimensions mode
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <iframe
            src={embedUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Video"
          />

          <div
            className='hover:opacity-[.9] transition-0.5s'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`,
              width: '100%',
              height: '100%',
              pointerEvents: isClickable ? 'none' : 'auto',
              cursor: 'default',
            }}
          />

        </div>
      )}
    </div>
  );
};

export default VideoCard;