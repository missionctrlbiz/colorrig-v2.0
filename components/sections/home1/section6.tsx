'use client'
import Link from 'next/link'
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

const galleryItems = [
    { image: "/images/ADSC-2019.jpg", title: "Africa Digital Sports Conference", category: "Conference" },
    { image: "/images/SMWLagos (1).jpg", title: "Social Media Week Lagos", category: "Conference" },
    { image: "/images/First-Bank-Awards.jpg", title: "First Bank FAMA Awards", category: "Awards" },
    { image: "/images/Governor Sanwo-Olu Xmas.jpg", title: "Gov. Sanwo-Olu Healthcare", category: "Government" },
    { image: "/images/Felabration 2017.jpg", title: "Felabration 2017", category: "Music & Arts" },
    { image: "/images/She-Speaks.jpg", title: "She Leads Africa", category: "Conference" },
    { image: "/images/Unilag Covocation.jpg", title: "UNILAG Convocation", category: "Education" },
    { image: "/images/PSG-U-11-2023-2-Medium.jpg", title: "U-11 PSG Games", category: "Sports" },
]

export default function Section6() {
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
                                        <div className="img1 image-anime">
                                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="content-area">
                                            <div className="arrow">
                                                <Link href="/portfolio"><i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                            <div className="space18" />
                                            <p>{item.category}</p>
                                            <div className="space12" />
                                            <Link href="/portfolio">{item.title}</Link>
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
                </div>
            </div>
        </>
    )
}
