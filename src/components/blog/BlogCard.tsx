import { Link } from "react-router-dom";
import type { BlogPost } from "../../lib/blog"

import "../../Blog.css"

type BlogCardProps = {
    post: BlogPost;
}

export default function BlogCard({post}: BlogCardProps): React.JSX.Element{
    return (
        <Link key ={post.metadata.slug} to={`/blog/${post.metadata.slug}`} className="blog-card reveal">
            <div className="blog-card-image-box">
                <img
                    className="blog-card-image"
                    src={post.metadata.coverImage ?? "/images/default-cover.jpg"}
                    alt="アイキャッチ画像"
                    loading="lazy"
                />
            </div>
            <div className="blog-card-info">
                <p className="blog-date">{post.metadata.publishedAt}</p>

                <h2>{post.metadata.title}</h2>
                <hr />
                <p className="blog-description">
                    {post.metadata.description}
                </p>

                <ul className="blog-tags">
                    {post.metadata.tags.map((tag) => (
                        <li key="tag">{tag}</li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}