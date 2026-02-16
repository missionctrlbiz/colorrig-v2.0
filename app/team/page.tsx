import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { teamMembers } from "./teamData"

export default function Team() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg6.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Our Team</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Our Team</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== TEAM AREA STARTS =======*/}
                    <div className="team-sperkers-section-area sp1">
                        <div className="container">
                            <div className="row">
                                {teamMembers.map((member) => (
                                    <div key={member.id} className="col-lg-3 col-md-6">
                                        <div className="our-team-boxarea">
                                            <div className="team-widget-area">
                                                <img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
                                                <img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
                                                <div className="img1">
                                                    <img src={member.image} alt={member.name} className="team-img4" />
                                                    <div className="share">
                                                        <Link href={`/team/${member.slug}`}><img src="/assets/img/icons/share1.svg" alt="" /></Link>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <Link href={`/team/${member.slug}`} className="icon1"><i className="fa-solid fa-arrow-right" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space28" />
                                            <div className="content-area">
                                                <Link href={`/team/${member.slug}`}>{member.name}</Link>
                                                <div className="space16" />
                                                <p>{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
