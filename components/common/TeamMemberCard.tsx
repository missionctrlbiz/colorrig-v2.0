
import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
    name: string;
    role: string;
    image: string;
    bio?: string;
    socials?: {
        platform: string;
        url: string;
    }[];
}

export default function TeamMemberCard({ name, role, image, bio, socials }: TeamMemberCardProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {socials && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-center space-x-4">
                            {socials.map((social) => (
                                <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                                    <i className={`fab fa-${social.platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-secondary mb-1">{name}</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">{role}</p>
                {bio && <p className="text-gray-500 text-sm line-clamp-3">{bio}</p>}
            </div>
        </div>
    );
}
