'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Popup() {
	useEffect(() => {
		const popup = document.getElementById('popup') as HTMLElement | null
		const closeBtn = document.getElementById('close-popup') as HTMLElement | null
		const noThanksBtn = document.querySelector('.no-thanks') as HTMLElement | null

		// Check localStorage
		const isPopupCanceled = localStorage.getItem('popupCanceled')

		if (popup && !isPopupCanceled) {
			setTimeout(() => {
				popup.style.display = 'flex'
			}, 100)
		}

		const closePopup = () => {
			if (popup) {
				popup.style.display = 'none'
				localStorage.setItem('popupCanceled', 'true')
			}
		}

		if (closeBtn) {
			closeBtn.addEventListener('click', closePopup)
		}

		if (noThanksBtn) {
			noThanksBtn.addEventListener('click', closePopup)
		}

		return () => {
			if (closeBtn) {
				closeBtn.removeEventListener('click', closePopup)
			}
			if (noThanksBtn) {
				noThanksBtn.removeEventListener('click', closePopup)
			}
		}
	}, [])

	return (
		<>
			<div id="popup" className="popup-overlay" style={{ display: 'none' }}>
				<div className="popup-content" style={{ background: '#070327' }}>
					<span className="close-btn" id="close-popup">×</span>
					<div className="popup-icon">
						<img src="/images/colorrig-favicon.png" alt="Colorrig Limited" style={{ maxWidth: '100px', margin: '0 auto' }} />
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
					<Link className="vl-btn1" href="/contact" onClick={() => {
						const popup = document.getElementById('popup')
						if (popup) popup.style.display = 'none'
						localStorage.setItem('popupCanceled', 'true')
					}}>
						Get Started
					</Link>
					<p className="no-thanks" style={{ color: '#999999', cursor: 'pointer' }}>I'll do this later</p>
				</div>
			</div>
		</>
	)
}
