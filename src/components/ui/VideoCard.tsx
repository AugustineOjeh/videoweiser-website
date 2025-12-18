// components/ui/VideoCard.tsx
import React, { useMemo } from 'react';

interface VideoCardProps {
    url: string;
    aspectRatio?: number; // e.g., 16/9, 4/3, 1/1
    width?: string | number;
    height?: string | number;
    autoplay?: boolean;
    borderRadius?: number;
    className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
    url,
    aspectRatio = 16 / 9,
    width,
    height,
    autoplay = false,
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
            return `https://www.youtube.com/embed/${videoId}?${autoplay ? 'autoplay=1&mute=1&' : ''}rel=0`;
        }

        // Vimeo
        const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/;
        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch) {
            const videoId = vimeoMatch[1];
            return `https://player.vimeo.com/video/${videoId}?${autoplay ? 'autoplay=1&muted=1&' : ''}background=0`;
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
                </div>
            ) : (
                // Fixed dimensions mode
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
            )}
        </div>
    );
};

export default VideoCard;