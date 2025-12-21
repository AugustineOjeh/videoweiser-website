// components/Section.tsx
import React from 'react';
import GridBackground from './GridBackground';
import type { SectionProps } from '@/types/ComponentTypes';


export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  withGrid = true,
  gridSize = 80,
  gridBlocks = [],
  id,
}) => {
  const content = (
    <section id={id} className={`section scroll-smooth ${className}`}>
      {children}
    </section>
  );

  if (withGrid) {
    return (
      <GridBackground gridSize={gridSize} gridBlocks={gridBlocks} >
        {content}
      </GridBackground>
    );
  }

  return content;
};

export default Section;