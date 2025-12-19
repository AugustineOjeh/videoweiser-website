import React from 'react';
import type { BackgroundFadeProps } from '@/types/ComponentTypes';


export const BackgroundFade: React.FC<BackgroundFadeProps> = ({
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

export default BackgroundFade;