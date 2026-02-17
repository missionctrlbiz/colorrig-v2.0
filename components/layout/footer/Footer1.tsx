import Link from 'next/link'

const recentProjects = [
	'/images/colorrig-1.jpg',
	'/images/colorrig-2.jpg',
	'/images/colorrig-3.jpg',
	'/images/colorrig-6.jpg',
	'/images/colorrig-7.jpg',
	'/images/colorrig-8.jpg',
]

export default function Footer1() {
	return (
		<>
			<div className="footer1-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<img src="/images/Colorrig-Dark.png" alt="Colorrig" style={{ height: '50px', width: 'auto' }} />
								<div className="space16" />
								<p>We are Colorrig Limited - Where Excellence Meets Live Transmission. Unparalleled High Definition Live streaming and broadcast solutions.</p>
								<div className="space24" />
								<ul>
									<li>
										<Link href="https://www.instagram.com/color.rig" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/company/color.rig" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>
									<li>
										<Link href="https://www.youtube.com/@color.rig" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="m-0"><i className="fa-brands fa-youtube" /></Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="link-content">
								<h3>Quick Links</h3>
								<ul>
									<li><Link href="/about">About Us</Link></li>
									<li><Link href="/solutions">Solutions</Link></li>
									<li><Link href="/contact">Contact</Link></li>
									<li><Link href="/privacy-policy">Privacy Policy</Link></li>
									<li><Link href="/terms-and-conditions">T&apos;s &amp; C&apos;s</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="link-content2">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link href="tel:+2348133555696"><img src="/assets/img/icons/phn1.svg" alt="" />+234 813 355 5696</Link>
									</li>
									<li>
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Lagos, Nigeria</Link>
									</li>
									<li>
										<Link href="mailto:info@colorrig.com.ng"><img src="/assets/img/icons/mail1.svg" alt="" />info@colorrig.com.ng</Link>
									</li>
									<li>
										<Link href="https://colorrig.com.ng"><img src="/assets/img/icons/world1.svg" alt="" />colorrig.com.ng</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-social-box">
								<h3>Recent Projects</h3>
								<div className="space12" />
								<div className="row" style={{ gap: '8px 0' }}>
									{recentProjects.map((img, i) => (
										<div key={i} className="col-lg-4 col-md-4 col-4">
											<Link href="/portfolio" style={{ display: 'block', overflow: 'hidden', borderRadius: '6px' }}>
												<img
													src={img}
													alt={`Project ${i + 1}`}
													style={{ width: '100%', height: '80px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
													onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
													onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
												/>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="copyright" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px', marginTop: '40px' }}>
								<p style={{ margin: 0 }}>© {new Date().getFullYear()} <Link href="/" style={{ color: 'inherit' }}>Colorrig Limited</Link>. All Rights Reserved</p>
								<p style={{ margin: 0 }}>Made with ❤️ by <Link href="https://missionctrl.com.ng" target="_blank" rel="noopener noreferrer" style={{ color: '#070327', fontWeight: 600 }}>MissionCTRL Labs</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
