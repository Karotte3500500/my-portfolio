import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//記事用のMDX
import mdx from "@mdx-js/rollup";
import remarkGfm from 'remark-gfm';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    //MDX
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkGfm],
      }),
    },

    //React
    react(),
  ],
});
