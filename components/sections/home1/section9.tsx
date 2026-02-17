
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section9() {
	return (
		<>

			<div className="cta1-section-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 m-auto">
							<div className="cta1-main-boxarea position-relative overflow-hidden">
								<div className="timer-btn-area position-relative" style={{ zIndex: 2 }}>
									{/* <Countdown /> - Hidden for service business */}
									<div className="heading2">
										<h2 className="text-anime-style-3">Ready to Go Live??</h2>
									</div>
									<div className="btn-area1">
										<Link href="/contact" className="vl-btn1">Get a Quote</Link>
									</div>
								</div>
								<ul className="position-relative" style={{ zIndex: 2 }}>
									<li>
										<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />Book a Consultation</Link>
									</li>
									<li className="m-0">
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Global Coverage</Link>
									</li>
								</ul>
								<div className="camera-img d-none d-lg-block" style={{ position: 'absolute', right: '-20px', bottom: '-40px', zIndex: 1 }}>
									<img src="/images/camera-isolated.png" alt="Camera" data-aos="fade-left" data-aos-duration="1200" style={{ maxWidth: '350px' }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
