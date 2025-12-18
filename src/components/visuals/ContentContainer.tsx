import React from 'react';
import type { ContentContainerProps } from '@/types/ComponentTypes';


export const ContentContainer: React.FC<ContentContainerProps> = ({
    children,
    className = '',
    withBackgroundFade = true,
}) => {
    return (
        <div className={`content-container ${withBackgroundFade ? 'with-fade' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default ContentContainer;