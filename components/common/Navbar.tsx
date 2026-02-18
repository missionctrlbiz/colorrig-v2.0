
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SearchBar from "@/components/elements/SearchBar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "Our Solutions",
            href: "/solutions",
            dropdown: [
                { name: "Live Streaming Solutions", href: "/solutions#live-streaming" },
                { name: "Pricing and Packages", href: "/solutions#pricing" },
            ],
        },
        { name: "Our Portfolio", href: "/portfolio" },
        {
            name: "Our Resources",
            href: "/resources",
            dropdown: [
                { name: "FAQs", href: "/faq" },
                { name: "Careers", href: "/careers" },
            ],
        },
        { name: "The Live Link", href: "/blog" },
        { name: "About Us", href: "/about" },
        { name: "Get in Touch", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative h-10 w-40">
                    {/* Placeholder for Logo, will map to actual image later */}
                    <span className={`text-2xl font-bold ${scrolled ? 'text-secondary' : 'text-white'}`}>Colorrig</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-gray-800" : "text-white"
                                    } ${pathname === link.href ? "text-primary" : ""}`}
                            >
                                {link.name}
                            </Link>
                            {/* Dropdown */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-2">
                                    <div className="bg-white rounded-md overflow-hidden">
                                        {link.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-100 last:border-0"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Search Bar */}
                    <SearchBar />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-black' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-black' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-black' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    className="absolute top-6 right-6 text-white focus:outline-none"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close mobile menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col items-center">
                        <Link
                            href={link.href}
                            className="text-2xl font-bold text-white hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                        {link.dropdown && (
                            <div className="mt-4 flex flex-col items-center space-y-4">
                                {link.dropdown.map(sub => (
                                    <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="text-lg text-gray-400 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}
