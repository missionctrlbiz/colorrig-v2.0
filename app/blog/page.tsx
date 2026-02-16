import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { blogPosts } from "./blogData"

export default function Blog() {

return (
<>
<Layout headerStyle={1} footerStyle={1}>
<div>
<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg13.png)' }}>
<div className="container">
<div className="row">
<div className="col-lg-6 m-auto">
<div className="heading1 text-center">
<h1>The Live Link</h1>
<div className="space20" />
<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>The Live Link</span></Link>
</div>
</div>
</div>
</div>
</div>
{/*===== HERO AREA ENDS =======*/}
{/*===== BLOG AREA STARTS =======*/}
<div className="bloginner-section-area sp1">
<div className="container">
<div className="row">
{blogPosts.map((post, index) => (
<div className="col-lg-4 col-md-6" key={post.id} data-aos="zoom-in" data-aos-duration={800 + (index % 3) * 200}>
<div className="blog4-boxarea">
<div className="img1">
<img src={post.image} alt={post.title} />
</div>
<div className="content-area">
<ul>
<li>
<Link href={`/blog/${post.slug}`}><img src="/assets/img/icons/calender1.svg" alt="" />{post.date} <span> | </span></Link>
</li>
<li>
<Link href={`/blog/${post.slug}`}><img src="/assets/img/icons/user1.svg" alt="" />{post.author}</Link>
</li>
</ul>
<div className="space20" />
<Link href={`/blog/${post.slug}`}>{post.title}</Link>
<div className="space24" />
<Link href={`/blog/${post.slug}`} className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
<div className="arrow">
<Link href={`/blog/${post.slug}`}><i className="fa-solid fa-arrow-right" /></Link>
</div>
</div>
</div>
<div className="space30" />
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
