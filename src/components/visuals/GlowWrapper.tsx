// components/ui/GlowWrapper.tsx
import React from 'react';

interface GlowWrapperProps {
    children: React.ReactNode;
    glowColor?: string; // CSS color value
    glowIntensity?: 'low' | 'medium' | 'high' | 'ultra';
    glowSize?: number; // Size of the glow in pixels
    className?: string;
}

export const GlowWrapper: React.FC<GlowWrapperProps> = ({
    children,
    glowColor,
    glowIntensity = 'medium',
    glowSize = 200,
    className = '',
}) => {
    // Map intensity to opacity values
    const intensityMap = {
        low: 0.3,
        medium: 0.5,
        high: 0.7,
        ultra: 0.9,
    };

    const opacity = intensityMap[glowIntensity];

    return (
        <div className={`glow-wrapper ${className}`} style={{ position: 'relative' }}>
            {/* Glow effect layer */}
            <div
                className="glow-effect-layer"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: `${glowSize}%`,
                    height: `${glowSize}%`,
                    background: glowColor
                        ? glowColor
                        : 'var(--bg-glow)',
                    opacity: opacity,
                    filter: 'blur(80px)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: -1,
                }}
            />

            {/* Content layer */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default GlowWrapper;