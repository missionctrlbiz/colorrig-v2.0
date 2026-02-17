import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'

export default function TermsAndConditions() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div>
                <InnerHeader title="Terms & Conditions" breadcrumb="Terms & Conditions" />
                <div className="blog-single-section-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div style={{ color: '#555', lineHeight: '1.8', fontSize: '16px' }}>
                                    <h2 style={{ color: '#070327', marginBottom: '24px' }}>Terms &amp; Conditions</h2>
                                    <p style={{ color: '#888', marginBottom: '32px' }}><em>Last updated: February 2026</em></p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>1. Acceptance of Terms</h4>
                                    <p style={{ marginBottom: '24px' }}>By accessing and using the Colorrig Limited website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>2. Services</h4>
                                    <p style={{ marginBottom: '24px' }}>Colorrig Limited provides broadcast, live streaming, video production, and media solutions. The scope, pricing, and deliverables for each project will be outlined in a separate agreement or proposal.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>3. Intellectual Property</h4>
                                    <p style={{ marginBottom: '24px' }}>All content on this website, including text, graphics, logos, images, and software, is the property of Colorrig Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>4. Client Obligations</h4>
                                    <p style={{ marginBottom: '24px' }}>Clients are responsible for providing accurate information, timely feedback, and necessary access to venues or facilities as required for project execution. Delays caused by the client may result in adjusted timelines or additional costs.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>5. Payment Terms</h4>
                                    <p style={{ marginBottom: '24px' }}>Payment terms will be specified in individual project agreements. Unless otherwise agreed, a deposit is required before the commencement of any project. Outstanding balances are due upon project completion.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>6. Limitation of Liability</h4>
                                    <p style={{ marginBottom: '24px' }}>Colorrig Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the total amount paid by the client for the specific project in question.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>7. Cancellation Policy</h4>
                                    <p style={{ marginBottom: '24px' }}>Cancellations must be communicated in writing. Cancellation fees may apply depending on the stage of the project and resources already allocated. Specific cancellation terms will be outlined in individual project agreements.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>8. Governing Law</h4>
                                    <p style={{ marginBottom: '24px' }}>These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be resolved in the courts of Lagos State, Nigeria.</p>

                                    <h4 style={{ color: '#070327', marginBottom: '12px' }}>9. Contact Us</h4>
                                    <p style={{ marginBottom: '24px' }}>For questions regarding these Terms and Conditions, please contact us at <a href="mailto:info@colorrig.com.ng" style={{ color: '#74fbfe' }}>info@colorrig.com.ng</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
