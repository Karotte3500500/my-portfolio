import type { ComponentType } from "react";

export type BlogMetadata = {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    tags: string[];
    coverImage?: string;
};

export type BlogPost = {
    metadata: BlogMetadata;
    Component: ComponentType;
};

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
    .sort((a, b) =>
        b.metadata.publishedAt.localeCompare(a.metadata.publishedAt)
    );

    export function getBlogPostBySlug(slug: string): BlogPost | undefined{
        return blogPosts.find((post) => post.metadata.slug == slug);
    }