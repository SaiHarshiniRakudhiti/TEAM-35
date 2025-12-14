import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}) {
    const variants = {
        primary: 'bg-primary text-white hover:opacity-90 shadow-md',
        secondary: 'bg-accent text-primary hover:bg-opacity-80',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'text-primary hover:bg-primary/5',
        link: 'text-primary underline-offset-4 hover:underline p-0 h-auto'
    };

    const sizes = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10 p-2'
    };

    return (
        <button
            className={twMerge(
                'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
