
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<div className="hero1-section-area">
				<div className="video-background-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
					<video
						autoPlay
						loop
						muted
						playsInline
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
						suppressHydrationWarning
					>
						<source src="/images/Colorig.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
				</div>

				<div className="bg1">
					{/* Fallback or overlay image if needed, but video covers it. Keeping structure just in case but hiding or making transparent */}
				</div>
				<div className="container" style={{ position: 'relative', zIndex: 1 }}>
					<div className="row align-items-center">
						<div className="col-lg-8">
							<div className="hero1-header heading1">
								<h5 data-aos="fade-left" data-aos-duration={800} style={{ color: '#74fbfe' }}>
									Excellence Meets Live Transmission
								</h5>
								<div className="space16" />
								<h1 className="text-anime-style-3 text-white">
									Unparalleled High Definition <br className="d-lg-block d-none" />
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
		</>
	)
}
