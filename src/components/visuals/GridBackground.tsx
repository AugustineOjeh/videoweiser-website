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
                        left: `${(block.col * gridSize) + 1}px`,
                        top: `${(block.row * gridSize) + 1}px`,
                        width: `${(block.width * gridSize) - 1}px`,
                        height: `${(block.height * gridSize) - 1}px`,
                    }}
                />
            ))}

            {showFade && <div className="grid-fade" />}
            {children}
        </div>
    );
};

export default GridBackground;