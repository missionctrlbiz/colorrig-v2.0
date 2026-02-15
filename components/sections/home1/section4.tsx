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
		1350: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}
}

const teamMembers = [
	{ name: "Charles Archibong", role: "CEO", image: "/images/Charles-Archibong.jpg" },
	{ name: "Bibitayo Archibong", role: "Chief Marketing Officer", image: "/images/Bibitayo-Archibong.jpg" },
	{ name: "Damilare O. Oluwawa", role: "Broadcast & Network Engineer", image: "/images/Damilare-O.-Oluwawa.jpg" },
	{ name: "Lucky Aduba", role: "Streaming Engineer", image: "/images/Lucky-Aduba.jpg" },
	{ name: "Oluwaseun Suberu", role: "Streaming & Network Engineer", image: "/images/Oluwaseun-Suberu.jpg" },
	{ name: "Omotayo Ogunfeibo", role: "Streaming Engineer", image: "/images/Omotayo-Ogunfeibo.jpg" },
	{ name: "Jamaldeen O. Lawal", role: "Developer", image: "/images/Jamaldeen-O.-Lawal.jpg" },
];

export default function Section4() {
	return (
		<>

			<div className="team1-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="team-header space-margin60 heading2">
								<h5 data-aos="fade-left" data-aos-duration={800}>Our Experts</h5>
								<div className="space16" />
								<h2 className="text-anime-style-3">Meet The Team</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 position-relative">
							<Swiper {...swiperOptions} className="team-slider-area ">
								{teamMembers.map((member, index) => (
									<SwiperSlide className="team-widget-boxarea" key={index}>
										<div className="img1 image-anime">
											<img src={member.image} alt={member.name} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
											<ul>
												<li>
													<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
												</li>
											</ul>
										</div>
										<div className="space20" />
										<div className="text-area">
											<Link href="/team">{member.name}</Link>
											<div className="space16" />
											<p>{member.role}</p>
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
