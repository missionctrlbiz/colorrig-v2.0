import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"

export default function Contact() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Contact Us" breadcrumb="Contact Us" />

                    {/* Contact Info Cards Section */}
                    <div className="contact2-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading4 text-center space-margin60">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>How To Reach Us</h5>
                                        <div className="space18" />
                                        <h2 className="text-anime-style-3">Let's Start a Conversation</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-7" data-aos="zoom-in" data-aos-duration={1000}>
                                    <div className="map-wrapper">
                                        <div className="gmap_canvas">
                                            <iframe
                                                title="Colorrig Office Location Map"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.3425!3d6.6376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzgnMTUuNCJOIDPCsDIwJzMzLjAiRQ!5e0!3m2!1sen!2sng!4v1704088968016!5m2!1sen!2sng"
                                                width="100%"
                                                height={450}
                                                allowFullScreen
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="contact-boxs-area" data-aos="zoom-in" data-aos-duration={1000}>
                                        <div className="contact-auhtor-box">
                                            <div className="icons">
                                                <i className="fa-solid fa-envelope" />
                                            </div>
                                            <div className="text">
                                                <h4>Our Email</h4>
                                                <div className="space14" />
                                                <Link href="mailto:info@colorrig.com.ng">info@colorrig.com.ng</Link>
                                            </div>
                                        </div>
                                        <div className="space30" />
                                        <div className="contact-auhtor-box">
                                            <div className="icons">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="text">
                                                <h4>Call / WhatsApp</h4>
                                                <div className="space14" />
                                                <Link href="tel:+2349060157919">+234 906 015 7919</Link>
                                            </div>
                                        </div>
                                        <div className="space30" />
                                        <div className="contact-auhtor-box">
                                            <div className="icons">
                                                <i className="fa-solid fa-location-dot" />
                                            </div>
                                            <div className="text">
                                                <h4>Our Location</h4>
                                                <div className="space14" />
                                                <Link href="/#">2, Kudirat Soule Street, Ifako, Ogba, Lagos</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="contact-inner-section sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="contact4-boxarea">
                                        <div className="heading4 text-center contact-form-heading">
                                            <h5>Send Us a Message</h5>
                                            <div className="space18" />
                                            <h2 className="text-anime-style-3">Get In Touch</h2>
                                            <div className="space16" />
                                            <p>We would love to hear from you! Whether you have a question, need assistance with our services, or want to discuss your upcoming event, our team is ready to help.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-area">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-area">
                                                    <input type="text" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-area">
                                                    <input type="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-area">
                                                    <input type="text" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <textarea placeholder="Your Message" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="space24" />
                                                <div className="input-area text-center">
                                                    <button type="submit" className="vl-btn1">Send Message <i className="fa-solid fa-paper-plane" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="social-section sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading4 text-center social-heading">
                                        <h5 data-aos="fade-up" data-aos-duration={800} className="social-subtitle">Follow Us</h5>
                                        <div className="space18" />
                                        <h2 className="text-anime-style-3 social-title">Connect on Social Media</h2>
                                        <p className="social-description">
                                            Join our community and stay updated with our latest projects, behind-the-scenes content, and live event coverage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {/* Instagram Card */}
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                    <Link
                                        href="https://instagram.com/color.rig"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                    >
                                        <div className="social-card">
                                            <div className="social-icon instagram-gradient">
                                                <i className="fa-brands fa-instagram" />
                                            </div>
                                            <h4 className="social-platform">Instagram</h4>
                                            <p className="social-handle">@color.rig</p>
                                            <p className="social-type">Photos & Stories</p>
                                        </div>
                                    </Link>
                                </div>

                                {/* LinkedIn Card */}
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                                    <Link
                                        href="https://linkedin.com/company/colorrig"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                    >
                                        <div className="social-card">
                                            <div className="social-icon linkedin-bg">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </div>
                                            <h4 className="social-platform">LinkedIn</h4>
                                            <p className="social-handle">Colorrig Limited</p>
                                            <p className="social-type">Professional Updates</p>
                                        </div>
                                    </Link>
                                </div>

                                {/* YouTube Card */}
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                                    <Link
                                        href="https://youtube.com/@colorrig"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                    >
                                        <div className="social-card">
                                            <div className="social-icon youtube-bg">
                                                <i className="fa-brands fa-youtube" />
                                            </div>
                                            <h4 className="social-platform">YouTube</h4>
                                            <p className="social-handle">@colorrig</p>
                                            <p className="social-type">Event Highlights</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space50" />
                </div>
            </Layout>
        </>
    )
}
