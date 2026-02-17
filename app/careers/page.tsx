import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"

const jobs = [
    {
        id: 1,
        title: "Streaming Engineer",
        type: "Full Time",
        location: "Lagos, Nigeria",
        description: "We are looking for a skilled Streaming Engineer to manage and optimize our live streaming workflows. You will be responsible for ensuring high-quality video transmission, troubleshooting network issues, and implementing the latest streaming protocols.",
        requirements: [
            "Experience with OBS, vMix, and Wirecast",
            "Knowledge of RTMP, SRT, and HLS protocols",
            "Network troubleshooting skills",
            "Ability to work under pressure during live events"
        ]
    },
    {
        id: 2,
        title: "Broadcast Engineer",
        type: "Full Time",
        location: "Lagos, Nigeria",
        description: "Join our team as a Broadcast Engineer. You will design and maintain our broadcast systems, including cameras, switchers, and audio equipment. Your role is crucial in delivering professional-grade productions.",
        requirements: [
            "Experience with broadcast cameras and switchers (Blackmagic, Sony)",
            "Understanding of video signal flow and routing",
            "Technical proficiency in audio/video synchronization",
            "Detail-oriented mindset"
        ]
    },
    {
        id: 3,
        title: "Network Engineer",
        type: "Contract",
        location: "Remote / On-site",
        description: "We are seeking a Network Engineer to oversee our network infrastructure. You will ensure robust connectivity for our live events and studio operations, implementing redundant systems and security measures.",
        requirements: [
            "CCNA or equivalent certification",
            "Experience with bonding routers (LiveU, Peplink)",
            "Knowledge of IP networking and subnetting",
            "Problem-solving skills"
        ]
    },
    {
        id: 4,
        title: "Marketing Specialist",
        type: "Full Time",
        location: "Lagos, Nigeria",
        description: "Help us grow our brand! We need a Marketing Specialist to drive our digital marketing campaigns, manage social media, and create compelling content that resonates with our audience.",
        requirements: [
            "Proven experience in digital marketing",
            "Strong content creation skills",
            "Familiarity with SEO and social media analytics",
            "Creative thinking"
        ]
    },
    {
        id: 5,
        title: "Full Stack Developer",
        type: "Part Time",
        location: "Remote",
        description: "We are looking for a Full Stack Developer to maintain and enhance our web platforms. You will work with modern technologies to deliver seamless user experiences for our clients and internal tools.",
        requirements: [
            "Proficiency in React, Next.js, and Node.js",
            "Experience with database management",
            "UI/UX sensibility",
            "Version control with Git"
        ]
    }
]

export default function Careers() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Careers" breadcrumb="Careers" />

                    <div className="service2-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <h5>Join Our Team</h5>
                                        <div className="space16" />
                                        <h2>Build the Future of Live Events With Us</h2>
                                        <div className="space20" />
                                        <p>At Colorrig, we are passionate about technology and creativity. If you thrive in a fast-paced environment and love live production, check out our open positions below.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="row">
                                {jobs.map((job) => (
                                    <div key={job.id} className="col-lg-12" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="career-boxarea" style={{ background: '#fff', padding: '30px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #eee', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                            <div className="row align-items-center">
                                                <div className="col-lg-8">
                                                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>{job.title}</h3>
                                                    <div className="d-flex gap-3 mb-3">
                                                        <span className="badge" style={{ background: 'var(--ztc-bg-bg-3)', color: 'var(--ztc-text-text-2)', padding: '6px 12px' }}>{job.type}</span>
                                                        <span className="badge" style={{ background: '#f0f0f0', color: '#333', padding: '6px 12px' }}><i className="fa-solid fa-location-dot" /> {job.location}</span>
                                                    </div>
                                                    <p>{job.description}</p>
                                                    <div className="space16" />
                                                    <h6 style={{ fontWeight: '600' }}>Requirements:</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                                                        {job.requirements.map((req, index) => (
                                                            <li key={index} style={{ marginBottom: '5px' }}>{req}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                                    <Link href={`mailto:info@colorrig.com.ng?subject=Application for ${job.title}`} className="vl-btn1">Apply Now <i className="fa-solid fa-paper-plane" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space60" />
                            <div className="row">
                                <div className="col-lg-8 m-auto text-center">
                                    <div className="heading2">
                                        <h3>Don't see a role for you?</h3>
                                        <div className="space16" />
                                        <p>We are always looking for talented individuals. Send your CV to info@colorrig.com.ng and we'll keep you in mind for future opportunities.</p>
                                        <div className="space24" />
                                        <Link href="mailto:info@colorrig.com.ng" className="vl-btn2">Email Us</Link>
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
