import type { ComponentType } from "react";

export type BlogMetadata = {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    tags: string[];
    coverImage?: string;
    status: "public" | "private"| "draft";
};

export type BlogPost = {
    metadata: BlogMetadata;
    Component: ComponentType;
};