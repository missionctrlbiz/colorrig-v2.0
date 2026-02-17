import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"

export default function PrivacyPolicy() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Privacy Policy" breadcrumb="Privacy Policy" />
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== PRIVACY POLICY CONTENT =======*/}
                    <div className="sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="legal-content-area">

                                        <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666' }}>
                                            <strong>Last Updated:</strong> January 2025
                                        </p>

                                        <h3>1. Introduction</h3>
                                        <div className="space16" />
                                        <p>Colorrig Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and personal information of its users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link href="https://colorrig.com" target="_blank" rel="noopener noreferrer">colorrig.com</Link> or use our services.</p>
                                        <p>By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not agree with the practices described herein, please do not use our services.</p>

                                        <div className="space32" />
                                        <h3>2. Information We Collect</h3>
                                        <div className="space16" />
                                        <p>We may collect the following types of information:</p>
                                        <div className="space12" />
                                        <h5>Personal Information</h5>
                                        <p>When you contact us, request a quote, or use our services, we may collect personal information such as:</p>
                                        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                            <li>Full name</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                            <li>Company or organisation name</li>
                                            <li>Event details and requirements</li>
                                        </ul>
                                        <h5>Usage Data</h5>
                                        <p>We may automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the date and time of your visit. This information is used to improve our website and better understand how visitors interact with our content.</p>

                                        <div className="space32" />
                                        <h3>3. How We Use Your Information</h3>
                                        <div className="space16" />
                                        <p>We use the information we collect for the following purposes:</p>
                                        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                            <li><strong>Providing Services:</strong> To deliver our live streaming, broadcast, video production, and other services as requested.</li>
                                            <li><strong>Communication:</strong> To respond to your enquiries, send you updates about your projects, and share relevant information about our services.</li>
                                            <li><strong>Improving Our Website:</strong> To analyse usage patterns and improve the functionality, performance, and content of our website.</li>
                                            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations.</li>
                                        </ul>

                                        <div className="space32" />
                                        <h3>4. Information Sharing and Disclosure</h3>
                                        <div className="space16" />
                                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
                                        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering our services.</li>
                                            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal processes.</li>
                                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</li>
                                        </ul>

                                        <div className="space32" />
                                        <h3>5. Data Security</h3>
                                        <div className="space16" />
                                        <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                                        <div className="space32" />
                                        <h3>6. Cookies</h3>
                                        <div className="space16" />
                                        <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you use our website. You can control cookie preferences through your browser settings.</p>

                                        <div className="space32" />
                                        <h3>7. Target Audience</h3>
                                        <div className="space16" />
                                        <p>Our services are intended for business clients and individuals aged 18 and above. We do not knowingly collect personal information from children under 13 years of age. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will take steps to delete such information.</p>

                                        <div className="space32" />
                                        <h3>8. Your Rights</h3>
                                        <div className="space16" />
                                        <p>You have the right to:</p>
                                        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                            <li>Access the personal information we hold about you.</li>
                                            <li>Request correction of inaccurate or incomplete information.</li>
                                            <li>Request deletion of your personal information, subject to legal retention requirements.</li>
                                            <li>Opt out of marketing communications at any time.</li>
                                        </ul>

                                        <div className="space32" />
                                        <h3>9. Third-Party Links</h3>
                                        <div className="space16" />
                                        <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>

                                        <div className="space32" />
                                        <h3>10. Changes to This Policy</h3>
                                        <div className="space16" />
                                        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this page periodically to stay informed about how we protect your information.</p>

                                        <div className="space32" />
                                        <h3>11. Contact Us</h3>
                                        <div className="space16" />
                                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                                        <div className="space12" />
                                        <ul style={{ paddingLeft: '24px', listStyle: 'none' }}>
                                            <li><strong>Email:</strong> <Link href="mailto:info@colorrig.com">info@colorrig.com</Link></li>
                                            <li><strong>Phone:</strong> <Link href="tel:+2349060157919">+234 906 015 7919</Link></li>
                                            <li><strong>Address:</strong> 2, Kudirat Soule Street, Ifako, Ogba, Lagos.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== PRIVACY POLICY CONTENT ENDS =======*/}
                </div>
            </Layout>
        </>
    )
}
