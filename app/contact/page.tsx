import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg12.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Contact Us</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== CONTACT AREA STARTS =======*/}
                    <div className="contact-inner-section sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact4-boxarea" style={{ marginBottom: '40px' }}>
                                        <h3 className="text-anime-style-3">Get In Touch</h3>
                                        <div className="space16" />
                                        <p>We would love to hear from you! Whether you have a question, need assistance with our services, or want to discuss your upcoming event, our team is ready to help.</p>
                                        <div className="space32" />
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={900}>
                                                    <div className="icons">
                                                        <img src="/assets/img/icons/mail1.svg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h5>Our Email</h5>
                                                        <div className="space14" />
                                                        <Link href="mailto:info@colorrig.com">info@colorrig.com</Link>
                                                    </div>
                                                </div>
                                                <div className="space18" />
                                                <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                                                    <div className="icons">
                                                        <img src="/assets/img/icons/location1.svg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h5>Our Location</h5>
                                                        <div className="space14" />
                                                        <p style={{ fontSize: '14px' }}>2, Kudirat Soule Street,<br />Ifako, Ogba, Lagos.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space20 d-md-none d-block" />
                                                <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                                                    <div className="icons">
                                                        <img src="/assets/img/icons/phn1.svg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h5>Call / WhatsApp</h5>
                                                        <div className="space14" />
                                                        <Link href="tel:+2349060157919">+234 906 015 7919</Link>
                                                    </div>
                                                </div>
                                                <div className="space18" />
                                                <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1200}>
                                                    <div className="icons">
                                                        <img src="/assets/img/icons/instagram.svg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h5>Website</h5>
                                                        <div className="space14" />
                                                        <Link href="https://colorrig.com" target="_blank" rel="noopener noreferrer">colorrig.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1000}>
                                    <div className="contact4-boxarea">
                                        <h3 className="text-anime-style-3">Send Us a Message</h3>
                                        <div className="space8" />
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
                                                <div className="input-area text-end">
                                                    <button type="submit" className="vl-btn1">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CONTACT AREA ENDS =======*/}
                    {/*===== MAP AREA STARTS =======*/}
                    <div className="mapouter" style={{ width: '100%', height: '450px' }}>
                        <div className="gmap_canvas" style={{ width: '100%', height: '100%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.3425!3d6.6376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzgnMTUuNCJOIDPCsDIwJzMzLjAiRQ!5e0!3m2!1sen!2sng!4v1704088968016!5m2!1sen!2sng"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                    <div className="space100 d-lg-block d-none" />
                    <div className="space50 d-lg-none d-block" />
                    {/*===== MAP AREA ENDS =======*/}
                </div>
            </Layout>
        </>
    )
}
