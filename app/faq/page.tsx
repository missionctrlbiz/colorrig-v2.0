'use client'
import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"
import { useState } from "react"

export default function Faq() {
    const [isAccordion, setIsAccordion] = useState<number | null>(1)

    const handleAccordion = (key: number) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    const faqItems = [
        {
            id: 1,
            question: "What services does Colorrig Limited offer?",
            answer: "Colorrig Limited provides comprehensive live streaming and broadcast solutions including high-definition live event streaming, multi-camera video production, equipment sales & rentals, brand development, multi-platform streaming (Facebook, YouTube, Instagram, Twitter), packaged media events, and our Hybrid Live Studio for virtual and hybrid events."
        },
        {
            id: 2,
            question: "What types of events can Colorrig stream?",
            answer: "We stream a wide range of events including conferences, corporate AGMs, sports tournaments, concerts, award shows, product launches, webinars, e-learning sessions, religious gatherings, and any live event that requires professional broadcast-quality coverage. We've successfully covered events like the Access Bank Lagos City Marathon, Social Media Week Lagos, and Felabration."
        },
        {
            id: 3,
            question: "What platforms can you stream to simultaneously?",
            answer: "We offer multi-platform streaming capabilities, allowing your event to be broadcast live on Facebook, YouTube, Instagram, Twitter (X), and custom RTMP destinations simultaneously. This maximizes your event's reach and audience engagement across all major social media platforms."
        },
        {
            id: 4,
            question: "Do you provide equipment for rent?",
            answer: "Yes! We offer an extensive range of full-HD broadcast quality equipment for rent, including video cameras, lighting packages, encoders, audio equipment, and more. Equipment is available with or without professional crew, and we provide 24-hour technical support during your rental period."
        },
        {
            id: 5,
            question: "What is the Colorrig Hybrid Live Studio?",
            answer: "Our Hybrid Live Event Production Studio is a state-of-the-art facility designed for versatile live event production. It supports single-speaker sessions, multi-speaker events, product launches, e-learning, and live performances. The adaptable set design ensures a seamless experience tailored to your event's unique needs, whether in-person, virtual, or hybrid."
        },
        {
            id: 6,
            question: "How do you ensure reliable streaming quality?",
            answer: "We use cutting-edge encoding technology, redundant internet connections, and dedicated bandwidth to ensure uninterrupted high-definition streaming. Our team of experienced streaming and network engineers monitor every broadcast in real-time, with backup systems in place to guarantee a seamless viewing experience even during peak demand."
        },
        {
            id: 7,
            question: "What are LiveU Solutions?",
            answer: "LiveU is a leading provider of portable live video transmission solutions. Through our partnership, we offer LiveU equipment demos, rentals, and integration into your live broadcasts. LiveU technology enables reliable, broadcast-quality live streaming from virtually any location using bonded cellular connectivity — ideal for outdoor events, on-the-go reporting, and remote broadcasts."
        },
        {
            id: 8,
            question: "How far in advance should I book your services?",
            answer: "We recommend booking at least 2–4 weeks in advance to ensure availability of equipment and crew. For large-scale events such as conferences, marathons, or multi-day festivals, we suggest reaching out 1–2 months ahead so we can plan and execute every detail to perfection. For urgent requests, contact us and we'll do our best to accommodate."
        },
        {
            id: 9,
            question: "Do you offer video production services beyond live streaming?",
            answer: "Absolutely. In addition to live streaming, we provide full video production services including single-camera and multi-camera setups, professionally switched videos with graphics and multimedia integration, post-production editing, highlight reels, and branded content creation. We deliver polished, high-quality videos for any purpose."
        },
        {
            id: 10,
            question: "How can I get a quote for my event?",
            answer: "Getting a quote is easy! Simply visit our Contact Us page or reach out directly via email at info@colorrig.com or call +234 906 015 7919. Provide details about your event type, date, location, expected audience, and streaming requirements, and our team will prepare a tailored proposal for you."
        },
    ]

    const leftFaqs = faqItems.filter((_, i) => i % 2 === 0)
    const rightFaqs = faqItems.filter((_, i) => i % 2 !== 0)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Frequently Asked Questions" breadcrumb="FAQs" />
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== FAQ AREA STARTS =======*/}
                    <div className="faq-inner-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Everything You Need to Know</h2>
                                        <div className="space16" />
                                        <p>Have questions about our live streaming and broadcast solutions? Find answers to the most common questions below, or reach out to our team directly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="accordian-area">
                                        <div className="accordion" id="accordionLeft">
                                            {leftFaqs.map((faq) => (
                                                <div key={faq.id}>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" onClick={() => handleAccordion(faq.id)}>
                                                            <button
                                                                className={isAccordion === faq.id ? "accordion-button" : "accordion-button collapsed"}
                                                                type="button"
                                                            >
                                                                {faq.question}
                                                            </button>
                                                        </h2>
                                                        <div className={isAccordion === faq.id ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                <p>{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space20" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordian-area">
                                        <div className="accordion" id="accordionRight">
                                            {rightFaqs.map((faq) => (
                                                <div key={faq.id}>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" onClick={() => handleAccordion(faq.id)}>
                                                            <button
                                                                className={isAccordion === faq.id ? "accordion-button" : "accordion-button collapsed"}
                                                                type="button"
                                                            >
                                                                {faq.question}
                                                            </button>
                                                        </h2>
                                                        <div className={isAccordion === faq.id ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                <p>{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space20" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space60" />

                            {/*===== CTA AREA =======*/}
                            <div className="row">
                                <div className="col-lg-8 m-auto text-center">
                                    <div className="heading2">
                                        <h3>Still Have Questions?</h3>
                                        <div className="space16" />
                                        <p>Our team is always happy to help. Get in touch with us and we&apos;ll respond as quickly as possible.</p>
                                        <div className="space32" />
                                        <Link href="/contact" className="vl-btn1">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== FAQ AREA ENDS =======*/}
                </div>
            </Layout>
        </>
    )
}
