
import React from 'react';
import Image from 'next/image';

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    children?: React.ReactNode;
    height?: string;
}

export default function Hero({ title, subtitle, backgroundImage, children, height = "h-[60vh]" }: HeroProps) {
    return (
        <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                {backgroundImage ? (
                    <Image
                        src={backgroundImage}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="bg-secondary w-full h-full"></div>
                )}
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                        {subtitle}
                    </p>
                )}
                <div className="animate-fade-in-up delay-200">
                    {children}
                </div>
            </div>
        </section>
    );
}
