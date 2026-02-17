'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

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
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	slidesPerGroup: 1,
	spaceBetween: 60,
	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.h1n',
		prevEl: '.h1p',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 40,
		},
		767: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
		991: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 60,
		},
		1199: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 60,
		},
		1350: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 60,
		},
	}
}
export default function BrandSlider() {
	return (
		<>
			<Swiper {...swiperOptions} className="brand-slider-area owl-carousel">
				{clientLogos.map((client, index) => (
					<SwiperSlide className="brand-box" key={index}>
						<img
							src={client.image}
							alt={client.name}
							title={client.name}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
