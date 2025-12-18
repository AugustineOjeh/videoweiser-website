
// Centralized type definitions for all components

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

export interface ContentContainerProps {
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