import { blogPosts } from "../lib/blog"
import BlogCard from "../components/blog/BlogCard";
import { Helmet } from "react-helmet-async"

import "../Blog.css";

export default function BlogListView(): React.JSX.Element{
    return (
        <>
            <Helmet>
				<title>ブログ一覧 | Nawata's Lab</title>
				<meta name="description" content="技術、創作、学習などの記録をまとめたブログです。"></meta>
			</Helmet>
            
            <section className="section">
                <div className="section-heading reveal">
                    <p className="eyebrow">Blog</p>
                    <h1>ブログ</h1>
                    <p>
                        技術、創作、学習の記録をまとめます。
                    </p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <BlogCard post={post} />
                    ))}
                </div>
            </section>
        </>
    );
}