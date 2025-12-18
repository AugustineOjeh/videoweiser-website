// components/ui/Button.tsx
import { ButtonProps } from '@/types/ComponentTypes';
import Link from 'next/link';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

// Primary Button
export const PrimaryButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    href,
}) => {
    const baseClasses = 'primary-button';
    const classes = `${baseClasses} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes} children={<p>{label}</p>} />
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {<p>{label}</p>}
        </button>
    );
};

// Secondary Button
export const TextButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    href,
}) => {
    const baseClasses = 'text-button gap-1';
    const classes = `${baseClasses} ${className}`;


    if (href) {
        return (
            <div>
                <Link href={href} className={classes} >
                    <span>{label}</span>

                    <IoArrowForwardOutline
                        fontSize={18}
                        aria-hidden
                    />
                </Link>
            </div>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            <span>{label}</span>

            <IoArrowForwardOutline
                fontSize={18}
                aria-hidden
            />
        </button>
    );
};

export default { PrimaryButton, TextButton };