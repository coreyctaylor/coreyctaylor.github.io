import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal-project/",
  jsx: "react",
  plugins: [react(), vue()],
  resolve: {
    alias: {},
  },
  css: {
    postcss: {
      plugins: [tailwind, autoprefixer],
    },
  },
  server: {},
});
