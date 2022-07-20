import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    })
  ],

  define: {
    global: "globalThis",
    "process.env": {}
  },
  build: {
    outDir: "./dist"
  }
});
