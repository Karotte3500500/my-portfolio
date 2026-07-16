import { createContext } from "react";
import type { BlogPost } from "../types/blog";

export const BlogIndexContext = createContext<BlogPost[]>([]);