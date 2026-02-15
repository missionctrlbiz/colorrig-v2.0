'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.owl-next',
		prevEl: '.owl-prev',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
}

const reasons = [
	{
		title: "Seamless Experience",
		description: "We leverage the latest technology to deliver seamless live streaming and digital experiences.",
		icon: "fa-solid fa-check"
	},
	{
		title: "Global Reach",
		description: "Extend your event's reach through live streaming to multiple platforms including Facebook, YouTube, and Twitter.",
		icon: "fa-solid fa-globe"
	},
	{
		title: "Professional Quality",
		description: "Our team delivers professional-grade video production for a polished look that aligns with your goals.",
		icon: "fa-solid fa-video"
	}
]

export default function Section5() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="testimonials1-section-area sp1">
				<div className="testimonial-img2">
					<img src="/images/colorrig-8.jpg" alt="" style={{ borderRadius: '10px' }} />
				</div>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="testimonial-header heading2">
								<h5 data-aos="fade-left" data-aos-duration={1000}>Why Choose Us</h5>
								<div className="space16" />
								<h2 className="text-anime-style-3">Shaping the Future of Live Experiences</h2>
							</div>
							<div className="space32" />
							<Swiper {...swiperOptions} className="testimonial-content-slider owl-carousel">
								{reasons.map((item, index) => (
									<SwiperSlide className="testimonial-widget-box" key={index}>
										<div className="icons">
											<i className={item.icon} style={{ fontSize: '24px', color: '#74fbfe' }} />
										</div>
										<div className="space22" />
										<h4>{item.title}</h4>
										<div className="space16" />
										<p>{item.description}</p>
										<div className="space24" />
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
						<div className="col-lg-6">
							<div className="video-play-btn">
								<a onClick={() => setOpen(true)} className="popup-youtube" style={{ cursor: 'pointer' }}>
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={24} viewBox="0 0 20 24" fill="none">
										<path d="M19.5185 11.1463L1.52146 0.147702C1.36988 0.0550624 1.19634 0.0044781 1.01872 0.0011519C0.8411 -0.00217431 0.665798 0.041878 0.510849 0.128777C0.3559 0.215677 0.226898 0.342285 0.137113 0.495581C0.0473273 0.648876 8.00178e-08 0.823322 0 1.00098V22.9981C8.00178e-08 23.1758 0.0473273 23.3502 0.137113 23.5035C0.226898 23.6568 0.3559 23.7834 0.510849 23.8703C0.665798 23.9572 0.8411 24.0013 1.01872 23.998C1.19634 23.9946 1.36988 23.944 1.52146 23.8514L19.5185 12.8528C19.6647 12.7635 19.7855 12.6381 19.8693 12.4887C19.9531 12.3393 19.9971 12.1709 19.9971 11.9996C19.9971 11.8282 19.9531 11.6598 19.8693 11.5104C19.7855 11.361 19.6647 11.2356 19.5185 11.1463Z" fill="#1A1719" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
