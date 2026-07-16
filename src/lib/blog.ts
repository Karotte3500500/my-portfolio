import type { ComponentType } from "react";
import type { BlogMetadata, BlogPost } from "../types/blog";

type BlogModule = {
    metadata: BlogMetadata;
    default: ComponentType;
};

const modules = import.meta.glob<BlogModule>(
    "../articles/blog/*.mdx",
    { eager: true }
);

export const blogPosts: BlogPost[] = Object.values(modules)
    .map((module) => ({
        metadata: module.metadata,
        Component: module.default,
    }))
    .filter((post) => post.metadata.status === "public")
    .sort((a, b) =>
        b.metadata.publishedAt.localeCompare(a.metadata.publishedAt)
    );

export function getBlogPostBySlug(slug: string): BlogPost | undefined{
    return blogPosts.find((post) => post.metadata.slug === slug);
}
