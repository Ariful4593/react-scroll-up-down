import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "react-scroll-up-down",
      fileName: "index",
      formats: ["es"],
    },
  },
  plugins: [react(), libInjectCss()],
});
