import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"
import { portfolioData } from "../portfolioData"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return portfolioData.map((item) => ({
        slug: item.slug,
    }))
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const item = portfolioData.find((p) => p.slug === slug)

    if (!item) {
        notFound()
    }

    // Get recent projects (excluding current one, take first 3)
    const recentProjects = portfolioData.filter(p => p.slug !== slug).slice(0, 3)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader
                        title={item.shortTitle}
                        breadcrumb={item.shortTitle}
                        parentText="Portfolio"
                        parentLink="/portfolio"
                    />
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== PORTFOLIO DETAIL STARTS =======*/}
                    <div className="blog-details-section sp8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="blog-deatils-content heading2">
                                        <div className="img1">
                                            <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                                        </div>
                                        <div className="space32" />
                                        <ul>
                                            <li>
                                                <img src="/assets/img/icons/clock1.svg" alt="" /> {item.date} <span> | </span>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icons/location1.svg" alt="" /> {item.location} <span> | </span>
                                            </li>
                                            <li>
                                                <span className="badge" style={{ background: 'var(--ztc-bg-bg-3)', color: 'var(--ztc-text-text-2)', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>{item.category}</span>
                                            </li>
                                        </ul>
                                        <div className="space18" />
                                        <h2>{item.title}</h2>
                                        <div className="space16" />
                                        {item.content.split('\n\n').map((paragraph, index) => (
                                            <div key={index}>
                                                <p>{paragraph}</p>
                                                <div className="space16" />
                                            </div>
                                        ))}

                                        {/* Blockquote example if needed, using generic style */}
                                        <blockquote style={{ borderLeft: '4px solid var(--ztc-bg-bg-3)', paddingLeft: '20px', fontStyle: 'italic', margin: '20px 0', color: 'var(--ztc-text-text-4)' }}>
                                            "A successful event is not just about execution, but about creating memorable experiences through seamless technology."
                                        </blockquote>

                                        {item.videoUrl && (
                                            <>
                                                <div className="space24" />
                                                <div className="video-btn-area">
                                                    <div className="img1" style={{ position: 'relative' }}>
                                                        <img src={item.image} alt="Video Thumbnail" style={{ width: '100%', borderRadius: '10px', filter: 'brightness(0.7)' }} />
                                                        <div className="play" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                            <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="popup-youtube" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'var(--ztc-bg-bg-3)', borderRadius: '50%', color: 'var(--ztc-text-text-2)' }}>
                                                                <i className="fa-solid fa-play" style={{ fontSize: '24px' }} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <div className="space32" />
                                        <div className="tags-social-area">
                                            <div className="tags">
                                                <h4>Tags:</h4>
                                                <ul>
                                                    {item.hashtags.map((tag, i) => (
                                                        <li key={i}><Link href="#">{tag}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="social">
                                                <h4>Share:</h4>
                                                <ul>
                                                    <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="space30 d-lg-none d-block" />
                                    <div className="blog-auhtor-details">
                                        <div className="blog-categories">
                                            <h3>Quick Links</h3>
                                            <div className="space12" />
                                            <ul>
                                                <li>
                                                    <Link href="/portfolio">Portfolio <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/legal/privacy">Privacy Policy <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/legal/terms">Terms and Conditions <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">Contact Us <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space32" />
                                        <div className="tags-area">
                                            <h3>Tags</h3>
                                            <div className="space12" />
                                            <ul>
                                                {item.hashtags.map((tag, i) => (
                                                    <li key={i}><Link href="#">{tag}</Link></li>
                                                ))}
                                                <li><Link href="#">#LiveStreaming</Link></li>
                                                <li><Link href="#">#EventProduction</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== PORTFOLIO DETAIL ENDS =======*/}

                    {/*===== RECENT PROJECTS STARTS =======*/}
                    <div className="bloginner-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Recent Projects</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {recentProjects.map((project) => (
                                    <div key={project.id} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                        <div className="blog4-boxarea">
                                            <div className="img1">
                                                <img src={project.image} alt={project.shortTitle} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
                                            </div>
                                            <div className="content-area">
                                                <ul>
                                                    <li>
                                                        <Link href={`/portfolio/${project.slug}`}><img src="/assets/img/icons/calender1.svg" alt="" />{project.date} <span> | </span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/portfolio/${project.slug}`}><img src="/assets/img/icons/location1.svg" alt="" />{project.location}</Link>
                                                    </li>
                                                </ul>
                                                <div className="space20" />
                                                <Link href={`/portfolio/${project.slug}`}>{project.shortTitle}</Link>
                                                <div className="space24" />
                                                <Link href={`/portfolio/${project.slug}`} className="readmore">View Project <i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
