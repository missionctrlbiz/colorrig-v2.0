'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { portfolioData } from '@/app/portfolio/portfolioData'

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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Section6() {
    const selectedEventIds = [1, 5, 7, 4, 11, 9, 10, 12];
    const galleryItems = portfolioData.filter(item => selectedEventIds.includes(item.id));

    return (
        <>
            <div className="memory1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="memory-header text-center heading2 space-margin60">
                                <h5 data-aos="fade-left" data-aos-duration={800}>Our Gallery</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Recent Event Highlights</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 memory-slider-area">
                            <Swiper {...swiperOptions} className="owl-carousel">
                                {galleryItems.map((item, index) => (
                                    <SwiperSlide className="memory-boxarea" key={index}>
                                        <Link href={`/portfolio/${item.slug}`} className="memory-card-link">
                                            <div className="img1 image-anime">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="content-area">
                                                <div className="arrow">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </div>
                                                <div className="space18" />
                                                <p>{item.category}</p>
                                                <div className="space12" />
                                                <span className="title">{item.shortTitle}</span>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="owl-nav">
                                <button type="button" className="owl-prev h1p" aria-label="Previous gallery item">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button type="button" className="owl-next h1n" aria-label="Next gallery item">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


