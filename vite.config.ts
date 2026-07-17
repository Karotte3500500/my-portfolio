import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//記事用のMDX
import mdx from "@mdx-js/rollup";
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlight from 'rehype-highlight';
import { sitemapPlugin } from './build/sitemapPlugin.ts';
import { getBlogSitemapEntries } from './build/getBlogSitemapEntries.ts';

const blogSitemapEntries = getBlogSitemapEntries();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    //MDX
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          [
            remarkMdxFrontmatter,
            {
              name: "metadata",
            }
          ],
          remarkGfm
        ],
        rehypePlugins: [rehypeHighlight],
      }),
    },

    //React
    react({include: /\.(js|jsx|ts|tsx|md|mdx)$/,}),

    //サイトマップ
    sitemapPlugin({
      hostname: "https://nawata.me",

      entries: [
        {
          path: "/",
        },
        {
          path: "/blog",
        },

        ...blogSitemapEntries,
      ]
    })
  ],
});
