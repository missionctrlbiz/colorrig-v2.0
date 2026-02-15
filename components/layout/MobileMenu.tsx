'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className="mobile-header mobile-haeder1 d-block d-lg-none">
				<div className="container-fluid">
					<div className="col-12">
						<div className="mobile-header-elements">
							<div className="mobile-logo">
								<Link href="/">
									<img src="/images/Colorrig-White.png" alt="Colorrig Limited" />
								</Link>
							</div>
							<div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
								<i className="fa-solid fa-bars-staggered" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logosicon-area">
					<div className="logos">
						<img src="/images/Colorrig-White.png" alt="Colorrig Limited" />
					</div>
					<div className="menu-close" onClick={handleMobileMenu}>
						<i className="fa-solid fa-xmark" />
					</div>
				</div>
				<div className="mobile-nav mobile-nav1">
					<ul className="mobile-nav-list nav-list1">
						<li><Link href="/" className="hash-nav">Home</Link></li>
						<li><Link href="/about" className="hash-nav">About Us</Link></li>
						<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion == 1 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(1)}><em /></span>
							<Link href="/solutions" className="hash-nav">Solutions</Link>
							<ul className={`sub-menu ${isAccordion == 1 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
								<li><Link href="/solutions#live-streaming" className="hash-nav">Live Streaming</Link></li>
								<li><Link href="/solutions#pricing" className="hash-nav">Pricing & Packages</Link></li>
								<li><Link href="/solutions" className="hash-nav">All Solutions</Link></li>
							</ul>
						</li>
						<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion == 2 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(2)}><em /></span>
							<Link href="/#" className="hash-nav">Pages</Link>
							<ul className={`sub-menu ${isAccordion == 2 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
								<li><Link href="/portfolio" className="hash-nav">Portfolio</Link></li>
								<li><Link href="/team" className="hash-nav">Our Team</Link></li>
								<li><Link href="/faq" className="hash-nav">FAQ</Link></li>
							</ul>
						</li>
						<li><Link href="/blog" className="hash-nav">Blog</Link></li>
						<li><Link href="/contact" className="hash-nav">Contact Us</Link></li>
					</ul>

					<div className="allmobilesection">
						<Link href="/contact" className="vl-btn1">Get a Quote</Link>
						<div className="single-footer">
							<h3>Contact Info</h3>
							<div className="footer1-contact-info">
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-phone-volume" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="tel:+2348133555696">+234 813 355 5696</Link>
									</div>
								</div>
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-envelope" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="mailto:info@colorrig.com.ng">info@colorrig.com.ng</Link>
									</div>
								</div>
								<div className="single-footer">
									<h3>Our Location</h3>
									<div className="contact-info-single">
										<div className="contact-info-icon">
											<span><i className="fa-solid fa-location-dot" /></span>
										</div>
										<div className="contact-info-text">
											<Link href="/contact">Lagos, Nigeria</Link>
										</div>
									</div>
								</div>
								<div className="single-footer">
									<h3>Social Links</h3>
									<div className="social-links-mobile-menu">
										<ul>
											<li>
												<Link href="https://www.facebook.com/colorriglimited" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
													<i className="fa-brands fa-facebook-f" />
												</Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/colorriglimited" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
													<i className="fa-brands fa-instagram" />
												</Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/company/colorrig-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
													<i className="fa-brands fa-linkedin-in" />
												</Link>
											</li>
											<li>
												<Link href="https://www.youtube.com/@colorriglimited" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
													<i className="fa-brands fa-youtube" />
												</Link>
											</li>
										</ul>
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
