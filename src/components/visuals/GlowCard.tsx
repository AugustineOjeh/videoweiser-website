
import React from 'react';
import type { GlowCardProps } from '@/types/ComponentTypes';

export const GlowCard: React.FC<GlowCardProps> = ({
    children,
    className = '',
    glowIntensity = 'medium',
}) => {
    return (
        <div className={`glow-card glow-${glowIntensity} ${className}`}>
            <div className="glow-effect" />
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default GlowCard;