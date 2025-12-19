import React from 'react';
import Image from "next/image";

interface ImageProps {
    alt?: string;
    className?: string;
    darkModeImage?: string;
    height?: number;
    isGrayScale?: boolean;
    lightModeImage?: string;
    opacity?: number;
    width?: number;
}
export const CustomImage: React.FC<ImageProps> = ({
    alt = '',
    className = '',
    darkModeImage,
    height,
    isGrayScale = true,
    lightModeImage,
    opacity,
    width,
}) => {

    if (!lightModeImage && !darkModeImage) throw "An image URL must be provided";
    const opacityValue = (opacity ?? 100) / 100;
    return (
        <div className={`client-logo-wrapper ${className}`}>
            {/* Light mode image */}
            <div
                className="block dark:hidden"
                style={{ opacity: opacityValue }}
            >
                <Image
                    src={lightModeImage ?? darkModeImage!}
                    alt={alt}
                    width={width ?? 110}
                    height={height ?? 24}
                    className={`${isGrayScale ? 'grayscale' : ''} ${!lightModeImage && isGrayScale ? 'invert' : ''}`}
                />
            </div>

            {/* Dark mode image */}
            <div
                className="hidden dark:block"
                style={{ opacity: opacityValue }}
            >
                <Image
                    src={darkModeImage ?? lightModeImage!}
                    alt={alt}
                    width={width ?? 110}
                    height={height ?? 24}
                    className={`${isGrayScale ? 'grayscale' : ''}  ${!darkModeImage && isGrayScale ? 'invert' : ''}`}
                />
            </div>
        </div>
    );
};