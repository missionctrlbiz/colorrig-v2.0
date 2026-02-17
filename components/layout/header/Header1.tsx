'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	const [searchQuery, setSearchQuery] = useState('')
	const router = useRouter()

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (searchQuery.trim()) {
			router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
			setSearchQuery('')
			handleSearch() // Close search form
		}
	}

	return (
		<>
			<header>
				<div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/">
											<img src="/images/Colorrig-White.png" alt="Colorrig Limited" />
										</Link>
									</div>
									<div className="main-menu">
										<ul>
											<li>
												<Link href="/">Home</Link>
											</li>
											<li>
												<Link href="/about">About Us <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/team">Our Team</Link></li>
													<li><Link href="/portfolio">Our Portfolio</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/solutions">Solutions <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/solutions">Live Streaming Solutions</Link></li>
													<li><Link href="/solutions#liveu">LiveU Solutions</Link></li>
												</ul>
											</li>
											<li>
												<Link href="#">Media &amp; Resources <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/faq">FAQs</Link></li>
													<li><Link href="/careers">Careers</Link></li>
													<li><Link href="/gallery">Gallery</Link></li>
													<li><Link href="/blog">The Live Link</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/contact">Contact Us</Link>
											</li>
										</ul>
									</div>
									<div className="btn-area">
										<div className="search-icon header__search header-search-btn" onClick={handleSearch}>
											<a><img src="/assets/img/icons/search1.svg" alt="Search" /></a>
										</div>
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
												<Link href="https://www.youtube.com/@color.rig" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="m-0">
													<i className="fa-brands fa-youtube" />
												</Link>
											</li>
										</ul>
									</div>
									<div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
										<div className="tx-search-close tx-close" onClick={handleSearch}>
											<i className="fa-solid fa-xmark" />
										</div>
										<div className="header-search-container">
											<form role="search" className="search-form" onSubmit={handleSearchSubmit}>
												<input
													type="search"
													className="search-field"
													placeholder="Search Colorrig Limited..."
													name="s"
													value={searchQuery}
													onChange={(e) => setSearchQuery(e.target.value)}
												/>
												<button type="submit" className="search-submit">
													<img src="/assets/img/icons/search1.svg" alt="Search" />
												</button>
											</form>
										</div>
									</div>
									{isSearch && <div className="body-overlay active" onClick={handleSearch} />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
