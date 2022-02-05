import { defineConfig } from 'vite'
import { resolve } from "path";

import vue from '@vitejs/plugin-vue'

// base Empty string or ./ (for embedded deployment)
// https://stackoverflow.com/questions/68497926/how-can-i-fix-failing-to-load-resource-status-404-github-pages

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, '/src'),
      "@assets": resolve(__dirname, '/src/assets'),
    }
  },
})
