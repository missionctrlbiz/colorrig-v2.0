import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'

export default function PrivacyPolicy() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div>
                <InnerHeader title="Privacy Policy" breadcrumb="Privacy Policy" />
                <div className="blog-single-section-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div style={{ color: '#555', lineHeight: '1.8', fontSize: '16px' }}>
                                    <h2 style={{ color: '#070327', marginBottom: '24px' }}>Privacy Policy</h2>
                                    <p style={{ color: '#888', marginBottom: '32px' }}><em>Last updated: February 2026</em></p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>1. Information We Collect</h4>
                                    <p style={{ marginBottom: '24px' }}>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>2. How We Use Your Information</h4>
                                    <p style={{ marginBottom: '24px' }}>We use the information we collect to provide, maintain, and improve our services, respond to your inquiries and requests, send you technical notices and updates, and communicate with you about products, services, and events offered by Colorrig Limited.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>3. Information Sharing</h4>
                                    <p style={{ marginBottom: '24px' }}>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services, comply with the law, or protect our rights.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>4. Data Security</h4>
                                    <p style={{ marginBottom: '24px' }}>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>5. Cookies</h4>
                                    <p style={{ marginBottom: '24px' }}>Our website may use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>6. Third-Party Links</h4>
                                    <p style={{ marginBottom: '24px' }}>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policy of every website you visit.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>7. Changes to This Policy</h4>
                                    <p style={{ marginBottom: '24px' }}>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>8. Contact Us</h4>
                                    <p style={{ marginBottom: '24px' }}>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@colorrig.com.ng" style={{ color: '#74fbfe' }}>info@colorrig.com.ng</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
