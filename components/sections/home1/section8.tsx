
import Link from 'next/link'
import { blogPosts } from '@/app/blog/blogData'

export default function Section8() {
	const latestPosts = blogPosts.slice(0, 3)

	return (
		<>

			<div className="blog1-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="blog-header text-center heading2 space-margin60">
								<h5 data-aos="fade-left" data-aos-duration={900}>News &amp; updates</h5>
								<div className="space16" />
								<h2 className="text-anime-style-3">Latest From Our Blog</h2>
							</div>
						</div>
					</div>
					<div className="row">
						{latestPosts.map((post, index) => (
							<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800 + (index * 200)} key={post.id}>
								<div className="blog1-auhtor-boxarea">
									<div className="img1 image-anime">
										<img src={post.image} alt={post.title} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '4px' }} />
									</div>
									<div className="content-area">
										<ul>
											<li>
												<Link href={`/blog/${post.slug}`}><img src="/assets/img/icons/calender1.svg" alt="" />{post.date}</Link>
											</li>
										</ul>
										<div className="space20" />
										<Link href={`/blog/${post.slug}`}>{post.title}</Link>
										<div className="space24" />
										<div className="btn-area1">
											<Link href={`/blog/${post.slug}`} className="vl-btn2">Read More</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

		</>
	)
}
