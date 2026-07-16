import type { ReactNode } from "react"
import type { BlogPost } from "../../types/blog";
import { BlogIndexContext } from "../../contexts/BlogIndexContext";

type BlogIndexProviderProps = {
    posts: BlogPost[];
    children: ReactNode;
}

export default function BlogIndexProvider({posts, children}: BlogIndexProviderProps): React.JSX.Element{
    return (
        <BlogIndexContext.Provider value={posts}>
            {children}
        </BlogIndexContext.Provider>
    );
}