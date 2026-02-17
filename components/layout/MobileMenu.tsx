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
					<div className="row">
						<div className="col-12">
							<div className="mobile-header-elements">
								<div className="mobile-logo">
									<Link href="/">
										<img src="/images/Colorrig-Dark.png" alt="Colorrig Limited" style={{ maxWidth: '120px' }} />
									</Link>
								</div>
								<div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
									<i className="fa-solid fa-bars-staggered" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logosicon-area">
					<div className="logos">
						<img src="/images/Colorrig-Dark.png" alt="Colorrig Limited" style={{ maxWidth: '120px' }} />
					</div>
					<div className="menu-close" onClick={handleMobileMenu}>
						<i className="fa-solid fa-xmark" />
					</div>
				</div>
				<div className="mobile-nav mobile-nav1">
					<ul className="mobile-nav-list nav-list1">
						<li><Link href="/" className="hash-nav" onClick={handleMobileMenu}>Home</Link></li>
						<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion == 1 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(1)}><em /></span>
							<Link href="/about" className="hash-nav" onClick={handleMobileMenu}>About Us</Link>
							<ul className={`sub-menu ${isAccordion == 1 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
								<li><Link href="/team" className="hash-nav" onClick={handleMobileMenu}>Our Team</Link></li>
								<li><Link href="/portfolio" className="hash-nav" onClick={handleMobileMenu}>Our Portfolio</Link></li>
							</ul>
						</li>
						<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion == 2 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(2)}><em /></span>
							<Link href="/solutions" className="hash-nav" onClick={handleMobileMenu}>Solutions</Link>
							<ul className={`sub-menu ${isAccordion == 2 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
								<li><Link href="/solutions" className="hash-nav" onClick={handleMobileMenu}>Live Streaming Solutions</Link></li>
								<li><Link href="/solutions#liveu" className="hash-nav" onClick={handleMobileMenu}>LiveU Solutions</Link></li>
							</ul>
						</li>
						<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion == 3 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(3)}><em /></span>
							<Link href="#" className="hash-nav">Media &amp; Resources</Link>
							<ul className={`sub-menu ${isAccordion == 3 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
								<li><Link href="/faq" className="hash-nav" onClick={handleMobileMenu}>FAQs</Link></li>
								<li><Link href="/careers" className="hash-nav" onClick={handleMobileMenu}>Careers</Link></li>
								<li><Link href="/memories" className="hash-nav" onClick={handleMobileMenu}>Gallery</Link></li>
								<li><Link href="/blog" className="hash-nav" onClick={handleMobileMenu}>The Live Link</Link></li>
							</ul>
						</li>
						<li><Link href="/contact" className="hash-nav" onClick={handleMobileMenu}>Contact Us</Link></li>
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
											<Link href="/contact" onClick={handleMobileMenu}>2, Kudirat Soule Street, Ifako, Ogba, Lagos.</Link>
										</div>
									</div>
								</div>
								<div className="single-footer">
									<h3>Social Links</h3>
									<div className="social-links-mobile-menu">
										<ul>

											<li>
												<Link href="https://www.instagram.com/color.rig" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
													<i className="fa-brands fa-instagram" />
												</Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/company/color.rig" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
													<i className="fa-brands fa-linkedin-in" />
												</Link>
											</li>
											<li>
												<Link href="https://www.youtube.com/@color.rig" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
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
