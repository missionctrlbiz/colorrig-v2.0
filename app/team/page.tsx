import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"
import { teamMembers } from "./teamData"

export default function Team() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="Our Team" breadcrumb="Our Team" />
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== TEAM AREA STARTS =======*/}
                    <div className="team-sperkers-section-area sp1">
                        <div className="container">
                            <div className="row">
                                {teamMembers.map((member) => (
                                    <div key={member.id} className="col-lg-4 col-md-6">
                                        <div className="our-team-boxarea">
                                            <div className="team-widget-area">
                                                <img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
                                                <img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
                                                <div className="img1">
                                                    <img src={member.image} alt={member.name} className="team-img4" />
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
