'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Popup() {
	useEffect(() => {
		const popup = document.getElementById('popup') as HTMLElement | null
		const closeBtn = document.getElementById('close-popup') as HTMLElement | null
		const noThanksBtn = document.querySelector('.no-thanks') as HTMLElement | null

		if (popup) {
			setTimeout(() => {
				popup.style.display = 'flex'
			}, 100)
		}

		if (closeBtn) {
			closeBtn.addEventListener('click', () => {
				if (popup) {
					popup.style.display = 'none'
				}
			})
		}

		if (noThanksBtn) {
			noThanksBtn.addEventListener('click', () => {
				if (popup) {
					popup.style.display = 'none'
				}
			})
		}

		return () => {
			if (closeBtn) {
				closeBtn.removeEventListener('click', () => { })
			}
			if (noThanksBtn) {
				noThanksBtn.removeEventListener('click', () => { })
			}
		}
	}, [])

	return (
		<>
			<div id="popup" className="popup-overlay">
				<div className="popup-content" style={{ background: '#070327' }}>
					<span className="close-btn" id="close-popup">×</span>
					<div className="popup-icon">
						<img src="/images/Colorrig-White.png" alt="Colorrig Limited" style={{ maxWidth: '180px' }} />
					</div>
					<div className="space32" />
					<div className="heading2">
						<h2 style={{ color: '#ffffff' }}>Ready to Go Live?</h2>
						<div className="space8" />
						<ul>
							<li style={{ color: '#cccccc' }}><i className="fa-solid fa-check" style={{ color: '#74fbfe', marginRight: '8px' }} />High Definition Live Streaming</li>
							<li style={{ color: '#cccccc' }}><i className="fa-solid fa-check" style={{ color: '#74fbfe', marginRight: '8px' }} />Professional Broadcast Solutions</li>
							<li style={{ color: '#cccccc' }}><i className="fa-solid fa-check" style={{ color: '#74fbfe', marginRight: '8px' }} />Multi-Platform Event Coverage</li>
						</ul>
					</div>
					<div className="space50" />
					<Link className="vl-btn1" href="/contact">
						Get Started
					</Link>
					<p className="no-thanks" style={{ color: '#999999' }}>No thanks</p>
				</div>
			</div>
		</>
	)
}
