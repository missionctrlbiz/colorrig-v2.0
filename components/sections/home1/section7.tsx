'use client'
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const clientLogos = [
    { name: "Access Bank", image: "/images/Access-Bank-Logo-Thumbnail.png" },
    { name: "First Bank", image: "/images/FirstBank-Logo-Thumbnail.png" },
    { name: "LiveU", image: "/images/LiveU-Logo-Thumbnail.png" },
    { name: "Lagos State Government", image: "/images/LASG-Logo-Thumbnail.png" },
    { name: "Prestige Assurance", image: "/images/Prestige-Thumbnail.png" },
    { name: "Social Media Week", image: "/images/Social-Media-Week-Thumbnail.png" },
    { name: "Honeywell Group", image: "/images/Honeywell-Group-Thumbnail.png" },
    { name: "She Leads Africa", image: "/images/She.Leads_.Africa-Thumbnail.png" },
    { name: "University of Lagos", image: "/images/UNILAG-Logo-Thumbnail.png" },
    { name: "UnoTelos Group", image: "/images/UnoTelos-Group-Thumbnail.png" },
    { name: "Africa Fintech Foundry", image: "/images/Africa-Fintech-Foundry-Thumbnail.png" },
    { name: "Private School Games", image: "/images/School-Games-Logo-Thumbnail.jpeg" },
    { name: "Adzinga Media", image: "/images/Adzinga-Media-Thumbnail.png" },
]

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 25,
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 25,
        },
        991: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
    }
}

export default function Section7({ showHeading = true }: { showHeading?: boolean }) {
    return (
        <>
            <div className="brands1-section-area sp2">
                <div className="container">
                    {showHeading && (
                        <div className="row">
                            <div className="col-lg-5 m-auto">
                                <div className="brand-header heading2 space-margin60 text-center">
                                    <h5 data-aos="fade-left" data-aos-duration={800}>Our Clients</h5>
                                    <div className="space16" />
                                    <h2 className="text-anime-style-3">Trusted by Industry Leaders</h2>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...swiperOptions}>
                                {clientLogos.map((client, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="brand-box">
                                            <img
                                                src={client.image}
                                                alt={client.name}
                                                title={client.name}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
