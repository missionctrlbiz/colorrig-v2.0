
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
    title: string;
    category: string;
    image: string;
    slug: string;
}

export default function PortfolioCard({ title, category, image, slug }: PortfolioCardProps) {
    return (
        <Link href={`/portfolio/${slug}`} className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-video">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-sm font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{category}</span>
                    <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{title}</h3>
                </div>
            </div>
        </Link>
    );
}
