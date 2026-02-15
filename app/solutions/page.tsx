import Layout from "@/components/layout/Layout"
import Link from "next/link"

const solutions = [
    {
        id: 1,
        icon: "fa-solid fa-display",
        title: "Digital Event Solutions",
        description: "We can create an interactive environment with our digital event solutions, boosting engagement and leaving a lasting impact on your viewers/audience.",
    },
    {
        id: 2,
        icon: "fa-solid fa-tower-broadcast",
        title: "Live Streaming",
        description: "Reach a wider audience worldwide using our Live Event Media Streaming servers. We ensure seamless live video transmission with impeccable quality and reliability.",
    },
    {
        id: 3,
        icon: "fa-solid fa-video",
        title: "Top-Notch Gear Rentals",
        description: "Choose from our extensive range of full-HD broadcast quality video cameras, lighting packages, encoders, and more, available for rent with or without crew and 24-hour support.",
    },
    {
        id: 4,
        icon: "fa-solid fa-film",
        title: "Video Production",
        description: "From single-camera setups to multi-camera productions, we deliver professionally switched videos with captivating graphics and multimedia integration.",
    },
    {
        id: 5,
        icon: "fa-solid fa-calendar-check",
        title: "Packaged Media Events",
        description: "Conceptualize, design, and execute events for live streaming to targeted audiences, enabling individuals and companies to build relationships across social media platforms.",
    },
    {
        id: 6,
        icon: "fa-solid fa-satellite-dish",
        title: "LiveU Products",
        description: "Get hands-on experience with LiveU equipment through Colorrig Limited's in-person demos. Cutting-edge live video transmission technology for professional broadcasting.",
    },
    {
        id: 7,
        icon: "fa-solid fa-building",
        title: "Colorrig's Hybrid Live Studio",
        description: "Unlock the Possibilities — Unleash the potential of your live events with Colorrig's Hybrid Live Event Production Studio! Our state-of-the-art facility offers a safe and versatile environment, tailored to your event's unique needs.",
    },
]

export default function Solutions() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg5.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Our Solutions</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Solutions</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== SOLUTIONS INTRO STARTS =======*/}
                    <div className="about1-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>What We Offer</h5>
                                        <div className="space16" />
                                        <h2 className="text-anime-style-3">Elevate Your Event Experience</h2>
                                        <div className="space16" />
                                        <p data-aos="fade-left" data-aos-duration={900}>
                                            Colorrig Limited provides comprehensive live streaming solutions tailored to your specific needs. From multi-camera setups to live event production and interactive audience engagement, we empower businesses to connect with their target audience, amplify their message, and achieve impactful results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== SOLUTIONS GRID STARTS =======*/}
                    <div className="service2-section-area sp2">
                        <div className="container">
                            <div className="row">
                                {solutions.map((solution) => (
                                    <div key={solution.id} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                        <div className="service2-boxarea" style={{ marginBottom: '30px' }}>
                                            <div className="icon">
                                                <i className={solution.icon} style={{ fontSize: '40px', color: 'var(--ztc-text-text-4)' }} />
                                            </div>
                                            <div className="space24" />
                                            <Link href="/contact">{solution.title}</Link>
                                            <div className="space16" />
                                            <p>{solution.description}</p>
                                            <div className="space24" />
                                            <Link href="/contact" className="readmore">Get Started <i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta-section-area sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <h2 className="text-anime-style-3">Ready to Bring Your Event to Life?</h2>
                                        <div className="space16" />
                                        <p>
                                            Whether you need live streaming for a corporate conference, a sports event, or a cultural festival, Colorrig Limited has the expertise and technology to make it happen. Contact us today to discuss your next project.
                                        </p>
                                        <div className="space32" />
                                        <div className="btn-area1">
                                            <Link href="/contact" className="vl-btn1">Get in Touch</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
