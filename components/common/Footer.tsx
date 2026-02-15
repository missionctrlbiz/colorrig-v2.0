
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold text-white">Colorrig</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Where Excellence Meets Live Transmission. Delivering unparalleled High Definition Live streaming and broadcast solutions.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-primary transition-colors">Our Portfolio</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">The Live Link</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Get in Touch</Link></li>
                        </ul>
                    </div>

                    {/* Our Solutions */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Our Solutions</h4>
                        <ul className="space-y-3">
                            <li><Link href="/solutions#live-streaming" className="text-gray-400 hover:text-primary transition-colors">Live Streaming</Link></li>
                            <li><Link href="/solutions#video-production" className="text-gray-400 hover:text-primary transition-colors">Video Production</Link></li>
                            <li><Link href="/solutions#hybrid-studio" className="text-gray-400 hover:text-primary transition-colors">Hybrid Live Studio</Link></li>
                            <li><Link href="/solutions#equipment" className="text-gray-400 hover:text-primary transition-colors">Equipment Rentals</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400">2, Kudirat Soule Street. Ifako. Ogba. Lagos.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-400">+234 906 015 7919</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-400">info@colorrig.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-secondary">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Colorrig Limited. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white text-sm">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
