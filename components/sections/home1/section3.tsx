'use client'
import Link from 'next/link'
import { portfolioData } from '@/app/portfolio/portfolioData'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

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
                        <div className="col-lg-12">
                            <Swiper {...swiperOptions} className="event-slider-area">
                                {displayItems.map((item, index) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="tabs-widget-boxarea" style={{ marginBottom: '30px', height: '100%' }}>
                                            <div className="img1">
                                                <img src={item.image} alt={item.shortTitle} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
                                            </div>
                                            <div className="content-area" style={{ padding: '20px' }}>
                                                <ul>
                                                    <li>
                                                        <span><img src="/assets/img/icons/clock1.svg" alt="" /> {item.date}</span>
                                                    </li>
                                                </ul>
                                                <div className="space20" />
                                                <Link href={`/portfolio/${item.slug}`} className="head">{item.shortTitle}</Link>
                                                <div className="space16" />
                                                <p style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.excerpt}</p>
                                                <div className="space32" />
                                                <div className="btn-area1">
                                                    <Link href={`/portfolio/${item.slug}`} className="vl-btn1">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev h1p">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button type="button" role="presentation" className="owl-next h1n">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
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

