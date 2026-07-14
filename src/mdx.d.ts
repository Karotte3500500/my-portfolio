declare module "*.mdx"{
    import type { ComponentType } from "react";

    export const metadata: {
        slug: string;
        title: string;
        description: string;
        publishedAt: string,
        tags: string[];
        coverImage?: string;
    };

    const MDXComponent: ComponentType;
    export default MDXComponent;
}