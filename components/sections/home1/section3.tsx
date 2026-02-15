import Link from 'next/link'
import { portfolioData } from '@/app/portfolio/portfolioData'

export default function Section3() {
    const displayItems = portfolioData.slice(0, 6)

    return (
        <>
            <div className="event1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="event-header heading2 space-margin60 text-center">
                                <h5 data-aos="fade-left" data-aos-duration={800}>Our Work</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Our Portfolio</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {displayItems.map((item, index) => (
                            <div className="col-lg-12" key={item.id}>
                                <div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800 + (index * 100)} style={{ marginBottom: '30px' }}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-4">
                                            <div className="img1">
                                                <img src={item.image} alt={item.shortTitle} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="content-area">
                                                <ul>
                                                    <li>
                                                        <span><img src="/assets/img/icons/clock1.svg" alt="" /> {item.date} <span> | </span></span>
                                                    </li>
                                                    <li>
                                                        <span><img src="/assets/img/icons/location1.svg" alt="" /> {item.location}</span>
                                                    </li>
                                                </ul>
                                                <div className="space20" />
                                                <Link href={`/portfolio/${item.slug}`} className="head">{item.shortTitle}</Link>
                                                <div className="space16" />
                                                <p>{item.excerpt}</p>
                                                <div className="space32" />
                                                <div className="btn-area1">
                                                    <Link href={`/portfolio/${item.slug}`} className="vl-btn1">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="btn-area1">
                                <Link href="/portfolio" className="vl-btn2">
                                    <span className="demo">View All Projects</span>
                                    <span className="arrow"><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
