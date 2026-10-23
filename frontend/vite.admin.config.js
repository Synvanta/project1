import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: resolve(import.meta.dirname, "../backend/public/admin-assets"),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/admin-login.jsx"),
      formats: ["es"],
      fileName: () => "admin-login.js",
      cssFileName: "admin-login",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: "admin-login.[ext]",
      },
    },
  },
});
