
import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    link?: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
            <div className="mb-6 text-primary w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icon || (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )}
            </div>
            <h3 className="text-xl font-bold mb-4 text-secondary">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
            {link && (
                <Link href={link} className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            )}
        </div>
    );
}
