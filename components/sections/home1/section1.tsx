'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Section1() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		// After the video (slide 0) ends, slides 1 and 2 alternate on a timer
		if (currentSlide === 1 || currentSlide === 2) {
			const timer = setTimeout(() => {
				setCurrentSlide(currentSlide === 1 ? 2 : 1);
			}, 5000); // Display each image slide for 5 seconds
			return () => clearTimeout(timer);
		}
	}, [currentSlide]);

	const handleVideoEnd = () => {
		setCurrentSlide(1);
	};

	return (
		<>
			<div className="hero1-section-area" style={{ position: 'relative', overflow: 'hidden', height: '100vh', minHeight: '700px' }}>
				{/* Slide 0: Video Background */}
				<div
					className={`slide-container ${currentSlide === 0 ? 'active' : ''}`}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						opacity: currentSlide === 0 ? 1 : 0,
						transition: 'opacity 1s ease-in-out',
						zIndex: currentSlide === 0 ? 1 : 0
					}}
				>
					<div className="video-background-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
						<video
							autoPlay
							muted
							playsInline
							poster="/slider.jpg"
							onEnded={handleVideoEnd}
							style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							suppressHydrationWarning
						>
							<source src="/images/Colorig.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
					</div>

					<div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
						<div className="row align-items-center w-100">
							<div className="col-lg-8">
								<div className="hero1-header heading1">
									<h5 data-aos="fade-left" data-aos-duration={800} style={{ color: '#00bcd4' }}>
										Excellence Meets Live Transmission
									</h5>
									<div className="space16" />
									<h1 className="text-anime-style-3 text-white">
										Unparalleled HD <br className="d-lg-block d-none" />
										Live Streaming Solutions
									</h1>
									<div className="space16" />
									<p data-aos="fade-left" data-aos-duration={900} className="text-white">
										We deliver top-tier broadcast solutions, ensuring your events reach <br className="d-lg-block d-none" />
										global audiences with crystal-clear quality and professional reliability.
									</p>
									<div className="space32" />
									<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
										<Link href="/contact" className="vl-btn1">Get a Quote</Link>
										<Link href="/solutions" className="vl-btn2">Our Solutions</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Slide 1: Image Background */}
				<div
					className={`slide-container ${currentSlide === 1 ? 'active' : ''}`}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						opacity: currentSlide === 1 ? 1 : 0,
						transition: 'opacity 1s ease-in-out',
						zIndex: currentSlide === 1 ? 1 : 0,
						backgroundImage: 'url(/images/Slide.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
					<div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
						<div className="row align-items-center w-100">
							<div className="col-lg-8">
								<div className="hero1-header heading1">
									<h5 data-aos="fade-left" data-aos-duration={800} style={{ color: '#00bcd4' }}>
										Professional Media Production
									</h5>
									<div className="space16" />
									<h1 className="text-anime-style-3 text-white">
										Capturing Every Moment <br className="d-lg-block d-none" />
										in Perfect Clarity
									</h1>
									<div className="space16" />
									<p data-aos="fade-left" data-aos-duration={900} className="text-white">
										From corporate events to entertainment spectacles, our expert team <br className="d-lg-block d-none" />
										brings your vision to life with stunning visuals and seamless execution.
									</p>
									<div className="space32" />
									<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
										<Link href="/portfolio" className="vl-btn1">View Portfolio</Link>
										<Link href="/contact" className="vl-btn2">Contact Us</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Slide 2: Image Background 2 */}
				<div
					className={`slide-container ${currentSlide === 2 ? 'active' : ''}`}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						opacity: currentSlide === 2 ? 1 : 0,
						transition: 'opacity 1s ease-in-out',
						zIndex: currentSlide === 2 ? 1 : 0,
						backgroundImage: 'url(/slider.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
					<div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
						<div className="row align-items-center w-100">
							<div className="col-lg-8">
								<div className="hero1-header heading1">
									<h5 data-aos="fade-left" data-aos-duration={800} style={{ color: '#00bcd4' }}>
										Hybrid Event Expertise
									</h5>
									<div className="space16" />
									<h1 className="text-anime-style-3 text-white">
										Connect Global Audiences <br className="d-lg-block d-none" />
										Seamlessly
									</h1>
									<div className="space16" />
									<p data-aos="fade-left" data-aos-duration={900} className="text-white">
										Bridge the gap between physical and digital worlds with our cutting-edge <br className="d-lg-block d-none" />
										hybrid event solutions, engaging attendees wherever they are.
									</p>
									<div className="space32" />
									<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
										<Link href="/solutions" className="vl-btn1">Discover Solutions</Link>
										<Link href="/contact" className="vl-btn2">Plan Your Event</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
