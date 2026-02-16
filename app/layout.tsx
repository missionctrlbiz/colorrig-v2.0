import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/assets/css/vendor/aos.css"
import "../public/assets/css/vendor/bootstrap.min.css"
import "../public/assets/css/vendor/fontawesome.css"
import "../public/assets/css/vendor/magnific-popup.css"
import "../public/assets/css/vendor/mobile.css"
// import "../public/assets/css/vendor/owlcarousel.min.css"
import "../public/assets/css/vendor/sidebar.css"
import "../public/assets/css/vendor/slick-slider.css"
import "../public/assets/css/vendor/nice-select.css"
import "../public/assets/css/vendor/odometer.css"
import "../public/assets/css/main.css"
import "./globals.css"

import type { Metadata } from "next"
import { mtnBrighterSans } from "./fonts"

export const metadata: Metadata = {
	title: "Colorrig Limited | Live Streaming & Broadcast Solutions",
	description: "Colorrig Limited — Where Excellence Meets Live Transmission. Unparalleled High Definition Live streaming and broadcast solutions in Nigeria.",
	icons: {
		icon: "/images/colorrig-favicon.png",
		shortcut: "/images/colorrig-favicon.png",
		apple: "/images/colorrig-favicon.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={mtnBrighterSans.variable}>{children}</body>
		</html>
	)
}
