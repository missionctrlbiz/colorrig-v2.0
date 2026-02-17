'use client'

import CountUp from 'react-countup'
import Layout from "@/components/layout/Layout"
import Section7 from '@/components/sections/home1/section7'
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"

export default function About() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="About Us" breadcrumb="About Us" />

                    <div className="about1-section-area sp1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="about-images">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="img1 image-anime">
                                                    <img src="/images/colorrig-6.jpg" alt="Colorrig team at work" style={{ width: '100%', borderRadius: '8px' }} />
                                                </div>
                                                <div className="space20" />
                                                <div className="img1 image-anime">
                                                    <img src="/images/colorrig-7.jpg" alt="Live streaming setup" style={{ width: '100%', borderRadius: '8px' }} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space40" />
                                                <div className="img1 image-anime">
                                                    <img src="/images/colorrig-8.jpg" alt="Broadcast equipment" style={{ width: '100%', borderRadius: '8px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about1-textarea heading2">
                                        <h5 data-aos="fade-up" data-aos-duration={800}>About Colorrig</h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3">Crafting Unforgettable Experiences.</h2>
                                        <div className="space16" />
                                        <p>Colorrig Limited is your gateway to unforgettable events. From concept to execution, we create immersive experiences that captivate audiences and elevate your brand. With a passionate team of event experts, cutting-edge technology, and a commitment to excellence, we deliver exceptional results that leave a lasting impact.</p>
                                        <div className="space10" />
                                        <p><strong>Shaping the Future of Live Experiences.</strong></p>
                                        <div className="space16" />
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-4" data-aos="fade-up" data-aos-duration={800}>
                                                <div className="counter-box text-center">
                                                    <h3><CountUp end={100} duration={2} enableScrollSpy />+</h3>
                                                    <p>Events Covered</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-4" data-aos="fade-up" data-aos-duration={1000}>
                                                <div className="counter-box text-center">
                                                    <h3><CountUp end={7} duration={2} enableScrollSpy />+</h3>
                                                    <p>Team Members</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-4" data-aos="fade-up" data-aos-duration={1200}>
                                                <div className="counter-box text-center">
                                                    <h3><CountUp end={8} duration={2} enableScrollSpy />+</h3>
                                                    <p>Years Experience</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <div className="btn-area1" data-aos="fade-up" data-aos-duration={1200}>
                                            <Link href="/contact" className="vl-btn1">Get Started
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

                    <div className="sp1" style={{ backgroundColor: 'var(--ztc-bg-bg-1)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Our Mission &amp; Vision</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-up" data-aos-duration={800}>
                                    <div className="service1-box-area" style={{ padding: '40px', borderRadius: '12px', height: '100%' }}>
                                        <div className="icons">
                                            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={20} cy={20} r={18} stroke="#00bcd4" strokeWidth={2} />
                                                <circle cx={20} cy={20} r={10} stroke="#00bcd4" strokeWidth={2} />
                                                <circle cx={20} cy={20} r={3} fill="#00bcd4" />
                                            </svg>
                                        </div>
                                        <div className="space20" />
                                        <h4>Our Mission</h4>
                                        <div className="space16" />
                                        <p>At Colorrig Limited, our mission is to redefine event experiences through innovative live streaming solutions and digital brand marketing strategies. We are dedicated to providing our clients with seamless, captivating, and immersive experiences that leave a lasting impact on their audiences.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1000}>
                                    <div className="space20 d-lg-none d-block" />
                                    <div className="service1-box-area" style={{ padding: '40px', borderRadius: '12px', height: '100%' }}>
                                        <div className="icons">
                                            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 4L24 16H36L26 24L30 36L20 28L10 36L14 24L4 16H16L20 4Z" stroke="#00bcd4" strokeWidth={2} fill="none" />
                                            </svg>
                                        </div>
                                        <div className="space20" />
                                        <h4>Our Vision</h4>
                                        <div className="space16" />
                                        <p>Our vision at Colorrig Limited is to be the leading global provider of event live streaming and digital brand marketing services. We strive to revolutionize the way events are hosted, experienced, and remembered, empowering businesses and brands to connect with their audiences in powerful and meaningful ways.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Why Choose Us</h2>
                                        <div className="space16" />
                                        <p>Why choose us to live stream for your next event?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={800}>
                                    <div className="service1-box-area" style={{ padding: '30px', borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#00bcd4', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa-solid fa-star" style={{ fontSize: '32px', color: '#070327' }} />
                                        </div>
                                        <h5>Lasting Impact</h5>
                                        <div className="space10" />
                                        <p>We create events that leave a lasting impact and unforgettable memories for your attendees.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                                    <div className="service1-box-area" style={{ padding: '30px', borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#00bcd4', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa-solid fa-microchip" style={{ fontSize: '32px', color: '#070327' }} />
                                        </div>
                                        <h5>Cutting-Edge Technology</h5>
                                        <div className="space10" />
                                        <p>We leverage the latest technology to deliver seamless live streaming and digital experiences.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                                    <div className="service1-box-area" style={{ padding: '30px', borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#00bcd4', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa-solid fa-video" style={{ fontSize: '32px', color: '#070327' }} />
                                        </div>
                                        <h5>Professional Production</h5>
                                        <div className="space10" />
                                        <p>Our team delivers professional-grade video production for a polished look.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                                    <div className="service1-box-area" style={{ padding: '30px', borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#00bcd4', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa-solid fa-share-nodes" style={{ fontSize: '32px', color: '#070327' }} />
                                        </div>
                                        <h5>Multi-Platform Reach</h5>
                                        <div className="space10" />
                                        <p>Extend your event's reach through live streaming to multiple platforms.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1600}>
                                    <div className="service1-box-area" style={{ padding: '30px', borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#00bcd4', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa-solid fa-wifi" style={{ fontSize: '32px', color: '#070327' }} />
                                        </div>
                                        <h5>Reliable Connectivity</h5>
                                        <div className="space10" />
                                        <p>Reliable internet solutions for seamless live streaming.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1800}>
                                    <div className="service1-box-area" style={{ padding: '30px', borderRadius: '12px', marginBottom: '24px', textAlign: 'center' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#00bcd4', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa-solid fa-chart-line" style={{ fontSize: '32px', color: '#070327' }} />
                                        </div>
                                        <h5>Measurable Results</h5>
                                        <div className="space10" />
                                        <p>We focus on delivering measurable results that align with your goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sp1" style={{ backgroundColor: 'var(--ztc-bg-bg-1)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Trusted by Leading Brands</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Section7 showHeading={false} />
                    </div>

                    {/* CTA Section */}
                    <div className="cta7-section-area" style={{ paddingBottom: '80px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta7-bg-area" style={{ backgroundImage: 'url(/images/colorrig-1.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
                                        {/* Dark blue overlay 70% */}
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(7, 3, 39, 0.7)', borderRadius: 'inherit', zIndex: 1 }} />
                                        <div className="row" style={{ position: 'relative', zIndex: 2 }}>
                                            <div className="col-lg-7 m-auto">
                                                <div className="cta-heading text-center">
                                                    <h2>Ready to Make Your Event Unforgettable?</h2>
                                                    <div className="space16" />
                                                    <p>Let's bring your vision to life with professional live streaming and broadcast solutions.</p>
                                                    <div className="space32" />
                                                    <div className="btn-area1">
                                                        <Link href="/contact" className="vl-btn1">Get Started Today</Link>
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
