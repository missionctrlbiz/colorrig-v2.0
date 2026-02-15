import Link from 'next/link'


export default function Footer1() {
	return (
		<>
			<div className="footer1-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<img src="/images/Colorrig-White.png" alt="Colorrig" style={{ height: '50px', width: 'auto' }} />
								<div className="space16" />
								<p>We are Colorrig Limited - Where Excellence Meets Live Transmission. Unparalleled High Definition Live streaming and broadcast solutions.</p>
								<div className="space24" />
								<ul>
									<li>
										<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
									</li>
									<li>
										<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
									</li>
									<li>
										<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>
									<li>
										<Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link>
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
									<li><Link href="/portfolio">Portfolio</Link></li>
									<li><Link href="/blog">Blog</Link></li>
									<li><Link href="/contact">Contact</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="link-content2">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link href="/tel:+2348133555696"><img src="/assets/img/icons/phn1.svg" alt="" />+234 813 355 5696</Link>
									</li>
									<li>
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Lagos, Nigeria</Link>
									</li>
									<li>
										<Link href="mailto:info@colorrig.com.ng"><img src="/assets/img/icons/mail1.svg" alt="" />info@colorrig.com.ng</Link>
									</li>
									<li>
										<Link href="https://colorrig.com.ng"> <img src="/assets/img/icons/world1.svg" alt="" />colorrig.com.ng</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-social-box">
								<h3>Recent Projects</h3>
								<div className="space12" />
								<div className="row">
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/images/colorrig-1.jpg" alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/images/colorrig-2.jpg" alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/images/colorrig-3.jpg" alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/images/colorrig-6.jpg" alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/images/colorrig-7.jpg" alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/images/colorrig-8.jpg" alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space60" />
					<div className="row">
						<div className="col-lg-12">
							<div className="copyright">
								<p>© Copyright {new Date().getFullYear()} - Colorrig Limited. All Right Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
