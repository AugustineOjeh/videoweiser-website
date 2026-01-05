"use client";
import React from 'react';
import Image from "next/image";
import { useTheme } from '@/core/contexts/ThemeContext';

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

  const { resolvedTheme } = useTheme();

  if (!lightModeImage && !darkModeImage) {
    throw new Error("An image URL must be provided");
  }

  const opacityValue = (opacity ?? 100) / 100;
  const isDark = resolvedTheme === 'dark';

  // Determine which image to show
  const imageToShow = isDark
    ? (darkModeImage ?? lightModeImage!)
    : (lightModeImage ?? darkModeImage!);

  // Determine if we need to invert (when falling back to opposite theme's image)
  const shouldInvert = isGrayScale && (
    (isDark && !darkModeImage) || (!isDark && !lightModeImage)
  );

  return (
    <div className={`client-logo-wrapper ${className}`} style={{ opacity: opacityValue }}>
      <Image
        src={imageToShow}
        alt={alt}
        width={width ?? 110}
        height={height ?? 24}
        className={`${isGrayScale ? 'grayscale' : ''} ${shouldInvert ? 'invert' : ''}`}
      />
    </div>
  );
};