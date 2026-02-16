import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { blogPosts } from "../blogData"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg13.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>{post.title}</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /></Link>{" "}
                                        <Link href="/blog">The Live Link <i className="fa-solid fa-angle-right" /></Link>{" "}
                                        <span>{post.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== BLOG DETAIL STARTS =======*/}
                    <div className="blog-single-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="blog-single-boxarea">
                                        <div className="img1 image-anime">
                                            <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '10px' }} />
                                        </div>
                                        <div className="space30" />
                                        <div className="content-area">
                                            <ul className="d-flex gap-3 flex-wrap">
                                                <li>
                                                    <img src="/assets/img/icons/calender1.svg" alt="" /> {post.date}
                                                </li>
                                                <li>
                                                    <img src="/assets/img/icons/user1.svg" alt="" /> {post.author}
                                                </li>
                                                <li>
                                                    <span className="badge" style={{ background: 'var(--ztc-bg-bg-3)', color: 'var(--ztc-text-text-2)', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>{post.category}</span>
                                                </li>
                                            </ul>
                                            <div className="space24" />
                                            <h2>{post.title}</h2>
                                            <div className="space20" />
                                            {post.content.split('\n\n').map((paragraph, index) => (
                                                <div key={index}>
                                                    <p>{paragraph}</p>
                                                    <div className="space16" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space40" />
                                    <div className="btn-area1 text-center">
                                        <Link href="/blog" className="vl-btn1"><span className="demo"><i className="fa-solid fa-arrow-left" /> Back to The Live Link</span></Link>
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
