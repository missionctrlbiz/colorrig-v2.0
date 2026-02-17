import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"

const solutions = [
    {
        icon: "fa-solid fa-video",
        title: "Live Streaming",
        description: "Professional multi-platform live streaming to YouTube, Instagram, LinkedIn and more. We handle the technical complexities so you can focus on your audience.",
        features: ["Multi-Camera Setup", "Real-time Graphics", "Platform Simulcast", "Audience Analytics"]
    },
    {
        icon: "fa-solid fa-clapperboard",
        title: "Video Production",
        description: "End-to-end video production services from concept to delivery. Our team creates compelling visual content that tells your story with impact.",
        features: ["Corporate Videos", "Event Coverage", "Post-Production", "Color Grading"]
    },
    {
        icon: "fa-solid fa-satellite-dish",
        title: "Broadcast Solutions",
        description: "Enterprise-grade broadcast infrastructure for large-scale events. We deploy cutting-edge equipment for flawless signal distribution.",
        features: ["OB Van Deployment", "Signal Distribution", "Satellite Uplink", "Redundant Systems"]
    },
    {
        icon: "fa-solid fa-display",
        title: "LED & Display",
        description: "High-resolution LED walls and display solutions for events of any scale. Transform your venue with stunning visual experiences.",
        features: ["Indoor/Outdoor LED", "Video Walls", "Stage Design", "Content Management"]
    },
    {
        icon: "fa-solid fa-headset",
        title: "Hybrid Events",
        description: "Seamlessly blend physical and virtual audiences with our hybrid event solutions. Engage attendees wherever they are in the world.",
        features: ["Virtual Platforms", "Audience Engagement", "Q&A Integration", "Global Reach"]
    },
    {
        icon: "fa-solid fa-microphone-lines",
        title: "Audio & Lighting",
        description: "Professional audio reinforcement and lighting design to create the perfect atmosphere for your event or production.",
        features: ["PA Systems", "Stage Lighting", "Audio Mixing", "Ambiance Design"]
    }
]

