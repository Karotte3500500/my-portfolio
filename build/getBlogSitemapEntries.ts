import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import matter from "gray-matter";

import type { SitemapEntry } from "./sitemapPlugin.ts";

const BLOG_DIRECTORY = resolve(
    process.cwd(),
    "src/articles/blog"
);

function getRequiredString(
    value: unknown,
    propertyName: string,
    fileName: string
): string {
    if (
        typeof value !== "string" ||
        value.trim() === ""
    ) {
        throw new Error(
            `[Blog metadata error] ${fileName}: ` +
            `"${propertyName}" must be a non-empty string.`
        );
    }

    return value.trim();
}

function createBlogPath(
    slug: string,
    fileName: string
): string {
    const normalizedSlug = slug.replace(
        /^\/+|\/+$/g,
        ""
    );

    if (normalizedSlug === "") {
        throw new Error(
            `[Blog metadata error] ${fileName}: ` +
            `"slug" cannot be empty.`
        );
    }

    return `/${normalizedSlug}`;
}

function readBlogEntry(
    fileName: string
): SitemapEntry | null {
    const filePath = resolve(
        BLOG_DIRECTORY,
        fileName
    );

    const source = readFileSync(
        filePath,
        "utf-8"
    );

    const { data } = matter(source);

    const status = getRequiredString(
        data.status,
        "status",
        fileName
    );

    if (status !== "public") {
        return null;
    }

    const slug = getRequiredString(
        data.slug,
        "slug",
        fileName
    );

    const publishedAt = getRequiredString(
        data.publishedAt,
        "publishedAt",
        fileName
    );

    return {
        path: createBlogPath(
            slug,
            fileName
        ),
        lastmod: publishedAt,
    };
}

export function getBlogSitemapEntries(): SitemapEntry[] {
    return readdirSync(BLOG_DIRECTORY, {
        withFileTypes: true,
    })
        .filter(
            (entry) =>
                entry.isFile() &&
                entry.name.endsWith(".mdx")
        )
        .map((entry) =>
            readBlogEntry(entry.name)
        )
        .filter(
            (
                entry
            ): entry is SitemapEntry =>
                entry !== null
        );
}