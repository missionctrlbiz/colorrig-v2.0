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
                                    <div className="mapouter" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                        <div className="gmap_canvas">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.3425!3d6.6376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzgnMTUuNCJOIDPCsDIwJzMzLjAiRQ!5e0!3m2!1sen!2sng!4v1704088968016!5m2!1sen!2sng"
                                                width="100%"
                                                height={450}
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="contact-boxs-area" data-aos="zoom-in" data-aos-duration={1000}>
                                        <div className="contact-auhtor-box">
                                            <div className="icons">
                                                <img src="/assets/img/icons/mail2.svg" alt="" />
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
                                                <img src="/assets/img/icons/phn2.svg" alt="" />
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
                                                <img src="/assets/img/icons/clock2.svg" alt="" />
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
                                        <div className="heading4 text-center" style={{ marginBottom: '40px' }}>
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
                    <div className="sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading4 text-center">
                                        <h5>Follow Us</h5>
                                        <div className="space18" />
                                        <h2 className="text-anime-style-3">Connect on Social Media</h2>
                                        <div className="space32" />
                                        <div className="social-links d-flex justify-content-center gap-3">
                                            <Link href="https://instagram.com/color.rig" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" /></Link>
                                            <Link href="https://linkedin.com/company/colorrig" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="https://youtube.com/@colorrig" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
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
