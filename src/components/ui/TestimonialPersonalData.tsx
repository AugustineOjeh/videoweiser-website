import { TestimonialData } from '@/types/ComponentTypes';
import Image from 'next/image';
import React from 'react';
import Text from './Text';

interface _Props {
    className?: string;
    data: TestimonialData;
    showLogo?: boolean;
}

export const TestimonialPersonalDataCard: React.FC<_Props> = ({
    data,
    className = '',
    showLogo = false,
}) => {
    const classes = `${className}`;
    return (
        <div className="flex space-x-[12px] items-center">
            <Image
                className='rounded-full'
                src={data.image.url}
                alt={data.image.alt}
                height={32}
                width={32} />

            <div className='flex flex-col'>
                <Text.Body.Small className='font-bold' text={data.fullName} />
                <Text.Label.Medium text={`${data.position} at ${data.company?.name ?? 'Client Company'}`} />
            </div>
        </div>
    );
};

export default TestimonialPersonalDataCard;