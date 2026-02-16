import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { teamMembers } from "../teamData"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return teamMembers.map((member) => ({
        slug: member.slug,
    }))
}

export default async function TeamMemberDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const member = teamMembers.find((m) => m.slug === slug)

    if (!member) {
        notFound()
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg6.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>{member.name}</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /></Link>{" "}
                                        <Link href="/team">Our Team <i className="fa-solid fa-angle-right" /></Link>{" "}
                                        <span>{member.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== TEAM MEMBER DETAIL STARTS =======*/}
                    <div className="blog-single-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="our-team-boxarea" style={{ position: 'sticky', top: '100px' }}>
                                        <div className="team-widget-area">
                                            <img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
                                            <img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
                                            <div className="img1">
                                                <img src={member.image} alt={member.name} className="team-img4" />
                                            </div>
                                        </div>
                                        <div className="space28" />
                                        <div className="content-area text-center">
                                            <h3>{member.name}</h3>
                                            <div className="space12" />
                                            <p style={{ color: 'var(--ztc-text-text-4)', fontWeight: 600 }}>{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="blog-single-boxarea">
                                        <div className="content-area">
                                            <h2>About {member.name.split(' ')[0]}</h2>
                                            <div className="space20" />
                                            {member.bio.split('\n\n').map((paragraph, index) => (
                                                <div key={index}>
                                                    <p>{paragraph}</p>
                                                    <div className="space16" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space40" />
                            <div className="btn-area1 text-center">
                                <Link href="/team" className="vl-btn1"><span className="demo"><i className="fa-solid fa-arrow-left" /> Back to Our Team</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
