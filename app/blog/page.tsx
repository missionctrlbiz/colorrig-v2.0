import Layout from "@/components/layout/Layout"
import InnerHeader from '@/components/layout/InnerHeader'
import Link from "next/link"
import { blogPosts } from "./blogData"

export default function Blog() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <InnerHeader title="The Live Link" breadcrumb="Blog" />
                    {/*===== BLOG AREA STARTS =======*/}
                    <div className="bloginner-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading4 text-center space-margin60">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>The Live Link</h5>
                                        <div className="space18" />
                                        <h2 className="text-anime-style-3">Latest News & Insights</h2>
                                        <div className="space16" />
                                        <p data-aos="fade-left" data-aos-duration={900}>
                                            Stay updated with the latest trends, industry insights, and company news from Colorrig. Explore our articles on live streaming, event production, and technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {blogPosts.map((post, index) => (
                                    <div className="col-lg-4 col-md-6" key={post.id} data-aos="fade-up" data-aos-duration={800 + (index % 3) * 200}>
                                        <div className="blog4-boxarea" style={{ marginBottom: '30px' }}>
                                            <div className="img1 image-anime">
                                                <Link href={`/blog/${post.slug}`}>
                                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                                                </Link>
                                            </div>
                                            <div className="content-area" style={{ padding: '24px' }}>
                                                <div className="d-flex align-items-center gap-2 flex-wrap" style={{ marginBottom: '16px' }}>
                                                    <span className="badge" style={{ background: 'rgba(116, 251, 254, 0.1)', color: '#00bcd4', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 500 }}>{post.category}</span>
                                                    <span style={{ fontSize: '13px', color: '#999' }}><i className="fa-regular fa-calendar" style={{ marginRight: '6px' }} />{post.date}</span>
                                                </div>
                                                <Link href={`/blog/${post.slug}`} style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.4', display: 'block', minHeight: '56px' }}>{post.title}</Link>
                                                <div className="space12" />
                                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>{post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}</p>
                                                <div className="space20" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(116, 251, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <i className="fa-regular fa-user" style={{ fontSize: '14px', color: '#00bcd4' }} />
                                                        </div>
                                                        <span style={{ fontSize: '13px', color: '#999' }}>{post.author}</span>
                                                    </div>
                                                    <Link href={`/blog/${post.slug}`} className="readmore" style={{ fontSize: '14px', fontWeight: 600 }}>Read More <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*===== BLOG AREA ENDS =======*/}
                </div>
            </Layout>
        </>
    )
}
