import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import path from 'path';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export default defineConfig({
  plugins: [
    { 
      enforce: 'pre', 
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }) 
    },
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
