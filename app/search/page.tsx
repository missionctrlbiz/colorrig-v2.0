'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { searchContent, SearchItem } from '@/app/searchData';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || searchParams.get('s') || '';
    const [results, setResults] = useState<SearchItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Force header to sticky state
        const style = document.createElement('style');
        style.innerHTML = `
      .header-area.homepage1.header.header-sticky {
        background: #070327 !important;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
      }
      .header-area.homepage1.header.header-sticky .site-logo img {
        filter: brightness(0) invert(1);
      }
    `;
        document.head.appendChild(style);

        setLoading(true);
        // Simulate a small delay for better UX
        const timer = setTimeout(() => {
            const searchResults = searchContent(query);
            setResults(searchResults);
            setLoading(false);
        }, 300);

        return () => {
            clearTimeout(timer);
            document.head.removeChild(style);
        };
    }, [query]);

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Search Results">
            <Breadcrumb breadcrumbTitle="Search Results" />

            <div className="blog1-section-area sp1" style={{ paddingTop: '150px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Title & Description */}
                            <div className="mb-4">
                                <h1 style={{ color: '#070327', fontSize: '36px', fontWeight: 'bold', marginBottom: '12px' }}>
                                    Search Colorrig Limited
                                </h1>
                                <p style={{ color: '#666', fontSize: '16px', marginBottom: '0' }}>
                                    Find information about our live streaming solutions, portfolio, team, and resources
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="mb-4">
                                <form
                                    action="/search"
                                    method="GET"
                                    className="d-flex gap-2"
                                >
                                    <input
                                        type="text"
                                        name="q"
                                        defaultValue={query}
                                        placeholder="Search Colorrig Limited..."
                                        className="form-control"
                                        style={{
                                            padding: '16px 24px',
                                            border: '2px solid #e0e0e0',
                                            borderRadius: '10px',
                                            fontSize: '16px'
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        className="vl-btn1"
                                        style={{ padding: '16px 32px' }}
                                    >
                                        Search
                                    </button>
                                </form>
                            </div>

                            {/* Results Header */}
                            {!loading && (
                                <div className="mb-4">
                                    <p style={{ fontSize: '18px', color: '#666' }}>
                                        {query ? (
                                            <>
                                                {results.length > 0 ? (
                                                    <>Found <span style={{ fontWeight: 'bold', color: '#00bcd4' }}>{results.length}</span> result{results.length !== 1 ? 's' : ''} for "{query}"</>
                                                ) : (
                                                    <>No results found for "{query}"</>
                                                )}
                                            </>
                                        ) : (
                                            'Enter a search term above'
                                        )}
                                    </p>
                                </div>
                            )}

                            {/* Results */}
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status" style={{ color: '#00bcd4' }}>
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-3" style={{ color: '#666' }}>Searching...</p>
                                </div>
                            ) : results.length > 0 ? (
                                <div className="row g-4">
                                    {results.map((item) => (
                                        <div key={item.id} className="col-lg-12">
                                            <Link
                                                href={item.url}
                                                className="d-block p-4"
                                                style={{
                                                    background: '#fff',
                                                    border: '2px solid #e0e0e0',
                                                    borderRadius: '12px',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = '#00bcd4';
                                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,188,212,0.15)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = '#e0e0e0';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                            >
                                                <div className="d-flex justify-content-between align-items-start mb-3">
                                                    <div>
                                                        <h3 style={{ color: '#070327', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
                                                            {item.title}
                                                        </h3>
                                                        <span
                                                            style={{
                                                                display: 'inline-block',
                                                                padding: '4px 12px',
                                                                background: 'rgba(0, 188, 212, 0.1)',
                                                                color: '#00bcd4',
                                                                fontSize: '13px',
                                                                fontWeight: '600',
                                                                borderRadius: '20px'
                                                            }}
                                                        >
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <i className="fa-solid fa-arrow-right" style={{ color: '#00bcd4', fontSize: '20px' }} />
                                                </div>
                                                <p style={{ color: '#666', fontSize: '16px', marginBottom: '12px' }}>
                                                    {item.description}
                                                </p>
                                                <p style={{ color: '#999', fontSize: '14px', marginBottom: 0 }}>
                                                    {item.content}
                                                </p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-5">
                                    <i className="fa-solid fa-magnifying-glass mb-4" style={{ fontSize: '60px', color: '#e0e0e0' }} />
                                    <h3 style={{ color: '#070327', fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
                                        {query ? 'No results found' : 'No search query'}
                                    </h3>
                                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '24px' }}>
                                        {query
                                            ? `We could not find anything matching "${query}". Try different keywords.`
                                            : 'Enter a search term above to find what you are looking for.'}
                                    </p>
                                    <Link href="/" className="vl-btn1">
                                        <span className="demo">Back to Home</span>
                                        <span className="arrow"><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
