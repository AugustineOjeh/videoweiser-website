// components/ui/VideoCard.tsx
import React, { useMemo } from 'react';

interface VideoCardProps {
    url: string;
    aspectRatio?: number; // e.g., 16/9, 4/3, 1/1
    width?: string | number;
    height?: string | number;
    autoplay?: boolean;
    loop?: boolean;
    showControls?: boolean;
    borderRadius?: number;
    className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
    url,
    aspectRatio = 16 / 9,
    width,
    height,
    autoplay = false,
    loop = true,
    showControls = false,
    borderRadius = 24,
    className = '',
}) => {
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
            return typeof value === 'number' ? `${value}px` : value;
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
                width: dimensions.width,
                height: dimensions.height,
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
                    {!showControls && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'auto',
                                cursor: 'default',
                            }}
                        />
                    )}
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
                    {!showControls && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'auto',
                                cursor: 'default',
                            }}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default VideoCard;