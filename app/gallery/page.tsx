'use client'

import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'

export default function Gallery() {
    const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string, title: string } | null>(null)
    const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all')

    // Gallery items - all your project images and videos
    const galleryItems = [
        // Videos
        { type: 'video' as const, src: '/images/Access-Bank-Lagos-City-Marathon-2020.mp4', title: 'Access Bank Lagos City Marathon 2020', thumbnail: '/images/Access-Bank-Thumbnail.png' },
        { type: 'video' as const, src: '/images/Colorig.mp4', title: 'Colorrig Showreel', thumbnail: '/images/Colorig-Cover.jpg' },
        { type: 'video' as const, src: '/images/adzinga-.mp4', title: 'Adzinga Media Event', thumbnail: '/images/Adzinga-Media-Thumbnail.png' },
        { type: 'video' as const, src: '/images/JOINAF1.mp4', title: 'JOINAF Event Coverage', thumbnail: '/images/colorrig-3.jpg' },
        { type: 'video' as const, src: '/images/29-2017_18-Convocation-Day-2-Morning-Session-YouTube-Google-Chrome-2023-06-08-16-45-19.mp4', title: 'UNILAG Convocation 2017/18', thumbnail: '/images/Unilag-Thumbnail.png' },
        { type: 'video' as const, src: '/images/29-AFF-DISRUPT-2019-CONFERENCE-1ST-SESSION-YouTube-Google-Chrome-2023-06-08-16-43-43.mp4', title: 'AFF Disrupt 2019 Conference', thumbnail: '/images/Africa-Fintech-Foundry-Thumbnail.png' },

        // Event Photos
        { type: 'image' as const, src: '/images/colorrig-1.jpg', title: 'Live Event Production' },
        { type: 'image' as const, src: '/images/colorrig-2.jpg', title: 'Professional Streaming Setup' },
        { type: 'image' as const, src: '/images/colorrig-3.jpg', title: 'Multi-Camera Production' },
        { type: 'image' as const, src: '/images/colorrig-6.jpg', title: 'Colorrig Team at Work' },
        { type: 'image' as const, src: '/images/colorrig-7.jpg', title: 'Live Streaming Setup' },
        { type: 'image' as const, src: '/images/colorrig-8.jpg', title: 'Broadcast Equipment' },
        { type: 'image' as const, src: '/images/colorrig-9.jpg', title: 'Event Coverage' },
        { type: 'image' as const, src: '/images/colorrig-11.jpg', title: 'Behind the Scenes' },
        { type: 'image' as const, src: '/images/colorrig-14.jpg', title: 'Production Team' },
        { type: 'image' as const, src: '/images/colorrig-17.jpg', title: 'Live Event Streaming' },
        { type: 'image' as const, src: '/images/colorrig-19.jpg', title: 'Technical Setup' },
        { type: 'image' as const, src: '/images/colorrig-20.jpg', title: 'Event Production' },
        { type: 'image' as const, src: '/images/colorrig-24.jpg', title: 'Broadcast Operations' },

        // Studio & Equipment
        { type: 'image' as const, src: '/images/livestudio-1.jpeg', title: 'Hybrid Live Studio' },
        { type: 'image' as const, src: '/images/livestudio.jpeg', title: 'Studio Setup' },
        { type: 'image' as const, src: '/images/LiveU Device.jpg', title: 'LiveU Broadcasting Equipment' },
        { type: 'image' as const, src: '/images/Adzinga-Media-Booth.jpeg', title: 'Adzinga Media Booth' },

        // Major Events Coverage
        { type: 'image' as const, src: '/images/SMWLagos.jpg', title: 'Social Media Week Lagos' },
        { type: 'image' as const, src: '/images/SMWLagos (1).jpg', title: 'Social Media Week - Panel Discussion' },
        { type: 'image' as const, src: '/images/SMWLagos (2).jpg', title: 'Social Media Week - Keynote' },
        { type: 'image' as const, src: '/images/SMWLagos (3).jpg', title: 'Social Media Week - Networking' },
        { type: 'image' as const, src: '/images/SMWLagos (4).jpg', title: 'Social Media Week - Main Stage' },

        { type: 'image' as const, src: '/images/Felabration 2017.jpg', title: 'Felabration 2017' },
        { type: 'image' as const, src: '/images/UNILAG-50th.jpg', title: 'UNILAG 50th Anniversary' },
        { type: 'image' as const, src: '/images/Unilag Covocation.jpg', title: 'UNILAG Convocation Ceremony' },
        { type: 'image' as const, src: '/images/She-Speaks.jpg', title: 'She Speaks Conference' },
        { type: 'image' as const, src: '/images/ADSC-2019.jpg', title: 'African Digital Sport Conference 2019' },
        { type: 'image' as const, src: '/images/African Digital Sport Conference.jpg', title: 'ADSC Event Coverage' },
        { type: 'image' as const, src: '/images/First-Bank-Awards.jpg', title: 'First Bank Awards Ceremony' },
        { type: 'image' as const, src: '/images/First-Bank-Awards (2).jpg', title: 'First Bank Awards Night' },
        { type: 'image' as const, src: '/images/Governor Sanwo-Olu Xmas.jpg', title: 'Governor Sanwo-Olu Christmas Event' },

        // Private School Games
        { type: 'image' as const, src: '/images/PSG-U-11-2023-2-Medium.jpg', title: 'Private School Games 2023 - Opening' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-3-Medium.jpg', title: 'Private School Games 2023 - Competition' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-4-Medium.jpg', title: 'Private School Games 2023 - Action' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-5-Medium.jpg', title: 'Private School Games 2023 - Athletes' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-6-Medium.jpg', title: 'Private School Games 2023 - Crowd' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-7-Medium.jpg', title: 'Private School Games 2023 - Ceremony' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-8-Medium.jpg', title: 'Private School Games 2023 - Team Spirit' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-9-Medium.jpg', title: 'Private School Games 2023 - Victory' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-10-Medium.jpg', title: 'Private School Games 2023 - Broadcast' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-11-Medium.jpg', title: 'Private School Games 2023 - Finals' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-12-Medium.jpg', title: 'Private School Games 2023 - Awards' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-13-Medium.jpg', title: 'Private School Games 2023 - Celebration' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-14-Medium.jpg', title: 'Private School Games 2023 - Champions' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-15-Medium.jpg', title: 'Private School Games 2023 - Highlights' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-16-Medium.jpg', title: 'Private School Games 2023 - Closing' },
        { type: 'image' as const, src: '/images/PSG-U-11-2023-17-Medium.jpg', title: 'Private School Games 2023 - Team Photo' },

        // Zing Network Event
        { type: 'image' as const, src: '/images/zing-1-Medium.png', title: 'Zing Network Event - Opening' },
        { type: 'image' as const, src: '/images/zing-2-Medium.png', title: 'Zing Network Event - Panel' },
        { type: 'image' as const, src: '/images/zing-3-Medium.png', title: 'Zing Network Event - Speakers' },
        { type: 'image' as const, src: '/images/zing-4-Medium.png', title: 'Zing Network Event - Networking' },
        { type: 'image' as const, src: '/images/zing-5-Medium.png', title: 'Zing Network Event - Presentation' },
        { type: 'image' as const, src: '/images/zing-6-Medium.png', title: 'Zing Network Event - Audience' },
        { type: 'image' as const, src: '/images/zing-7-Medium.png', title: 'Zing Network Event - Workshop' },
        { type: 'image' as const, src: '/images/zing-8-Medium.png', title: 'Zing Network Event - Interactive Session' },
        { type: 'image' as const, src: '/images/zing-9-Medium.png', title: 'Zing Network Event - Discussion' },
        { type: 'image' as const, src: '/images/zing-10-Medium.png', title: 'Zing Network Event - Q&A' },
        { type: 'image' as const, src: '/images/zing-11-Medium.png', title: 'Zing Network Event - Keynote' },
        { type: 'image' as const, src: '/images/zing-12-Medium.png', title: 'Zing Network Event - Stage Setup' },
        { type: 'image' as const, src: '/images/zing-13-Medium.png', title: 'Zing Network Event - Broadcasting' },
        { type: 'image' as const, src: '/images/zing-14-Medium.png', title: 'Zing Network Event - Coverage' },
        { type: 'image' as const, src: '/images/zing-15-Medium.png', title: 'Zing Network Event - Production' },
        { type: 'image' as const, src: '/images/zing-16-Medium.png', title: 'Zing Network Event - Live Stream' },
        { type: 'image' as const, src: '/images/zing-17-Medium.png', title: 'Zing Network Event - Technical Team' },
        { type: 'image' as const, src: '/images/zing-18-Medium.png', title: 'Zing Network Event - Behind Scenes' },
        { type: 'image' as const, src: '/images/zing-19-Medium.jpg', title: 'Zing Network Event - Highlights' },
        { type: 'image' as const, src: '/images/zing-20-Medium.jpg', title: 'Zing Network Event - Wrap Up' },
        { type: 'image' as const, src: '/images/zing-21-Medium.jpeg', title: 'Zing Network Event - Closing' },
    ]

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => filter === 'videos' ? item.type === 'video' : item.type === 'image')

    const closeLightbox = () => {
        setSelectedMedia(null)
        document.body.style.overflow = 'unset'
    }

    const openLightbox = (item: typeof galleryItems[0]) => {
        setSelectedMedia({
            type: item.type,
            src: item.src,
            title: item.title
        })
        document.body.style.overflow = 'hidden'
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Gallery" breadcrumb="Gallery" />

                    <div className="sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Our Work in Action</h2>
                                        <div className="space16" />
                                        <p>Explore our portfolio of live streaming events, broadcast productions, and memorable moments captured across major events in Nigeria and beyond.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Filter Buttons */}
                            <div className="row mb-4">
                                <div className="col-lg-12 text-center">
                                    <button
                                        className={`vl-btn2 mx-2 ${filter === 'all' ? 'active' : ''}`}
                                        onClick={() => setFilter('all')}
                                        style={{
                                            background: filter === 'all' ? '#00bcd4' : 'transparent',
                                            color: filter === 'all' ? '#070327' : '#070327',
                                            border: '1px solid #00bcd4',
                                            padding: '12px 24px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        All ({galleryItems.length})
                                    </button>
                                    <button
                                        className={`vl-btn2 mx-2 ${filter === 'images' ? 'active' : ''}`}
                                        onClick={() => setFilter('images')}
                                        style={{
                                            background: filter === 'images' ? '#00bcd4' : 'transparent',
                                            color: filter === 'images' ? '#070327' : '#070327',
                                            border: '1px solid #00bcd4',
                                            padding: '12px 24px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        Photos ({galleryItems.filter(i => i.type === 'image').length})
                                    </button>
                                    <button
                                        className={`vl-btn2 mx-2 ${filter === 'videos' ? 'active' : ''}`}
                                        onClick={() => setFilter('videos')}
                                        style={{
                                            background: filter === 'videos' ? '#00bcd4' : 'transparent',
                                            color: filter === 'videos' ? '#070327' : '#070327',
                                            border: '1px solid #00bcd4',
                                            padding: '12px 24px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        Videos ({galleryItems.filter(i => i.type === 'video').length})
                                    </button>
                                </div>
                            </div>

                            {/* Gallery Grid */}
                            <div className="row g-4">
                                {filteredItems.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={800 + (index % 3) * 200}>
                                        <div
                                            className="gallery-item"
                                            onClick={() => openLightbox(item)}
                                            style={{
                                                position: 'relative',
                                                cursor: 'pointer',
                                                overflow: 'hidden',
                                                borderRadius: '12px',
                                                aspectRatio: '4/3',
                                                background: '#f5f5f5'
                                            }}
                                        >
                                            <img
                                                src={'thumbnail' in item ? item.thumbnail : item.src}
                                                alt={item.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                            <div
                                                className="gallery-overlay"
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(to bottom, transparent 50%, rgba(7, 3, 39, 0.8) 100%)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-end',
                                                    padding: '20px',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                                            >
                                                <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                                                    {item.title}
                                                </h5>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <i className={`fa-solid ${item.type === 'video' ? 'fa-play-circle' : 'fa-image'}`} style={{ color: '#00bcd4', fontSize: '16px' }} />
                                                    <span style={{ color: '#00bcd4', fontSize: '14px', fontWeight: '600' }}>
                                                        {item.type === 'video' ? 'Play Video' : 'View Image'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Lightbox Modal */}
                    {selectedMedia && (
                        <div
                            className="lightbox-overlay"
                            onClick={closeLightbox}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(7, 3, 39, 0.95)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 9999,
                                padding: '20px'
                            }}
                        >
                            <button
                                onClick={closeLightbox}
                                style={{
                                    position: 'absolute',
                                    top: '30px',
                                    right: '30px',
                                    background: '#00bcd4',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10000,
                                    fontSize: '24px',
                                    color: '#070327',
                                    fontWeight: 'bold'
                                }}
                            >
                                ×
                            </button>

                            <div
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    maxWidth: '90vw',
                                    maxHeight: '90vh',
                                    position: 'relative'
                                }}
                            >
                                {selectedMedia.type === 'video' ? (
                                    <video
                                        controls
                                        autoPlay
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '85vh',
                                            borderRadius: '12px'
                                        }}
                                    >
                                        <source src={selectedMedia.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img
                                        src={selectedMedia.src}
                                        alt={selectedMedia.title}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '85vh',
                                            borderRadius: '12px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                )}
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: '20px',
                                    color: '#ffffff',
                                    fontSize: '18px',
                                    fontWeight: '600'
                                }}>
                                    {selectedMedia.title}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    )
}
