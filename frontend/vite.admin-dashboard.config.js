import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: resolve(import.meta.dirname, "../backend/public/admin-assets"),
    emptyOutDir: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/admin-dashboard.jsx"),
      formats: ["es"],
      fileName: () => "admin-dashboard.js",
      cssFileName: "admin-dashboard",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: "admin-dashboard.[ext]",
      },
    },
  },
});
