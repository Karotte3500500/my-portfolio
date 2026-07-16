import { blogPosts } from "../lib/blog"
import BlogCard from "../components/blog/BlogCard";
import { Link } from "react-router-dom";

export default function BlogLp(): React.JSX.Element{
    const blogs = blogPosts.slice(0, 3);

    return (
        <section className="section revers">
            <p className="eyebrow">Blog</p>
            <div className="section-heading">
                <p>
                    ブログで情報発信をしています。
                </p>
            </div>
            <Link to="/blog">
                <h3>ブログ一覧へ→</h3>
            </Link>
            <p>最新のブログ</p>
            <div className="blog-grid">
                {blogs.map((post) => (
                    <BlogCard post={post} />
                ))}
            </div>
        </section>
    );
}