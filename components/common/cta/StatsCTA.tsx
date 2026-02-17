'use client'
import CountUp from 'react-countup'
import Link from 'next/link'

export default function StatsCTA() {
    return (
        <>

            <div className="cta3-section-area sp1">
                <img src="/assets/img/elements/elements9.png" alt="" className="elements9" />
                <img src="/assets/img/elements/elements18.png" alt="" className="elements18" />
                <img src="/assets/img/elements/elements24.png" alt="" className="elements24" />
                <div className="date-btn aniamtion-key-1">
                    <h4>24/7</h4>
                    <div className="space14" />
                    <p>Support</p>
                    <div className="space20" />
                    <Link href="/contact">Get Pricing</Link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="cta-counter-box">
                                        <img src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" />
                                        <h2><CountUp className="odometer" enableScrollSpy={true} end={100} />+</h2>
                                        <div className="space14" />
                                        <p>Events Streamed</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="cta-counter-box">
                                        <img src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" />
                                        <h2><CountUp className="odometer" enableScrollSpy={true} end={50} />+</h2>
                                        <div className="space14" />
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="cta-counter-box">
                                        <img src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" />
                                        <h2><CountUp className="odometer" enableScrollSpy={true} end={10} />+</h2>
                                        <div className="space14" />
                                        <p>Years Info</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-3">
                            <div className="img1">
                                <img src="/assets/img/all-images/cta/cta-img1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
