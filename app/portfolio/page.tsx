import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"
import { portfolioData } from "./portfolioData"

export default function Portfolio() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Our Portfolio" breadcrumb="Portfolio" />
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== PORTFOLIO AREA STARTS =======*/}
                    <div className="bloginner-section-area sp1">
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
                                {portfolioData.map((item, index) => (
                                    <div key={item.id} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800 + (index % 3) * 200}>
                                        <div className="blog4-boxarea">
                                            <div className="img1">
                                                <img src={item.image} alt={item.shortTitle} />
                                            </div>
                                            <div className="content-area">
                                                <ul>
                                                    <li>
                                                        <Link href={`/portfolio/${item.slug}`}>
                                                            <img src="/assets/img/icons/calender1.svg" alt="" />{item.date}
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="space20" />
                                                <Link href={`/portfolio/${item.slug}`} className="head">{item.shortTitle}</Link>
                                                <div className="space24" />
                                                <Link href={`/portfolio/${item.slug}`} className="readmore">view details <i className="fa-solid fa-arrow-right" /></Link>
                                                <div className="arrow">
                                                    <Link href={`/portfolio/${item.slug}`}><i className="fa-solid fa-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="cta7-section-area portfolio-cta-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta7-bg-area portfolio-cta-bg">
                                        {/* Dark blue overlay 70% */}
                                        <div className="portfolio-cta-overlay" />
                                        <div className="row portfolio-cta-content">
                                            <div className="col-lg-7 m-auto">
                                                <div className="cta-heading text-center">
                                                    <h2>Let's Create Something Amazing Together</h2>
                                                    <div className="space16" />
                                                    <p>Partner with us for your next live event or broadcast project.</p>
                                                    <div className="space32" />
                                                    <div className="btn-area1">
                                                        <Link href="/contact" className="vl-btn1">Start Your Project</Link>
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

            </Layout >
        </>
    )
}
