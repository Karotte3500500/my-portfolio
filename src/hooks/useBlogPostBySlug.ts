import { useContext } from "react";
import { BlogIndexContext } from "../contexts/BlogIndexContext";
import type { BlogPost } from "../types/blog";

export function useBlogPostBySlug(slug: string): BlogPost | undefined {
    const posts = useContext(BlogIndexContext);

    return posts.find((post) => post.metadata.slug === slug);
}