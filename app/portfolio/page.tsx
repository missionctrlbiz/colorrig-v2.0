import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"
import EventGenericCTA from "@/components/common/cta/EventGenericCTA"
import { portfolioData } from "./portfolioData"

export default function Portfolio() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Our Portfolio" breadcrumb="Portfolio" />
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== PORTFOLIO AREA STARTS =======*/}
                    <div className="event-team-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>Our Work</h5>
                                        <div className="space16" />
                                        <h2 className="text-anime-style-3">Seamless Event Coverage &amp; Live Streaming</h2>
                                        <div className="space16" />
                                        <p data-aos="fade-left" data-aos-duration={900}>
                                            Explore our portfolio of successfully executed events, from high-profile conferences to live broadcasts, showcasing our expertise in live streaming, audiovisual production, and event coordination.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {portfolioData.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                        <div className="event2-boxarea box1" style={{ marginBottom: '30px' }}>
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="img1" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                                                        <img src={item.image} alt={item.shortTitle} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="content-area">
                                                        <ul>
                                                            <li>
                                                                <span><img src="/assets/img/icons/clock1.svg" alt="" />{item.date}</span>
                                                            </li>
                                                        </ul>
                                                        <div className="space12" />
                                                        <Link href={`/portfolio/${item.slug}`} className="head" style={{ fontSize: '18px' }}>{item.shortTitle}</Link>
                                                        <div className="space12" />
                                                        <p style={{ fontSize: '14px' }}>{item.excerpt.substring(0, 120)}...</p>
                                                        <div className="space16" />
                                                        <div className="btn-area1">
                                                            <Link href={`/portfolio/${item.slug}`} className="vl-btn1"><span className="demo">View Details</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <EventGenericCTA />

            </Layout >
        </>
    )
}
