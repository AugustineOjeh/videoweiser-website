
// Centralized type definitions for all components

import { ClientTestimonials } from "@/core/constants";

export interface GridBlock {
    row: number;
    col: number;
    width: number;
    height: number;
    opacity: 15 | 20 | 25 | 50;
}

export interface GridBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    gridSize?: number;
    showFade?: boolean;
    gridBlocks?: GridBlock[];
}

export interface BackgroundFadeProps {
    children: React.ReactNode;
    className?: string;
    withBackgroundFade?: boolean;
}

export interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowIntensity?: 'low' | 'medium' | 'high';
}

export interface SectionProps {
    children: React.ReactNode;
    className?: string;
    withGrid?: boolean;
    gridSize?: number;
    gridBlocks?: GridBlock[];
    id?: string;
}

// Theme type for CSS variables
export type ThemeMode = 'light' | 'dark';

export interface GridThemeColors {
    gridLineColor: string;
    gridFadeStart: string;
    gridFadeEnd: string;
    contentFadeBg: string;
    glowColorLow: string;
    glowColorMedium: string;
    glowColorHigh: string;
    cardBorderColor: string;
}

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
}

export interface ClientLogo {
    name: string;
    website?: string;
    light?: string;
    dark?: string;
    alt?: string;
}

export interface TestimonialData {
    fullName: string;
    image: {
        url: string;
        alt: string;
    };
    position: string;
    company?: ClientLogo;
    client?: ClientLogo;
    caseStudy: {
        url?: string;
    };
    testimonial: string;
}

// Type helper to extract values from const object
export type ClientTestimonialKey = keyof typeof ClientTestimonials;
export type ClientTestimonialValue = typeof ClientTestimonials[ClientTestimonialKey];