import { Link } from "react-router-dom";
import { useBlogPostBySlug } from "../../hooks/useBlogPostBySlug";
import "./BlogPostLink.css";

type BlogPostLinkProps = {
    slug: string;
};

export default function BlogPostLink({slug}: BlogPostLinkProps): React.JSX.Element{
    const post = useBlogPostBySlug(slug);

    if(!post){
        return(
            <p className="blog-post-link-not-found">
                関連記事が見つかりませんでした: {slug}
            </p>
        );
    }
    const { metadata } = post;

    const coverImage = metadata.coverImage ?? "/images/default-cover.jpg";

    console.log("BlogPostLink slug:", slug);
console.log("BlogPostLink post:", post);

    return(
        <Link className="blog-post-link" to={`/blog/${metadata.slug}`}>
            <img className="blog-post-link-image" src={coverImage} alt="アイキャッチ画像" loading="lazy" />

            <div className="blog-post-link-body">
                <p className="blog-post-link-label">関連記事</p>
                <h3>{metadata.title}</h3>
                <p className="blog-post-link-description">
                    {metadata.description}
                </p>
            </div>
        </Link>
    );
}