export default function Solutions() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Our Solutions" breadcrumb="Solutions" />

                    {/* Solutions Intro Section */}
                    <div className="about2-section-area sp1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-images-area">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="img1 image-anime reveal">
                                                    <img src="/images/colorrig-1.jpg" alt="Colorrig Solutions" style={{ borderRadius: '10px' }} />
                                                </div>
                                                <div className="space24 d-md-none d-block" />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="img1 image-anime reveal">
                                                    <img src="/images/colorrig-2.jpg" alt="Professional Equipment" style={{ borderRadius: '10px' }} />
                                                </div>
                                                <div className="space24" />
                                                <div className="img1 image-anime reveal">
                                                    <img src="/images/colorrig-3.jpg" alt="Live Production" style={{ borderRadius: '10px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1" />
                                <div className="col-lg-5">
                                    <div className="about2-header heading4">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>What We Do</h5>
                                        <div className="space18" />
                                        <h2 className="text-anime-style-3">Comprehensive Media & Broadcast Solutions</h2>
                                        <div className="space16" />
                                        <p data-aos="fade-left" data-aos-duration={900}>At Colorrig Limited, we provide cutting-edge broadcast and media production services tailored to your unique needs. From intimate corporate events to large-scale productions, our team delivers excellence at every level.</p>
                                        <div className="others-boxarea" data-aos="fade-left" data-aos-duration={1000}>
                                            <div className="icons-box">
                                                <div className="icons">
                                                    <i className="fa-solid fa-trophy" style={{ color: '#00bcd4', fontSize: '24px' }} />
                                                </div>
                                                <p><span style={{ fontWeight: 700, fontSize: '28px' }}>200+</span> Events Delivered</p>
                                            </div>
                                            <div className="icons-box">
                                                <div className="icons">
                                                    <i className="fa-solid fa-users" style={{ color: '#00bcd4', fontSize: '24px' }} />
                                                </div>
                                                <p><span style={{ fontWeight: 700, fontSize: '28px' }}>50+</span> Trusted Clients</p>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
                                            <Link href="/contact" className="vl-btn2"><span className="demo">Get a Quote</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Grid Section */}
                    <div className="service2-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading4 text-center space-margin60">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>Our Services</h5>
                                        <div className="space18" />
                                        <h2 className="text-anime-style-3">End-to-End Solutions for Your Events</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {solutions.map((solution, index) => (
                                    <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={800 + (index * 100)}>
                                        <div className="pricing-boxarea" style={{ marginBottom: '30px', padding: '30px', minHeight: '380px', display: 'flex', flexDirection: 'column' }}>
                                            <div className="ticket-box" style={{ flex: 1 }}>
                                                <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(116, 251, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                                    <i className={solution.icon} style={{ fontSize: '40px', color: '#00bcd4' }} />
                                                </div>
                                                <h3>{solution.title}</h3>
                                                <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>{solution.description}</p>
                                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                    {solution.features.map((feature, i) => (
                                                        <li key={i} style={{ padding: '6px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                            <i className="fa-solid fa-check" style={{ color: '#00bcd4', fontSize: '18px' }} />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="space24" />
                                                <div className="btn-area1">
                                                    <Link href="/contact" className="vl-btn2"><span className="demo">Learn More</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* LiveU Solutions Section */}
                    <div id="liveu" className="about1-section-area sp1" style={{ backgroundColor: 'var(--ztc-bg-bg-1)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-images-area">
                                        <div className="img1 image-anime reveal">
                                            <img
                                                src="/images/colorrig-20.jpg"
                                                alt="LiveU Portable Broadcasting Solutions"
                                                style={{
                                                    width: '100%',
                                                    borderRadius: '12px',
                                                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about1-textarea heading2" style={{ paddingLeft: '40px' }}>
                                        <h5 data-aos="fade-up" data-aos-duration={800} style={{ color: '#00bcd4', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>LiveU Solutions</h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3" style={{ fontSize: '42px', lineHeight: '1.2', marginBottom: '20px' }}>
                                            Broadcast From Anywhere. Stream Everywhere.
                                        </h2>
                                        <div className="space16" />
                                        <p style={{ fontSize: '17px', lineHeight: '1.8', marginBottom: '24px', color: '#555' }}>
                                            Colorrig Limited is a certified LiveU partner, bringing you the world's most advanced portable live video transmission technology. With LiveU, we enable reliable, broadcast-quality live streaming from virtually any location using bonded cellular connectivity—perfect for outdoor events, remote locations, on-the-go reporting, and mobile broadcasts.
                                        </p>

                                        {/* Benefits Grid */}
                                        <div className="row" style={{ marginBottom: '32px' }}>
                                            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={900}>
                                                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(116, 251, 254, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <i className="fa-solid fa-signal" style={{ fontSize: '22px', color: '#00bcd4' }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>Bonded Cellular</h5>
                                                        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Multiple network aggregation for ultra-reliable connectivity</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                                                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(116, 251, 254, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <i className="fa-solid fa-video" style={{ fontSize: '22px', color: '#00bcd4' }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>Broadcast Quality</h5>
                                                        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Professional HD/4K video quality for your live streams</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1100}>
                                                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(116, 251, 254, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <i className="fa-solid fa-location-dot" style={{ fontSize: '22px', color: '#00bcd4' }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>Anywhere Coverage</h5>
                                                        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Stream from remote locations, stadiums, or moving vehicles</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                                                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(116, 251, 254, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <i className="fa-solid fa-shield-halved" style={{ fontSize: '22px', color: '#00bcd4' }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>Redundant Systems</h5>
                                                        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Built-in redundancy ensures uninterrupted broadcasting</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1300}>
                                                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(116, 251, 254, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <i className="fa-solid fa-gauge-high" style={{ fontSize: '22px', color: '#00bcd4' }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>Low Latency</h5>
                                                        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Minimal delay for real-time audience interaction</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                                                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(116, 251, 254, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <i className="fa-solid fa-briefcase" style={{ fontSize: '22px', color: '#00bcd4' }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>Portable Solutions</h5>
                                                        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Compact, lightweight units for maximum mobility</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact & CTA */}
                                        <div className="space24" />
                                        <div style={{
                                            background: 'rgba(116, 251, 254, 0.05)',
                                            padding: '24px',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(116, 251, 254, 0.2)',
                                            marginBottom: '24px'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                                <i className="fa-solid fa-phone" style={{ fontSize: '20px', color: '#00bcd4' }} />
                                                <div>
                                                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Talk to a LiveU Specialist</p>
                                                    <a href="tel:+2349060157919" style={{ fontSize: '18px', fontWeight: '700', color: '#070327' }}>+234 906 015 7919</a>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <i className="fa-solid fa-envelope" style={{ fontSize: '20px', color: '#00bcd4' }} />
                                                <div>
                                                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Email Us</p>
                                                    <a href="mailto:info@colorrig.com" style={{ fontSize: '18px', fontWeight: '700', color: '#070327' }}>info@colorrig.com</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btn-area1" data-aos="fade-up" data-aos-duration={1500}>
                                            <Link href="/contact" className="vl-btn1">Request LiveU Demo
                                                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section - index7 style */}
                    <div className="cta7-section-area" style={{ paddingBottom: '80px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta7-bg-area" style={{ backgroundImage: 'url(/images/Slide.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
                                        {/* Dark blue overlay 70% */}
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(7, 3, 39, 0.7)', borderRadius: 'inherit', zIndex: 1 }} />
                                        <div className="row" style={{ position: 'relative', zIndex: 2 }}>
                                            <div className="col-lg-7 m-auto">
                                                <div className="cta-heading text-center">
                                                    <h2 style={{ color: '#fff' }}>Ready to Elevate Your Event?</h2>
                                                    <div className="space16" />
                                                    <p style={{ color: 'rgba(255,255,255,0.85)' }}>Let us bring your vision to life with our professional broadcast and media production services.</p>
                                                    <div className="space32" />
                                                    <div className="btn-area1">
                                                        <Link href="/contact" className="vl-btn7">Get a Quote <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
