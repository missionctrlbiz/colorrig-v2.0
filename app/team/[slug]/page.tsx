import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"
import { teamMembers } from "../teamData"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return teamMembers.map((member) => ({
        slug: member.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const member = teamMembers.find((m) => m.slug === slug)

    if (!member) {
        return {
            title: 'Team Member Not Found',
        }
    }

    return {
        title: `${member.name} — ${member.role} | Colorrig Team`,
        description: `Learn more about ${member.name}, our ${member.role} at Colorrig Limited.`,
    }
}

export default async function TeamMemberDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const member = teamMembers.find((m) => m.slug === slug)

    if (!member) {
        notFound()
    }

    const bioParagraphs = member.bio.split('\n\n')
    const firstParagraph = bioParagraphs[0]
    const remainingParagraphs = bioParagraphs.slice(1)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader
                        title={member.name}
                        breadcrumb={member.name}
                        parentText="Our Team"
                        parentLink="/team"
                    />

                    {/* Profile Section */}
                    <div className="blog-single-section-area sp1">
                        <div className="container">
                            <div className="row">
                                {/* Sidebar — Profile Card */}
                                <div className="col-lg-4">
                                    <div style={{ position: 'sticky', top: '100px' }}>
                                        {/* Photo Card */}
                                        <div style={{
                                            background: '#fff',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                            marginBottom: '24px'
                                        }}>
                                            <div style={{ position: 'relative' }}>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    style={{
                                                        width: '100%',
                                                        height: '360px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                            </div>
                                            <div style={{ padding: '24px', textAlign: 'center' }}>
                                                <h3 style={{ color: '#070327', fontSize: '22px', marginBottom: '8px' }}>{member.name}</h3>
                                                <p style={{ color: '#74fbfe', fontWeight: 600, fontSize: '15px' }}>{member.role}</p>
                                            </div>
                                        </div>

                                        {/* Quick Info Card */}
                                        <div style={{
                                            background: '#fff',
                                            borderRadius: '16px',
                                            padding: '24px',
                                            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                            marginBottom: '24px'
                                        }}>
                                            <h4 style={{ color: '#070327', fontSize: '18px', marginBottom: '20px', borderBottom: '2px solid #74fbfe', paddingBottom: '12px', display: 'inline-block' }}>Quick Info</h4>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                                                    <i className="fa-solid fa-briefcase" style={{ color: '#74fbfe', fontSize: '16px', width: '20px' }} />
                                                    <span style={{ color: '#555', fontSize: '15px' }}>{member.role}</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                                                    <i className="fa-solid fa-building" style={{ color: '#74fbfe', fontSize: '16px', width: '20px' }} />
                                                    <span style={{ color: '#555', fontSize: '15px' }}>Colorrig Limited</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0' }}>
                                                    <i className="fa-solid fa-location-dot" style={{ color: '#74fbfe', fontSize: '16px', width: '20px' }} />
                                                    <span style={{ color: '#555', fontSize: '15px' }}>Lagos, Nigeria</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Back to Team Button */}
                                        <div className="btn-area1 text-center">
                                            <Link href="/team" className="vl-btn2"><span className="demo"><i className="fa-solid fa-arrow-left" /> Back to Team</span><span className="arrow"><i className="fa-solid fa-users" /></span></Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="col-lg-8">
                                    <div style={{ paddingLeft: '20px' }}>
                                        {/* About Section Header */}
                                        <div style={{ marginBottom: '32px' }}>
                                            <h5 style={{ color: '#74fbfe', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Meet Our Team</h5>
                                            <h2 style={{ color: '#070327', fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>About {member.name}</h2>
                                            <div style={{ width: '60px', height: '3px', background: '#74fbfe', borderRadius: '2px' }} />
                                        </div>

                                        {/* Intro paragraph — highlighted */}
                                        <div style={{
                                            background: 'linear-gradient(135deg, rgba(116, 251, 254, 0.06), rgba(7, 3, 39, 0.03))',
                                            borderLeft: '4px solid #74fbfe',
                                            padding: '24px 28px',
                                            borderRadius: '0 12px 12px 0',
                                            marginBottom: '32px'
                                        }}>
                                            <p style={{ color: '#333', fontSize: '17px', lineHeight: '1.8', fontWeight: 500 }}>{firstParagraph}</p>
                                        </div>

                                        {/* Remaining paragraphs */}
                                        {remainingParagraphs.map((paragraph, index) => (
                                            <div key={index} style={{ marginBottom: '20px' }}>
                                                <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.8' }}>{paragraph}</p>
                                            </div>
                                        ))}

                                        {/* Highlights Section */}
                                        <div style={{ marginTop: '40px' }}>
                                            <h3 style={{ color: '#070327', fontSize: '22px', fontWeight: 700, marginBottom: '24px' }}>Key Highlights</h3>
                                            <div className="row">
                                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                                    <div style={{
                                                        background: '#fff',
                                                        borderRadius: '12px',
                                                        padding: '24px',
                                                        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                                                        height: '100%',
                                                        borderTop: '3px solid #74fbfe'
                                                    }}>
                                                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(116, 251, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                                            <i className="fa-solid fa-lightbulb" style={{ color: '#74fbfe', fontSize: '22px' }} />
                                                        </div>
                                                        <h4 style={{ color: '#070327', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>Innovation</h4>
                                                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Constantly pushing boundaries with cutting-edge broadcast and media solutions.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                                    <div style={{
                                                        background: '#fff',
                                                        borderRadius: '12px',
                                                        padding: '24px',
                                                        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                                                        height: '100%',
                                                        borderTop: '3px solid #74fbfe'
                                                    }}>
                                                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(116, 251, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                                            <i className="fa-solid fa-handshake" style={{ color: '#74fbfe', fontSize: '22px' }} />
                                                        </div>
                                                        <h4 style={{ color: '#070327', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>Collaboration</h4>
                                                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Thrives in team environments and builds strong client relationships.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                                    <div style={{
                                                        background: '#fff',
                                                        borderRadius: '12px',
                                                        padding: '24px',
                                                        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                                                        height: '100%',
                                                        borderTop: '3px solid #74fbfe'
                                                    }}>
                                                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(116, 251, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                                            <i className="fa-solid fa-trophy" style={{ color: '#74fbfe', fontSize: '22px' }} />
                                                        </div>
                                                        <h4 style={{ color: '#070327', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>Excellence</h4>
                                                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Committed to delivering high-quality results that exceed expectations.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                                    <div style={{
                                                        background: '#fff',
                                                        borderRadius: '12px',
                                                        padding: '24px',
                                                        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                                                        height: '100%',
                                                        borderTop: '3px solid #74fbfe'
                                                    }}>
                                                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(116, 251, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                                            <i className="fa-solid fa-chart-line" style={{ color: '#74fbfe', fontSize: '22px' }} />
                                                        </div>
                                                        <h4 style={{ color: '#070327', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>Growth</h4>
                                                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Dedicated to continuous learning and staying ahead of industry trends.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Card */}
                                        <div style={{
                                            background: 'linear-gradient(135deg, #070327, #0d0845)',
                                            borderRadius: '16px',
                                            padding: '40px',
                                            marginTop: '40px',
                                            textAlign: 'center'
                                        }}>
                                            <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Want to work with {member.name.split(' ')[0]}?</h3>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '24px' }}>Get in touch with the Colorrig team to discuss your project.</p>
                                            <Link href="/contact" className="vl-btn2"><span className="demo">Contact Us</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span></Link>
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
