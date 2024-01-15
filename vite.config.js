import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-top-bottom-scroll/",
  build: {
    lib: {
      entry: "src/index.js",
      name: "react-top-bottom-scroll",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), libInjectCss()],
});
