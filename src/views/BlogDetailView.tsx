import { Link, useParams } from "react-router-dom";
import { blogPosts, getBlogPostBySlug } from "../lib/blog";
import BlogIndexProvider from "../components/mdx/BlogIndexProvider";
import type React from "react";

import "../Blog.css";

export default function BlogDetailView(): React.JSX.Element {
    const { slug } = useParams();

    const post = slug ? getBlogPostBySlug(slug) : undefined;

    if(!post){
        return (
            <section className="section">
                <p className="eyebrow">Blog</p>
                <h1>記事がみつかりませんでした</h1>
                <Link className="text-link" to="/blog">
                    ←ブログ一覧へ
                </Link>
            </section>
        );
    }

    const Article = post.Component;

    return (
        <section className="section blog-article">
            <Link className="text-link" to="/blog">←ブログ一覧へ</Link>

            <header className="blog-article-header reveal">
                <p className="eyebrow">Blog</p>
                <h1>{post.metadata.title}</h1>
                <div className="blog-coverImage">
                    <img src={post.metadata.coverImage ?? "/images/default-cover.jpg"}/>
                </div>

                <ul className="blog-tags">
                    {post.metadata.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                <hr className="blog-line"/>
            </header>
            <div className="blog-body">
                <BlogIndexProvider posts={blogPosts}>
                    <Article />
                </BlogIndexProvider>
            </div>
        </section>
    );
}