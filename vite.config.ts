import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from "vite-plugin-sitemap"

import { getBlogRouters } from "./src/lib/blog.ts";

//記事用のMDX
import mdx from "@mdx-js/rollup";
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    //MDX
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      }),
    },

    //React
    react({include: /\.(js|jsx|ts|tsx|md|mdx)$/,}),

    //サイトマップ
    Sitemap({
      hostname: "https://nawata.me",
      dynamicRoutes: ["/", "/blog", ...getBlogRouters()]
    })
  ],
});
