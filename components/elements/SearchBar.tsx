'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
            setQuery('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative hidden lg:flex items-center"
        >
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isFocused
                    ? 'bg-white border-2 border-primary'
                    : 'bg-white/20 border-2 border-white/30 hover:bg-white/30'
                }`}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search Colorrig Limited..."
                    className="bg-transparent text-sm focus:outline-none w-48 text-gray-700 placeholder-gray-500"
                />
                <button
                    type="submit"
                    aria-label="Search"
                    className="text-primary hover:text-primary/80 transition-colors"
                >
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </form>
    );
}
