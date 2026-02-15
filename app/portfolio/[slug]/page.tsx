import Layout from "@/components/layout/Layout"
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

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg8.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>{item.shortTitle}</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /></Link>{" "}
                                        <Link href="/portfolio">Portfolio <i className="fa-solid fa-angle-right" /></Link>{" "}
                                        <span>{item.shortTitle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== PORTFOLIO DETAIL STARTS =======*/}
                    <div className="blog-single-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="blog-single-boxarea">
                                        <div className="img1 image-anime">
                                            <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '10px' }} />
                                        </div>
                                        <div className="space30" />
                                        <div className="content-area">
                                            <ul className="d-flex gap-3 flex-wrap">
                                                <li>
                                                    <img src="/assets/img/icons/clock1.svg" alt="" /> {item.date}
                                                </li>
                                                <li>
                                                    <img src="/assets/img/icons/location1.svg" alt="" /> {item.location}
                                                </li>
                                                <li>
                                                    <span className="badge" style={{ background: 'var(--ztc-bg-bg-3)', color: 'var(--ztc-text-text-2)', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>{item.category}</span>
                                                </li>
                                            </ul>
                                            <div className="space24" />
                                            <h2>{item.title}</h2>
                                            <div className="space20" />
                                            {item.content.split('\n\n').map((paragraph, index) => (
                                                <div key={index}>
                                                    <p>{paragraph}</p>
                                                    <div className="space16" />
                                                </div>
                                            ))}
                                            {item.videoUrl && (
                                                <>
                                                    <div className="space24" />
                                                    <div className="btn-area1">
                                                        <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="vl-btn1">
                                                            <span className="demo"><i className="fa-solid fa-play" /> Watch Video</span>
                                                        </a>
                                                    </div>
                                                </>
                                            )}
                                            <div className="space24" />
                                            <div className="d-flex gap-2 flex-wrap">
                                                {item.hashtags.map((tag, i) => (
                                                    <span key={i} style={{ fontSize: '13px', color: 'var(--ztc-text-text-4)' }}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space40" />
                                    <div className="btn-area1 text-center">
                                        <Link href="/portfolio" className="vl-btn1"><span className="demo"><i className="fa-solid fa-arrow-left" /> Back to Portfolio</span></Link>
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
