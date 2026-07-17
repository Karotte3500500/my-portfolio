import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  ],
});
