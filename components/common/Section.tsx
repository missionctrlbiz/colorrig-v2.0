
import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    dark?: boolean;
}

export default function Section({ id, className = "", children, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${dark ? 'bg-gray-50' : 'bg-white'} ${className}`}
        >
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
}
