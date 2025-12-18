// components/GridBackground.tsx
import React from 'react';
import type { GridBackgroundProps } from '@/types/ComponentTypes';

export const GridBackground: React.FC<GridBackgroundProps> = ({
    children,
    className = '',
    gridSize = 80,
    showFade = true,
    gridBlocks = [],
}) => {
    return (
        <div className={`grid-background ${className}`}>
            <div
                className="grid-pattern"
                style={{
                    backgroundSize: `${gridSize}px ${gridSize}px`,
                }}
            />

            {/* Render grid blocks */}
            {gridBlocks.map((block, index) => (
                <div
                    key={index}
                    className={`grid-block grid-block-${block.opacity}`}
                    style={{
                        left: `${block.col * gridSize}px`,
                        top: `${block.row * gridSize}px`,
                        width: `${block.width * gridSize}px`,
                        height: `${block.height * gridSize}px`,
                    }}
                />
            ))}

            {showFade && <div className="grid-fade" />}
            {children}
        </div>
    );
};

export default GridBackground;