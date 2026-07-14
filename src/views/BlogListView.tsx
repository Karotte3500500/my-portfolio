import { blogPosts } from "../lib/blog"
import BlogCard from "../components/blog/BlogCard";

import "../Blog.css";

export default function BlogListView(): React.JSX.Element{
    return (
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
    );
}