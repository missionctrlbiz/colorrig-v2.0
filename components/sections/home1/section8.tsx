
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
								<div className="blog4-boxarea">
									<div className="img1 image-anime">
										<Link href={`/blog/${post.slug}`}>
											<img src={post.image} alt={post.title} />
										</Link>
									</div>
									<div className="content-area">
										<div className="d-flex align-items-center gap-2 flex-wrap blog-meta">
											<span className="badge blog-badge">{post.category}</span>
											<span className="blog-date"><i className="fa-regular fa-calendar" />{post.date}</span>
										</div>
										<Link href={`/blog/${post.slug}`} className="head">{post.title}</Link>
										<div className="space12" />
										<p>{post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}</p>
										<div className="space20" />
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center gap-2">
												<div className="author-icon">
													<i className="fa-regular fa-user" />
												</div>
												<span className="author-name">{post.author}</span>
											</div>
											<Link href={`/blog/${post.slug}`} className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
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
